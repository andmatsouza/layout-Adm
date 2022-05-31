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

   //Sidebar toggle
   let sidebar = document.querySelector(".sidebar"),
      bars = document.querySelector(".bars");

      bars.addEventListener("click", () => {
        sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
      })

   window.matchMedia("(max-width : 768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active");

   //Botão ação do listar
   function actionDropdown(id){
      closeDropdownAction();
      document.getElementById("actionDropdown" + id).classList.toggle("show-dropdown-action");
   }

   window.onclick = function(event) {
      if(!event.target.matches('.dropdown-btn-action')) {
         //document.getElementById("actionDropdown").classList.remove("show-dropdown-action");
         closeDropdownAction();
      }
   }

   function closeDropdownAction(){
      const dropdowns = document.getElementsByClassName("dropdown-action-item");
      
      for (let i = 0; i < dropdowns.length; i++) {
         let openDropdown = dropdowns[i];
         if(openDropdown.classList.contains("show-dropdown-action")){
            openDropdown.classList.remove("show-dropdown-action");
         }
         
      }
   } 