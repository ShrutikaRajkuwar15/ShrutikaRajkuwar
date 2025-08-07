// const button = document.getElementById("ViewMore");
// const showLessBtn = document.getElementById("ShowLess");
//     const hiddenProjects = document.querySelectorAll(".project.hidden");

//     button.addEventListener("click", () => {
//       hiddenProjects.forEach(project => {
//         project.classList.remove("hidden");
//       });
//       button.style.display = "none"; // hide button after showing

      
//     });

    

  const button = document.getElementById("ViewMore");
  const showLessBtn = document.getElementById("ShowLess");
  const hiddenProjects = document.querySelectorAll(".project");

  button.addEventListener("click", () => {
    hiddenProjects.forEach(project => {
      project.classList.remove("hidden");
    });
    button.style.display = "none"; // hide "View More"
    showLessBtn.style.display = "inline-block"; // show "Show Less"
  });

  showLessBtn.addEventListener("click", () => {
    hiddenProjects.forEach(project => {
      project.classList.add("hidden");
    });
    button.style.display = "inline-block"; // show "View More"
    showLessBtn.style.display = "none"; // hide "Show Less"
  });
