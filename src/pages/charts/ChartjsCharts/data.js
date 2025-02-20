import hexToRGB from "../../../utils/chartjs";
export const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Current Week",
      backgroundColor: hexToRGB("#45bbe0", 0.3),
      borderColor: "#675aa9",
      data: [32, 42, 42, 62, 52, 75, 62],
      tension: 0.4,
      fill: {
        target: "origin",
        above: "rgba(59,175,218,0.3)",
      },
    },
    {
      label: "Previous Week",
      fill: true,
      backgroundColor: "transparent",
      borderColor: "#45bbe0",
      borderDash: [5, 5],
      data: [42, 58, 66, 93, 82, 105, 92],
      tension: 0.4,
    },
  ],
};
export const barChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales Analytics",
      backgroundColor: "#348cd4",
      borderColor: "#348cd4",
      hoverBackgroundColor: "#348cd4",
      hoverBorderColor: "#348cd4",
      data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
    {
      label: "Dollar Rate",
      backgroundColor: "#ecf2f5",
      borderColor: "#ecf2f5",
      hoverBackgroundColor: "#ecf2f5",
      hoverBorderColor: "#ecf2f5",
      data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
      barPercentage: 0.7,
      categoryPercentage: 0.5,
    },
  ],
};
export const pieChartData = {
  labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
  datasets: [
    {
      data: [300, 135, 48, 154],
      backgroundColor: ["#348cd4", "#f06292", "#ff9800", "#ecf2f5"],
      borderColor: "transparent",
    },
  ],
};
export const donutChartData = {
  labels: ["Direct", "Affilliate", "Sponsored"],
  datasets: [
    {
      data: [128, 78, 48],
      backgroundColor: ["#348cd4", "#f06292", "#ecf2f5"],
      borderColor: "transparent",
    },
  ],
};
export const polarChartData = {
  labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
  datasets: [
    {
      data: [251, 135, 48, 154],
      backgroundColor: ["#348cd4", "#f06292", "#ff9800", "#ecf2f5"],
      borderColor: "transparent",
    },
  ],
};
export const radarChartData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "Desktops",
      backgroundColor: hexToRGB("#348cd4", 0.3),
      borderColor: "#348cd4",
      pointBackgroundColor: "#348cd4",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#348cd4",
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: "Tablets",
      backgroundColor: hexToRGB("#f06292", 0.3),
      borderColor: "#f06292",
      pointBackgroundColor: "#f06292",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#f06292",
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
};
