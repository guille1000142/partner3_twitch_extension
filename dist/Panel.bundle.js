/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 86989:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(20745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(39711);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(96974);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 38085)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(70582);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/theme/stitches.config.js + 1 modules
var stitches_config = __webpack_require__(80685);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/theme/theme-provider.js + 1 modules
var theme_provider = __webpack_require__(44239);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.module.js
var index_module = __webpack_require__(82010);
;// CONCATENATED MODULE: ./src/context/Context.js

var Context = /*#__PURE__*/(0,react.createContext)();
;// CONCATENATED MODULE: ./src/components/Layout/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Layout() {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      channel = _useState4[0],
      setChannel = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      history = _useState6[0],
      setHistory = _useState6[1];

  console.log({
    user: user,
    channel: channel
  });
  var lightTheme = (0,stitches_config/* createTheme */.jG)({
    type: "light",
    theme: {
      colors: {}
    }
  });
  var darkTheme = (0,stitches_config/* createTheme */.jG)({
    type: "dark",
    theme: {
      colors: {}
    }
  });
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: (0,react.useMemo)(function () {
      return {
        user: user,
        setUser: setUser,
        channel: channel,
        setChannel: setChannel,
        history: history,
        setHistory: setHistory
      };
    }, [user, setUser, channel, setChannel, history, setHistory])
  }, /*#__PURE__*/react.createElement(ToastModal, null), /*#__PURE__*/react.createElement(index_module/* ThemeProvider */.f, {
    defaultTheme: "system",
    attribute: "class",
    value: {
      light: lightTheme.className,
      dark: darkTheme.className
    }
  }, /*#__PURE__*/react.createElement(theme_provider/* default */.Z, null, /*#__PURE__*/react.createElement("main", null, /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null))))));
}

function ToastModal() {
  var _useToasterStore = (0,dist/* useToasterStore */.TB)(),
      toasts = _useToasterStore.toasts;

  var TOAST_LIMIT = 1;
  (0,react.useEffect)(function () {
    toasts.filter(function (t) {
      return t.visible;
    }) // Only consider visible toasts
    .filter(function (_, i) {
      return i >= TOAST_LIMIT;
    }) // Is toast index over limit?
    .forEach(function (t) {
      return dist/* toast.dismiss */.Am.dismiss(t.id);
    }); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);
  return /*#__PURE__*/react.createElement("div", {
    className: "div-test"
  }, /*#__PURE__*/react.createElement(dist/* Toaster */.x7, {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
    containerClassName: "",
    containerStyle: {},
    className: "toast-modal",
    toastOptions: {
      // Define default options
      className: "toast-settings",
      duration: 5000,
      style: {
        background: "rgba(28, 31, 35, 1)",
        color: "whitesmoke"
      },
      // Default options for specific types
      success: {
        duration: 5000,
        theme: {
          primary: "green",
          secondary: "black"
        }
      }
    }
  }, function (t) {
    return /*#__PURE__*/react.createElement(dist/* ToastBar */.$x, {
      toast: t
    }, function (_ref) {
      var icon = _ref.icon,
          message = _ref.message;
      return /*#__PURE__*/react.createElement(react.Fragment, null, icon, message, t.type !== "loading" && /*#__PURE__*/react.createElement("span", {
        className: "toast-close",
        onClick: function onClick() {
          return dist/* toast.dismiss */.Am.dismiss(t.id);
        }
      }, /*#__PURE__*/react.createElement("i", {
        className: "fa-solid fa-xmark fa-lg"
      })));
    });
  }));
}
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/col/index.js + 2 modules
var col = __webpack_require__(36725);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/row/index.js + 2 modules
var row = __webpack_require__(47845);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/avatar/index.js + 4 modules
var avatar = __webpack_require__(10578);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/text/index.js + 3 modules
var esm_text = __webpack_require__(27194);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/card/index.js + 9 modules
var card = __webpack_require__(94985);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/grid/index.js + 4 modules
var grid = __webpack_require__(92917);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/badge/index.js + 3 modules
var badge = __webpack_require__(16452);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/spacer/index.js + 2 modules
var spacer = __webpack_require__(41468);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/dropdown/index.js + 16 modules
var dropdown = __webpack_require__(37878);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/user/index.js + 8 modules
var esm_user = __webpack_require__(14054);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/button/index.js + 7 modules
var esm_button = __webpack_require__(67812);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/table/index.js + 53 modules
var table = __webpack_require__(1435);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/loading/index.js + 3 modules
var loading = __webpack_require__(27328);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(63992);
;// CONCATENATED MODULE: ./src/hooks/socket/useSocket.js
function useSocket_slicedToArray(arr, i) { return useSocket_arrayWithHoles(arr) || useSocket_iterableToArrayLimit(arr, i) || useSocket_unsupportedIterableToArray(arr, i) || useSocket_nonIterableRest(); }

function useSocket_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useSocket_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useSocket_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useSocket_arrayLikeToArray(o, minLen); }

function useSocket_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useSocket_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useSocket_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var socketServer;
function useSocket() {
  var _useContext = (0,react.useContext)(Context),
      channel = _useContext.channel,
      history = _useContext.history;

  var _useState = (0,react.useState)(false),
      _useState2 = useSocket_slicedToArray(_useState, 2),
      socket = _useState2[0],
      setSocket = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useSocket_slicedToArray(_useState3, 2),
      bot = _useState4[0],
      setBot = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = useSocket_slicedToArray(_useState5, 2),
      donations = _useState6[0],
      setDonations = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = useSocket_slicedToArray(_useState7, 2),
      predictions = _useState8[0],
      setPredictions = _useState8[1];

  (0,react.useEffect)(function () {
    var wssUrl = "wss://".concat("partner3wss-production.up.railway.app");
    var httpsUrl = "https://".concat("partner3wss-production.up.railway.app");
    var JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMxMjY1MzUsImRhdGEiOnsibmFtZSI6InBhcnRuZXIzIiwiZW1haWwiOiJwYXJ0bmVyMy4wdHdpdGNoQGdtYWlsLmNvbSIsImRvbWFpbiI6Ind3dy5wYXJ0bmVyMy5jb20iLCJwbGF0Zm9ybSI6InR3aXRjaCJ9LCJpYXQiOjE2NjE1OTc4ODF9.E2TW3_2PT8hp4n-QkqFCsPyyjH86VV7Wu8Y19SFHoR8";
    var socketOptions = {
      query: {
        token: JWT
      }
    };
    socketServer = esm/* default.connect */.ZP.connect(wssUrl, socketOptions);
    setSocket(socketServer);
    socketServer.on("receive_bot", function (data) {
      setBot(data);
    });

    if (channel) {
      socketServer.on("receive_donations", function (data) {
        var filter = !history ? data.filter(function (donation) {
          return donation.cid === channel.uid;
        }) : data;
        var order = filter.sort(function (a, b) {
          return b.time - a.time;
        });
        setDonations(order);
      });
    }

    socketServer.on("receive_predictions", function (data) {
      setPredictions(data);
    });
    return function () {
      socketServer && socketServer.removeAllListeners();
    };
  }, [history, channel]);
  return {
    socket: socket,
    bot: bot,
    donations: donations,
    predictions: predictions
  };
}
;// CONCATENATED MODULE: ./src/assets/imgs/polygon.png
/* harmony default export */ var polygon = (__webpack_require__.p + "img/polygon.png");
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/modal/index.js + 14 modules
var esm_modal = __webpack_require__(62037);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/use-theme/index.js + 1 modules
var use_theme = __webpack_require__(82590);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/switch/index.js + 2 modules
var esm_switch = __webpack_require__(43338);
;// CONCATENATED MODULE: ./src/views/panel/components/Modals.js
function Modals_slicedToArray(arr, i) { return Modals_arrayWithHoles(arr) || Modals_iterableToArrayLimit(arr, i) || Modals_unsupportedIterableToArray(arr, i) || Modals_nonIterableRest(); }

function Modals_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Modals_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Modals_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Modals_arrayLikeToArray(o, minLen); }

function Modals_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Modals_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Modals_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Stats(_ref) {
  var donations = _ref.donations,
      modal = _ref.modal,
      setModal = _ref.setModal;

  var _useState = (0,react.useState)(true),
      _useState2 = Modals_slicedToArray(_useState, 2),
      stats = _useState2[0],
      setStats = _useState2[1];

  var maticDonations = donations.filter(function (donation) {
    return donation.token === "MATIC";
  });
  var bnbDonations = donations.filter(function (donation) {
    return donation.token === "BNB";
  });
  var maticTokens = 0;

  for (var i = 0; i < maticDonations.length; i++) {
    maticTokens += parseFloat(donations[i].amount);
  }

  var bnbTokens = 0;

  for (var _i2 = 0; _i2 < bnbDonations.length; _i2++) {
    bnbTokens += parseFloat(donations[_i2].amount);
  }

  var DonationData = function DonationData(_ref2) {
    var name1 = _ref2.name1,
        name2 = _ref2.name2,
        total = _ref2.total,
        token = _ref2.token;
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(table/* default */.ZP, {
      shadow: false,
      "aria-label": name2
    }, /*#__PURE__*/react.createElement(table/* default.Header */.ZP.Header, null, /*#__PURE__*/react.createElement(table/* default.Column */.ZP.Column, {
      css: {
        padding: "10px"
      }
    }, name1), /*#__PURE__*/react.createElement(table/* default.Column */.ZP.Column, null, name2)), /*#__PURE__*/react.createElement(table/* default.Body */.ZP.Body, null, /*#__PURE__*/react.createElement(table/* default.Row */.ZP.Row, {
      key: "1"
    }, /*#__PURE__*/react.createElement(table/* default.Cell */.ZP.Cell, null, total), /*#__PURE__*/react.createElement(table/* default.Cell */.ZP.Cell, null, token)))));
  };

  return /*#__PURE__*/react.createElement(esm_modal/* default */.ZP, {
    width: "280px",
    blur: true,
    open: modal,
    closeButton: true,
    onClose: function onClose() {
      return setModal(false);
    }
  }, /*#__PURE__*/react.createElement(esm_modal/* default.Header */.ZP.Header, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h1: true,
    size: 20
  }, "Stats")), /*#__PURE__*/react.createElement(esm_modal/* default.Body */.ZP.Body, null, /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "space-evenly"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    disabled: !stats,
    onPress: function onPress() {
      return setStats(false);
    },
    size: "xs",
    css: {
      padding: "12px 0px 12px 0px",
      fontSize: "13px"
    },
    ghost: true,
    color: "secondary"
  }, "Predictions")), /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    disabled: stats,
    onPress: function onPress() {
      return setStats(true);
    },
    size: "xs",
    css: {
      padding: "12px 0px 12px 0px",
      fontSize: "13px"
    },
    ghost: true,
    color: "secondary"
  }, "Donations"))), /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "center"
  }, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h2: true,
    size: 13,
    css: {
      marginTop: "10px"
    }
  }, stats ? "Total donations ".concat(donations.length) : "Total predictions ".concat(0)), /*#__PURE__*/react.createElement(grid/* default */.ZP, null, stats ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DonationData, {
    name1: "Donations",
    name2: "MATIC",
    total: maticDonations.length,
    token: maticTokens.toFixed(2)
  }), /*#__PURE__*/react.createElement(DonationData, {
    name1: "Donations",
    name2: "BNB",
    total: bnbDonations.length,
    token: bnbTokens.toFixed(2)
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(DonationData, {
    name1: "Predictions",
    name2: "MATIC",
    total: 0,
    token: 0
  }), /*#__PURE__*/react.createElement(DonationData, {
    name1: "Predictions",
    name2: "BNB",
    total: 0,
    token: 0
  }))))));
}
function Settings(_ref3) {
  var modal = _ref3.modal,
      setModal = _ref3.setModal;

  var _useContext = (0,react.useContext)(Context),
      history = _useContext.history,
      setHistory = _useContext.setHistory;

  var _useNextTheme = (0,index_module/* useTheme */.F)(),
      setTheme = _useNextTheme.setTheme;

  var _useTheme = (0,use_theme/* default */.Z)(),
      isDark = _useTheme.isDark;

  return /*#__PURE__*/react.createElement(esm_modal/* default */.ZP, {
    width: "280px",
    blur: true,
    open: modal,
    closeButton: true,
    onClose: function onClose() {
      return setModal(false);
    }
  }, /*#__PURE__*/react.createElement(esm_modal/* default.Header */.ZP.Header, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h1: true,
    size: 20
  }, "Settings")), /*#__PURE__*/react.createElement(esm_modal/* default.Body */.ZP.Body, null, /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "space-around"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h1: true,
    size: 13
  }, "Theme"), /*#__PURE__*/react.createElement(esm_switch/* default */.ZP, {
    size: "md",
    color: "secondary",
    checked: isDark,
    onChange: function onChange(e) {
      return setTheme(e.target.checked ? "dark" : "light");
    },
    iconOn: /*#__PURE__*/react.createElement("i", {
      className: "fa-solid fa-moon"
    }),
    iconOff: /*#__PURE__*/react.createElement("i", {
      className: "fa-solid fa-sun"
    })
  })), /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h1: true,
    size: 13
  }, "Global history"), /*#__PURE__*/react.createElement(esm_switch/* default */.ZP, {
    size: "md",
    color: "secondary",
    checked: history,
    onChange: function onChange() {
      return setHistory(!history);
    }
  })))));
}
;// CONCATENATED MODULE: ./src/views/panel/components/PanelCard.js
function PanelCard_slicedToArray(arr, i) { return PanelCard_arrayWithHoles(arr) || PanelCard_iterableToArrayLimit(arr, i) || PanelCard_unsupportedIterableToArray(arr, i) || PanelCard_nonIterableRest(); }

function PanelCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PanelCard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PanelCard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PanelCard_arrayLikeToArray(o, minLen); }

function PanelCard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PanelCard_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PanelCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function PanelCard() {
  var _useState = (0,react.useState)(false),
      _useState2 = PanelCard_slicedToArray(_useState, 2),
      stats = _useState2[0],
      setStats = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = PanelCard_slicedToArray(_useState3, 2),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var _useContext = (0,react.useContext)(Context),
      user = _useContext.user,
      channel = _useContext.channel;

  var _useSocket = useSocket(),
      donations = _useSocket.donations;

  var navigate = (0,react_router/* useNavigate */.s0)();
  var columns = [{
    name: "User",
    uid: "user"
  }, {
    name: "Token",
    uid: "amount"
  }, {
    name: "Channel",
    uid: "channel"
  }];
  var users = donations && donations.slice(0, 12).map(function (donation, index) {
    var object = {
      id: index + 1,
      photo: donation.photo,
      name: donation.name,
      amount: donation.amount,
      token: donation.token,
      channel: donation.channel
    };
    return object;
  });

  var renderCell = function renderCell(user, columnKey) {
    var cellValue = user[columnKey];

    switch (columnKey) {
      case "user":
        return /*#__PURE__*/react.createElement(col/* default */.Z, null, /*#__PURE__*/react.createElement(row/* default */.Z, null, /*#__PURE__*/react.createElement(avatar/* default */.ZP, {
          size: "xs",
          color: "secondary",
          src: user.photo
        })));

      case "amount":
        return /*#__PURE__*/react.createElement(col/* default */.Z, null, /*#__PURE__*/react.createElement(row/* default */.Z, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
          b: true,
          size: 13,
          css: {
            marginRight: "5px"
          }
        }, cellValue), /*#__PURE__*/react.createElement("img", {
          width: 20,
          height: 20,
          src: polygon,
          alt: "polygon"
        })));

      case "channel":
        return /*#__PURE__*/react.createElement(col/* default */.Z, null, /*#__PURE__*/react.createElement(row/* default */.Z, null, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
          b: true,
          size: 13
        }, cellValue.length > 15 ? cellValue.substring(0, 15) + "..." : cellValue)));

      default:
        return cellValue;
    }
  };

  var handleSelect = function handleSelect(key) {
    console.log(key);
    if (key === "stats") setStats(true);
    if (key === "settings") setSettings(true);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(card/* default */.ZP, {
    css: {
      mw: "280px",
      margin: "0 auto"
    }
  }, user && channel && donations.length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(card/* default.Body */.ZP.Body, {
    css: {
      py: "$8",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "space-between"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, {
    sm: 0
  }, /*#__PURE__*/react.createElement(badge/* default */.ZP, {
    enableShadow: true,
    disableOutline: true,
    color: "secondary",
    size: "sm"
  }, "Partner3")), /*#__PURE__*/react.createElement(grid/* default */.ZP, {
    sm: 0
  }, /*#__PURE__*/react.createElement(badge/* default */.ZP, {
    enableShadow: true,
    disableOutline: true,
    color: channel.live ? "success" : "error",
    size: "sm"
  }, channel.userName))), /*#__PURE__*/react.createElement(spacer/* default */.Z, null), /*#__PURE__*/react.createElement(badge/* default */.ZP, {
    disableOutline: true,
    placement: "top-left",
    color: "default",
    content: "1",
    size: "sm"
  }, /*#__PURE__*/react.createElement(dropdown/* default */.ZP, null, /*#__PURE__*/react.createElement(dropdown/* default.Trigger */.ZP.Trigger, null, /*#__PURE__*/react.createElement(esm_user/* default */.ZP, {
    as: "button",
    size: "md",
    bordered: true,
    src: user.profile_image_url,
    name: user.display_name,
    description: user.role,
    color: "secondary"
  })), /*#__PURE__*/react.createElement(dropdown/* default.Menu */.ZP.Menu, {
    onAction: function onAction(key) {
      return handleSelect(key);
    },
    "aria-label": "Static Actions",
    css: {
      width: "160px"
    },
    color: "secondary",
    disabledKeys: ["profile"]
  }, /*#__PURE__*/react.createElement(dropdown/* default.Item */.ZP.Item, {
    key: "profile"
  }, user.display_name + " - VIP 1 (soon)"), /*#__PURE__*/react.createElement(dropdown/* default.Item */.ZP.Item, {
    key: "stats",
    withDivider: true
  }, "Stats"), /*#__PURE__*/react.createElement(dropdown/* default.Item */.ZP.Item, {
    key: "settings"
  }, "Settings")))), /*#__PURE__*/react.createElement(spacer/* default */.Z, null), /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "space-evenly"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    disabled: true,
    onPress: function onPress() {
      return navigate("prediction");
    },
    shadow: true,
    color: "secondary",
    size: "xs",
    css: {
      padding: "15px 0px 15px 0px",
      fontSize: "16px"
    }
  }, "Predict")), /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    onPress: function onPress() {
      return navigate("donation");
    },
    shadow: true,
    color: "secondary",
    size: "xs",
    css: {
      padding: "15px 0px 15px 0px",
      fontSize: "16px"
    }
  }, "Donate")))), /*#__PURE__*/react.createElement(card/* default.Divider */.ZP.Divider, null), /*#__PURE__*/react.createElement(card/* default.Body */.ZP.Body, {
    css: {
      py: "$5",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h2: true,
    size: 13
  }, "Total donations: ", donations.length), /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "center"
  }, /*#__PURE__*/react.createElement(table/* default */.ZP, {
    shadow: false,
    selectionMode: "none",
    color: "secondary"
  }, /*#__PURE__*/react.createElement(table/* default.Header */.ZP.Header, {
    columns: columns
  }, function (column) {
    return /*#__PURE__*/react.createElement(table/* default.Column */.ZP.Column, {
      key: column.uid,
      align: "start"
    }, column.name);
  }), /*#__PURE__*/react.createElement(table/* default.Body */.ZP.Body, {
    items: users
  }, function (item) {
    return /*#__PURE__*/react.createElement(table/* default.Row */.ZP.Row, null, function (columnKey) {
      return /*#__PURE__*/react.createElement(table/* default.Cell */.ZP.Cell, null, renderCell(item, columnKey));
    });
  }), /*#__PURE__*/react.createElement(table/* default.Pagination */.ZP.Pagination, {
    shadow: true,
    noMargin: true,
    align: "center",
    rowsPerPage: 3
  })))), /*#__PURE__*/react.createElement(Stats, {
    donations: donations.filter(function (donation) {
      return donation.id === user.id;
    }),
    modal: stats,
    setModal: setStats
  }), /*#__PURE__*/react.createElement(Settings, {
    modal: settings,
    setModal: setSettings
  })) : /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 10,
    justify: "center"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(loading/* default */.ZP, {
    color: "secondary"
  })))));
}
;// CONCATENATED MODULE: ./src/hooks/useUser.js



function useUser() {
  var _useContext = (0,react.useContext)(Context),
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useSocket = useSocket(),
      bot = _useSocket.bot;

  (0,react.useEffect)(function () {
    if (bot && !user) {
      var twitch = window.Twitch.ext;
      var viewer = twitch.viewer;
      fetch("https://api.twitch.tv/helix/users?id=".concat(viewer.id), {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(bot[0].access_token),
          "Client-Id": "dw1yu2h94a21f7sua4mpu2hmvfio3d"
        }
      }).then(function (res) {
        res.json().then(function (data) {
          var userData = Object.assign(data.data[0], viewer);
          setUser(userData);
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, [bot, user]);
  return;
}
;// CONCATENATED MODULE: ./src/hooks/useConfig.js
function useConfig_slicedToArray(arr, i) { return useConfig_arrayWithHoles(arr) || useConfig_iterableToArrayLimit(arr, i) || useConfig_unsupportedIterableToArray(arr, i) || useConfig_nonIterableRest(); }

function useConfig_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useConfig_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useConfig_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useConfig_arrayLikeToArray(o, minLen); }

function useConfig_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useConfig_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useConfig_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useConfig() {
  var _useState = (0,react.useState)(false),
      _useState2 = useConfig_slicedToArray(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  (0,react.useEffect)(function () {
    try {
      var twitch = window.Twitch.ext;
      var _config = twitch.configuration.global.content;
      var configData = JSON.parse(_config);
      setConfig(configData);
    } catch (err) {// window.location.reload();
    }
  }, []);
  return {
    config: config
  };
}
;// CONCATENATED MODULE: ./src/hooks/useChannel.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function useChannel() {
  var _useContext = (0,react.useContext)(Context),
      channel = _useContext.channel,
      setChannel = _useContext.setChannel;

  var _useConfig = useConfig(),
      config = _useConfig.config;

  var _useSocket = useSocket(),
      bot = _useSocket.bot;

  console.log({
    bot: bot,
    config: config
  });
  (0,react.useEffect)(function () {
    if (bot && config && !channel) {
      fetch("https://api.twitch.tv/helix/streams?user_id=".concat(config[0].uid), {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(bot[0].access_token),
          "Client-Id": "dw1yu2h94a21f7sua4mpu2hmvfio3d"
        }
      }).then(function (res) {
        res.json().then(function (stream) {
          var streamData = stream.data;

          if (streamData.length > 0) {
            var _streamData$ = streamData[0],
                user_name = _streamData$.user_name,
                title = _streamData$.title;

            var data = _objectSpread(_objectSpread({}, config[0]), {}, {
              userName: user_name,
              title: title,
              live: true
            });

            setChannel(data);
          } else {
            fetch("https://api.twitch.tv/helix/channels?broadcaster_id=".concat(config[0].uid), {
              method: "GET",
              headers: {
                Authorization: "Bearer ".concat(bot[0].access_token),
                "Client-Id": "dw1yu2h94a21f7sua4mpu2hmvfio3d"
              }
            }).then(function (res) {
              res.json().then(function (channel) {
                var channelData = channel.data;

                if (channelData.length > 0) {
                  var _channelData$ = channelData[0],
                      broadcaster_name = _channelData$.broadcaster_name,
                      _title = _channelData$.title;

                  var _data = _objectSpread(_objectSpread({}, config[0]), {}, {
                    userName: broadcaster_name,
                    title: _title,
                    live: true
                  });

                  setChannel(_data);
                }
              });
            }).catch(function (err) {
              console.log(err);
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, [bot, config, channel]);
  return;
}
;// CONCATENATED MODULE: ./src/views/panel/index.js




function Panel() {
  useUser();
  useChannel();
  return /*#__PURE__*/react.createElement(PanelCard, null);
}
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/tooltip/index.js + 8 modules
var tooltip = __webpack_require__(40245);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/input/index.js + 5 modules
var input = __webpack_require__(26654);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/popover/index.js + 9 modules
var popover = __webpack_require__(80081);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react/esm/textarea/index.js + 2 modules
var esm_textarea = __webpack_require__(59152);
// EXTERNAL MODULE: ./node_modules/emoji-picker-react/dist/index.js
var emoji_picker_react_dist = __webpack_require__(2138);
var dist_default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react_dist);
// EXTERNAL MODULE: ./node_modules/web3/lib/index.js
var lib = __webpack_require__(3283);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/hooks/useWeb3.js
function useWeb3_slicedToArray(arr, i) { return useWeb3_arrayWithHoles(arr) || useWeb3_iterableToArrayLimit(arr, i) || useWeb3_unsupportedIterableToArray(arr, i) || useWeb3_nonIterableRest(); }

function useWeb3_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useWeb3_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useWeb3_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWeb3_arrayLikeToArray(o, minLen); }

function useWeb3_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useWeb3_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useWeb3_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useWeb3() {
  var _useState = (0,react.useState)(false),
      _useState2 = useWeb3_slicedToArray(_useState, 2),
      account = _useState2[0],
      setAccount = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = useWeb3_slicedToArray(_useState3, 2),
      network = _useState4[0],
      setNetwork = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = useWeb3_slicedToArray(_useState5, 2),
      balance = _useState6[0],
      setBalance = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = useWeb3_slicedToArray(_useState7, 2),
      web3 = _useState8[0],
      setWeb3 = _useState8[1];

  var truncateDecimals = function truncateDecimals(number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? "ceil" : "floor"](adjustedNum);
    return truncatedNum / multiplier;
  };

  (0,react.useEffect)(function () {
    var web3 = new (lib_default())(window.ethereum);
    setWeb3(web3);
    window.ethereum.request({
      method: "eth_accounts"
    }).then(function (account) {
      return setAccount(account[0]);
    }).catch(function (err) {
      return console.log(err);
    });
    window.ethereum.request({
      method: "eth_chainId"
    }).then(function (chainId) {
      return setNetwork(chainId);
    }).catch(function (err) {
      return console.log(err);
    });
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
    window.ethereum.on("chainChanged", function (_chainId) {
      setNetwork(_chainId);
    });
    return function () {
      window.ethereum.removeListener("accountsChanged", function (accounts) {
        setAccount(accounts);
      });
      window.ethereum.removeListener("chainChanged", function (_chainId) {
        setNetwork(_chainId);
      });
    };
  }, []);

  var readBalance = function readBalance() {
    if (web3 && account && network !== "") {
      web3.eth.getBalance(account).then(function (balance) {
        var walletBalance = web3.utils.fromWei(balance.toString(), "ether");
        var truncate = truncateDecimals(parseFloat(walletBalance), 2);
        setBalance(truncate);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  };

  (0,react.useEffect)(function () {
    readBalance();
  }, [account, network, web3]);

  var connectWallet = function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      var connect = window.ethereum.request({
        method: "eth_requestAccounts"
      });
      dist/* default.promise */.ZP.promise(connect, {
        loading: "Connecting...",
        success: "Connected",
        error: "Failed"
      });
    } else {
      dist/* default.error */.ZP.error("Metamask not installed");
    }
  };

  var addNetwork = function addNetwork(_ref) {
    var chainId = _ref.chainId;
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: chainId,
        chainName: chainId === "0x89" ? "POLYGON" : "BSC",
        rpcUrls: [chainId === "0x89" ? "https://polygon-rpc.com" : "https://bscrpc.com"],
        nativeCurrency: {
          name: chainId === "0x89" ? "MATIC" : "BNB",
          symbol: chainId === "0x89" ? "MATIC" : "BNB",
          decimals: 18
        }
      }]
    });
  };

  var changeNetwork = function changeNetwork(_ref2) {
    var chainId = _ref2.chainId;
    var change = window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{
        chainId: chainId
      }]
    }).catch(function (err) {
      if (err.code === 4902) {
        addNetwork({
          chainId: chainId
        });
      }
    });
    dist/* default.promise */.ZP.promise(change, {
      loading: "Connecting...",
      success: "Connected",
      error: "Failed"
    });
  };

  return {
    changeNetwork: changeNetwork,
    connectWallet: connectWallet,
    readBalance: readBalance,
    account: account,
    network: network,
    balance: balance,
    web3: web3
  };
}
// EXTERNAL MODULE: ./node_modules/tmi.js/index.js
var tmi_js = __webpack_require__(4993);
var tmi_js_default = /*#__PURE__*/__webpack_require__.n(tmi_js);
;// CONCATENATED MODULE: ./src/hooks/useChat.js
function useChat_slicedToArray(arr, i) { return useChat_arrayWithHoles(arr) || useChat_iterableToArrayLimit(arr, i) || useChat_unsupportedIterableToArray(arr, i) || useChat_nonIterableRest(); }

function useChat_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useChat_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useChat_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useChat_arrayLikeToArray(o, minLen); }

function useChat_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useChat_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useChat_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var toUnicodeVariant = __webpack_require__(70564);

var useChat_client;
function useChat() {
  var _useState = (0,react.useState)(false),
      _useState2 = useChat_slicedToArray(_useState, 2),
      connect = _useState2[0],
      setConnect = _useState2[1];

  var _useSocket = useSocket(),
      bot = _useSocket.bot;

  (0,react.useEffect)(function () {
    if (bot && !connect) {
      var onMessageHandler = function onMessageHandler(target, context, msg, self) {
        if (self) {
          return false;
        }

        if (msg === "/p3_leaderboard") {
          useChat_client.whisper(target.name, "test");
        }
      };

      var onConnectedHandler = function onConnectedHandler(addr, port) {
        console.log("connected");
        setConnect(true);
      };

      var opts = {
        identity: {
          username: "partner3_bot",
          password: bot[1].access_token
        },
        channels: ["partner3_bot"]
      };
      useChat_client = new (tmi_js_default()).client(opts);
      useChat_client.connect();
      useChat_client.on("message", onMessageHandler);
      useChat_client.on("connected", onConnectedHandler);
    }
  }, [bot]);

  var writeToChat = function writeToChat(_ref) {
    var user = _ref.user,
        amount = _ref.amount,
        token = _ref.token,
        message = _ref.message,
        channel = _ref.channel;
    var donation = toUnicodeVariant(amount + " " + token, "bs"); // const userName = toUnicodeVariant(user.display_name, "gb");

    var text = toUnicodeVariant(message, "is");
    useChat_client.say("#".concat(channel.userName), "".concat(donation, " @").concat(user.display_name, " ").concat(text)); // client
    //   .whisper(user.display_name, "thanks!")
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };

  return {
    writeToChat: writeToChat
  };
}
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.esm.js + 2 modules
var index_esm = __webpack_require__(81591);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.esm.js
var dist_index_esm = __webpack_require__(15503);
;// CONCATENATED MODULE: ./src/firestore/client.js


var firebaseConfig = {
  apiKey: "AIzaSyDzcJd-nal4xAIpnz9fMprbauFcZJSOi5w",
  authDomain: "partner3-b1c49.firebaseapp.com",
  projectId: "partner3-b1c49",
  storageBucket: "partner3-b1c49.appspot.com",
  messagingSenderId: "MISSING_ENV_VAR".REACT_APP_MESSAGIN_SENDER_ID,
  appId: "1:778425931091:web:4247e61755db23af81bda6",
  measurementId: "G-E81DB7XTV8"
};
var app = (0,dist_index_esm/* initializeApp */.ZF)(firebaseConfig);
var db = (0,index_esm/* getFirestore */.ad)(app);
;// CONCATENATED MODULE: ./src/hooks/useSave.js


function useSave() {
  var saveDonation = function saveDonation(_ref) {
    var user = _ref.user,
        channel = _ref.channel,
        amount = _ref.amount,
        token = _ref.token;
    var data = {
      name: user.display_name.toLowerCase(),
      id: user.id,
      cid: channel.uid,
      channel: channel.userName,
      photo: user.profile_image_url,
      amount: amount,
      token: token,
      time: Math.round(new Date().getTime() / 1000)
    };
    (0,index_esm/* addDoc */.ET)((0,index_esm/* collection */.hJ)(db, "donations"), data);
  }; // const savePrediction = () => {};


  return {
    saveDonation: saveDonation
  };
}
;// CONCATENATED MODULE: ./src/hooks/useGas.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useGas() {
  var getPolygonGas = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, gas;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://gasstation-mainnet.matic.network");

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              gas = _context.sent;
              return _context.abrupt("return", gas);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPolygonGas() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    getPolygonGas: getPolygonGas
  };
}
;// CONCATENATED MODULE: ./src/hooks/useDonation.js
function useDonation_typeof(obj) { "@babel/helpers - typeof"; return useDonation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, useDonation_typeof(obj); }

function useDonation_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ useDonation_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == useDonation_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function useDonation_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function useDonation_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { useDonation_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { useDonation_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function useDonation() {
  var _useContext = (0,react.useContext)(Context),
      user = _useContext.user,
      channel = _useContext.channel;

  var _useChat = useChat(),
      writeToChat = _useChat.writeToChat;

  var _useSave = useSave(),
      saveDonation = _useSave.saveDonation;

  var _useGas = useGas(),
      getPolygonGas = _useGas.getPolygonGas;

  var truncateDecimals = function truncateDecimals(number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? "ceil" : "floor"](adjustedNum);
    return truncatedNum / multiplier;
  };

  var sendTokens = /*#__PURE__*/function () {
    var _ref2 = useDonation_asyncToGenerator( /*#__PURE__*/useDonation_regeneratorRuntime().mark(function _callee(_ref) {
      var web3, account, token, network, changeNetwork, message, setMessage, amount, setAmount, balance, readBalance, minimumAmount, chainId, truncateAmount, gas, transaction;
      return useDonation_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              web3 = _ref.web3, account = _ref.account, token = _ref.token, network = _ref.network, changeNetwork = _ref.changeNetwork, message = _ref.message, setMessage = _ref.setMessage, amount = _ref.amount, setAmount = _ref.setAmount, balance = _ref.balance, readBalance = _ref.readBalance;
              minimumAmount = token === "MATIC" ? 1 : 0.01;

              if (!(amount < minimumAmount)) {
                _context.next = 5;
                break;
              }

              dist/* default.error */.ZP.error("Minimum amount " + minimumAmount);
              return _context.abrupt("return", false);

            case 5:
              if (!(balance < amount)) {
                _context.next = 8;
                break;
              }

              dist/* default.error */.ZP.error("Insufficient balance");
              return _context.abrupt("return", false);

            case 8:
              chainId = token === "MATIC" && "0x89" || token === "BNB" && "0x38";

              if (!(network !== chainId)) {
                _context.next = 13;
                break;
              }

              changeNetwork({
                chainId: chainId
              });
              _context.next = 19;
              break;

            case 13:
              truncateAmount = truncateDecimals(amount, 2);
              _context.next = 16;
              return getPolygonGas();

            case 16:
              gas = _context.sent;
              transaction = web3.eth.sendTransaction({
                from: account,
                to: channel.wallet,
                value: web3.utils.toWei(truncateAmount.toString(), "ether"),
                gasPrice: web3.utils.toWei((gas.fastest * 2).toString(), "gwei"),
                gasLimit: web3.utils.toWei("600", "kwei")
              }).on("receipt", function (receipt) {
                writeToChat({
                  user: user,
                  amount: amount,
                  token: token,
                  message: message,
                  channel: channel
                });
                saveDonation({
                  user: user,
                  channel: channel,
                  amount: truncateAmount,
                  token: token
                });
                setAmount(0);
                setMessage("");
                readBalance();
              }).on("error", console.error);
              dist/* default.promise */.ZP.promise(transaction, {
                loading: "Pending...",
                success: "Confirmed",
                error: "Failed"
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendTokens(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    sendTokens: sendTokens
  };
}
;// CONCATENATED MODULE: ./src/views/donation/index.js
function donation_slicedToArray(arr, i) { return donation_arrayWithHoles(arr) || donation_iterableToArrayLimit(arr, i) || donation_unsupportedIterableToArray(arr, i) || donation_nonIterableRest(); }

function donation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function donation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return donation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return donation_arrayLikeToArray(o, minLen); }

function donation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function donation_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function donation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import "emoji-picker-react/dist/main.css";




function Donation() {
  var _useState = (0,react.useState)(new Set(["MATIC"])),
      _useState2 = donation_slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = donation_slicedToArray(_useState3, 2),
      amount = _useState4[0],
      setAmount = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = donation_slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useWeb = useWeb3(),
      connectWallet = _useWeb.connectWallet,
      changeNetwork = _useWeb.changeNetwork,
      readBalance = _useWeb.readBalance,
      account = _useWeb.account,
      network = _useWeb.network,
      balance = _useWeb.balance,
      web3 = _useWeb.web3;

  var _useDonation = useDonation(),
      sendTokens = _useDonation.sendTokens;

  var navigate = (0,react_router/* useNavigate */.s0)();

  var handleAmount = function handleAmount(e) {
    e.preventDefault();
    setAmount(parseFloat(e.target.value));
  };

  var handleMessage = function handleMessage(e) {
    e.preventDefault();
    var text = e.target.value.trim();
    setMessage(text);
  };

  var handleEmoji = function handleEmoji(event, emojiObject) {
    var emoticon = emojiObject.emoji;

    if (message.length < 50) {
      setMessage(message + emoticon);
    }
  };

  return /*#__PURE__*/react.createElement(card/* default */.ZP, {
    css: {
      mw: "280px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react.createElement(card/* default.Header */.ZP.Header, null, /*#__PURE__*/react.createElement(grid/* default.Container */.ZP.Container, {
    gap: 0,
    justify: "space-between"
  }, /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    onPress: function onPress() {
      return navigate("/panel");
    },
    flat: true,
    size: "xs",
    color: "secondary",
    css: {
      padding: "12px 0px 12px 0px",
      fontSize: "16px"
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fa-solid fa-arrow-left"
  }))), /*#__PURE__*/react.createElement(grid/* default */.ZP, null, /*#__PURE__*/react.createElement(tooltip/* default */.ZP, {
    content: network === "0x89" && "MATIC Polygon Network" || network === "0x38" && "BNB BSC Network",
    trigger: "hover",
    color: "secondary",
    placement: "bottom"
  }, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    flat: true,
    size: "xs",
    color: "secondary",
    css: {
      padding: "12px 0px 12px 0px",
      fontSize: "16px"
    }
  }, balance))))), /*#__PURE__*/react.createElement(card/* default.Divider */.ZP.Divider, null), /*#__PURE__*/react.createElement(card/* default.Body */.ZP.Body, {
    css: {
      py: "$8",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react.createElement(esm_text/* default */.Z, {
    h1: true,
    size: 20
  }, "Donations"), /*#__PURE__*/react.createElement(dropdown/* default */.ZP, null, /*#__PURE__*/react.createElement(dropdown/* default.Button */.ZP.Button, {
    css: {
      margin: "10px"
    },
    light: true,
    size: "sm",
    color: "secondary"
  }, token), /*#__PURE__*/react.createElement(dropdown/* default.Menu */.ZP.Menu, {
    "aria-label": "Single selection actions",
    color: "secondary",
    disallowEmptySelection: true,
    selectionMode: "single",
    selectedKeys: token,
    onSelectionChange: setToken
  }, /*#__PURE__*/react.createElement(dropdown/* default.Item */.ZP.Item, {
    key: "MATIC"
  }, "MATIC (Low fee)"), /*#__PURE__*/react.createElement(dropdown/* default.Item */.ZP.Item, {
    key: "BNB"
  }, "BNB (Medium fee)"))), /*#__PURE__*/react.createElement(input/* default */.ZP, {
    size: "sm",
    type: "number",
    onChange: function onChange(e) {
      return handleAmount(e);
    },
    value: amount,
    min: 0.0,
    step: 0.1,
    rounded: true,
    bordered: true,
    label: "".concat(token.entries().next().value[0], " amount"),
    placeholder: "Introduce amount",
    color: "secondary",
    css: {
      marginBottom: "10px"
    }
  }), /*#__PURE__*/react.createElement(popover/* default */.Z, {
    placement: "top"
  }, /*#__PURE__*/react.createElement(popover/* default.Trigger */.Z.Trigger, null, /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    light: true,
    size: "xs",
    color: "secondary",
    css: {
      padding: "12px 0px 12px 0px",
      fontSize: "16px"
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-smile"
  }))), /*#__PURE__*/react.createElement(popover/* default.Content */.Z.Content, null, /*#__PURE__*/react.createElement((dist_default()), {
    onEmojiClick: handleEmoji,
    groupNames: {},
    pickerStyle: {
      boxShadow: "none"
    },
    disableSearchBar: true,
    preload: false
  }))), /*#__PURE__*/react.createElement(esm_textarea/* default */.Z, {
    spellCheck: false,
    onChange: function onChange(event) {
      return handleMessage(event);
    },
    value: message,
    size: "sm",
    bordered: true,
    maxRows: 3,
    color: "secondary",
    maxLength: 50,
    label: "Message (optional)",
    placeholder: "Type something..."
  }), /*#__PURE__*/react.createElement(spacer/* default */.Z, null), /*#__PURE__*/react.createElement(esm_button/* default */.ZP, {
    onPress: function onPress() {
      return !account ? connectWallet() : sendTokens({
        web3: web3,
        account: account,
        token: token.entries().next().value[0],
        network: network,
        changeNetwork: changeNetwork,
        message: message,
        setMessage: setMessage,
        amount: amount,
        setAmount: setAmount,
        balance: balance,
        readBalance: readBalance
      });
    },
    shadow: true,
    color: "secondary",
    size: "xs",
    css: {
      padding: "15px 0px 15px 0px",
      fontSize: "16px"
    }
  }, !account ? "Connect" : "Donate")));
}
;// CONCATENATED MODULE: ./src/views/prediction/index.js
/* provided dependency */ var React = __webpack_require__(67294)["React"];
function Prediction() {
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}
// EXTERNAL MODULE: ./src/styles.css
var styles = __webpack_require__(94089);
;// CONCATENATED MODULE: ./src/index.js









var root = client.createRoot(document.getElementById("root"));
console.log("hi");
root.render( /*#__PURE__*/react.createElement(react_router_dom/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
  path: "/",
  element: /*#__PURE__*/react.createElement(Layout, null)
}, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
  index: true,
  element: /*#__PURE__*/react.createElement(Panel, null)
}), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
  path: "donation",
  element: /*#__PURE__*/react.createElement(Donation, null)
}), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
  path: "prediction",
  element: /*#__PURE__*/react.createElement(Prediction, null)
})))));
src_reportWebVitals();

/***/ }),

/***/ 70564:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * supported unicode variants
 *
 * m: monospace
 * b: bold
 * i: italic
 * c: script (Mathematical Alphanumeric Symbols)
 * g: gothic / fraktur
 * d: double-struck
 * s: sans-serif
 * o: circled text
 * p: parenthesized latin letters
 * q: squared text
 * w: fullwidth
 */
function toUnicodeVariant(str, variant, flags) {
  var offsets = {
    m: [0x1d670, 0x1d7f6],
    b: [0x1d400, 0x1d7ce],
    i: [0x1d434, 0x00030],
    bi: [0x1d468, 0x00030],
    c: [0x0001d49c, 0x00030],
    bc: [0x1d4d0, 0x00030],
    g: [0x1d504, 0x00030],
    d: [0x1d538, 0x1d7d8],
    bg: [0x1d56c, 0x00030],
    s: [0x1d5a0, 0x1d7e2],
    bs: [0x1d5d4, 0x1d7ec],
    is: [0x1d608, 0x00030],
    bis: [0x1d63c, 0x00030],
    o: [0x24b6, 0x2460],
    on: [0x0001f150, 0x2460],
    p: [0x249c, 0x2474],
    q: [0x1f130, 0x00030],
    qn: [0x0001f170, 0x00030],
    w: [0xff21, 0xff10],
    u: [0x2090, 0xff10]
  };
  var variantOffsets = {
    monospace: "m",
    bold: "b",
    italic: "i",
    "bold italic": "bi",
    script: "c",
    "bold script": "bc",
    gothic: "g",
    "gothic bold": "bg",
    doublestruck: "d",
    sans: "s",
    "bold sans": "bs",
    "italic sans": "is",
    "bold italic sans": "bis",
    parenthesis: "p",
    circled: "o",
    "circled negative": "on",
    squared: "q",
    "squared negative": "qn",
    fullwidth: "w"
  }; // special characters (absolute values)

  var special = {
    m: {
      " ": 0x2000,
      "-": 0x2013
    },
    i: {
      h: 0x210e
    },
    g: {
      C: 0x212d,
      H: 0x210c,
      I: 0x2111,
      R: 0x211c,
      Z: 0x2128
    },
    d: {
      C: 0x2102,
      H: 0x210d,
      N: 0x2115,
      P: 0x2119,
      Q: 0x211a,
      R: 0x211d,
      Z: 0x2124
    },
    o: {
      0: 0x24ea,
      1: 0x2460,
      2: 0x2461,
      3: 0x2462,
      4: 0x2463,
      5: 0x2464,
      6: 0x2465,
      7: 0x2466,
      8: 0x2467,
      9: 0x2468
    },
    on: {},
    p: {},
    q: {},
    qn: {},
    w: {}
  }; //support for parenthesized latin letters small cases
  //support for full width latin letters small cases
  //support for circled negative letters small cases
  //support for squared letters small cases
  //support for squared letters negative small cases

  ["p", "w", "on", "q", "qn"].forEach(function (t) {
    for (var i = 97; i <= 122; i++) {
      special[t][String.fromCharCode(i)] = offsets[t][0] + (i - 97);
    }
  });
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";

  var getType = function getType(variant) {
    if (variantOffsets[variant]) return variantOffsets[variant];
    if (offsets[variant]) return variant;
    return "m"; //monospace as default
  };

  var getFlag = function getFlag(flag, flags) {
    if (!flags) return false;
    return flag.split("|").some(function (f) {
      return flags.split(",").indexOf(f) > -1;
    });
  };

  var type = getType(variant);
  var underline = getFlag("underline|u", flags);
  var strike = getFlag("strike|s", flags);
  var result = "";

  var _iterator = _createForOfIteratorHelper(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;
      var index = void 0;
      if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c]);

      if (type && (index = chars.indexOf(c)) > -1) {
        result += String.fromCodePoint(index + offsets[type][0]);
      } else if (type && (index = numbers.indexOf(c)) > -1) {
        result += String.fromCodePoint(index + offsets[type][1]);
      } else {
        result += c;
      }

      if (underline) result += "\u0332"; // add combining underline

      if (strike) result += "\u0336"; // add combining strike
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

if (( false ? 0 : _typeof(module)) === "object" && module && _typeof(module.exports) === "object") {
  module.exports = toUnicodeVariant;
}

/***/ }),

/***/ 20028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: #5993ff !important;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nmain {\n  min-height: 100vh;\n  padding: 10px 10px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nsection {\n  width: 100%;\n  color: #fff;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94089:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20028);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      20028,
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20028);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 88677:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 62808:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 46601:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 89214:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 71922:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2363:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 96419:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 56353:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 27790:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 69386:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 31616:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 29120:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 46586:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 6567:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 69862:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 40964:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 71408:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 23646:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 82604:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 48726:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 55896:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 87500:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "Panel." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "3f3d34c325bada1e1340"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "partner3:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			894: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatepartner3"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpartner3"] = self["webpackChunkpartner3"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [751], function() { return __webpack_require__(86989); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;