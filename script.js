const form = document.querySelector("#commandForm");
const input = document.querySelector("#commandInput");
const output = document.querySelector("#commandOutput");

const commands = {
  about: { target: "#about", message: "Opening about.md…" },
  work: { target: "#work", message: "Listing selected work…" },
  resume: { target: "#resume", message: "Parsing resume.json…" },
  contact: { target: "#contact", message: "Executing contact.sh…" },
  home: { target: "#top", message: "Returning to ~/…" },
  clear: { target: "#top", message: "Session cleared." }
};

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase().replace(/^\.\//, "");
  if (command === "help" || command === "ls") {
    output.textContent = "Available: about · work · resume · contact · home · clear";
    input.select();
    return;
  }
  const action = commands[command];
  if (!action) {
    output.textContent = `command not found: ${command || "(empty)"}. Type help.`;
    input.select();
    return;
  }
  output.textContent = action.message;
  document.querySelector(action.target)?.scrollIntoView({ behavior: "smooth" });
  input.value = "";
});
