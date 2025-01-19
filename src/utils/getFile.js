import { isPlainObject } from "lodash";

export default async function getFile(props) {
  const inputFile = document.createElement("input");
  return await new Promise((resolve, reject) => {
    if (isPlainObject(props))
      Object.keys(props).forEach((prop) => {
        inputFile[prop] = props[prop];
      });
    inputFile.type = "file";
    inputFile.value = "";
    inputFile.onchange = (event) => {
      const { files } = event.target;
      if (files?.length) resolve(files);
      else reject(new Error("impossible to get files"));
    };
    inputFile.click();
  });
}
