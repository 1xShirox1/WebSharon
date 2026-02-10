const memories = {
  "2024-02-14": {
    image: "https://via.placeholder.com/300",
    text: "Nuestro primer San Valentín ❤️"
  },
  "2024-06-01": {
    image: "https://via.placeholder.com/300",
    text: "Un día que nunca olvidaré"
  }
};

const calendar = document.getElementById("calendar");

Object.keys(memories).forEach(date => {
  const btn = document.createElement("button");
  btn.innerText = date;

  btn.onclick = () => {
    calendar.innerHTML = `
      <img src="${memories[date].image}" width="300"><br>
      <p>${memories[date].text}</p>
      <br><button onclick="location.reload()">Volver</button>
    `;
  };

  calendar.appendChild(btn);
});
