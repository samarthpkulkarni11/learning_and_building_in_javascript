// We will cover and check about alert, prompt and confirm here

// General implementation for alert, confirm and prompt.

const alertUser = alert("Do you wanna currently view this web page?");

const reconfirmUser = confirm("Are you sure about it?");

const promptUser = console.log(prompt("How are you feeling about JS?"));

// some crazy no sense shit here

const alertPrompt = console.log(alert(prompt("What is your name?")));

const alertConfirm = alert(confirm("Something to confirm from user yes or no"));

const confirmPrompt = console.log(
  confirm("are you sure about it", prompt("Enter some value"))
);
