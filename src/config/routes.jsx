import { createBrowserRouter } from "react-router-dom";
import { Home, PostDetail, PostForm } from "../pages";
import { PostItem } from "../components";

export const routes = createBrowserRouter([
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
        body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sed eaque incidunt cum, animi minus maiores placeat obcaecati? Est ex corporis cupiditate minus. Ex tempore"
      />
    ),
  },
]);
