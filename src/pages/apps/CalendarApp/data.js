const defaultEvents = [
  {
    id: "1",
    title: "Interview - Backend Engineer",
    start: new Date(),
    className: "bg-success",
  },
  {
    id: "2",
    title: "Phone Screen - Frontend Engineer",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-info",
  },
  {
    id: "3",
    title: "Meeting with Mr.shreyu",
    start: new Date().setDate(new Date().getDate() + 2),
    end: new Date().setDate(new Date().getDate() + 4),
    className: "bg-warning",
  },
  {
    id: "4",
    title: "Buy Design Assets",
    start: new Date().setDate(new Date().getDate() + 4),
    end: new Date().setDate(new Date().getDate() + 5),
    className: "bg-primary",
  },
];
export { defaultEvents };
