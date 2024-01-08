const form = document.getElementById("requestForm");
const botToken = "<token>"; 
const chatId = "<chat_id>";

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let data = new FormData(form);

  fetch(`https://api.telegram.org/bot${6912359694:AAFXf2PLVsXoBNMfZ7SWOlJQKTSIQDIF5II}/sendMessage`, {
    method: "POST",
    body: new URLSearchParams({
      chat_id: -4089567138,      
      text: JSON.stringify(Object.fromEntries(data)) 
    })
  })
  .then(res => console.log(res)) 
  .catch(err => console.error(err));

});
