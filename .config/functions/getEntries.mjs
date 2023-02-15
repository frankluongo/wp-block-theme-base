import pkg from "glob";
import { root } from "./root.mjs";
const { glob } = pkg;

export function getEntries() {
  const scripts = {};
  const files = glob.sync(`${root}/src/scripts/*.js`);
  files.forEach((file) => {
    const name = getName(file);
    scripts[name] = file;
  });
  const blocks = glob.sync(`${root}/src/scripts/blocks/*.js`);
  blocks.forEach((block) => {
    const name = getName(block);
    scripts[name] = block;
  });
  return scripts;
}

function getName(file) {
  const beforeJsArr = file.split(".js")[0].split("/");
  const lastItem = beforeJsArr[beforeJsArr.length - 1];
  return lastItem;
}
