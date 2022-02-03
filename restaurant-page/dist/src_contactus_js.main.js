"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_contactus_js"],{

/***/ "./src/contactus.js":
/*!**************************!*\
  !*** ./src/contactus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactUsPage)
/* harmony export */ });
/* harmony import */ var _images_sebastian_coman_photography_eBmyH7oO5wY_unsplash2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sebastian-coman-photography-eBmyH7oO5wY-unsplash2.jpg */ "./src/images/sebastian-coman-photography-eBmyH7oO5wY-unsplash2.jpg");


const divContent = document.getElementById('content');

function createContactUsPage(){
    createContactContainer();
}

function createContactContainer(){
    const contactContainerDiv = document.createElement('div');

    const myContactImg = new Image();

    myContactImg.src = _images_sebastian_coman_photography_eBmyH7oO5wY_unsplash2_jpg__WEBPACK_IMPORTED_MODULE_0__;
    myContactImg.alt = "contact page image";
    myContactImg.id = 'contact-img';

    contactContainerDiv.appendChild(myContactImg);

    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.setAttribute('id','contact-info');

    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id','location');
    const telephoneDiv = document.createElement('div');
    telephoneDiv.setAttribute('id','telephone');


    const lh2 = document.createElement('h2');
    lh2.innerText = 'Location';
    lh2.setAttribute('class','contact-h2');
    locationDiv.appendChild(lh2);
    const lh3 = document.createElement('h3');
    lh3.setAttribute('class','contact-h3');
    lh3.innerText = '1735 Shinn Street New York';
    locationDiv.appendChild(lh3);

    const th2 = document.createElement('h2');
    th2.innerText = 'Telephone';
    th2.setAttribute('class','contact-h2');
    telephoneDiv.appendChild(th2);
    const th3 = document.createElement('h3');
    th3.setAttribute('class','contact-h3');
    th3.innerText = '219-999-999';
    telephoneDiv.appendChild(th3);

    contactInfoDiv.appendChild(locationDiv);
    contactInfoDiv.appendChild(telephoneDiv);

    contactContainerDiv.appendChild(contactInfoDiv);

    divContent.appendChild(contactContainerDiv);
}

/***/ }),

/***/ "./src/images/sebastian-coman-photography-eBmyH7oO5wY-unsplash2.jpg":
/*!**************************************************************************!*\
  !*** ./src/images/sebastian-coman-photography-eBmyH7oO5wY-unsplash2.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3ceafc9ca969c9dc087.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhY3R1c19qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdGOztBQUV4Rjs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsMEZBQVU7QUFDakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3R1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFjdEltZyBmcm9tICcuL2ltYWdlcy9zZWJhc3RpYW4tY29tYW4tcGhvdG9ncmFwaHktZUJteUg3b081d1ktdW5zcGxhc2gyLmpwZyc7XG5cbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0VXNQYWdlKCl7XG4gICAgY3JlYXRlQ29udGFjdENvbnRhaW5lcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGFpbmVyKCl7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbXlDb250YWN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBteUNvbnRhY3RJbWcuc3JjID0gY29udGFjdEltZztcbiAgICBteUNvbnRhY3RJbWcuYWx0ID0gXCJjb250YWN0IHBhZ2UgaW1hZ2VcIjtcbiAgICBteUNvbnRhY3RJbWcuaWQgPSAnY29udGFjdC1pbWcnO1xuXG4gICAgY29udGFjdENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChteUNvbnRhY3RJbWcpO1xuXG4gICAgY29uc3QgY29udGFjdEluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdC1pbmZvJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdsb2NhdGlvbicpO1xuICAgIGNvbnN0IHRlbGVwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbGVwaG9uZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywndGVsZXBob25lJyk7XG5cblxuICAgIGNvbnN0IGxoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGgyLmlubmVyVGV4dCA9ICdMb2NhdGlvbic7XG4gICAgbGgyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWN0LWgyJyk7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobGgyKTtcbiAgICBjb25zdCBsaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxoMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGFjdC1oMycpO1xuICAgIGxoMy5pbm5lclRleHQgPSAnMTczNSBTaGlubiBTdHJlZXQgTmV3IFlvcmsnO1xuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxoMyk7XG5cbiAgICBjb25zdCB0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRoMi5pbm5lclRleHQgPSAnVGVsZXBob25lJztcbiAgICB0aDIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbnRhY3QtaDInKTtcbiAgICB0ZWxlcGhvbmVEaXYuYXBwZW5kQ2hpbGQodGgyKTtcbiAgICBjb25zdCB0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRoMy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGFjdC1oMycpO1xuICAgIHRoMy5pbm5lclRleHQgPSAnMjE5LTk5OS05OTknO1xuICAgIHRlbGVwaG9uZURpdi5hcHBlbmRDaGlsZCh0aDMpO1xuXG4gICAgY29udGFjdEluZm9EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICAgIGNvbnRhY3RJbmZvRGl2LmFwcGVuZENoaWxkKHRlbGVwaG9uZURpdik7XG5cbiAgICBjb250YWN0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvRGl2KTtcblxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lckRpdik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9