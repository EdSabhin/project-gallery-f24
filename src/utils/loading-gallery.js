function showCarousel() {
  const mainContent = document.getElementById("main-content");
  const loadingGallery = document.getElementById("loading-gallery");
  mainContent.classList.remove("hidden");
  mainContent.classList.add("block");
  loadingGallery.classList.add("hidden");
}
setTimeout(showCarousel, 6000);
