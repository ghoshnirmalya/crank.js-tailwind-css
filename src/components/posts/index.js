import { createElement } from "@bikeshaving/crank";

const Posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <div className="bg-gray-100">
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

export default Posts;
