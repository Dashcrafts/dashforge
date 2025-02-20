import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

// import {ChildrenType} from '@/types/component-props'
import { toggleDocumentAttribute } from "@/utils/layout";
const ThemeContext = createContext(undefined);
const useLayoutContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useLayoutContext can only be used within LayoutProvider");
  }
  return context;
};
const LayoutProvider = ({ children }) => {
  const INIT_STATE = {
    theme: "light",
    orientation: "vertical",
    mode: "fluid",
    topBar: {
      theme: "brand",
    },
    menu: {
      theme: "light",
      size: "default",
      position: "fixed",
    },
    twoColumn: {
      iconMenuTheme: "light",
    },
    showTwoToneIcons: false,
    showUserInfo: false,
  };
  const [settings, setSettings] = useLocalStorage(
    "__DASHFORGE_CONFIG__",
    INIT_STATE
  );
  const [offcanvasStates, setOffcanvasStates] = useState({
    showThemeCustomizer: false,
    showHorizontalMenu: false,
    showBackdrop: false,
  });
  const updateSettings = (_newSettings) =>
    setSettings({
      ...settings,
      ..._newSettings,
    });
  const changeTheme = (newTheme) => {
    updateSettings({
      theme: newTheme,
    });
    toggleDocumentAttribute("data-bs-theme", settings.theme);
  };
  const changeLayoutMode = (newMode) => {
    updateSettings({
      mode: newMode,
    });
    toggleDocumentAttribute("data-layout-mode", settings.mode);
  };
  const changeLayoutOrientation = (newOrientation) => {
    updateSettings({
      orientation: newOrientation,
    });
    toggleDocumentAttribute(
      "data-layout",
      settings.orientation == "horizontal" ? "topnav" : ""
    );
  };
  const changeTopBarTheme = (newTheme) => {
    updateSettings({
      topBar: {
        theme: newTheme,
      },
    });
    toggleDocumentAttribute("data-topbar-color", settings.topBar.theme);
  };
  const changeMenuTheme = (newTheme) => {
    updateSettings({
      menu: {
        ...settings.menu,
        theme: newTheme,
      },
    });
    toggleDocumentAttribute("data-menu-color", settings.menu.theme);
  };
  const changeMenuSize = (newSize) => {
    updateSettings({
      menu: {
        ...settings.menu,
        size: newSize,
      },
    });
    toggleDocumentAttribute("data-sidenav-size", settings.menu.size);
  };
  const changeMenuPosition = (newPosition) => {
    updateSettings({
      menu: {
        ...settings.menu,
        position: newPosition,
      },
    });
  };
  const changeIconMenuTheme = (newTheme) => {
    updateSettings({
      twoColumn: {
        iconMenuTheme: newTheme,
      },
    });
  };
  const toggleTwoToneIcons = () => {
    updateSettings({
      showTwoToneIcons: !settings.showTwoToneIcons,
    });
    toggleDocumentAttribute(
      "data-two-column-color",
      settings.twoColumn.iconMenuTheme
    );
  };
  const toggleUserInfo = () => {
    updateSettings({
      showUserInfo: !settings.showUserInfo,
    });
  };
  const toggleThemeCustomizer = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showThemeCustomizer: !offcanvasStates.showThemeCustomizer,
    });
  };
  const toggleHorizontalMenu = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showHorizontalMenu: !offcanvasStates.showHorizontalMenu,
    });
  };
  const themeCustomizer = {
    open: offcanvasStates.showThemeCustomizer,
    toggle: toggleThemeCustomizer,
  };
  const horizontalMenu = {
    open: offcanvasStates.showHorizontalMenu,
    toggle: toggleHorizontalMenu,
  };

  // toggle backdrop
  const toggleBackdrop = useCallback(() => {
    const htmlTag = document.getElementsByTagName("html")[0];
    if (offcanvasStates.showBackdrop)
      htmlTag.classList.remove("sidebar-enable");
    else htmlTag.classList.add("sidebar-enable");
    setOffcanvasStates({
      ...offcanvasStates,
      showBackdrop: !offcanvasStates.showBackdrop,
    });
  }, [offcanvasStates.showBackdrop]);

  // useEffect(() => {

  //     return () => {
  //         toggleDocumentAttribute('data-bs-theme', settings.theme, true)
  //         toggleDocumentAttribute('data-topbar-color', settings.topBar.theme, true)
  //         toggleDocumentAttribute('data-sidenav-size', settings.menu.theme, true)
  //         toggleDocumentAttribute('data-layout-mode', settings.mode, true)
  //         toggleDocumentAttribute('data-layout', settings.orientation, true)
  //         toggleDocumentAttribute('data-two-column-color', settings.twoColumn.iconMenuTheme, true)
  //     }
  // }, [settings])

  const resetSettings = () => updateSettings(INIT_STATE);
  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          ...settings,
          horizontalMenu,
          changeTheme,
          changeLayoutMode,
          changeLayoutOrientation,
          changeTopBarTheme,
          changeMenuTheme,
          changeMenuSize,
          changeMenuPosition,
          changeIconMenuTheme,
          toggleTwoToneIcons,
          toggleUserInfo,
          themeCustomizer,
          toggleBackdrop,
          resetSettings,
        }),
        [settings, offcanvasStates]
      )}
    >
      {children}
      {offcanvasStates.showBackdrop && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleBackdrop}
        />
      )}
    </ThemeContext.Provider>
  );
};
export { LayoutProvider, useLayoutContext };
