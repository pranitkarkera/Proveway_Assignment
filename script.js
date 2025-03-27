document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bundle-form");
  const pairSelections = document.querySelectorAll(".pair-selection");

  pairSelections.forEach((selection) => {
    selection.style.display = "none";
  });

  form.addEventListener("change", function (event) {
    pairSelections.forEach((selection) => {
      selection.style.display = "none";
    });

    function showPairSelection(optionId) {
      if (event.target.id === optionId) {
        const selectedOption = document
          .getElementById(optionId)
          .closest(".bundle-option");
        const pairSelection = selectedOption.querySelector(".pair-selection");
        if (pairSelection) {
          pairSelection.style.display = "block";
        }
      }
    }

    showPairSelection("one-pair");
    showPairSelection("two-pair");
    showPairSelection("three-pair");
  });
});
