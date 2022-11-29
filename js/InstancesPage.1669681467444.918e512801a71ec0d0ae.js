(self["webpackChunkacs"] = self["webpackChunkacs"] || []).push([["InstancesPage"],{

/***/ "./src/components/BreadcrumbItemLink.js":
/*!**********************************************!*\
  !*** ./src/components/BreadcrumbItemLink.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);


var _excluded = ["children", "to"];

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */




function BreadcrumbItemLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  function render(_ref2) {
    var className = _ref2.className,
        ariaCurrent = _ref2.ariaCurrent;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      className: className,
      "aria-current": ariaCurrent,
      to: to
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    render: render
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadcrumbItemLink);

/***/ }),

/***/ "./src/components/InstanceDetailsList.js":
/*!***********************************************!*\
  !*** ./src/components/InstanceDetailsList.js ***!
  \***********************************************/
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
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var _utils_cloudProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/cloudProvider */ "./src/utils/cloudProvider.js");
/* harmony import */ var _utils_region__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/region */ "./src/utils/region.js");
/* eslint-disable react/prop-types */






function InstanceDetailsList(_ref) {
  var instance = _ref.instance;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionList, {
    isHorizontal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Cloud provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, (0,_utils_cloudProvider__WEBPACK_IMPORTED_MODULE_3__.cloudProviderValueToLabel)(instance.cloud_provider))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, (0,_utils_region__WEBPACK_IMPORTED_MODULE_4__.regionValueToLabel)(instance.region))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, instance.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, instance.owner)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Time created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.getDateTime)(instance.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Time updated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.getDateTime)(instance.updated_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Central API Endpoint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, instance.centralDataURL)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListTerm, null, "Central UI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.DescriptionListDescription, null, instance.centralUIURL)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceDetailsList);

/***/ }),

/***/ "./src/components/SelectSingle.js":
/*!****************************************!*\
  !*** ./src/components/SelectSingle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable react/prop-types */



function SelectSingle(_ref) {
  var toggleIcon = _ref.toggleIcon,
      id = _ref.id,
      value = _ref.value,
      handleSelect = _ref.handleSelect,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      children = _ref.children,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'down' : _ref$direction,
      _ref$isCreatable = _ref.isCreatable,
      isCreatable = _ref$isCreatable === void 0 ? false : _ref$isCreatable,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? null : _ref$variant,
      _ref$placeholderText = _ref.placeholderText,
      placeholderText = _ref$placeholderText === void 0 ? '' : _ref$placeholderText,
      _ref$menuAppendTo = _ref.menuAppendTo,
      menuAppendTo = _ref$menuAppendTo === void 0 ? '' : _ref$menuAppendTo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var isTypeahead = variant === 'typeahead' ? _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SelectVariant.typeahead : _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.SelectVariant.single;

  function onSelect(_event, selection) {
    // The mouse event is not useful.
    setIsOpen(false);
    handleSelect(id, selection);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Select, {
    variant: isTypeahead,
    toggleIcon: toggleIcon,
    id: id,
    isDisabled: isDisabled,
    isOpen: isOpen,
    onSelect: onSelect,
    onToggle: setIsOpen,
    selections: value,
    direction: direction,
    isCreatable: isCreatable,
    placeholderText: placeholderText,
    toggleId: id,
    menuAppendTo: menuAppendTo
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectSingle);

/***/ }),

/***/ "./src/components/Status.js":
/*!**********************************!*\
  !*** ./src/components/Status.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_pending_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/pending-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/pending-icon.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/status */ "./src/utils/status.js");
/* eslint-disable react/prop-types */






var statusMessages = {
  accepted: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.accepted,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_pending_icon__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  },
  preparing: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.preparing,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_pending_icon__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  },
  provisioning: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.provisioning,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
      isSVG: true,
      size: "md"
    })
  },
  ready: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.ready,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "pf-u-success-color-100"
    })
  },
  failed: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.failed,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "pf-u-danger-color-100"
    })
  },
  deprovision: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.deprovision,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
      isSVG: true,
      size: "md"
    })
  },
  deleting: {
    message: _utils_status__WEBPACK_IMPORTED_MODULE_2__.statuses.deleting,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
      isSVG: true,
      size: "md"
    })
  }
};

function Status(_ref) {
  var status = _ref.status;

  var _ref2 = statusMessages[status] || {
    message: 'N/A',
    component: null
  },
      message = _ref2.message,
      component = _ref2.component;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, component), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, message));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Status);

/***/ }),

/***/ "./src/hooks/apis/useCloudAccounts.js":
/*!********************************************!*\
  !*** ./src/hooks/apis/useCloudAccounts.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryKey": () => (/* binding */ queryKey),
/* harmony export */   "default": () => (/* binding */ useCloudAccounts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apiRequest */ "./src/services/apiRequest.js");




var queryKey = 'cloud_accounts';

var getCloudAccounts = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var _yield$apiRequest$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/rhacs/v1/cloud_accounts");

          case 2:
            _yield$apiRequest$get = _context.sent;
            data = _yield$apiRequest$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCloudAccounts() {
    return _ref.apply(this, arguments);
  };
}();

function useCloudAccounts() {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([queryKey], function () {
    return getCloudAccounts();
  });
}

/***/ }),

/***/ "./src/hooks/apis/useCreateInstance.js":
/*!*********************************************!*\
  !*** ./src/hooks/apis/useCreateInstance.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCreateInstance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apiRequest */ "./src/services/apiRequest.js");





var postInstance = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(postData) {
    var _yield$apiRequest$pos, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/rhacs/v1/centrals?async=true', postData);

          case 2:
            _yield$apiRequest$pos = _context.sent;
            data = _yield$apiRequest$pos.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postInstance(_x) {
    return _ref.apply(this, arguments);
  };
}();

function useCreateInstance() {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(postInstance, {
    onSuccess: function onSuccess() {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    }
  });
}

/***/ }),

/***/ "./src/hooks/apis/useDeleteInstance.js":
/*!*********************************************!*\
  !*** ./src/hooks/apis/useDeleteInstance.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDeleteInstance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apiRequest */ "./src/services/apiRequest.js");





var deleteInstance = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(instanceID) {
    var _yield$apiRequest$del, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"]("/api/rhacs/v1/centrals/".concat(instanceID, "?async=true"));

          case 2:
            _yield$apiRequest$del = _context.sent;
            data = _yield$apiRequest$del.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteInstance(_x) {
    return _ref.apply(this, arguments);
  };
}();

function useDeleteInstance() {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(deleteInstance, {
    onSuccess: function onSuccess() {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    }
  });
}

/***/ }),

/***/ "./src/hooks/apis/useInstance.js":
/*!***************************************!*\
  !*** ./src/hooks/apis/useInstance.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useInstance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apiRequest */ "./src/services/apiRequest.js");





var getInstanceById = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(instanceId) {
    var _yield$apiRequest$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/rhacs/v1/centrals/".concat(instanceId));

          case 2:
            _yield$apiRequest$get = _context.sent;
            data = _yield$apiRequest$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInstanceById(_x) {
    return _ref.apply(this, arguments);
  };
}();

function useInstance(instanceId) {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(['instance', instanceId], function () {
    return getInstanceById(instanceId);
  });
}

/***/ }),

/***/ "./src/hooks/apis/useInstances.js":
/*!****************************************!*\
  !*** ./src/hooks/apis/useInstances.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useInstances)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/apiRequest */ "./src/services/apiRequest.js");
/* harmony import */ var _utils_queryString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/queryString */ "./src/utils/queryString.js");






var getInstances = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
    var query, queryString, _yield$apiRequest$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            queryString = (0,_utils_queryString__WEBPACK_IMPORTED_MODULE_4__.getQueryString)(query);
            _context.next = 4;
            return _services_apiRequest__WEBPACK_IMPORTED_MODULE_3__["default"].get("/api/rhacs/v1/centrals?".concat(queryString));

          case 4:
            _yield$apiRequest$get = _context.sent;
            data = _yield$apiRequest$get.data;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInstances(_x) {
    return _ref2.apply(this, arguments);
  };
}();

function useInstances(options) {
  var refetchInterval = options.refetchInterval;
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(['instances', options], function () {
    return getInstances(options);
  }, {
    refetchInterval: refetchInterval
  });
}

/***/ }),

/***/ "./src/hooks/usePagination.js":
/*!************************************!*\
  !*** ./src/hooks/usePagination.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function usePagination() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      perPage = _useState4[0],
      setPerPage = _useState4[1];

  function onSetPage(_, newPage) {
    setPage(newPage);
  }

  function onPerPageSelect(_, newPerPage) {
    setPerPage(newPerPage);
  }

  return {
    page: page,
    perPage: perPage,
    onSetPage: onSetPage,
    onPerPageSelect: onPerPageSelect
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePagination);

/***/ }),

/***/ "./src/hooks/useTableSort.js":
/*!***********************************!*\
  !*** ./src/hooks/useTableSort.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function useTableSort(_ref) {
  var sortFields = _ref.sortFields,
      defaultSortOption = _ref.defaultSortOption;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      sortOption = _useState2[0],
      setSortOption = _useState2[1];

  var activeSortField = (sortOption === null || sortOption === void 0 ? void 0 : sortOption.field) || defaultSortOption.field;
  var activeSortDirection = (sortOption === null || sortOption === void 0 ? void 0 : sortOption.direction) || defaultSortOption.direction; // we'll use this to map the sort fields to an id PatternFly can use internally

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      fieldToIdMap = _useState4[0],
      setFieldToIdMap = _useState4[1]; // we'll construct a map of sort fields to ids that will make it easier to work with
  // PatternFly


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var newFieldToIdMap = sortFields.reduce(function (acc, curr, index) {
      acc[curr] = index;
      return acc;
    }, {});
    setFieldToIdMap(newFieldToIdMap);
  }, [sortFields]);

  function getSortParams(field) {
    var fieldId = fieldToIdMap[field];
    var activeSortId = activeSortField ? fieldToIdMap[activeSortField] : undefined;
    return {
      sortBy: {
        index: activeSortId,
        direction: activeSortDirection,
        defaultDirection: 'desc'
      },
      onSort: function onSort(_event, _index, direction) {
        // modify the URL based on the new sort
        var newSortOption = {
          field: field,
          direction: direction
        };
        setSortOption(newSortOption);
      },
      columnIndex: fieldId
    };
  }

  return {
    sortOption: {
      field: activeSortField,
      direction: activeSortDirection
    },
    getSortParams: getSortParams
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTableSort);

/***/ }),

/***/ "./src/routes/InstanceDetailsPage/InstanceDetailsPage.js":
/*!***************************************************************!*\
  !*** ./src/routes/InstanceDetailsPage/InstanceDetailsPage.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BreadcrumbItemLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BreadcrumbItemLink */ "./src/components/BreadcrumbItemLink.js");
/* harmony import */ var _hooks_apis_useInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/apis/useInstance */ "./src/hooks/apis/useInstance.js");
/* harmony import */ var _components_InstanceDetailsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/InstanceDetailsList */ "./src/components/InstanceDetailsList.js");









function InstanceDetailsPage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
      instanceId = _useParams.instanceId;

  var _useInstance = (0,_hooks_apis_useInstance__WEBPACK_IMPORTED_MODULE_4__["default"])(instanceId),
      instance = _useInstance.data,
      isFetching = _useInstance.isFetching;

  if (isFetching) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Spinner, null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: {
      "default": 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BreadcrumbItemLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/instances"
  }, "ACS instances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem, {
    isActive: true
  }, instance.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: instance.name
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "pf-u-p-0 pf-m-fill pf-m-overflow-scroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.PageSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    alignItems: {
      "default": 'alignItemsStretch'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    flex: {
      "default": 'flex_1'
    },
    alignSelf: {
      "default": 'alignSelfStretch'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: "pf-u-h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardTitle, null, "ACS Instance Access"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: {
      "default": 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, "Get started by signing in to your ACS instance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ButtonVariant.primary,
    component: "a",
    href: instance.centralUIURL,
    target: "_blank"
  }, "Open ACS Console")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    flex: {
      "default": 'flex_1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardHeaderMain, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardTitle, null, "Instance Details"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InstanceDetailsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    instance: instance
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.PageSection, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.PageSectionVariants.light,
    isFilled: true,
    hasOverflowScroll: true,
    isWidthLimited: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
    headingLevel: "h2"
  }, "Use Red Hat ACS to secure your clusters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: "marketing-video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "https://www.youtube.com/embed/lFBFW3HmgsA",
    title: "Advanced Cluster Security in 2 Minutes",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
    md: 5,
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.List, {
    isPlain: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    isInline: true,
    component: "a",
    href: "https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security",
    target: "_blank"
  }, "Getting Started Guide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "link",
    isInline: true,
    component: "a",
    href: "https://docs.openshift.com/acs/3.71/welcome/index.html",
    target: "_blank"
  }, "Product Configuration"))))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceDetailsPage);

/***/ }),

/***/ "./src/routes/InstancesPage/CreateInstanceModal.js":
/*!*********************************************************!*\
  !*** ./src/routes/InstancesPage/CreateInstanceModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_region__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/region */ "./src/utils/region.js");
/* harmony import */ var _components_SelectSingle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SelectSingle */ "./src/components/SelectSingle.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable react/prop-types */




var defaultFormValues = {
  name: '',
  cloud_provider: 'aws',
  region: 'us-east-1',
  availabilityZones: 'multi',
  cloud_account_id: ''
};

function CreateInstanceModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onRequestCreate = _ref.onRequestCreate,
      cloudAccountIds = _ref.cloudAccountIds;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultFormValues),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      formValues = _useState4[0],
      setFormValues = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      isRequestingCreate = _useState6[0],
      setIsRequestingCreate = _useState6[1]; // default select a cloud account if there is only one available
  // @TODO: Make a test for this


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (formValues.cloud_account_id === '' && cloudAccountIds.length === 1) {
      setFormValues(function (prevValues) {
        return _objectSpread(_objectSpread({}, prevValues), {}, {
          cloud_account_id: cloudAccountIds[0]
        });
      });
    }
  }, [cloudAccountIds]);

  function onCloseHandler() {
    // clear all state before closing
    setErrorMessage(null);
    setFormValues(defaultFormValues);
    setIsRequestingCreate(false);
    onClose();
  }

  function onRequestCreateHandler() {
    return _onRequestCreateHandler.apply(this, arguments);
  }

  function _onRequestCreateHandler() {
    _onRequestCreateHandler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var result, _errorMessage;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsRequestingCreate(true);
              _context.next = 3;
              return onRequestCreate(formValues);

            case 3:
              result = _context.sent;
              setIsRequestingCreate(false);

              if (result instanceof Error) {
                _errorMessage = result.response.data.reason;
                setErrorMessage(_errorMessage);
              } else {
                setFormValues(defaultFormValues);
                onClose();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onRequestCreateHandler.apply(this, arguments);
  }

  function onChangeAvailabilityZones(isSelected, event) {
    var id = event.currentTarget.id;
    setFormValues(function (prevFormValues) {
      return _objectSpread(_objectSpread({}, prevFormValues), {}, {
        availabilityZones: id
      });
    });
  }

  function onCloudRegionSelect(id, selection) {
    setFormValues(function (prevFormValues) {
      return _objectSpread(_objectSpread({}, prevFormValues), {}, {
        region: selection
      });
    });
  }

  function onChangeAWSAccountNumber(id, selection) {
    setFormValues(function (prevFormValues) {
      return _objectSpread(_objectSpread({}, prevFormValues), {}, {
        cloud_account_id: selection
      });
    });
  }

  function onNameChange(value) {
    setFormValues(function (prevFormValues) {
      return _objectSpread(_objectSpread({}, prevFormValues), {}, {
        name: value
      });
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ModalVariant.small,
    title: "Create ACS instance",
    isOpen: isOpen,
    onClose: onCloseHandler,
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: "createInstance",
      variant: "primary",
      onClick: onRequestCreateHandler,
      isLoading: isRequestingCreate,
      isDisabled: isRequestingCreate || !(formValues !== null && formValues !== void 0 && formValues.name)
    }, "Create instance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: "cancel",
      variant: "link",
      onClick: onCloseHandler,
      isDisabled: isRequestingCreate
    }, "Cancel")]
  }, errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "pf-u-mb-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Alert, {
    variant: "danger",
    title: errorMessage
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    label: "Name",
    isRequired: true,
    fieldId: "name",
    helperText: "Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
    isRequired: true,
    type: "text",
    id: "name",
    name: "name",
    value: formValues.name,
    onChange: onNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    label: "Cloud provider",
    isRequired: true,
    fieldId: "cloud_provider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Tile, {
    title: "Amazon Web Services",
    isSelected: formValues.cloud_provider === 'aws'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    label: "AWS account number",
    fieldId: "cloud_account_id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_SelectSingle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "cloud_account_id",
    value: formValues.cloud_account_id,
    handleSelect: onChangeAWSAccountNumber,
    placeholderText: cloudAccountIds.length === 0 ? 'No accounts available' : 'Select an AWS Account',
    menuAppendTo: "parent",
    isDisabled: cloudAccountIds.length === 0
  }, cloudAccountIds.map(function (cloudAccountId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
      key: cloudAccountId,
      value: cloudAccountId
    }, cloudAccountId);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    label: "Cloud region",
    isRequired: true,
    fieldId: "region"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_SelectSingle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "region",
    value: formValues.region,
    handleSelect: onCloudRegionSelect
  }, _utils_region__WEBPACK_IMPORTED_MODULE_6__.regionOptions.map(function (region) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
      key: region.value,
      value: region.value
    }, region.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.FormGroup, {
    label: "Availability zones",
    isRequired: true,
    fieldId: "availabilityZones"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToggleGroup, {
    "aria-label": "Availability Zones"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToggleGroupItem, {
    text: "Single",
    buttonId: "single",
    isSelected: formValues.availabilityZones === 'single',
    onChange: onChangeAvailabilityZones,
    isDisabled: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToggleGroupItem, {
    text: "Multi",
    buttonId: "multi",
    isSelected: formValues.availabilityZones === 'multi',
    onChange: onChangeAvailabilityZones
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateInstanceModal);

/***/ }),

/***/ "./src/routes/InstancesPage/DeleteInstanceModal.js":
/*!*********************************************************!*\
  !*** ./src/routes/InstancesPage/DeleteInstanceModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




/* eslint-disable react/prop-types */



function DeleteInstanceModal(_ref) {
  var isOpen = _ref.isOpen,
      instance = _ref.instance,
      onRequestDelete = _ref.onRequestDelete,
      onClose = _ref.onClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      isRequestingDelete = _useState4[0],
      setIsRequestingDelete = _useState4[1];

  function onRequestDeleteHandler() {
    return _onRequestDeleteHandler.apply(this, arguments);
  }

  function _onRequestDeleteHandler() {
    _onRequestDeleteHandler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsRequestingDelete(true);
              _context.next = 3;
              return onRequestDelete(instance.id);

            case 3:
              result = _context.sent;
              setIsRequestingDelete(false);

              if (result.error) {// Do something
              } else {
                setInputValue('');
                onClose();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onRequestDeleteHandler.apply(this, arguments);
  }

  function deleteInstanceOnSubmit(e) {
    e.preventDefault();

    if (inputMatchesInstanceName()) {
      onRequestDeleteHandler();
    }
  }

  function inputMatchesInstanceName() {
    return instance.name === inputValue;
  }

  if (!instance) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.ModalVariant.small,
    title: "Delete instance?",
    isOpen: isOpen,
    onClose: onClose,
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: "createInstance",
      variant: "danger",
      onClick: onRequestDeleteHandler,
      isLoading: isRequestingDelete,
      isDisabled: isRequestingDelete || !inputMatchesInstanceName()
    }, "Delete instance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: "cancel",
      variant: "link",
      onClick: onClose,
      isDisabled: isRequestingDelete
    }, "Cancel")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "pf-u-pb-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, "This will permanently delete", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "pf-u-font-weight-bold"
  }, instance.name), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null, "This action cannot be undone.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.Form, {
    onSubmit: deleteInstanceOnSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
    label: "Confirmation",
    isRequired: true,
    fieldId: "confirmationInstanceName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    isRequired: true,
    type: "text",
    id: "confirmationInstanceName",
    name: "confirmationInstanceName",
    value: inputValue,
    onChange: setInputValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.HelperText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__.HelperTextItem, null, "Type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "pf-u-font-weight-bold"
  }, instance.name), ' ', "to confirm."))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteInstanceModal);

/***/ }),

/***/ "./src/routes/InstancesPage/InstanceDetailsDrawer.js":
/*!***********************************************************!*\
  !*** ./src/routes/InstancesPage/InstanceDetailsDrawer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InstanceDetailsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/InstanceDetailsList */ "./src/components/InstanceDetailsList.js");
/* eslint-disable react/prop-types */




function InstanceDetailsDrawer(_ref) {
  var isExpanded = _ref.isExpanded,
      onClose = _ref.onClose,
      instance = _ref.instance,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Drawer, {
    isExpanded: isExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerContent, {
    panelContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerPanelContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, {
      component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextVariants.small
    }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Text, {
      component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.TextVariants.h2
    }, instance === null || instance === void 0 ? void 0 : instance.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerCloseButton, {
      onClick: onClose
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.Divider, {
      component: "div"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_0__.DrawerContentBody, null, instance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_InstanceDetailsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      instance: instance
    })))
  }, children));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstanceDetailsDrawer);

/***/ }),

/***/ "./src/routes/InstancesPage/InstancesPage.js":
/*!***************************************************!*\
  !*** ./src/routes/InstancesPage/InstancesPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_cubes_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/cubes-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/cubes-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/search-icon.js");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/usePagination */ "./src/hooks/usePagination.js");
/* harmony import */ var _hooks_apis_useInstances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/apis/useInstances */ "./src/hooks/apis/useInstances.js");
/* harmony import */ var _hooks_apis_useCreateInstance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/apis/useCreateInstance */ "./src/hooks/apis/useCreateInstance.js");
/* harmony import */ var _hooks_apis_useDeleteInstance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/apis/useDeleteInstance */ "./src/hooks/apis/useDeleteInstance.js");
/* harmony import */ var _hooks_apis_useCloudAccounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/apis/useCloudAccounts */ "./src/hooks/apis/useCloudAccounts.js");
/* harmony import */ var _CreateInstanceModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateInstanceModal */ "./src/routes/InstancesPage/CreateInstanceModal.js");
/* harmony import */ var _DeleteInstanceModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DeleteInstanceModal */ "./src/routes/InstancesPage/DeleteInstanceModal.js");
/* harmony import */ var _InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InstanceDetailsDrawer */ "./src/routes/InstancesPage/InstanceDetailsDrawer.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/date */ "./src/utils/date.js");
/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Status */ "./src/components/Status.js");
/* harmony import */ var _InstancesToolbarSearchFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./InstancesToolbarSearchFilter */ "./src/routes/InstancesPage/InstancesToolbarSearchFilter.js");
/* harmony import */ var _hooks_useTableSort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useTableSort */ "./src/hooks/useTableSort.js");
/* harmony import */ var _utils_region__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/region */ "./src/utils/region.js");
/* harmony import */ var _utils_cloudProvider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/cloudProvider */ "./src/utils/cloudProvider.js");
/* harmony import */ var _utils_searchQuery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/searchQuery */ "./src/utils/searchQuery.js");

























var sortFields = ['name', 'cloud_provider', 'region', 'owner', 'status', 'created_at'];
var defaultSortOption = {
  field: 'name',
  direction: 'asc'
};
/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

function InstancesPage() {
  var _cloudAccountsData$cl;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

  var _usePagination = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      page = _usePagination.page,
      perPage = _usePagination.perPage,
      onSetPage = _usePagination.onSetPage,
      onPerPageSelect = _usePagination.onPerPageSelect;

  var _useTableSort = (0,_hooks_useTableSort__WEBPACK_IMPORTED_MODULE_17__["default"])({
    sortFields: sortFields,
    defaultSortOption: defaultSortOption
  }),
      sortOption = _useTableSort.sortOption,
      getSortParams = _useTableSort.getSortParams;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      filters = _useState2[0],
      setFilters = _useState2[1];

  var _useCloudAccounts = (0,_hooks_apis_useCloudAccounts__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      cloudAccountsData = _useCloudAccounts.data;

  var cloudAccountIds = (cloudAccountsData === null || cloudAccountsData === void 0 ? void 0 : (_cloudAccountsData$cl = cloudAccountsData.cloudAccounts) === null || _cloudAccountsData$cl === void 0 ? void 0 : _cloudAccountsData$cl.map(function (cloudAccount) {
    return cloudAccount.cloudAccountId;
  })) || [];

  var _useInstances = (0,_hooks_apis_useInstances__WEBPACK_IMPORTED_MODULE_7__["default"])({
    query: {
      page: page,
      size: perPage,
      orderBy: "".concat(sortOption.field, " ").concat(sortOption.direction),
      search: (0,_utils_searchQuery__WEBPACK_IMPORTED_MODULE_20__.filtersToSearchQuery)(filters)
    },
    // Refetch the data every 10 seconds
    refetchInterval: 10000
  }),
      data = _useInstances.data,
      isFetching = _useInstances.isFetching;

  var createInstance = (0,_hooks_apis_useCreateInstance__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var deleteInstance = (0,_hooks_apis_useDeleteInstance__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      creatingInstance = _useState4[0],
      setCreatingInstance = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      deletingInstance = _useState6[0],
      setDeletingInstance = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      viewingInstance = _useState8[0],
      setViewingInstance = _useState8[1];

  var instances = (data === null || data === void 0 ? void 0 : data.items) || [];
  var isTableLoading = isFetching && !data;
  var content = null;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _insights, _insights$chrome, _insights$chrome$appA;

    (_insights = insights) === null || _insights === void 0 ? void 0 : (_insights$chrome = _insights.chrome) === null || _insights$chrome === void 0 ? void 0 : (_insights$chrome$appA = _insights$chrome.appAction) === null || _insights$chrome$appA === void 0 ? void 0 : _insights$chrome$appA.call(_insights$chrome, 'instances-page');
  }, []);

  function onRequestCreate(values) {
    var response = createInstance.mutateAsync({
      region: values.region,
      cloud_provider: values.cloud_provider,
      name: values.name,
      multi_az: values.availabilityZones === 'multi',
      cloud_account_id: values.cloud_account_id
    });
    return response["catch"](function (error) {
      return error;
    });
  }

  function closeCreateInstanceModal() {
    setCreatingInstance(null);
  }

  function onRequestDelete(instanceID) {
    var response = deleteInstance.mutateAsync(instanceID);
    return response["catch"](function (error) {
      return error;
    });
  }

  function closeDeleteInstanceModal() {
    setDeletingInstance(null);
  }

  function closeInstanceDetailsDrawer() {
    setViewingInstance(null);
  }

  function onClearFilters() {
    setFilters({});
  }

  if (instances.length === 0 && Object.keys(filters).length === 0) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStateIcon, {
      icon: _patternfly_react_icons_dist_js_icons_cubes_icon__WEBPACK_IMPORTED_MODULE_21__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, {
      size: "lg",
      headingLevel: "h4"
    }, "No ACS instances."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStateBody, null, "Create one to get started."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStatePrimary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "primary",
      onClick: function onClick() {
        return setCreatingInstance({});
      }
    }, "Create ACS instance")));
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
      clearAllFilters: onClearFilters
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InstancesToolbarSearchFilter__WEBPACK_IMPORTED_MODULE_16__["default"], {
      filters: filters,
      setFilters: setFilters
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "primary",
      onClick: function onClick() {
        return setCreatingInstance({});
      }
    }, "Create ACS instance")), instances.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarItem, {
      variant: "pagination",
      align: {
        "default": 'alignRight'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
      itemCount: instances.length,
      perPage: perPage,
      page: page,
      onSetPage: onSetPage,
      widgetId: "acs-instances-top-pagination",
      onPerPageSelect: onPerPageSelect,
      isCompact: true
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.TableComposable, {
      "aria-label": "ACS instances table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Thead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('name')
    }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('cloud_provider')
    }, "Cloud provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('region')
    }, "Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('owner')
    }, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('status')
    }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, {
      sort: getSortParams('created_at')
    }, "Time created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Th, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tbody, null, isTableLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
      colSpan: 8
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Spinner, null)))), !isTableLoading && instances.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
      colSpan: 8
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyState, {
      variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStateVariant.small
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStateIcon, {
      icon: _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_22__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Title, {
      headingLevel: "h2",
      size: "lg"
    }, "No results found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.EmptyStateBody, null, "Clear all filters and try again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "link",
      onClick: onClearFilters
    }, "Clear all filters"))))), !isTableLoading && instances.length !== 0 && instances.map(function (instance) {
      var instanceDetailsURL = "/instances/instance/".concat(instance.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Tr, {
        key: instance.name,
        onRowClick: function onRowClick(event) {
          if (event.target.getAttribute('type') !== 'button' && instance.status === 'ready') {
            setViewingInstance(instance);
          }
        },
        isRowSelected: (viewingInstance === null || viewingInstance === void 0 ? void 0 : viewingInstance.name) === (instance === null || instance === void 0 ? void 0 : instance.name)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "link",
        isInline: true,
        isDisabled: instance.status !== 'ready',
        component: function component(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
            to: instanceDetailsURL
          }));
        }
      }, instance.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Cloud provider"
      }, (0,_utils_cloudProvider__WEBPACK_IMPORTED_MODULE_19__.cloudProviderValueToLabel)(instance.cloud_provider)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Region"
      }, (0,_utils_region__WEBPACK_IMPORTED_MODULE_18__.regionValueToLabel)(instance.region)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Owner"
      }, instance.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Status__WEBPACK_IMPORTED_MODULE_15__["default"], {
        status: instance.status
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        dataLabel: "Time created"
      }, (0,_utils_date__WEBPACK_IMPORTED_MODULE_14__.getDateTimeDifference)(instance.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.Td, {
        isActionCell: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_5__.ActionsColumn, {
        items: [{
          title: 'Details',
          onClick: function onClick(event) {
            event.preventDefault();
            history.push(instanceDetailsURL);
          }
        }, {
          title: 'Delete',
          onClick: function onClick(event) {
            event.preventDefault();
            setDeletingInstance(instance);
          }
        }]
      })));
    }))), instances.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.ToolbarItem, {
      variant: "pagination",
      align: {
        "default": 'alignRight'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
      itemCount: instances.length,
      perPage: perPage,
      page: page,
      onSetPage: onSetPage,
      widgetId: "acs-instances-top-pagination",
      onPerPageSelect: onPerPageSelect
    })))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InstanceDetailsDrawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isExpanded: !!viewingInstance,
    instance: viewingInstance,
    onClose: closeInstanceDetailsDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_24__["default"], {
    title: "ACS Instances"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__.Card, null, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CreateInstanceModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: !!creatingInstance,
    onClose: closeCreateInstanceModal,
    onRequestCreate: onRequestCreate,
    cloudAccountIds: cloudAccountIds
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_DeleteInstanceModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    instance: deletingInstance,
    isOpen: !!deletingInstance,
    onClose: closeDeleteInstanceModal,
    onRequestDelete: onRequestDelete
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(InstancesPage));

/***/ }),

/***/ "./src/routes/InstancesPage/InstancesToolbarSearchFilter.js":
/*!******************************************************************!*\
  !*** ./src/routes/InstancesPage/InstancesToolbarSearchFilter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "webpack/sharing/consume/default/@patternfly/react-core/@patternfly/react-core?c1f1");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_filter_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/filter-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/filter-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/search-icon.js");
/* harmony import */ var _utils_region__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/region */ "./src/utils/region.js");
/* harmony import */ var _utils_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/status */ "./src/utils/status.js");
/* harmony import */ var _components_SelectSingle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SelectSingle */ "./src/components/SelectSingle.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










function InstancesToolbarSearchFilter(_ref) {
  var filters = _ref.filters,
      setFilters = _ref.setFilters;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('Name'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      selectedFilter = _useState2[0],
      setSelectedFilter = _useState2[1]; // local state for input values


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inputName = _useState4[0],
      setInputName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      inputOwner = _useState6[0],
      setInputOwner = _useState6[1]; // local state for Select isExpanded values
  // @TODO: We can refactor the SelectSingle component to be more reusable for the usecase in this component as well. Then we don't need to keep this state here.


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      isRegionExpanded = _useState8[0],
      setIsRegionExpanded = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      isStatusExpanded = _useState10[0],
      setIsStatusExpanded = _useState10[1]; // TODO: Extract into separate utils file to be reused in other cases


  function onDeleteChip() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    setFilters(function (prevFilters) {
      var newFilters = _objectSpread({}, prevFilters);

      var newValue = newFilters[type.toLowerCase()].filter(function (s) {
        return s !== id;
      });

      if ((newValue === null || newValue === void 0 ? void 0 : newValue.length) === 0) {
        delete newFilters[type.toLowerCase()];
      } else {
        newFilters[type.toLowerCase()] = newValue;
      }

      return newFilters;
    });
  } // TODO: Extract into separate utils file to be reused in other cases


  function onDeleteChipGroup(type) {
    setFilters(function (prevFilters) {
      var newFilters = _objectSpread({}, prevFilters);

      delete newFilters[type.toLowerCase()];
      return newFilters;
    });
  } // TODO: Extract into separate utils file to be reused in other cases


  function onSelect(type, event, selection) {
    var checked = event.target.checked;
    setFilters(function (prevFilters) {
      var newFilters = _objectSpread({}, prevFilters);

      var prevSelections = prevFilters[type] || [];
      var newValue = checked ? [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevSelections), [selection]) : prevSelections.filter(function (value) {
        return value !== selection;
      });

      if (newValue.length === 0) {
        delete newFilters[type];
      } else {
        newFilters[type] = newValue;
      }

      return newFilters;
    });
  }

  function onRegionSelect(event, selection) {
    onSelect('region', event, selection);
  }

  function onStatusSelect(event, selection) {
    onSelect('status', event, selection);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarToggleGroup, {
    toggleIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_js_icons_filter_icon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    breakpoint: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, {
    variant: "filter-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_SelectSingle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "region",
    value: selectedFilter,
    handleSelect: function handleSelect(_, selection) {
      setSelectedFilter(selection);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
    value: "Name"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
    value: "Region"
  }, "Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
    value: "Owner"
  }, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
    value: "Status"
  }, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarFilter, {
    chips: filters.name,
    deleteChip: onDeleteChip,
    deleteChipGroup: onDeleteChipGroup,
    categoryName: "Name",
    className: selectedFilter !== 'Name' && 'pf-u-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
    id: "filterName",
    type: "text",
    "aria-label": "Name",
    placeholder: "Filter by name",
    value: inputName,
    onChange: function onChange(value) {
      return setInputName(value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "control",
    "aria-label": "Search Name",
    onClick: function onClick() {
      if (!inputName) return;
      setFilters(function (prevFilters) {
        var newFilters = _objectSpread({}, prevFilters);

        newFilters.name = [inputName];
        console.log(newFilters);
        return newFilters;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_10__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarFilter, {
    chips: filters.region,
    deleteChip: onDeleteChip,
    deleteChipGroup: onDeleteChipGroup,
    categoryName: "Region",
    className: selectedFilter !== 'Region' && 'pf-u-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Select, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectVariant.checkbox,
    "aria-label": "Region",
    onToggle: setIsRegionExpanded,
    onSelect: onRegionSelect,
    selections: filters.region,
    isOpen: isRegionExpanded,
    placeholderText: "Filter by region"
  }, _utils_region__WEBPACK_IMPORTED_MODULE_6__.regionOptions.map(function (regionOption) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
      key: regionOption.label,
      value: regionOption.label
    }, regionOption.label);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarFilter, {
    chips: filters.owner,
    deleteChip: onDeleteChip,
    deleteChipGroup: onDeleteChipGroup,
    categoryName: "Owner",
    className: selectedFilter !== 'Owner' && 'pf-u-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
    id: "filterOwner",
    type: "text",
    "aria-label": "Owner",
    placeholder: "Filter by owner",
    value: inputOwner,
    onChange: function onChange(value) {
      return setInputOwner(value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "control",
    "aria-label": "Search Owner",
    onClick: function onClick() {
      if (!inputOwner) return;
      setFilters(function (prevFilters) {
        var newFilters = _objectSpread({}, prevFilters);

        newFilters.owner = [inputOwner];
        return newFilters;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_10__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarFilter, {
    chips: filters.status,
    deleteChip: onDeleteChip,
    deleteChipGroup: onDeleteChipGroup,
    categoryName: "Status",
    className: selectedFilter !== 'Status' && 'pf-u-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.ToolbarItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.Select, {
    variant: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectVariant.checkbox,
    "aria-label": "Status",
    onToggle: setIsStatusExpanded,
    onSelect: onStatusSelect,
    selections: filters.status,
    isOpen: isStatusExpanded,
    placeholderText: "Filter by status"
  }, _utils_status__WEBPACK_IMPORTED_MODULE_7__.statusOptions.map(function (statusOption) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__.SelectOption, {
      key: statusOption.label,
      value: statusOption.label
    }, statusOption.label);
  }))))));
}

InstancesToolbarSearchFilter.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    region: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    owner: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    status: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)
  }),
  setFilters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstancesToolbarSearchFilter);

/***/ }),

/***/ "./src/services/apiRequest.js":
/*!************************************!*\
  !*** ./src/services/apiRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authInterceptor": () => (/* binding */ authInterceptor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");



var _process, _process$env;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var API_URL = (_process = process) !== null && process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && false ? 'https://api.openshift.com' : 'https://api.stage.openshift.com';
var authInterceptor = function authInterceptor(client) {
  client.interceptors.request.use( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(cfg) {
      var token, BASE_URL, updatedCfg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return insights.chrome.auth.getUser();

            case 2:
              _context.next = 4;
              return insights.chrome.auth.getToken();

            case 4:
              token = _context.sent;
              BASE_URL = cfg.baseURL || API_URL;
              updatedCfg = _objectSpread(_objectSpread({}, cfg), {}, {
                url: "".concat(BASE_URL).concat(cfg.url)
              });

              if (token) {
                updatedCfg.headers = _objectSpread(_objectSpread({}, updatedCfg.headers), {}, {
                  Authorization: "Bearer ".concat(token)
                });
              }

              delete updatedCfg.customHost;
              return _context.abrupt("return", updatedCfg);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return client;
};
var apiRequest = authInterceptor(axios__WEBPACK_IMPORTED_MODULE_3___default().create());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRequest);

/***/ }),

/***/ "./src/utils/cloudProvider.js":
/*!************************************!*\
  !*** ./src/utils/cloudProvider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudProviderOptions": () => (/* binding */ cloudProviderOptions),
/* harmony export */   "cloudProviderValueToLabel": () => (/* binding */ cloudProviderValueToLabel),
/* harmony export */   "cloudProviderLabelToValue": () => (/* binding */ cloudProviderLabelToValue)
/* harmony export */ });
var cloudProviders = {
  aws: 'Amazon Web Services'
};
var cloudProviderOptions = Object.keys(cloudProviders).map(function (cloudProviderValue) {
  return {
    value: cloudProviderValue,
    label: cloudProviders[cloudProviderValue]
  };
});
function cloudProviderValueToLabel(cloudProviderValue) {
  return cloudProviders[cloudProviderValue];
}
function cloudProviderLabelToValue(cloudProviderLabel) {
  var cloudProviderOption = cloudProviderOptions.find(function (cloudProviderOption) {
    return cloudProviderOption.label === cloudProviderLabel;
  });
  return cloudProviderOption === null || cloudProviderOption === void 0 ? void 0 : cloudProviderOption.value;
}

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateTimeDifference": () => (/* binding */ getDateTimeDifference),
/* harmony export */   "getDateTime": () => (/* binding */ getDateTime)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

var dateTimeFormat = 'MM/dd/yyyy | h:mm:ss a';
function getDateTimeDifference(timestamp) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(timestamp), new Date(), {
    addSuffix: true
  });
}
function getDateTime(timestamp) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(timestamp), dateTimeFormat);
}

/***/ }),

/***/ "./src/utils/queryString.js":
/*!**********************************!*\
  !*** ./src/utils/queryString.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQueryObject": () => (/* binding */ getQueryObject),
/* harmony export */   "getQueryString": () => (/* binding */ getQueryString)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

function getQueryObject(search) {
  return qs__WEBPACK_IMPORTED_MODULE_0___default().parse(search, {
    ignoreQueryPrefix: true
  });
}
function getQueryString(searchObject) {
  return qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(searchObject, {
    encode: false
  });
}

/***/ }),

/***/ "./src/utils/region.js":
/*!*****************************!*\
  !*** ./src/utils/region.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regionOptions": () => (/* binding */ regionOptions),
/* harmony export */   "regionValueToLabel": () => (/* binding */ regionValueToLabel),
/* harmony export */   "regionLabelToValue": () => (/* binding */ regionLabelToValue)
/* harmony export */ });
var regions = {
  'us-east-1': 'US-East, N. Virginia'
};
var regionOptions = Object.keys(regions).map(function (regionValue) {
  return {
    value: regionValue,
    label: regions[regionValue]
  };
});
function regionValueToLabel(regionValue) {
  return regions[regionValue];
}
function regionLabelToValue(regionLabel) {
  var regionOption = regionOptions.find(function (regionOption) {
    return regionOption.label === regionLabel;
  });
  return regionOption === null || regionOption === void 0 ? void 0 : regionOption.value;
}

/***/ }),

/***/ "./src/utils/searchQuery.js":
/*!**********************************!*\
  !*** ./src/utils/searchQuery.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filtersToSearchQuery": () => (/* binding */ filtersToSearchQuery)
/* harmony export */ });
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region */ "./src/utils/region.js");
/* harmony import */ var _cloudProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloudProvider */ "./src/utils/cloudProvider.js");
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ "./src/utils/status.js");



function filtersToSearchQuery(filters) {
  var searchCategories = Object.keys(filters);
  var queries = searchCategories.filter(function (searchCategory) {
    var searchValues = filters[searchCategory];
    return searchValues.length;
  }).map(function (searchCategory) {
    var searchValues = filters[searchCategory];
    var searchCategoryResult = searchValues.map(function (searchValue) {
      // Use the value the API needs rather than the human readable UI value
      var modifiedSearchValue = searchValue;

      if (searchCategory === 'cloud_provider') {
        modifiedSearchValue = (0,_cloudProvider__WEBPACK_IMPORTED_MODULE_1__.cloudProviderLabelToValue)(searchValue);
      } else if (searchCategory === 'region') {
        modifiedSearchValue = (0,_region__WEBPACK_IMPORTED_MODULE_0__.regionLabelToValue)(searchValue);
      } else if (searchCategory === 'status') {
        modifiedSearchValue = (0,_status__WEBPACK_IMPORTED_MODULE_2__.statusLabelToValue)(searchValue);
      }

      return "".concat(searchCategory, " = ").concat(modifiedSearchValue);
    }).join(' or ');
    return "(".concat(searchCategoryResult, ")");
  }).join(' and ') || '';
  return queries;
}

/***/ }),

/***/ "./src/utils/status.js":
/*!*****************************!*\
  !*** ./src/utils/status.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statuses": () => (/* binding */ statuses),
/* harmony export */   "statusOptions": () => (/* binding */ statusOptions),
/* harmony export */   "statusValueToLabel": () => (/* binding */ statusValueToLabel),
/* harmony export */   "statusLabelToValue": () => (/* binding */ statusLabelToValue)
/* harmony export */ });
var statuses = {
  accepted: 'Request accepted',
  preparing: 'Creation pending',
  provisioning: 'Creation in progress',
  ready: 'Ready',
  failed: 'Failed',
  deprovision: 'Deprovisioning',
  deleting: 'Deleting'
};
var statusOptions = Object.keys(statuses).map(function (statusValue) {
  return {
    value: statusValue,
    label: statuses[statusValue]
  };
});
function statusValueToLabel(statusValue) {
  return statuses[statusValue];
}
function statusLabelToValue(statusLabel) {
  var statusOption = statusOptions.find(function (statusOption) {
    return statusOption.label === statusLabel;
  });
  return statusOption === null || statusOption === void 0 ? void 0 : statusOption.value;
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/InstancesPage.89a7d17cb1a51d5eb907b2ec926f4fbe.js.map