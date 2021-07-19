const navigatorLang = navigator.language || navigator.userLanguage;

const ariaLabelLang = {
  "en-US": "Claim Bonus",
  "es-ES": "Reclamar bonificación",
};

function reclaimButton() {
  const buttonClaim = document.querySelector(
    `button[aria-label="${ariaLabelLang[navigatorLang]}"]`
  );
  buttonClaim && buttonClaim.click();
}

setInterval(reclaimButton, 4000);
