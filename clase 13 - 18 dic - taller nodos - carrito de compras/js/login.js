/**selectores*/

const usercontent = document.querySelector(".login");

user = {
  id: "1",
  nickname: "admin",
  password: "prueba123",
};

//creacion elementos inicio
let loginUser = document.createElement("input");
let passwordUser = document.createElement("input");

loginUser.setAttribute("type", "text");
passwordUser.setAttribute("type", "password");
loginUser.setAttribute("placeholder", "usuario");
passwordUser.setAttribute("placeholder", "contraseña");

//inputs
usercontent.appendChild(loginUser);
usercontent.appendChild(passwordUser);

//boton inicio
const button = document.createElement("button");
button.textContent = "iniciar";
usercontent.appendChild(button);

//estilos
loginUser.setAttribute(
  "style",
  "font-size:20px;  border-radius: 20px; padding: 10px;"
);
passwordUser.setAttribute(
  "style",
  "font-size:20px;  border-radius: 20px; padding: 10px; "
);
button.setAttribute("style", "font-size:20px;");

button.addEventListener("click", (evento) => {
  let usuario = loginUser.value;
  let contrasena = passwordUser.value;
  if (user.nickname === usuario && user.password === contrasena) {
    alert("Bienvenido");
    location.href = "index.html";
  } else alert("usuario o contraseña no validos");
});
