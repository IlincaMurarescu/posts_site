import ListPosts from "../components/ListPosts";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet></Outlet>
      <main>
        <ListPosts />
      </main>
    </>
  );
}

export default Posts;
