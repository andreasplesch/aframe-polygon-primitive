/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}
	var getMeshMixin = __webpack_require__(1);

	AFRAME.registerPrimitive('a-polygon', AFRAME.utils.extendDeep({}, getMeshMixin(), 
		{
	  defaultAttributes: {
	    faceset: {
	      vertices: '1 0 0, -0.5 0 0.866, -0.5 0 -0.866'
	    }
	  },

	  mappings: {
	    sides: 'faceset.vertices',
	  },
	  
	  transforms: {
			sides: function(sides) {
				var vts = [];
				sides = Math.max(3, sides);
				for (var a = 0; a < 2 * Math.PI; a += 2 * Math.PI/sides) {
					vts.push( [ Math.cos(a), 0 , Math.sin(a) ].join(" ") );
				}
				return vts.join(",");
			}
	  }
	  
	}));


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Common mesh defaults, mappings, and transforms.
	 */
	module.exports = function getMeshMixin () {
	  return {
	    defaultAttributes: {
	      material: { }
	    },

	    mappings: {
	      color: 'material.color',
	      metalness: 'material.metalness',
	      opacity: 'material.opacity',
	      repeat: 'material.repeat',
	      roughness: 'material.roughness',
	      shader: 'material.shader',
	      side: 'material.side',
	      src: 'material.src',
	      transparent: 'material.transparent'
	    },

	    transforms: {
	      src: function (value) {
	        // Selector.
	        if (value[0] === '#') { return value; }
	        // Inline url().
	        return 'url(' + value + ')';
	      }
	    }
	  };
	};


/***/ }
/******/ ]);