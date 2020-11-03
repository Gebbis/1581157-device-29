var productsSection = document.querySelector(".popular-products");
var firstSliderToggle = productsSection.querySelector(".first-slider-toggle");
var secondSliderToggle = productsSection.querySelector(".second-slider-toggle");
var thirdSliderToggle = productsSection.querySelector(".third-slider-toggle");
var sliderToggle = productsSection.querySelector(".slider-toggle");
var products = productsSection.querySelectorAll(".product");
var firstItemCard = productsSection.querySelector(".first-item-card");
var secondItemCard = productsSection.querySelector(".second-item-card");
var thirdItemCard = productsSection.querySelector(".third-item-card");

var ourTermsSection = document.querySelector(".our-terms");
var offerInfo = ourTermsSection.querySelector(".offer-info");
var buttonDelivery = ourTermsSection.querySelector(
  ".our-terms-button-delivery"
);
var deliveryInfo = ourTermsSection.querySelector(".delivery-info");
var buttonWarranty = ourTermsSection.querySelector(
  ".our-terms-button-warranty"
);
var warrantyInfo = ourTermsSection.querySelector(".warranty-info");
var buttonCredit = ourTermsSection.querySelector(".our-terms-button-credit");
var creditInfo = ourTermsSection.querySelector(".credit-info");

var contactsSection = document.querySelector(".contacts");
var mapButton = contactsSection.querySelector(".map-button");
var mapPopup = contactsSection.querySelector(".map-popup");
var mapClose = contactsSection.querySelector(".map-close-button");

var writeUsButton = contactsSection.querySelector(".write-us-button");
var writeUsForm = contactsSection.querySelector(".write-us-form");
var writeUsClose = contactsSection.querySelector(".write-us-close-button");

firstSliderToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  var productActive = productsSection.querySelector(
    ".product.product-item-show"
  );
  var toggleActive = productsSection.querySelector(
    ".slider-toggle.slider-toggle-current"
  );
  toggleActive.classList.remove("slider-toggle-current");
  firstSliderToggle.classList.add("slider-toggle-current");
  productActive.classList.remove("product-item-show");
  firstItemCard.classList.add("product-item-show");
});

secondSliderToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  var productActive = productsSection.querySelector(
    ".product.product-item-show"
  );
  var toggleActive = productsSection.querySelector(
    ".slider-toggle.slider-toggle-current"
  );
  toggleActive.classList.remove("slider-toggle-current");
  secondSliderToggle.classList.add("slider-toggle-current");
  productActive.classList.remove("product-item-show");
  secondItemCard.classList.add("product-item-show");
});

thirdSliderToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  var productActive = productsSection.querySelector(
    ".product.product-item-show"
  );
  var toggleActive = productsSection.querySelector(
    ".slider-toggle.slider-toggle-current"
  );
  toggleActive.classList.remove("slider-toggle-current");
  thirdSliderToggle.classList.add("slider-toggle-current");
  productActive.classList.remove("product-item-show");
  thirdItemCard.classList.add("product-item-show");
});

buttonDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  var offerActive = ourTermsSection.querySelector(".offer-info-show");
  var ourTermsButtonActive = ourTermsSection.querySelector(
    ".our-terms-button-active"
  );
  offerActive.classList.remove("offer-info-show");
  deliveryInfo.classList.add("offer-info-show");
  ourTermsButtonActive.classList.remove("our-terms-button-active");
  buttonDelivery.classList.add("our-terms-button-active");
});

buttonWarranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  var offerActive = ourTermsSection.querySelector(".offer-info-show");
  var ourTermsButtonActive = ourTermsSection.querySelector(
    ".our-terms-button-active"
  );
  offerActive.classList.remove("offer-info-show");
  warrantyInfo.classList.add("offer-info-show");
  ourTermsButtonActive.classList.remove("our-terms-button-active");
  buttonWarranty.classList.add("our-terms-button-active");
});

buttonCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  var offerActive = ourTermsSection.querySelector(".offer-info-show");
  var ourTermsButtonActive = ourTermsSection.querySelector(
    ".our-terms-button-active"
  );
  offerActive.classList.remove("offer-info-show");
  creditInfo.classList.add("offer-info-show");
  ourTermsButtonActive.classList.remove("our-terms-button-active");
  buttonCredit.classList.add("our-terms-button-active");
});

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.add("write-us-form-show");
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.remove("write-us-form-show");
});
