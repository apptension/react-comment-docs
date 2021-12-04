import fs from "fs";
import { getFileName } from "./utils.js";

export const deleteMarkdown = (componentUrl) => {
  const fileName = getFileName(componentUrl);
  fs.unlinkSync(fileName);
};
