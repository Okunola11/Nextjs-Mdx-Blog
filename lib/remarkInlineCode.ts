import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { Node } from "unist";

const remarkInlineCodeClass: Plugin = () => {
  return (tree: Node) => {
    visit(tree, "inlineCode", (node: any) => {
      if (node.type === "inlineCode") {
        node.data = node.data || {};
        node.data.hName = "span"; // Change element type to <span> to remove the backticks
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.style =
          "background-color: #323e4b; color: #fff; padding: 0.2em 0.4em; font-size: 0.8em; border-radius: 5px;";
        node.value = node.value; // To ensure the value is not modified incorrectly
      }
    });
  };
};

export default remarkInlineCodeClass;
