import { createElement } from "@bikeshaving/crank";

import Spinner from "../spinner";

const BlogPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto p-8">
        {data.map((post) => {
          return (
            <div className="mb-16">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="font-light">{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

async function* PostsLoader({ isLoading }) {
  for await ({ isLoading } of this) {
    yield <Spinner />;
    yield <BlogPosts />;
  }
}

function* Posts() {
  let isLoading = false;

  while (true) {
    yield <PostsLoader isLoading={isLoading} />;
  }
}

export default Posts;
