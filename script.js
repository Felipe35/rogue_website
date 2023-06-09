"use strict";
const btnClose = document.querySelector(".btn_close");
const modalWindow = document.querySelector("#form");
const modalFakeWindow = document.querySelector(".contact-fake-widonw");
const btnOpen = document.querySelector(".contact-btn-open");
const btnSubmit = document.querySelector("#submit");

const closeWindow = function () {
  modalWindow.classList.add("hide");
  modalFakeWindow.classList.add("hide");
};

const openWindow = function () {
  modalFakeWindow.classList.remove("hide");
  modalWindow.classList.remove("hide");
};

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  closeWindow();
});

btnOpen.addEventListener("click", function (e) {
  e.preventDefault();
  openWindow();
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Thank You! for your Submition");
});
