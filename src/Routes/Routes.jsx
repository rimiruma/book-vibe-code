import { createBrowserRouter } from "react-router";
import Root from "../components/Pages/Root/Root";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
         loader: () => fetch('booksData.json'),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: '/bookDetails/:id',
         loader: () => fetch('booksData.json'),
        Component: BookDetails,
      }
    ]
  },
]);