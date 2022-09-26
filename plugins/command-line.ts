import type { Site } from "lume/core.ts";

const getAttribute = (e: unknown, attr: string) => {
  const element = <Element> e;
  const value = element.getAttribute(attr);
  element.removeAttribute(attr);
  return value;
};

export default function commandLine(
  { user = "user", server = "localhost" } = {},
) {
  return (site: Site) => {
    site.process([".html"], ({ document }) => {
      if (!document) {
        return;
      }

      const elements = document.querySelectorAll("pre > code.language-console");
      elements.forEach((element) => {
        const dataUser = getAttribute(element, "user");
        const dataServer = getAttribute(element, "server");

        const promptText = `${dataUser ?? user}@${dataServer ?? server} $ `;

        const codeLines = element.firstChild.textContent.trim().split("\n");

        element.removeChild(element.firstChild);

        codeLines.forEach((line) => {
          const br = document.createElement("br");
          const prompt = document.createElement("span");
          prompt.classList.add("token", "prompt");
          prompt.textContent = promptText;

          const codeLine = document.createTextNode(line);
          element.appendChild(prompt);
          element.appendChild(codeLine);
          element.appendChild(br);
        });
      });
    });
  };
}
