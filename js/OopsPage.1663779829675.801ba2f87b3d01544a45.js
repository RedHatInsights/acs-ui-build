(self["webpackChunkacs"] = self["webpackChunkacs"] || []).push([["OopsPage"],{

/***/ "./node_modules/@patternfly/react-icons/dist/esm/createIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/esm/createIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconSize": () => (/* binding */ IconSize),
/* harmony export */   "getSize": () => (/* binding */ getSize),
/* harmony export */   "createIcon": () => (/* binding */ createIcon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var IconSize;
(function (IconSize) {
    IconSize["sm"] = "sm";
    IconSize["md"] = "md";
    IconSize["lg"] = "lg";
    IconSize["xl"] = "xl";
})(IconSize || (IconSize = {}));
const getSize = (size) => {
    switch (size) {
        case IconSize.sm:
            return '1em';
        case IconSize.md:
            return '1.5em';
        case IconSize.lg:
            return '2em';
        case IconSize.xl:
            return '3em';
        default:
            return '1em';
    }
};
let currentId = 0;
/**
 * Factory to create Icon class components for consumers
 */
function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
    var _a;
    return _a = class SVGIcon extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
            constructor() {
                super(...arguments);
                this.id = `icon-title-${currentId++}`;
            }
            render() {
                const _a = this.props, { size, color, title, noVerticalAlign } = _a, props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["size", "color", "title", "noVerticalAlign"]);
                const hasTitle = Boolean(title);
                const heightWidth = getSize(size);
                const baseAlign = -0.125 * Number.parseFloat(heightWidth);
                const style = noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
                const viewBox = [xOffset, yOffset, width, height].join(' ');
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({ style: style, fill: color, height: heightWidth, width: heightWidth, viewBox: viewBox, "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img" }, props),
                    hasTitle && react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", { id: this.id }, title),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: svgPath })));
            }
        },
        _a.displayName = name,
        _a.defaultProps = {
            color: 'currentColor',
            size: IconSize.sm,
            noVerticalAlign: false
        },
        _a;
}
//# sourceMappingURL=createIcon.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExclamationCircleIconConfig": () => (/* binding */ ExclamationCircleIconConfig),
/* harmony export */   "ExclamationCircleIcon": () => (/* binding */ ExclamationCircleIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/esm/createIcon.js");


const ExclamationCircleIconConfig = {
  name: 'ExclamationCircleIcon',
  height: 512,
  width: 512,
  svgPath: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  yOffset: 0,
  xOffset: 0,
};

const ExclamationCircleIcon = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__.createIcon)(ExclamationCircleIconConfig);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExclamationCircleIcon);

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DarkContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext('light');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkContext);
//# sourceMappingURL=DarkContext.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternalMain": () => (/* binding */ InternalMain),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dark */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Dark/DarkContext.js");
/* harmony import */ var _Main_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main/main.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var toKebab = function (text) { return text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); };
var InternalMain = function (_a) {
    var path = _a.path, _b = _a.params, params = _b === void 0 ? {} : _b, children = _a.children, className = _a.className, props = __rest(_a, ["path", "params", "children", "className"]);
    var calculateLocation = function () {
        var _a, _b, _c;
        if ((_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.insights) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.$internal) === null || _c === void 0 ? void 0 : _c.store) {
            var chromeState = window.insights.chrome.$internal.store.getState();
            if (path && chromeState) {
                return path.split('/').reduce(function (acc, curr) {
                    var _a;
                    if (curr.indexOf(':') === 0) {
                        acc.dynamic = __assign(__assign({}, acc.dynamic), (_a = {}, _a["data-".concat(toKebab(curr.substr(1)))] = params[curr.substr(1)], _a));
                    }
                    else {
                        acc.staticPart = __spreadArray(__spreadArray([], acc.staticPart, true), (curr !== '' ? [curr] : []), true);
                    }
                    return acc;
                }, { staticPart: [chromeState.chrome.appId], dynamic: {} });
            }
        }
        return {
            staticPart: [],
            dynamic: undefined,
        };
    };
    var _c = calculateLocation(), dynamic = _c.dynamic, staticPart = _c.staticPart;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dark__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, null, function (theme) {
        var _a;
        if (theme === void 0) { theme = 'light'; }
        var themeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_a = {}, _a["pf-m-".concat(theme)] = theme === 'dark', _a));
        return {
            dark: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", __assign({}, props, dynamic, { "page-type": staticPart.join('-'), className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'pf-l-page__main-section pf-c-page__main-section'), " ").concat(themeClasses) }), react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
                return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
                    className: 'pf-m-dark',
                });
            }))),
            light: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", __assign({}, props, dynamic, { "page-type": staticPart.join('-'), className: "".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'pf-l-page__main-section pf-c-page__main-section')) }), children)),
        }[theme];
    }));
};
var mapStateToProps = function (_a) {
    var routerData = _a.routerData;
    return ({
        params: routerData && routerData.params,
        path: routerData && routerData.path,
    });
};
var Main = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, function () { return ({}); })(InternalMain);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
//# sourceMappingURL=Main.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js");
/* harmony import */ var _Unavailable_Unavailable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Unavailable/Unavailable.css */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.css");




var Unavailable = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyState, { variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateVariant.large, className: "ins-c-empty-state__unavailable pf-m-redhat-font" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateIcon, { icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircleIcon }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Title, { headingLevel: "h5", size: "lg" }, "This page is temporarily unavailable"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.EmptyStateBody, null,
            "Try refreshing the page. If the problem persists, contact your organization administrator or visit our",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://status.redhat.com/", target: "_blank", rel: "noopener noreferrer" },
                ' ',
                "status page"),
            ' ',
            "for known outages.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unavailable);
//# sourceMappingURL=Unavailable.js.map

/***/ }),

/***/ "./src/routes/OopsPage/OopsPage.js":
/*!*****************************************!*\
  !*** ./src/routes/OopsPage/OopsPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Unavailable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Unavailable */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.js");





function OopsPage() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _insights, _insights$chrome, _insights$chrome$appA;

    (_insights = insights) === null || _insights === void 0 ? void 0 : (_insights$chrome = _insights.chrome) === null || _insights$chrome === void 0 ? void 0 : (_insights$chrome$appA = _insights$chrome.appAction) === null || _insights$chrome$appA === void 0 ? void 0 : _insights$chrome$appA.call(_insights$chrome, 'oops-page');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Unavailable__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.withRouter)(OopsPage));

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Main/main.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components/esm/Unavailable/Unavailable.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/OopsPage.870c8e1e58b129dcb6d2f73e968f355f.js.map