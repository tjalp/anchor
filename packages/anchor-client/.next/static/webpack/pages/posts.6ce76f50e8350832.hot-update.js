"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _anchor_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchor-card */ \"./components/anchor-card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Post(param) {\n    var post_id = param.post_id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Placeholder title\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Placeholder content\"), content = ref1[0], setContent = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/api/v1/posts/id/\".concat(post_id)).then(function(response) {\n            if (!response.error) {\n                setTitle(response.data.post.title);\n                setContent(response.data.post.content);\n            } else {\n                setTitle(\"Error loading post!\");\n                setContent(response.error);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_anchor_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            title: title,\n            href: \"/posts\",\n            children: content\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mathijs\\\\anchor\\\\packages\\\\anchor-client\\\\components\\\\post.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mathijs\\\\anchor\\\\packages\\\\anchor-client\\\\components\\\\post.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Post, \"abR/vCQ7mCs6DtZNXjAFRRo7UWY=\");\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDekI7QUFDYTtBQUl2QyxTQUFTSyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsT0FBUSxHQUFSLEtBQVMsQ0FBUkMsT0FBTzs7SUFFbEIsSUFBMEJKLEdBQTZCLEdBQTdCQSwrQ0FBUSxDQUFDLG1CQUFtQixDQUFDLEVBQWhESyxLQUFLLEdBQWNMLEdBQTZCLEdBQTNDLEVBQUVNLFFBQVEsR0FBSU4sR0FBNkIsR0FBakM7SUFDdEIsSUFBOEJBLElBQStCLEdBQS9CQSwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDLEVBQXRETyxPQUFPLEdBQWdCUCxJQUErQixHQUEvQyxFQUFFUSxVQUFVLEdBQUlSLElBQStCLEdBQW5DO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDWkUsZ0RBQVMsQ0FBQyx3Q0FBdUMsQ0FBVSxPQUFSRyxPQUFPLENBQUUsQ0FBQyxDQUFDTSxJQUFJLENBQUMsU0FBQ0MsUUFBUSxFQUFHO1lBQzNFLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxLQUFLLEVBQ25CO2dCQUNJTixRQUFRLENBQUNLLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJLENBQUNULEtBQUssQ0FBQyxDQUFDO2dCQUNuQ0csVUFBVSxDQUFDRyxRQUFRLENBQUNFLElBQUksQ0FBQ0MsSUFBSSxDQUFDUCxPQUFPLENBQUMsQ0FBQzthQUMxQyxNQUFNO2dCQUNIRCxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDaENFLFVBQVUsQ0FBQ0csUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNKLENBQUMsQ0FBQztLQUNOLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0ksOERBQUNHLEtBQUc7a0JBQ0EsNEVBQUNiLG9EQUFVO1lBQUNHLEtBQUssRUFBRUEsS0FBSztZQUFFVyxJQUFJLEVBQUUsUUFBUTtzQkFBR1QsT0FBTzs7Ozs7Z0JBQWM7Ozs7O1lBQzlELENBQ1I7Q0FDTDtHQXZCUUosSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBMEJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LmpzPzI3ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQW5jaG9yQ2FyZCBmcm9tIFwiLi9hbmNob3ItY2FyZFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KHtwb3N0X2lkfSkge1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJQbGFjZWhvbGRlciB0aXRsZVwiKTtcclxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiUGxhY2Vob2xkZXIgY29udGVudFwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9wb3N0cy9pZC8ke3Bvc3RfaWR9YCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIFxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUocmVzcG9uc2UuZGF0YS5wb3N0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQocmVzcG9uc2UuZGF0YS5wb3N0LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUoXCJFcnJvciBsb2FkaW5nIHBvc3QhXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudChyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QW5jaG9yQ2FyZCB0aXRsZT17dGl0bGV9IGhyZWY9e1wiL3Bvc3RzXCJ9Pntjb250ZW50fTwvQW5jaG9yQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXhpb3MiLCJBbmNob3JDYXJkIiwiUG9zdCIsInBvc3RfaWQiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImRhdGEiLCJwb3N0IiwiZGl2IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post.js\n"));

/***/ })

});