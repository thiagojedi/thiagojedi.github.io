import type { Site } from "lume/core.ts";

const getAttribute = (e: unknown, attr: string) => {
  const element = <Element> e;
  const value = element.getAttribute(attr);
  if (value !== null) {
    element.removeAttribute(attr);
  }
  return value;
};

type CommandLineOptions = {
  /**
   * User in the prompt. Defaults to "user"
   * @example user@server $
   */
  user: string;
  /**
   * Server in the prompt. Defaults to "localhost"
   * @example user@localhost $
   */
  server: string;
  /**
   * Default prompt. Takes precedence over user and server options.
   * @example PS C:\>
   */
  prompt: string;
};

export default function commandLine(
  {
    user: defaultUser = "user",
    server: defaultServer = "localhost",
    prompt: defaultPrompt,
  }: Partial<CommandLineOptions> = {},
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
        const dataPrompt = getAttribute(element, "prompt");

        let promptText;
        if (dataPrompt) {
          promptText = dataPrompt;
        } else if (dataUser || dataServer) {
          const promptUser = dataUser ?? defaultUser;
          const promptMachine = dataServer ?? defaultServer;
          const promptSign = promptUser === "root" ? "#" : "$";

          promptText = `${promptUser}@${promptMachine} ${promptSign}`;
        } else {
          const promptSign = defaultUser === "root" ? "#" : "$";
          promptText = defaultPrompt ??
            `${defaultUser}@${defaultServer} ${promptSign}`;
        }

        const codeLines = element.firstChild.textContent.trim().split("\n");
        const numberOfLines = codeLines.length;

        const promptColumn = document.createElement("span");
        promptColumn.className = "command-line-prompt";

        for (let index = 0; index < numberOfLines; index++) {
          const prompt = document.createElement("span");
          prompt.textContent = promptText + " ";

          const br = document.createElement("br");

          promptColumn.appendChild(prompt);
          promptColumn.appendChild(br);
        }

        element.insertBefore(promptColumn, element.firstChild);
      });
    });
  };
}
