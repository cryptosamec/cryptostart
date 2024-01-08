const form = document.getElementById("requestForm");
const botToken = "6912359694:AAFXf2PLVsXoBNMfZ7SWOlJQKTSIQDIF5II"; 
const chatId = "-4089567138";

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let data = new FormData(form);

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    body: new URLSearchParams({
      chat_id: chatId,      
      text: JSON.stringify(Object.fromEntries(data)) 
    })
  })
  .then(res => console.log(res)) 
  .catch(err => console.error(err));

});
