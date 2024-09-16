
  tailwind.config = {
      theme: {
        extend: {
          colors: {
              doura: '#b09c5e',
          }
        }
      }
    }
  

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}