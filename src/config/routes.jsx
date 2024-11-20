import { createBrowserRouter } from "react-router-dom";
import { Home, PostDetail, PostForm } from "../pages";
import { PostItem, MainLayout } from "../components";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-form",
        element: <PostForm />,
      },
      {
        path: "/post-detail",
        element: <PostDetail />,
      },
      //debug
      {
        path: "/post-item",
        element: (
          <PostItem
            image="https://picsum.photos/800"
            title="image title"
            name="John Doe"
            date="18 Jul 2024"
            body="Lorem ipsum dolor sit, amet obcaecati? Est ex corporis cupiditate minus. Ex tempore"
          />
        ),
      },
    ],
  },
]);
