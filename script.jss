const startDate = new Date("2023-05-14T00:00:00");

function updateTime() {
  const now = new Date();
  let diff = now - startDate;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  document.getElementById("time").innerText =
    `${months} meses, ${days} días y ${hours} horas juntos ❤️`;
}

updateTime();
setInterval(updateTime, 1000);
