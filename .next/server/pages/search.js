"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(271);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(266);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(802);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/InfoCard.js






function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg treansition duration-200 ease-out first: border-t",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        className: "rounded-2xl",
        layout: "fill",
        objectFit: "cover",
        src: img
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col flex-grow pl-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: location
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* HeartIcon */.h_8, {
          className: "h-7 cursor-pointer"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-xl",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "border-b w-10 pt-2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "pt-2 text-sm text-gray-500 flex-grow",
        children: description
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-end",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* StarIcon */.r7p, {
            className: "h-5 text-red-400"
          }), star]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-lg lg:text-2xl font-semibold pb-2",
            children: price
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-right font-extralight",
            children: total
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const components_InfoCard = (InfoCard);
;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "geolib"
const external_geolib_namespaceObject = require("geolib");
;// CONCATENATED MODULE: ./components/Map.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Map({
  searchResults
}) {
  // for the pop-up marker, passing the object
  const {
    0: selectedLocation,
    1: setSelectedLocation
  } = (0,external_react_.useState)({}); // Transform the search result into latitude and longitude for geolib
  // { latitude: 52.516172, longitude: 13.124567}

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  })); // Center of the searched results using geoLib

  const center = (0,external_geolib_namespaceObject.getCenter)(coordinates);
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_map_gl_default()), _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/picozzimichele/cktb8m68o61g917ofy0jx1q8j",
    mapboxApiAccessToken: "pk.eyJ1IjoicGljb3p6aW1pY2hlbGUiLCJhIjoiY2t0YjZtZmpuMXQ0dDJ2bjloM3ZxM2R2dyJ9.vpLuQlobE_kubcyl02VIdg"
  }, viewport), {}, {
    onViewportChange: nextViewport => setViewport(nextViewport),
    children: searchResults.map(result => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Marker, {
        longitude: result.long,
        latitude: result.lat,
        offsetLeft: 0,
        offsetTop: 0,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          onClick: () => setSelectedLocation(result),
          className: "cursor-pointer text-2xl animate-bounce",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* LocationMarkerIcon */.IS8, {
            className: "h-6 text-red-500"
          })
        })
      }), selectedLocation.long === result.long ? /*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_namespaceObject.Popup, {
        onClose: () => setSelectedLocation({}),
        closeOnClick: true,
        latitude: result.lat,
        longitude: result.long,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: result.title
        })
      }) : false]
    }, result.long))
  }));
}

/* harmony default export */ const components_Map = (Map);
;// CONCATENATED MODULE: ./pages/search.js









function Search({
  searchResults
}) {
  const router = (0,client_router.useRouter)();
  const {
    location,
    startDate,
    endDate,
    numberOfGuests
  } = router.query;
  const formattedStartDate = (0,external_date_fns_namespaceObject.format)(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = (0,external_date_fns_namespaceObject.format)(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      placeholder: `${location} | ${range} | ${numberOfGuests} guest${numberOfGuests > 1 && 's' || ''}`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
        className: "flex-grow pt-14 px-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-xs",
          children: ["300+ Stays - ", range, " - for ", numberOfGuests, " guest", numberOfGuests > 1 && 's' || '']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: ["Stays in ", location]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Cancellation Flexibility"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Type of Place"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Price"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "Rooms and Beds"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "button",
            children: "More filters"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col",
          children: searchResults.map(({
            img,
            location,
            title,
            description,
            star,
            price,
            total
          }) => /*#__PURE__*/jsx_runtime_.jsx(components_InfoCard, {
            img: img,
            location: location,
            title: title,
            description: description,
            star: star,
            price: price,
            total: total
          }, img))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("section", {
        className: "hidden xl:inline-flex xl:min-w-[600px]",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Map, {
          searchResults: searchResults
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}

/* harmony default export */ const search = (Search); //context can be passed for dynamic rendering info

async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
  return {
    props: {
      searchResults
    }
  };
}

/***/ }),

/***/ 511:
/***/ ((module) => {

module.exports = require("@react-hook/media-query");

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [890,49,674], () => (__webpack_exec__(289)));
module.exports = __webpack_exports__;

})();