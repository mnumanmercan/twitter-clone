import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: "anasayfa component",
  },
  {
    path: "/explore",
    element: "explore component",
  },
  {
    path: "notifications",
    element: "notification component",
  },
]);


export default routes