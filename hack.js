let messages = [
  "Initialising Hack",
  "Connecting to Instagram servers",
  "Establishing connection with server 5889",
  "Failed to connect to server",
  "Retrying",
  "Connected to Server!",
  "Username found: sainigarima",
  "Trying Brute Force",
  "200k passwords tried",
  "Match not found",
  "156k passwords tried",
  "Match Found",
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (message, seconds) => {
  await sleep(seconds);
  document.getElementById("data").innerHTML =
    document.getElementById("data").innerHTML +
    `<p class="loading">${message}</p>`;
};

(async () => {
  for (var i = 0; i < messages.length; i++) {
    if (i == 0) {
      var time = 0;
    } else {
        
      time = Math.floor(Math.random() * 5);
    }
    console.log(time);

      await showHack(messages[i], time);
      if (i == (messages.length - 1)) {
          success();     
      }
  }
})();

const success = ()=> {
    let success = document.getElementById("success-message");
    success.classList.toggle("d-none")
    success.innerHTML = `<p class="success" id="d-message"> Account information encrypted and package sent via alias </p>`;
    setInterval(() => {
        document.getElementById('d-message').classList.toggle("d-none");
    }, 400);
}