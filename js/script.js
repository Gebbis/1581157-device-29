var productsSection = document.querySelector(".popular-products");
var products = productsSection.querySelectorAll(".product");
var sliderToggles = productsSection.querySelectorAll(".slider-toggle");

var changeSlider = function (sliderToggle, product) {
  sliderToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    var productActive = productsSection.querySelector(
      ".product.product-item-show"
    );
    var toggleActive = productsSection.querySelector(
      ".slider-toggle.slider-toggle-current"
    );
    toggleActive.classList.remove("slider-toggle-current");
    sliderToggle.classList.add("slider-toggle-current");
    productActive.classList.remove("product-item-show");
    product.classList.add("product-item-show");
  });
};

for (var i = 0; i < sliderToggles.length; i++) {
  if (sliderToggles.length === products.length) {
    changeSlider(sliderToggles[i], products[i]);
  } else {
    console.log("Разное количество кнопок и товаров в слайдере!");
  }
}

var ourTermsSection = document.querySelector(".our-terms");
var ourTermsButtons = ourTermsSection.querySelectorAll(".our-terms-button");
var offersInfo = ourTermsSection.querySelectorAll(".offer-info");

var changeOffers = function (ourTermsButton, offerInfo) {
  ourTermsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    var offerActive = ourTermsSection.querySelector(".offer-info-show");
    var ourTermsButtonActive = ourTermsSection.querySelector(
      ".our-terms-button-active"
    );
    offerActive.classList.remove("offer-info-show");
    offerInfo.classList.add("offer-info-show");
    ourTermsButtonActive.classList.remove("our-terms-button-active");
    ourTermsButton.classList.add("our-terms-button-active");
  });
};

for (var i = 0; i < ourTermsButtons.length; i++) {
  if (ourTermsButtons.length === offersInfo.length) {
    changeOffers(ourTermsButtons[i], offersInfo[i]);
  } else {
    console.log("Разное количество кнопок и сервисов в слайдере!");
  }
}

var contactsSection = document.querySelector(".contacts");
var mapButton = contactsSection.querySelector(".map-button");
var mapPopup = contactsSection.querySelector(".map-popup");
var mapClose = contactsSection.querySelector(".map-close-button");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

var writeUsButton = contactsSection.querySelector(".write-us-button");
var writeUsForm = contactsSection.querySelector(".write-us-form");
var writeUsClose = contactsSection.querySelector(".write-us-close-button");

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.add("write-us-form-show");
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.remove("write-us-form-show");
});
