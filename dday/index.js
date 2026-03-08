let params;
let rootElement;

document.addEventListener("DOMContentLoaded", function () {
  params = getUrlParams();
  rootElement = document.getElementById("dDayCounter");

  initializeDdayCounterApp();
});

const getUrlParams = () => {
  const { search } = window.location;
  const urlParams = new URLSearchParams(search);
  return urlParams;
};

const initializeDdayCounterApp = () => {
  setAppStyles();
  setContent();
  setDate();
};

const setAppStyles = () => {
  rootElement.style.backgroundColor = `#${params.get("background")}` ?? "";
  rootElement.style.color = `#${params.get("text")}` ?? "";
};

const setContent = () => {
  const content = params.get("content");
  rootElement.querySelector(".content").textContent = content ?? "";
};

const setDate = () => {
  function getDaysDifference(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const gap = today - targetDate;
    const daysDiff = Math.round(gap / (1000 * 60 * 60 * 24));

    return daysDiff;
  }

  const date = params.get("date");
  const inclusive = params.get("inclusive") === "true";

  if (!date || date.length < 6 || date.length > 8) {
    console.error("Invalid Date: ", date);
    rootElement.querySelector(".date").textContent = "Invalid Date";
    rootElement.querySelector(".counter").textContent = "ERROR";
    return;
  }

  const year = parseInt(date.slice(0, 4), 10);
  let month, day;

  if (date.length === 8) {
    month = parseInt(date.slice(4, 6), 10);
    day = parseInt(date.slice(6), 10);
  } else if (date.length === 7) {
    const m = parseInt(date.slice(4, 6), 10);
    if (m >= 1 && m <= 12) {
      month = m;
      day = parseInt(date.slice(6), 10);
    } else {
      month = parseInt(date.slice(4, 5), 10);
      day = parseInt(date.slice(5), 10);
    }
  } else {
    month = parseInt(date.slice(4, 5), 10);
    day = parseInt(date.slice(5), 10);
  }

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    console.error("Invalid Date: ", date);
    rootElement.querySelector(".date").textContent = "Invalid Date";
    rootElement.querySelector(".counter").textContent = "ERROR";
    return;
  }

  const displayMonth = String(month).padStart(2, "0");
  const displayDay = String(day).padStart(2, "0");

  rootElement.querySelector(".date").textContent = `${year}-${displayMonth}-${displayDay}`;

  let targetDate = new Date(year, month - 1, day);
  const diff = getDaysDifference(targetDate);

  let dday;
  if (inclusive && diff >= 0) {
    dday = `D+${diff + 1}`;
  } else {
    const prefix = diff > 0 ? "D+" : "D";
    dday = diff === 0 ? "TODAY" : prefix + diff;
  }

  rootElement.querySelector(".counter").textContent = dday;
};
