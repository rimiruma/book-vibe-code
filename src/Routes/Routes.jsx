import { createBrowserRouter } from "react-router";
import Root from "../components/Pages/Root/Root";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>
  },
]);