const banner = document.querySelector("#chamberBanner");
const bannerClose = document.querySelector(".chamberBannerClose");

function closeBanner() {
  banner.style.display = "none";
}

bannerClose.addEventListener("click", closeBanner);

function showBanner() {
  let today = new Date();
  let day = today.getDay();

  if (day >= 1 && day <= 3) {
    banner.style.display = "block";
  }
}

showBanner();
