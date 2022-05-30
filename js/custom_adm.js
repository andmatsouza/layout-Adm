//Dropdown navbar

let avatar = document.querySelector(".avatar"),
    notification = document.querySelector(".notification");

   // console.log(avatar);

   dropMenu(avatar);
   dropMenu(notification);

   function dropMenu(selector) {
     selector.addEventListener("click", () => {
        let dropDrownMenu = selector.querySelector(".dropdown-menu");
        dropDrownMenu.classList.contains("active") ? dropDrownMenu.classList.remove("active") : dropDrownMenu.classList.add("active");
     })
   }