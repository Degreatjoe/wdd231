const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent =
  `${params.get("fname")} ${params.get("lname")}`;

document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("class").textContent = params.get("class");
document.getElementById("timestamp").textContent = params.get("timestamp");


document.getElementById("timestamp").value = new Date().toISOString();
