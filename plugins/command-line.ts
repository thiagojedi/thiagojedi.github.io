import type { Site } from "lume/core.ts";

export default function commandLine(
  { user = "user", server = "localhost" } = {},
) {
  const promptText = `${user}@${server} $ `;

  return (site: Site) => {
    site.process([".html"], ({ document }) => {
      if (!document) {
        return;
      }

      const elements = document.querySelectorAll("pre > code.language-console");
      elements.forEach((element) => {
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
