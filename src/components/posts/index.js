import { createElement, Fragment } from "@bikeshaving/crank";

import Spinner from "../spinner";
import Button from "../button";

const BlogPosts = async ({ postCount }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postCount}`
  );
  const post = await res.json();

  return (
    <Fragment>
      <h2 className="font-bold text-xl mb-2">{post.title}</h2>
      <p className="font-light">{post.body}</p>
    </Fragment>
  );
};

async function* PostsLoader({ isLoading, postCount }) {
  for await ({ isLoading, postCount } of this) {
    yield <Spinner />;
    yield <BlogPosts postCount={postCount} />;
  }
}

function* Posts() {
  let isLoading = false;
  let postCount = 1;

  this.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      isLoading = !isLoading;
      postCount++;

      this.refresh();
    }
  });

  while (true) {
    yield (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto p-8">
          <div className="mb-8">
            <PostsLoader isLoading={isLoading} postCount={postCount} />
          </div>
          <Fragment>
            <Button text={`Fetch post #${postCount + 1}`} />
          </Fragment>
        </div>
      </div>
    );
  }
}

export default Posts;
