////////////////////////////////////////// HIDE AND SHOW DROP-OFF
document.addEventListener("DOMContentLoaded", function () {
  const sameDropOffCheckbox = document.getElementById("sameDropOff");
  const dropOffWrapper = document.getElementById("dropOffLocationWrapper");

  // force checked state
  sameDropOffCheckbox.checked = true;

  // initial state
  dropOffWrapper.style.display = "none";

  // toggle on change
  sameDropOffCheckbox.addEventListener("change", function () {
    dropOffWrapper.style.display = this.checked ? "none" : "block";
  });
});

///////////////////////////////////////// AUTOCOMPLETE HERE

/* =========================
           DATA
        ========================= */
const locations = [
  {
    type: "airport",
    title: "Istanbul New Grand Airport (IST)",
    subtitle: "Istanbul, Turkey",
  },
  {
    type: "airport",
    title: "Gran Canaria Airport (LPA)",
    subtitle: "Gran Canaria, Spain-Canary Islands",
  },
  { type: "city", title: "Grand Rapids", subtitle: "Michigan, USA" },
  { type: "city", title: "Grand Rapids Downtown", subtitle: "Michigan, USA" },
  {
    type: "city",
    title: "Grand Rapids Airport Area",
    subtitle: "Michigan, USA",
  },
];

/* =========================
           ICONS
        ========================= */
let cityIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_168_556)">
    <path d="M3.3335 9.52423C2.09925 10.0687 1.3335 10.8274 1.3335 11.6667C1.3335 13.3235 4.31826 14.6667 8.00016 14.6667C11.6821 14.6667 14.6668 13.3235 14.6668 11.6667C14.6668 10.8274 13.9011 10.0687 12.6668 9.52423M12.0002 5.33333C12.0002 8.04247 9.00016 9.33333 8.00016 11.3333C7.00016 9.33333 4.00016 8.04247 4.00016 5.33333C4.00016 3.12419 5.79102 1.33333 8.00016 1.33333C10.2093 1.33333 12.0002 3.12419 12.0002 5.33333ZM8.66683 5.33333C8.66683 5.70152 8.36835 6 8.00016 6C7.63197 6 7.3335 5.70152 7.3335 5.33333C7.3335 4.96514 7.63197 4.66666 8.00016 4.66666C8.36835 4.66666 8.66683 4.96514 8.66683 5.33333Z" stroke="#008857" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_168_556">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

let airportIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.8298 1.87521C12.473 1.21089 13.5357 1.2023 14.1895 1.85613C14.8254 2.49204 14.8373 3.51936 14.2162 4.16976L12.3637 6.1096C12.2185 6.26165 12.1459 6.33768 12.1012 6.42672C12.0616 6.50554 12.038 6.59144 12.0319 6.67943C12.0249 6.77884 12.0485 6.88127 12.0958 7.08612L13.2477 12.0778C13.2963 12.2881 13.3205 12.3932 13.3127 12.4949C13.3058 12.585 13.2806 12.6726 13.2388 12.7526C13.1915 12.843 13.1152 12.9193 12.9626 13.0719L12.7154 13.3191C12.3113 13.7232 12.1093 13.9252 11.9025 13.9618C11.7219 13.9938 11.5362 13.9499 11.389 13.8406C11.2203 13.7154 11.13 13.4443 10.9493 12.9022L9.60943 8.88264L7.37921 11.1129C7.24609 11.246 7.17953 11.3125 7.135 11.3909C7.09556 11.4604 7.06891 11.5363 7.05633 11.6152C7.04213 11.7042 7.05253 11.7978 7.07332 11.9849L7.19579 13.0872C7.21658 13.2743 7.22698 13.3678 7.21278 13.4569C7.2002 13.5357 7.17355 13.6117 7.13411 13.6811C7.08958 13.7595 7.02302 13.8261 6.8899 13.9592L6.75823 14.0909C6.44285 14.4062 6.28517 14.5639 6.10993 14.6096C5.95624 14.6496 5.79329 14.6335 5.65043 14.5641C5.48756 14.4849 5.36386 14.2994 5.11646 13.9283L4.07091 12.36C4.02671 12.2937 4.00461 12.2605 3.97895 12.2305C3.95616 12.2038 3.9313 12.1789 3.90459 12.1561C3.87452 12.1304 3.84137 12.1083 3.77507 12.0641L2.20675 11.0186C1.83565 10.7712 1.6501 10.6475 1.57095 10.4846C1.50153 10.3418 1.4854 10.1788 1.52545 10.0251C1.57112 9.84988 1.72881 9.6922 2.04418 9.37682L2.17585 9.24515C2.30898 9.11203 2.37554 9.04547 2.45392 9.00094C2.52337 8.9615 2.59933 8.93485 2.6782 8.92227C2.76722 8.90807 2.86078 8.91847 3.04789 8.93926L4.15015 9.06173C4.33727 9.08252 4.43082 9.09292 4.51985 9.07872C4.59871 9.06614 4.67468 9.03949 4.74412 9.00005C4.82251 8.95552 4.88907 8.88896 5.02219 8.75583L7.25241 6.52562L3.23289 5.18578C2.69074 5.00506 2.41966 4.9147 2.29446 4.7461C2.18514 4.59887 2.14129 4.41312 2.17323 4.23254C2.20981 4.02575 2.41185 3.8237 2.81595 3.4196L3.06313 3.17242C3.21573 3.01983 3.29202 2.94353 3.38242 2.89627C3.46243 2.85444 3.5501 2.8293 3.64011 2.82236C3.74181 2.81453 3.84695 2.83879 4.05723 2.88732L9.02999 4.03488C9.23662 4.08256 9.33994 4.10641 9.43969 4.09931C9.536 4.09246 9.62967 4.06478 9.71423 4.01817C9.80181 3.96989 9.87556 3.89371 10.0231 3.74135L11.8298 1.87521Z" stroke="#0065D1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* =========================
           HIGHLIGHT FUNCTION
        ========================= */
function highlightText(text, search) {
  if (!search) return text;

  const regex = new RegExp(`(${search})`, "gi");
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

/* =========================
           AUTOCOMPLETE LOGIC
        ========================= */
document.querySelectorAll(".location-input").forEach((input) => {
  const picker = input.closest(".location-picker");
  const dropdown = picker.querySelector(".location-dropdown");

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    dropdown.innerHTML = "";

    if (!value) {
      dropdown.style.display = "none";
      return;
    }

    const filtered = locations.filter((loc) =>
      loc.title.toLowerCase().includes(value),
    );

    filtered.forEach((loc) => {
      const item = document.createElement("div");
      item.className =
        "location-item d-flex align-items-center gap-3 px-sm-4 px-12 py-12";

      item.innerHTML = `
        <div class="location-icon d-flex align-items-center justify-content-center gap-2 py-2 ${loc.type}">
          ${loc.type === "airport" ? airportIcon : cityIcon}
          <span class="d-sm-block d-none">${loc.type === "airport" ? "Airport" : "Location"}</span>
        </div>
        <div class="location-text">
          <strong>${highlightText(loc.title, value)}</strong>
          <span class="d-block mt-2">${loc.subtitle}</span>
        </div>
      `;

      item.addEventListener("click", () => {
        input.value = loc.title;
        dropdown.style.display = "none";
      });

      dropdown.appendChild(item);
    });

    dropdown.style.display = filtered.length ? "block" : "none";
  });
});

/* =========================
           CLOSE ON OUTSIDE CLICK
        ========================= */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".location-picker")) {
    document.querySelectorAll(".location-dropdown").forEach((d) => {
      d.style.display = "none";
    });
  }
});

///////////////////////////////////////// BOOTSTRAP RANGE PICKER

$(function () {
  const pickUp = $("#pickUp");
  const dropOff = $("#dropOff");

  // Initialize daterangepicker
  pickUp.daterangepicker({
    autoApply: false, // show Apply & Cancel buttons
    autoUpdateInput: false, // we will set values manually
    opens: "center",
    minDate: moment(),
    showCustomRangeLabel: true, // show Custom Range option
    ranges: {
      // preset ranges
      Today: [moment(), moment()],
      Tomorrow: [moment().add(1, "day"), moment().add(1, "day")],
      "Next 7 Days": [moment(), moment().add(6, "days")],
      "Next 30 Days": [moment(), moment().add(29, "days")],
    },
    locale: {
      format: "ddd, DD MMM",
      applyLabel: "Apply",
      cancelLabel: "Cancel",
    },
  });

  // Open Custom Range automatically when picker opens
  pickUp.on("show.daterangepicker", function (ev, picker) {
    // Trigger click on "Custom Range" (last li)
    picker.container.find(".ranges li:last").trigger("click");
  });

  // When user clicks Apply
  pickUp.on("apply.daterangepicker", function (ev, picker) {
    // Set pick-up and drop-off values
    pickUp.val(picker.startDate.format("ddd, DD MMM"));
    dropOff.val(picker.endDate.format("ddd, DD MMM"));

    // Close the picker
    picker.hide();

    // Move focus to drop-off input visually
    setTimeout(() => {
      dropOff.trigger("focus");
    }, 150);
  });

  // When user clicks Cancel
  pickUp.on("cancel.daterangepicker", function (ev, picker) {
    pickUp.val("");
    dropOff.val("");
    picker.hide();
  });

  // Open picker when clicking drop-off (optional)
  dropOff.on("click", function () {
    pickUp.trigger("click");
  });

  // PROMO CODE TOGGLE
  const promoCheckbox = document.getElementById("promoCode");
  const promoWrapper = document.getElementById("promoCodeWrapper");
  const promoInput = document.getElementById("promoCodeInput");

  promoCheckbox.addEventListener("change", () => {
    if (promoCheckbox.checked) {
      promoWrapper.style.display = "block";
      promoInput.focus();
    } else {
      promoWrapper.style.display = "none";
      promoInput.value = "";
    }
  });

  // DRIVER AGE TOGGLE
  const checkbox = document.getElementById("driverAge");
  const labelText = document.getElementById("driverAgeLabel");
  const ageWrapper = document.getElementById("driverAgeWrapper");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      ageWrapper.style.display = "block";
      labelText.textContent = "Driver Age";
    } else {
      ageWrapper.style.display = "none";
      labelText.textContent = "Driver’s age between 30-65";
    }
  });

  // MOBILE VIEW
  // PROMO CODE TOGGLE
  const promoCheckboxMob = document.getElementById("promoCodeMob");
  const promoWrapperMob = document.getElementById("promoCodeWrapperMob");
  const promoInputMob = document.getElementById("promoCodeInputMob");

  promoCheckboxMob.addEventListener("change", () => {
    if (promoCheckboxMob.checked) {
      promoWrapperMob.style.display = "block";
      promoInputMob.focus();
    } else {
      promoWrapperMob.style.display = "none";
      promoInputMob.value = "";
    }
  });

  // DRIVER AGE TOGGLE
  const checkboxMob = document.getElementById("driverAgeMob");
  const labelTextMob = document.getElementById("driverAgeLabelMob");
  const ageWrapperMob = document.getElementById("driverAgeWrapperMob");

  checkboxMob.addEventListener("change", function () {
    if (this.checked) {
      ageWrapperMob.style.display = "block";
      labelTextMob.textContent = "Driver Age";
    } else {
      ageWrapperMob.style.display = "none";
      labelTextMob.textContent = "Driver’s age between 30-65";
    }
  });
});

///////////////////////////////////// TIME DROPDOWN

function generateTimes(dropdown, input) {
  dropdown.innerHTML = "";

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hour = String(h).padStart(2, "0");
      const min = String(m).padStart(2, "0");
      const time = `${hour}:${min}`;

      const li = document.createElement("li");
      li.textContent = time;

      if (input.value === time) {
        li.classList.add("active");
      }

      li.addEventListener("click", () => {
        input.value = time;
        dropdown.style.display = "none";
      });

      dropdown.appendChild(li);
    }
  }
}

document.querySelectorAll(".time-input").forEach((input) => {
  const picker = input.closest(".time-picker");
  const dropdown = picker.querySelector(".time-dropdown");

  input.addEventListener("click", () => {
    // close other dropdowns
    document
      .querySelectorAll(".time-dropdown")
      .forEach((d) => (d.style.display = "none"));

    generateTimes(dropdown, input);
    dropdown.style.display = "block";
  });
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".time-picker")) {
    document
      .querySelectorAll(".time-dropdown")
      .forEach((d) => (d.style.display = "none"));
  }
});

// SLICK SLIDER

$(document).ready(function () {
  $(".customer-slider").slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    speed: 500,
  });
});

// BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
[...tooltipTriggerList].forEach((el) => {
  const tooltip = new bootstrap.Tooltip(el);
  console.log(tooltip);
});

// BOOTSTRAP VALIDATION
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
})();
