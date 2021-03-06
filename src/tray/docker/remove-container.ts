import { exec } from "child_process";

export async function removeContainer(name: string) {
  return await new Promise((resolve, reject) => {
    exec(`docker rm ${name}`, (err, stdout, stderr) => {
      if (err || stderr) reject(err || stderr);

      resolve(stdout);
    });
  });
}
