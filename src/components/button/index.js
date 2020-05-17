import { createElement, Fragment } from "@bikeshaving/crank";

const Button = ({ text }) => {
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
