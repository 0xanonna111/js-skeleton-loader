function loadData() {
  document.querySelectorAll(".skeleton").forEach(el => {
    el.style.display = "block";
  });

  document.getElementById("content").classList.add("hidden");

  setTimeout(() => {
    document.querySelectorAll(".skeleton").forEach(el => {
      el.style.display = "none";
    });

    document.getElementById("content").classList.remove("hidden");
  }, 2500);
}
