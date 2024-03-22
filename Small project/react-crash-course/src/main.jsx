import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import { action as newPostAction } from "./routes/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />, //the router waits for the loader to finish before loading the element
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost></NewPost>,
            action: newPostAction,
          },
        ],
      },
      ,
    ],
  },

  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
