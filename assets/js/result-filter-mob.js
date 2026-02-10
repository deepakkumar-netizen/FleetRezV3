// SELECT2 DROPDOWN

$("#sortingMob").select2({
  placeholder: "",
  allowClear: false,
  minimumResultsForSearch: Infinity,
  dropdownParent: $("#offcanvasResponsive") // 👈 IMPORTANT
});


// PRICE SLIDER

let sliderMob = document.getElementById("priceSliderMob");

noUiSlider.create(sliderMob, {
  start: [231, 24040],
  connect: true,
  range: {
    min: 0,
    max: 35000,
  },
  step: 1,
});

function formatPrice(value) {
  return Math.round(value).toLocaleString("en-IN");
}

sliderMob.noUiSlider.on("update", function (values) {
  document.getElementById("minMob").innerText = "€" + formatPrice(values[0]);
  document.getElementById("maxMob").innerText = "€" + formatPrice(values[1]);
});


// PAYMENT FILTER HERE

document
  .getElementById("payNowSelectAllMob")
  .addEventListener("change", function () {
    const items = document.querySelectorAll(".payNow-item-mob");
    items.forEach((item) => {
      item.checked = this.checked;
    });
  });

// Optional: update "Select all" when individual checkboxes change
document.querySelectorAll(".payNow-item-mob").forEach((item) => {
  item.addEventListener("change", function () {
    const items = document.querySelectorAll(".payNow-item-mob");
    const allChecked = [...items].every((i) => i.checked);
    document.getElementById("payNowSelectAllMob").checked = allChecked;
  });
});


/// CAR SPECIFICATIONS FILTER HERE
document
  .getElementById("carSpecificationsSelectAllMob")
  .addEventListener("change", function () {
    const items = document.querySelectorAll(".carSpecifications-mob-item");
    items.forEach((item) => {
      item.checked = this.checked;
    });
  });

// Optional: update "Select all" when individual checkboxes change
document.querySelectorAll(".carSpecifications-mob-item").forEach((item) => {
  item.addEventListener("change", function () {
    const items = document.querySelectorAll(".carSpecifications-mob-item");
    const allChecked = [...items].every((i) => i.checked);
    document.getElementById("carSpecificationsSelectAllMob").checked = allChecked;
  });
});

/// CAR TYPES FILTER HERE
document
  .getElementById("carTypeSelectAllMob")
  .addEventListener("change", function () {
    const items = document.querySelectorAll(".car-type-mob-item");
    items.forEach((item) => {
      item.checked = this.checked;
    });
  });

// Optional: update "Select all" when individual checkboxes change
document.querySelectorAll(".car-type-mob-item").forEach((item) => {
  item.addEventListener("change", function () {
    const items = document.querySelectorAll(".car-type-mob-item");
    const allChecked = [...items].every((i) => i.checked);
    document.getElementById("carTypeSelectAllMob").checked = allChecked;
  });
});