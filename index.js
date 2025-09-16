let isDOBOpen = false;
let dateOFBirth;

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};
const toggleDateOFBithSelector = () => {
  if (isDOBOpen) {
    setttingContentEL.classList.add("hide");
  } else {
    setttingContentEL.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
  console.log("Toggle", isDOBOpen);
};
const setttingCogEL = document.getElementById("settingIcon");
const setttingContentEL = document.getElementById("settingIContent");

const dobButtonEL = document.getElementById("dobButton");
const dobInputEL = document.getElementById("dobInput");
const updateAge = () => {
  const yearEl = document.getElementById("year");
  const monthEl = document.getElementById("month");
  const dayEl = document.getElementById("day");
  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minute");
  const secondEl = document.getElementById("second");
  const currentDate = new Date();
  const dateDiff = currentDate - dateOFBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  hourEl.innerHTML = makeTwoDigitNumber(hour);
  minuteEl.innerHTML = makeTwoDigitNumber(minute);
  secondEl.innerHTML = makeTwoDigitNumber(second);
};
const localStorageGetter = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");
  if (year && month && day) {
    dateOFBirth = new Date(year, month, day);
  }
  updateAge();
};
const contentToggler = () => {
  const initialTextEL = document.getElementById("initialText");
  const afterDOBBtnTxtEL = document.getElementById("afterDOBBtnTxt");
  updateAge();
  if (dateOFBirth) {
    initialTextEL.classList.add("hide");
    afterDOBBtnTxtEL.classList.remove("hide");

    setInterval(() => updateAge(), 1000);
  } else {
    afterDOBBtnTxtEL.classList.add("hide");
    initialTextEL.classList.remove("hide");
  }
};
const setDOBHandler = () => {
  const dateString = dobInputEL.value;
  dateOFBirth = dateString ? new Date(dateString) : null;

  if (dateOFBirth) {
    const yearEl = document.getElementById("year");
    localStorage.setItem("year", dateOFBirth.getFullYear());
    localStorage.setItem("month", dateOFBirth.getMonth());
    localStorage.setItem("date", dateOFBirth.getDate());
  }
  contentToggler();
  setInterval(() => updateAge(), 1000);
};
localStorageGetter();
contentToggler();

setttingCogEl.addEventListener("click", toggleDateOFBithSelector);
dobButtonEl.addEventListener("click", toggleDateOFBithSelector);
