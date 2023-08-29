const inputboxx = document.getElementById("inputbox");
    const listcontainer = document.getElementById("listCont");

    function zidTask() {
      if (inputboxx.value === '') {
        alert("Enter a task.");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputboxx.value;

        let modifyIcon = document.createElement("span");
        modifyIcon.innerHTML = "\u270E"; // Pencil 
        modifyIcon.className = "modify-icon";

        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "\u00D7"; 

        li.appendChild(modifyIcon);
        li.appendChild(deleteIcon);
        listcontainer.appendChild(li);
      }
      inputboxx.value = "";
      save();
    }


    function deleteAll() {
        if (window.confirm("Are you sure you want to delete all items?")) {
          listcontainer.innerHTML = '';
          save();
        }
      }


      /////////////filter
      function filterChecked() {
        listcontainer.querySelectorAll("li").forEach(li => {
          li.style.display = li.classList.contains("checked") ? "list-item" : "none";
        });
      }
  
      function filterUnchecked() {
        listcontainer.querySelectorAll("li").forEach(li => {
          li.style.display = !li.classList.contains("checked") ? "list-item" : "none";
        });
      } 





    listcontainer.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        save();

      } else if (event.target.classList.contains("modify-icon")) {
        const listItem = event.target.parentElement;
        const newContent = prompt("Modify item:", listItem.firstChild.textContent.trim());
        
        if (newContent !== null && newContent !== "") {
          listItem.firstChild.textContent = newContent;
          save();
        }
      } 
      else if (event.target.tagName === "SPAN") {
        const confirmi = window.confirm("Are you sure you want to delete this item?");
        if (confirmi) {
          event.target.parentElement.remove();
          save();
        }
      }
    }, false);

    function save() {
      localStorage.setItem("data", listcontainer.innerHTML);
    }

    function showtask() {
      listcontainer.innerHTML = localStorage.getItem("data");
    }
    showtask();


    ///themes


    let currentTheme = "green-theme"; 

    function toggleTheme() {
      if (currentTheme === "green-theme") {
        setTheme("pink-theme");
      } else {
        setTheme("green-theme");
      }
    }
  
    function setTheme(pink) {
      document.body.classList.remove(currentTheme);
      document.body.classList.add(pink);
      currentTheme = pink;
    }

    // const toggleTheme = document.getElementById('pink');
