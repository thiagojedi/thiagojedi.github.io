import type { Site } from "lume/core.ts";

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
        const prompt = document.createElement("span");
        prompt.classList.add("token", "prompt");
        prompt.textContent = `${user}@${server} $ `;

        element.insertBefore(prompt, element.firstChild);
      });
    });
  };
}
