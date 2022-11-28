"use strict";
(self["webpackChunkacs"] = self["webpackChunkacs"] || []).push([["OverviewPage"],{

/***/ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/createIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createIcon = exports.getSize = exports.IconSize = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react"));
var IconSize;
(function (IconSize) {
    IconSize["sm"] = "sm";
    IconSize["md"] = "md";
    IconSize["lg"] = "lg";
    IconSize["xl"] = "xl";
})(IconSize = exports.IconSize || (exports.IconSize = {}));
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
exports.getSize = getSize;
let currentId = 0;
/**
 * Factory to create Icon class components for consumers
 */
function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
    var _a;
    return _a = class SVGIcon extends React.Component {
            constructor() {
                super(...arguments);
                this.id = `icon-title-${currentId++}`;
            }
            render() {
                const _a = this.props, { size, color, title, noVerticalAlign } = _a, props = tslib_1.__rest(_a, ["size", "color", "title", "noVerticalAlign"]);
                const hasTitle = Boolean(title);
                const heightWidth = exports.getSize(size);
                const baseAlign = -0.125 * Number.parseFloat(heightWidth);
                const style = noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
                const viewBox = [xOffset, yOffset, width, height].join(' ');
                return (React.createElement("svg", Object.assign({ style: style, fill: color, height: heightWidth, width: heightWidth, viewBox: viewBox, "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img" }, props),
                    hasTitle && React.createElement("title", { id: this.id }, title),
                    React.createElement("path", { d: svgPath })));
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
exports.createIcon = createIcon;
//# sourceMappingURL=createIcon.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.ExternalLinkAltIconConfig = {
  name: 'ExternalLinkAltIcon',
  height: 512,
  width: 512,
  svgPath: 'M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z',
  yOffset: 0,
  xOffset: 0,
};
exports.ExternalLinkAltIcon = (__webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon)(exports.ExternalLinkAltIconConfig);
exports["default"] = exports.ExternalLinkAltIcon;

/***/ }),

/***/ "./src/routes/OverviewPage/OverviewPage.js":
/*!*************************************************!*\
  !*** ./src/routes/OverviewPage/OverviewPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/external-link-alt-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js");
/* harmony import */ var _assets_banner_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/banner_image.png */ "./src/assets/banner_image.png");





function OverviewPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSectionVariants.light,
    className: "pf-u-p-2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    span: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.h1
  }, "Get started with Red Hat Advanced Cluster Security Managed Service for Kubernetes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.p,
    className: "pf-u-color-200 pf-u-font-size-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, null, "Fully hosted and managed service for protecting cloud native applications and Kubernetes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextVariants.p
  }, "Red Hat\xAE Advanced Cluster Security for Kubernetes is the pioneering Kubernetes-native security platform, equipping organizations to more securely build, deploy, and run cloud-native applications anywhere. The solution helps improve the security of the application build process, protects the application platform and configurations, detects runtime issues, and facilitates response. Red Hat Advanced Cluster Security for Kubernetes lowers operational costs by reducing the learning curve for implementing Kubernetes security, provides built-in controls for enforcement to reduce operational risk, and uses a Kubernetes-native approach that supports built-in security across the entire software development life cycle, facilitating greater developer productivity.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    span: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_banner_image_png__WEBPACK_IMPORTED_MODULE_2__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    hasGutter: true,
    lg: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: "pf-u-h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardHeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    spacer: {
      "default": 'spacerSm'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: "h2"
  }, "Purchase now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    className: "pf-u-color-200"
  }, "(US and Canada only)")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, "Purchase a pay-as-you-go subscription for Managed vCPU units using one of our Marketplace options below"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.link,
    component: "a",
    target: "_blank",
    href: "https://aws.amazon.com/marketplace/pp/prodview-2i77ihj7rlgy6",
    isInline: true
  }, "AWS Marketplace", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "pf-u-ml-md",
    color: "currentColor",
    noVerticalAlign: false,
    size: "sm"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: "pf-u-h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardHeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    spacer: {
      "default": 'spacerSm'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: "h2"
  }, "Contact sales"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    className: "pf-u-color-200"
  }, "(Available for all regions)")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, "Contact sales to get a prepaid subscription that fits your needs. Sales can help set up a prepaid subscription, modify a current subscription or get a longer trial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.ButtonVariant.link,
    component: "a",
    target: "_blank",
    href: "https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter",
    isInline: true
  }, "Contact sales", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "pf-u-ml-md",
    color: "currentColor",
    noVerticalAlign: false,
    size: "sm"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.PageSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Card, {
    className: "pf-u-h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: "h2"
  }, "Pricing model"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    spaceItems: {
      "default": 'spaceItemsXl'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    alignSelf: {
      "default": 'alignSelfCenter'
    },
    flex: {
      "default": 'flex_1'
    },
    justifyContent: {
      "default": 'justifyContentCenter'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionList, {
    isHorizontal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "First 20 vCPU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, "Free")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Managed vCPU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, "$0.03 / hour"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    isVertical: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    flex: {
      "default": 'flex_1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
    component: "p"
  }, "A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "managed vCPU"), " means the number of vCPU measured on a managed cluster"))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewPage);

/***/ }),

/***/ "./src/assets/banner_image.png":
/*!*************************************!*\
  !*** ./src/assets/banner_image.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/banner_image.png";

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/OverviewPage.90db436902c690e06d1f74d4315e8d96.js.map