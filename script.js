document.addEventListener("DOMContentLoaded", function () {
  // const form = document.getElementById("bundle-form");
  const pairSelections = document.querySelectorAll(".pair-selection");
  const bundleOptions = document.querySelectorAll(".bundle-option");

  pairSelections.forEach((selection) => {
    selection.style.display = "none";
  });

  bundleOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const radioButton = option.querySelector('input[type="radio"]');
      if (radioButton) {
        radioButton.checked = true;

        pairSelections.forEach((selection) => {
          selection.style.display = "none";
        });

        const pairSelection = option.querySelector(".pair-selection");
        if (pairSelection) {
          pairSelection.style.display = "block"; 
        }
      }
    });
  });
});
