import "regenerator-runtime/runtime";

import { createElement } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";

import Navbar from "./components/navbar";
import Posts from "./components/posts";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Posts />
      </section>
    </div>
  );
};

renderer.render(<App />, document.body);
