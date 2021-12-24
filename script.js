btn.onclick = () => {
  fetch("https://api.github.com/users/" + `${champ.value}`)
    .then((response) => response.json())
    .then((data) => {
      output.textContent = "";

      output.textContent = `Compte de ${data.name} ,crée le ${data.created_at}`;
      const img = document.createElement("img");
      img.src = data.avatar_url;
      output.appendChild(img);
    });
};
