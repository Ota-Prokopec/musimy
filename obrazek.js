


function obrazek(value, text, autor) {

  card.style.backgroundImage = `url(${value})`
  card.style.backgroundRepeat = "no-repeat";
  card.style.backgroundSize = "100%";
  document.getElementById("write").innerText = text;
  document.getElementById("author").innerText = `by ${autor}`
}
