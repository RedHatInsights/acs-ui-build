"use strict";
(self["webpackChunkacs"] = self["webpackChunkacs"] || []).push([["NoPermissionsPage"],{

/***/ "./node_modules/@patternfly/react-icons/dist/esm/icons/lock-icon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/esm/icons/lock-icon.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockIconConfig": () => (/* binding */ LockIconConfig),
/* harmony export */   "LockIcon": () => (/* binding */ LockIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/esm/createIcon.js");


const LockIconConfig = {
  name: 'LockIcon',
  height: 512,
  width: 448,
  svgPath: 'M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z',
  yOffset: 0,
  xOffset: 0,
};

const LockIcon = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__.createIcon)(LockIconConfig);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockIcon);

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/icons/lock-icon.js");
/* harmony import */ var _NotAuthorized_NotAuthorized_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NotAuthorized/NotAuthorized.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.css");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var ContactBody = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
    "Contact your organization administrator(s) for more information or visit\u00A0",
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "./settings/my-user-access" }, "My User Access"),
    "\u00A0 to learn more about your permissions.")); };
var NotAuthorized = function (_a) {
    var _b = _a.prevPageButtonText, prevPageButtonText = _b === void 0 ? 'Return to previous page' : _b, _c = _a.toLandingPageText, toLandingPageText = _c === void 0 ? 'Go to landing page' : _c, title = _a.title, _d = _a.actions, actions = _d === void 0 ? null : _d, serviceName = _a.serviceName, _e = _a.icon, Icon = _e === void 0 ? _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.LockIcon : _e, _f = _a.description, description = _f === void 0 ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactBody, null) : _f, _g = _a.showReturnButton, showReturnButton = _g === void 0 ? true : _g, className = _a.className, props = __rest(_a, ["prevPageButtonText", "toLandingPageText", "title", "actions", "serviceName", "icon", "description", "showReturnButton", "className"]);
    var heading = title || "You do not have access to ".concat(serviceName);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, __assign({ variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.full, className: "ins-c-not-authorized ".concat(className || '') }, props),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, { icon: Icon }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { headingLevel: "h5", size: "lg" }, heading),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null, description),
        actions,
        showReturnButton &&
            (document.referrer ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", onClick: function () { return history.back(); } }, prevPageButtonText)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", component: "a", href: "." }, toLandingPageText)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotAuthorized);
//# sourceMappingURL=NotAuthorized.js.map

/***/ }),

/***/ "./src/routes/NoPermissionsPage/NoPermissionsPage.js":
/*!***********************************************************!*\
  !*** ./src/routes/NoPermissionsPage/NoPermissionsPage.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_NotAuthorized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/NotAuthorized */ "./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.js");





function NoPermissionsPage() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _insights, _insights$chrome, _insights$chrome$appA;

    (_insights = insights) === null || _insights === void 0 ? void 0 : (_insights$chrome = _insights.chrome) === null || _insights$chrome === void 0 ? void 0 : (_insights$chrome$appA = _insights$chrome.appAction) === null || _insights$chrome$appA === void 0 ? void 0 : _insights$chrome$appA.call(_insights$chrome, 'no-permissions');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_NotAuthorized__WEBPACK_IMPORTED_MODULE_3__["default"], {
    serviceName: "Sample app"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(NoPermissionsPage));

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/NotAuthorized/NotAuthorized.css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/NoPermissionsPage.2d7a957c0037007c9345c676616a4ffe.js.map