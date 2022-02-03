"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_homepage_js"],{

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _images_nagendra_ts_fLUD9E7_l20_unsplash5_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg */ "./src/images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg");


const divContent = document.getElementById('content');

function createHomePage(){
    createImgContainer();
}

function createImgContainer(){
    const divImgContainer = document.createElement('div');
    divImgContainer.setAttribute('id','img-container');

    const myBgImg = new Image();
    myBgImg.src = _images_nagendra_ts_fLUD9E7_l20_unsplash5_jpg__WEBPACK_IMPORTED_MODULE_0__;
    myBgImg.alt = "background image";

    divImgContainer.appendChild(myBgImg);

    const divMottoContainer = document.createElement('div');
    divMottoContainer.setAttribute('id','motto-container');

    const h2 = document.createElement('h2');
    h2.setAttribute('id','motto');
    h2.innerText = "Extraordinary tastes at extraordinary prices";

    divMottoContainer.appendChild(h2);

    divImgContainer.appendChild(divMottoContainer);

    divContent.appendChild(divImgContainer);
}

/***/ }),

/***/ "./src/images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg":
/*!**********************************************************!*\
  !*** ./src/images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de659837b9764c7c005a.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2hvbWVwYWdlX2pzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0U7O0FBRWxFOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMEVBQUs7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmdJbWcgZnJvbSAnLi9pbWFnZXMvbmFnZW5kcmEtdHMtZkxVRDlFNy1sMjAtdW5zcGxhc2g1LmpwZydcblxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCl7XG4gICAgY3JlYXRlSW1nQ29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZ0NvbnRhaW5lcigpe1xuICAgIGNvbnN0IGRpdkltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkltZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbXlCZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG15QmdJbWcuc3JjID0gYmdJbWc7XG4gICAgbXlCZ0ltZy5hbHQgPSBcImJhY2tncm91bmQgaW1hZ2VcIjtcblxuICAgIGRpdkltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChteUJnSW1nKTtcblxuICAgIGNvbnN0IGRpdk1vdHRvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TW90dG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ21vdHRvLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnNldEF0dHJpYnV0ZSgnaWQnLCdtb3R0bycpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiRXh0cmFvcmRpbmFyeSB0YXN0ZXMgYXQgZXh0cmFvcmRpbmFyeSBwcmljZXNcIjtcblxuICAgIGRpdk1vdHRvQ29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGRpdkltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZNb3R0b0NvbnRhaW5lcik7XG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGRpdkltZ0NvbnRhaW5lcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9