import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable title="All Posts" />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
