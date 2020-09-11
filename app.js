// 1. Pobieramy element
const btn = document.querySelector("button");
//5. wartość do licznika
let number = 1;
//2. Dajemy na niego nasłuchiwanie
btn.addEventListener("click", () => {
  //3. Zadeklarować funkcje, tworzenie elementu div
  const div = document.createElement("div");
  //5. Przypisywanie koljenych wartości do diva
  div.textContent = number;
  //6. Operacja modulo i dodawanie klasy na co 5 elemencie.
  if (!(number % 5)) {
    div.classList.add("circle");
    //drugi sposób na modulo
  } else if (number % 3 == 0) {
    div.classList.add("triangle");
  }
  //4. Tworzenie pod body diva
  document.body.appendChild(div);
  number++;
});
