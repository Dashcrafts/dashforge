import React from "react";
import { Navigate, Route } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const RecoverPassword = React.lazy(() =>
  import("../pages/auth/RecoverPassword")
);
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const ConfirmMail = React.lazy(() => import("../pages/auth/ConfirmMail"));

// dashboard
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/CalendarApp"));
const EmailInbox = React.lazy(() => import("../pages/apps/Email/EmailInbox"));
const EmailRead = React.lazy(() => import("../pages/apps/Email/EmailRead"));
const ComposeEmail = React.lazy(() =>
  import("../pages/apps/Email/ComposeEmail")
);
const MembersApp = React.lazy(() => import("../pages/apps/MembersApp"));

// pages
const StarterPages = React.lazy(() => import("../pages/other/Starter"));
const TimelinePages = React.lazy(() => import("../pages/other/Timeline"));
const ProfilePages = React.lazy(() => import("../pages/other/Profile"));
const Aboutus = React.lazy(() => import("../pages/other/Aboutus"));
const Contactus = React.lazy(() => import("../pages/other/Contactus"));
const FAQPages = React.lazy(() => import("../pages/other/FAQ"));
const PricingPages = React.lazy(() => import("../pages/other/Pricing"));
const MaintenancePages = React.lazy(() => import("../pages/other/Maintenance"));
const InvoicePages = React.lazy(() => import("../pages/other/Invoice"));
const ComingSoon = React.lazy(() => import("../pages/other/ComingSoon"));
const Horizontal = React.lazy(() => import("../pages/layouts/Horizontal"));
const Detached = React.lazy(() => import("../pages/layouts/Detached"));
const DarkMode = React.lazy(() => import("../pages/layouts/DarkMode"));
const CompactSidebar = React.lazy(() =>
  import("../pages/layouts/CompactSidebar")
);
const IconView = React.lazy(() => import("../pages/layouts/IconView"));
const FullView = React.lazy(() => import("../pages/layouts/FullView"));

// // base ui
const Accordions = React.lazy(() => import("../pages/ui/Accordions"));
const Alerts = React.lazy(() => import("../pages/ui/Alerts"));
const Avatars = React.lazy(() => import("../pages/ui/Avatars"));
const Badges = React.lazy(() => import("../pages/ui/Badges"));
const Breadcrumb = React.lazy(() => import("../pages/ui/Breadcrumb"));
const Buttons = React.lazy(() => import("../pages/ui/Buttons"));
const Cards = React.lazy(() => import("../pages/ui/Cards"));
const Carousel = React.lazy(() => import("../pages/ui/Carousel"));
const Collapse = React.lazy(() => import("../pages/ui/Collapse"));
const Dropdowns = React.lazy(() => import("../pages/ui/Dropdowns"));
const EmbedVideo = React.lazy(() => import("../pages/ui/EmbedVideo"));
const Grid = React.lazy(() => import("../pages/ui/Grid"));
const ListGroup = React.lazy(() => import("../pages/ui/ListGroup"));
const Modals = React.lazy(() => import("../pages/ui/Modals"));
const Notifications = React.lazy(() => import("../pages/ui/Notifications"));
const Offcanvas = React.lazy(() => import("../pages/ui/Offcanvas"));
const Placeholders = React.lazy(() => import("../pages/ui/Placeholders"));
const Pagination = React.lazy(() => import("../pages/ui/Pagination"));
const Popovers = React.lazy(() => import("../pages/ui/Popovers"));
const Progress = React.lazy(() => import("../pages/ui/Progress"));
const Spinners = React.lazy(() => import("../pages/ui/Spinners"));
const Tabs = React.lazy(() => import("../pages/ui/Tabs"));
const Tooltips = React.lazy(() => import("../pages/ui/Tooltips"));
const Typography = React.lazy(() => import("../pages/ui/Typography"));
const Widgets = React.lazy(() => import("../pages/ui/Widgets"));

// // extended ui
const NestableList = React.lazy(() => import("../pages/extended/NestableList"));
const TourPage = React.lazy(() => import("../pages/extended/TourPage"));
const Scrollbar = React.lazy(() => import("../pages/extended/Scrollbar"));
const SweetAlert = React.lazy(() => import("../pages/extended/SweetAlert"));
const RangeSlider = React.lazy(() => import("../pages/extended/RangeSlider"));
const Scrollspy = React.lazy(() => import("../pages/extended/Scrollspy"));

// // icons
const TwoToneIcons = React.lazy(() => import("../pages/ui/icons/TwoToneIcons"));
const ColoredIcons = React.lazy(() => import("../pages/ui/icons/ColoredIcons"));
const FeatherIcons = React.lazy(() => import("../pages/ui/icons/FeatherIcons"));
const MaterialIcons = React.lazy(() =>
  import("../pages/ui/icons/MaterialIcons")
);
const DripiconsIcons = React.lazy(() =>
  import("../pages/ui/icons/DripiconsIcons")
);
const FontAwesomeIcons = React.lazy(() =>
  import("../pages/ui/icons/FontAwesomeIcons")
);
const RemixIcons = React.lazy(() => import("../pages/ui/icons/RemixIcons"));
const UniconsIcons = React.lazy(() => import("../pages/ui/icons/UniconsIcons"));

// // charts
const ApexCharts = React.lazy(() => import("../pages/charts/ApexCharts"));
const ChartjsCharts = React.lazy(() => import("../pages/charts/ChartjsCharts"));
const SparklinesCharts = React.lazy(() =>
  import("../pages/charts/SparklinesCharts")
);

// // forms
const BasicElements = React.lazy(() =>
  import("../pages/ui/forms/BasicElements")
);
const FormAdvanced = React.lazy(() => import("../pages/ui/forms/FormAdvanced"));
const FormValidation = React.lazy(() =>
  import("../pages/ui/forms/FormValidation")
);
const FormPickers = React.lazy(() => import("../pages/ui/forms/FormPickers"));
const FormWizard = React.lazy(() => import("../pages/ui/forms/FormWizard"));
const FormMasks = React.lazy(() => import("../pages/ui/forms/FormMasks"));
const FormFileUploads = React.lazy(() =>
  import("../pages/ui/forms/FormFileUploads")
);
const FormEditors = React.lazy(() => import("../pages/ui/forms/FormEditors"));

// // tables
const BasicTables = React.lazy(() => import("../pages/ui/tables/BasicTables"));
const DataTables = React.lazy(() => import("../pages/ui/tables/DataTables"));
const Editable = React.lazy(() => import("../pages/ui/tables/DataTables"));
// const RCTables = React.lazy(() => import('../pages/ui/tables/RCTables'));

// // maps
const GoogleMaps = React.lazy(() => import("../pages/ui/maps/GoogleMaps"));
const VectorMaps = React.lazy(() => import("../pages/ui/maps/VectorMaps"));

// // error
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error404Alt = React.lazy(() => import("../pages/error/Error404Alt"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));
// dashboards
const dashboardRoutes = {
  path: "/dashboards",
  name: "Dashboard",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      element: <Dashboard />,
      route: PrivateRoute,
    },
  ],
};

// Apps
const calendarAppRoutes = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <CalendarApp />,
  header: "Apps",
};
const membersAppRoutes = {
  path: "/apps/member",
  name: "Member",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <MembersApp />,
  header: "Apps",
};
const emailAppRoutes = {
  path: "/apps/email",
  name: "Email",
  route: PrivateRoute,
  roles: ["Admin"],
  children: [
    {
      path: "/apps/email/inbox",
      name: "Inbox",
      element: <EmailInbox />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/read",
      name: "Read Email",
      element: <EmailRead />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/compose",
      name: "Compose Email",
      element: <ComposeEmail />,
      route: PrivateRoute,
    },
  ],
};
const appRoutes = [calendarAppRoutes, membersAppRoutes, emailAppRoutes];

// pages
const customPagesRoutes = {
  path: "/pages",
  name: "Pages",
  header: "Custom",
  children: [
    {
      path: "/pages/starter",
      name: "Starter Page",
      element: <StarterPages />,
      route: PrivateRoute,
    },
    {
      path: "/pages/timeline",
      name: "Timeline",
      element: <TimelinePages />,
      route: PrivateRoute,
    },
    {
      path: "/pages/profile",
      name: "Profile",
      element: <ProfilePages />,
      route: PrivateRoute,
    },
    {
      path: "/pages/about",
      name: "About Us",
      element: <Aboutus />,
      route: PrivateRoute,
    },
    {
      path: "/pages/contact",
      name: "Contact Us",
      element: <Contactus />,
      route: PrivateRoute,
    },
    {
      path: "/pages/faq",
      name: "FAQs",
      element: <FAQPages />,
      route: PrivateRoute,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      element: <PricingPages />,
      route: PrivateRoute,
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      element: <InvoicePages />,
      route: PrivateRoute,
    },
    {
      path: "/error-404-alt",
      name: "Error - 404-alt",
      element: <Error404Alt />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes = {
  path: "/ui",
  name: "Components",
  header: "UI Elements",
  children: [
    {
      path: "/ui/base",
      name: "Base UI",
      children: [
        {
          path: "/ui/accordions",
          name: "Accordions",
          element: <Accordions />,
          route: PrivateRoute,
        },
        {
          path: "/ui/alerts",
          name: "Alerts",
          element: <Alerts />,
          route: PrivateRoute,
        },
        {
          path: "/ui/avatars",
          name: "Avatars",
          element: <Avatars />,
          route: PrivateRoute,
        },
        {
          path: "/ui/badges",
          name: "Badges",
          element: <Badges />,
          route: PrivateRoute,
        },
        {
          path: "/ui/breadcrumb",
          name: "Breadcrumb",
          element: <Breadcrumb />,
          route: PrivateRoute,
        },
        {
          path: "/ui/buttons",
          name: "Buttons",
          element: <Buttons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/cards",
          name: "Cards",
          element: <Cards />,
          route: PrivateRoute,
        },
        {
          path: "/ui/carousel",
          name: "Carousel",
          element: <Carousel />,
          route: PrivateRoute,
        },
        {
          path: "/ui/collapse",
          name: "Collapse",
          element: <Collapse />,
          route: PrivateRoute,
        },
        {
          path: "/ui/dropdowns",
          name: "Dropdowns",
          element: <Dropdowns />,
          route: PrivateRoute,
        },
        {
          path: "/ui/embed-video",
          name: "Embed Video",
          element: <EmbedVideo />,
          route: PrivateRoute,
        },
        {
          path: "/ui/grid",
          name: "Grid",
          element: <Grid />,
          route: PrivateRoute,
        },
        {
          path: "/ui/list-group",
          name: "List Group",
          element: <ListGroup />,
          route: PrivateRoute,
        },
        {
          path: "/ui/modals",
          name: "Modals",
          element: <Modals />,
          route: PrivateRoute,
        },
        {
          path: "/ui/notifications",
          name: "Notifications",
          element: <Notifications />,
          route: PrivateRoute,
        },
        {
          path: "/ui/offcanvas",
          name: "Offcanvas",
          element: <Offcanvas />,
          route: PrivateRoute,
        },
        {
          path: "/ui/placeholders",
          name: "Placeholders",
          element: <Placeholders />,
          route: PrivateRoute,
        },
        {
          path: "/ui/pagination",
          name: "Pagination",
          element: <Pagination />,
          route: PrivateRoute,
        },
        {
          path: "/ui/popovers",
          name: "Popovers",
          element: <Popovers />,
          route: PrivateRoute,
        },
        {
          path: "/ui/progress",
          name: "Progress",
          element: <Progress />,
          route: PrivateRoute,
        },
        {
          path: "/ui/spinners",
          name: "Spinners",
          element: <Spinners />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tabs",
          name: "Tabs",
          element: <Tabs />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tooltips",
          name: "Tooltips",
          element: <Tooltips />,
          route: PrivateRoute,
        },
        {
          path: "/ui/typography",
          name: "Typography",
          element: <Typography />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/extended",
      name: "Extended UI",
      children: [
        {
          path: "/extended/nestable",
          name: "Nestable List",
          element: <NestableList />,
          route: PrivateRoute,
        },
        {
          path: "/extended/tour",
          name: "Tour Page",
          element: <TourPage />,
          route: PrivateRoute,
        },
        {
          path: "/extended/scrollbar",
          name: "Scrollbar",
          element: <Scrollbar />,
          route: PrivateRoute,
        },
        {
          path: "/extended/sweet-alert",
          name: "Sweet Alert",
          element: <SweetAlert />,
          route: PrivateRoute,
        },
        {
          path: "/extended/range-slider",
          name: "Range Slider",
          element: <RangeSlider />,
          route: PrivateRoute,
        },
        {
          path: "/extended/scrollspy",
          name: "Scrollspy",
          element: <Scrollspy />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/ui/icons",
      name: "Icons",
      children: [
        {
          path: "/ui/icons/two-tone",
          name: "Two Tone",
          element: <TwoToneIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/colored",
          name: "Colored",
          element: <ColoredIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/feather",
          name: "Feather",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/material",
          name: "Material Design",
          element: <MaterialIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/dripicons",
          name: "Dripicons",
          element: <DripiconsIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/font-awesome",
          name: "Font Awesome 5",
          element: <FontAwesomeIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/remix",
          name: "Remix icons",
          element: <RemixIcons />,
          route: PrivateRoute,
        },
        {
          path: "/ui/icons/unicons",
          name: "Unicons",
          element: <UniconsIcons />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/charts",
      name: "Charts",
      children: [
        {
          path: "/charts/apex",
          name: "Apex Charts",
          element: <ApexCharts />,
          route: PrivateRoute,
        },
        {
          path: "/charts/chartjs",
          name: "Chartjs Charts",
          element: <ChartjsCharts />,
          route: PrivateRoute,
        },
        {
          path: "/charts/sparklines",
          name: "Sparklines Charts",
          element: <SparklinesCharts />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/forms",
      name: "Forms",
      children: [
        {
          path: "/forms/basic-elements",
          name: "Basic Elements",
          element: <BasicElements />,
          route: PrivateRoute,
        },
        {
          path: "/forms/form-advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/forms/validation",
          name: "Validation",
          element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/forms/pickers",
          name: "Pickers",
          element: <FormPickers />,
          route: PrivateRoute,
        },
        {
          path: "/forms/wizard",
          name: "Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/forms/masks",
          name: "Masks",
          element: <FormMasks />,
          route: PrivateRoute,
        },
        {
          path: "/forms/file-uploads",
          name: "File Uploads",
          element: <FormFileUploads />,
          route: PrivateRoute,
        },
        {
          path: "/forms/editors",
          name: "Editors",
          element: <FormEditors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/ui/tables",
      name: "Tables",
      children: [
        {
          path: "/ui/tables/basic-tables",
          name: "Basic Tables",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/ui/tables/data-tables",
          name: "Data Tables",
          element: <DataTables />,
          route: PrivateRoute,
        },

        // {
        //   path: '/ui/tables/RC-tables',
        //   name: 'RC Tables',
        //   element: <RCTables />,
        //   route: PrivateRoute,
        // },
      ],
    },
    {
      path: "/ui/maps",
      name: "Maps",
      children: [
        {
          path: "/ui/maps/google-maps",
          name: "Google Maps",
          element: <GoogleMaps />,
          route: PrivateRoute,
        },
        {
          path: "/ui/maps/vector-maps",
          name: "Vector Maps",
          element: <VectorMaps />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};
const widgetsUIRoutes = {
  path: "/ui/widgets",
  name: "Widgets",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Widgets />,
  header: "Components",
};

// auth
const authRoutes = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/recover-password",
    name: "Recover Password",
    element: <RecoverPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
  {
    path: "/auth/confirm-mail",
    name: "Confirm Mail",
    element: <ConfirmMail />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
  {
    path: "/pages/maintenance",
    name: "Maintenance",
    element: <MaintenancePages />,
    route: Route,
  },
  {
    path: "/pages/coming-soon",
    name: "Coming Soon",
    element: <ComingSoon />,
    route: Route,
  },
  {
    path: "/horizontal",
    name: "Horizontal",
    element: <Horizontal />,
    route: Route,
  },
  {
    path: "/detached",
    name: "Detached",
    element: <Detached />,
    route: Route,
  },
  {
    path: "/dark-mode",
    name: "DarkMode",
    element: <DarkMode />,
    route: Route,
  },
  {
    path: "/compact-sidebar",
    name: "Compact",
    element: <CompactSidebar />,
    route: Route,
  },
  {
    path: "/icon-view",
    name: "Icon View",
    element: <IconView />,
    route: Route,
  },
  {
    path: "/full-view",
    name: "Full View",
    element: <FullView />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
  let flatRoutes = [];
  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);
    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  ...appRoutes,
  customPagesRoutes,
  uiRoutes,
  widgetsUIRoutes,
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];
const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  authProtectedFlattenRoutes,
  authProtectedRoutes,
  publicProtectedFlattenRoutes,
  publicRoutes,
};
