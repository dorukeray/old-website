require("dotenv").config({ path: __dirname + "/.env" });
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

ftpDeploy
  .deploy({
    user: process.env["FTP_USER"],
    password: process.env["FTP_PASSWORD"], // Password optional, prompted if none given
    host: process.env["FTP_HOST"],
    port: process.env["FTP_PORT"],
    localRoot: __dirname + "/dist",
    remoteRoot: process.env["FTP_REMOTE"],
    include: ["*", "**/*"], // this would upload everything except dot files
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
  })
  .then((res) => console.info("finished:", res))
  .catch((err) => console.error(err));
