import { exec } from "child_process";

export function update() {
  execute("git add .");
  execute("git commit -m 'update'");
  execute("git push origin master");
  process.exit();
}

function execute(command) {
  exec(`${command}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log(`${stdout}`);
  });
}
