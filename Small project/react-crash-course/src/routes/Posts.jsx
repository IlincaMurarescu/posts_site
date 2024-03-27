import { Outlet } from "react-router-dom";
import ListPosts from "../components/ListPosts";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <ListPosts />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8085/posts");
  const resData = await response.json();

  return resData.posts;
}
