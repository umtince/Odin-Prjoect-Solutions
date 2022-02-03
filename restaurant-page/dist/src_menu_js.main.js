"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _images_menu3_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu3.png */ "./src/images/menu3.png");


const divContent = document.getElementById('content');

function createMenuPage(){
    createMenuContainer();
}

function createMenuContainer(){

    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.setAttribute('id','menu-container');

    const myMenuImg = new Image();
    myMenuImg.src = _images_menu3_png__WEBPACK_IMPORTED_MODULE_0__;
    myMenuImg.alt = "menu";
    myMenuImg.setAttribute('id','menu-img');

    menuContainerDiv.appendChild(myMenuImg);

    divContent.appendChild(menuContainerDiv);
}

/***/ }),

/***/ "./src/images/menu3.png":
/*!******************************!*\
  !*** ./src/images/menu3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56e069068687a104f408.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21lbnVfanMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7QUFFeEM7O0FBRWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOENBQU07QUFDMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15TWVudSBmcm9tICcuL2ltYWdlcy9tZW51My5wbmcnO1xuXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKXtcbiAgICBjcmVhdGVNZW51Q29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250YWluZXIoKXtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbXlNZW51SW1nID0gbmV3IEltYWdlKCk7XG4gICAgbXlNZW51SW1nLnNyYyA9IG15TWVudTtcbiAgICBteU1lbnVJbWcuYWx0ID0gXCJtZW51XCI7XG4gICAgbXlNZW51SW1nLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51LWltZycpO1xuXG4gICAgbWVudUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChteU1lbnVJbWcpO1xuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyRGl2KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=