import { color, log, red, green, cyan, cyanBright } from "console-log-colors";

import fetch from "node-fetch";

// Count errors & successful requests
let errors = 0,
  success = 0,
  errorMessages = [];
let isFailedRequest;


function worker(host, amount, interval) {
  setInterval(() => {
  
    for (let index = 0; index < amount; index++) {
      fetch(host)
        .catch((err) => {
          if (err) {
            if (!errorMessages.includes(err.code)) {
              errorMessages.push(err.code);
              console.log(`Error: ${red(err)}`);
            }
            isFailedRequest = true;
            errors++;
          }
        })
        .then((e) => {
          success++;
        });
    }

    console.log(`Errors: [${red(errors)}] Success: [${green(success)}]`)

  }, interval);
}

worker(process.argv[2], process.argv[3], process.argv[4]);
