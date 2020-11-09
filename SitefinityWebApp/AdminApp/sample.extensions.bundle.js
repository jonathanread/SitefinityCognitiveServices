(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample.extensions.bundle1000"],{

/***/ "ext_mod_id_1604946726719":
/*!***********************************!*\
  !*** ./src/__extensions_index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var text_analysis_1 = __webpack_require__(/*! ./text-analysis */ "ext_mod_id_1604946726719_2");
sitefinityExtensionsStore.addExtensionModule(text_analysis_1.TextAnalysisToolbarExtenderModule);


/***/ }),

/***/ "ext_mod_id_1604946726719_1":
/*!*****************************************!*\
  !*** multi ./src/__extensions_index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\SitefinityCognitiveServices\sitefinity-admin-app-extensions\src\__extensions_index.ts */"ext_mod_id_1604946726719");


/***/ }),

/***/ "ext_mod_id_1604946726719_10":
/*!******************************************************!*\
  !*** ./src/text-analysis/text-analysis.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "ext_mod_id_1604946726719_3");
var core_1 = __webpack_require__(/*! @angular/core */ "ext_mod_id_1604946726719_5");
var http_1 = __webpack_require__(/*! @angular/common/http */ "ext_mod_id_1604946726719_7");
var rxjs_1 = __webpack_require__(/*! rxjs */ "ext_mod_id_1604946726719_11");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "ext_mod_id_1604946726719_12");
var TextAnalysisComponent = /** @class */ (function () {
    function TextAnalysisComponent(changeDetectorRef, http) {
        this.changeDetectorRef = changeDetectorRef;
        this.http = http;
        this.isVisible = false;
    }
    TextAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_1.fromEvent(this.editorHost.context, "focusin")
            .pipe()
            .subscribe(function () {
            if (!_this.isVisible) {
                _this.isVisible = true;
                _this.changeDetectorRef.detectChanges();
            }
        });
    };
    TextAnalysisComponent.prototype.handleAnalyzeClick = function (event) {
        var _this = this;
        var text = this.getKendoEditorStrippedValue();
        if (!text) {
            return;
        }
        this.getHashtags(text).subscribe(function (hashtags) {
            _this.hashtags = hashtags;
            _this.changeDetectorRef.detectChanges();
        });
        this.getSentiment(text).subscribe(function (sentiment) {
            _this.sentiment = sentiment;
            _this.changeDetectorRef.detectChanges();
        });
        this.getSummary(text, text, 1).subscribe(function (summary) {
            _this.summary = summary;
            _this.changeDetectorRef.detectChanges();
        });
        this.getCategories(text).subscribe(function (categories) {
            _this.categories = categories;
            _this.changeDetectorRef.detectChanges();
        });
    };
    TextAnalysisComponent.prototype.getKendoEditorStrippedValue = function () {
        var div = document.createElement("div");
        div.innerHTML = this.editorHost.getKendoEditor().value();
        var strippedText = div.innerText.replace(/[,.!?:;](?=\S)/g, '$& ');
        return strippedText;
    };
    TextAnalysisComponent.prototype.getHashtags = function (text) {
        var url = "/webapi/CognitiveServices/Hashtags";
        return this.http
            .post(url, JSON.stringify({ "Text": text }), { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) })
            .pipe(operators_1.map(function (result) { return result["hashtags"]; }));
    };
    TextAnalysisComponent.prototype.getSentiment = function (text) {
        var url = "/webapi/CognitiveServices/Sentiment";
        return this.http
            .post(url, JSON.stringify({ "Text": text }), { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) });
    };
    TextAnalysisComponent.prototype.getSummary = function (title, text, sentencesNumber) {
        var url = "/webapi/CognitiveServices/Summarize";
        return this.http
            .post(url, JSON.stringify({ "Title": title, "Text": text, "SentencesNumber": sentencesNumber }), { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) })
            .pipe(operators_1.map(function (result) { return result["Sentences"].join(" "); }));
    };
    TextAnalysisComponent.prototype.getCategories = function (text) {
        var url = "/webapi/CognitiveServices/Classify";
        return this.http
            .post(url, JSON.stringify({ "Text": text, "Taxonomy": "iptc-subjectcode" }), { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) })
            .pipe(operators_1.map(function (result) { return result["Categories"]; }));
    };
    TextAnalysisComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: http_1.HttpClient }
    ]; };
    TextAnalysisComponent = tslib_1.__decorate([
        core_1.Component({
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./text-analysis.component.html */ "ext_mod_id_1604946726719_13")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./text-analysis.css */ "ext_mod_id_1604946726719_14")).default]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            http_1.HttpClient])
    ], TextAnalysisComponent);
    return TextAnalysisComponent;
}());
exports.TextAnalysisComponent = TextAnalysisComponent;


/***/ }),

/***/ "ext_mod_id_1604946726719_11":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/rxjs/_esm5/index.js from dll-reference adminapp ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/rxjs/_esm5/index.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_12":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/rxjs/_esm5/operators/index.js from dll-reference adminapp ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/rxjs/_esm5/operators/index.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_13":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/text-analysis/text-analysis.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isVisible\" class=\"text-analysis-sidebar\">\r\n    <h2>Text Analysis</h2>\r\n\r\n    <div *ngIf=\"sentiment\">\r\n        <h3 class=\"-sf-mt-xs\">Sentiment</h3>\r\n        <div>Polarity: <strong>{{sentiment.Polarity}}</strong> ({{sentiment.polarity_confidence * 100 | number:'1.0'}}%)</div>\r\n        <div>Subjectivity: <strong>{{sentiment.Subjectivity}}</strong> ({{sentiment.subjectivity_confidence * 100 | number:'1.0'}}%)</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"summary\">\r\n        <h3 class=\"-sf-mt-xs\">Suggested Summary</h3>\r\n        <div>{{summary}}</div>\r\n    </div>\r\n\r\n    <div *ngIf=\"hashtags && hashtags.length > 0\">\r\n        <h3 class=\"-sf-mt-xs\">Suggested Hashtags</h3>\r\n        <div *ngFor=\"let hashtag of hashtags\">\r\n            {{hashtag}}\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"categories && categories.length > 0\">\r\n        <h3 class=\"-sf-mt-xs\">Suggested Categories</h3>\r\n        <div *ngFor=\"let category of categories\">\r\n            {{category.Label}}\r\n        </div>\r\n    </div>\r\n\r\n    <button (click)=\"handleAnalyzeClick($event)\" class=\"sf-button -action -sf-mt-xs\">Analyze text</button>\r\n</div>");

/***/ }),

/***/ "ext_mod_id_1604946726719_14":
/*!*********************************************!*\
  !*** ./src/text-analysis/text-analysis.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./text-analysis.css */ "ext_mod_id_1604946726719_15");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "ext_mod_id_1604946726719_15":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/text-analysis/text-analysis.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "ext_mod_id_1604946726719_16");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-analysis-sidebar {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -300px;\r\n    width: 260px;\r\n    padding-left: 20px;\r\n    border-left: 1px solid #e4e4e4;\r\n    font-size: 1.3rem;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ext_mod_id_1604946726719_16":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "ext_mod_id_1604946726719_17":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/text-analysis/toolbar.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "ext_mod_id_1604946726719_18");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./toolbar.css */ "ext_mod_id_1604946726719_19");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "ext_mod_id_1604946726719_18":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "ext_mod_id_1604946726719_19":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/text-analysis/toolbar.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "ext_mod_id_1604946726719_16");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".k-editor-toolbar .k-i-text-analysis::before {\r\n    /* Kendo UI Icons: https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web */\r\n    content: \"\\e13d\";\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ext_mod_id_1604946726719_2":
/*!************************************!*\
  !*** ./src/text-analysis/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "ext_mod_id_1604946726719_3");
var core_1 = __webpack_require__(/*! @angular/core */ "ext_mod_id_1604946726719_5");
var common_1 = __webpack_require__(/*! @angular/common */ "ext_mod_id_1604946726719_6");
var http_1 = __webpack_require__(/*! @angular/common/http */ "ext_mod_id_1604946726719_7");
var text_analysis_toolbar_item_provider_1 = __webpack_require__(/*! ./text-analysis-toolbar-item-provider */ "ext_mod_id_1604946726719_8");
var text_analysis_component_1 = __webpack_require__(/*! ./text-analysis.component */ "ext_mod_id_1604946726719_10");
var TextAnalysisToolbarExtenderModule = /** @class */ (function () {
    function TextAnalysisToolbarExtenderModule() {
    }
    TextAnalysisToolbarExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                text_analysis_component_1.TextAnalysisComponent
            ],
            providers: [
                text_analysis_toolbar_item_provider_1.TEXT_ANALYSIS_TOOLBAR_ITEM_PROVIDER
            ],
            entryComponents: [
                text_analysis_component_1.TextAnalysisComponent
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule
            ]
        })
    ], TextAnalysisToolbarExtenderModule);
    return TextAnalysisToolbarExtenderModule;
}());
exports.TextAnalysisToolbarExtenderModule = TextAnalysisToolbarExtenderModule;


/***/ }),

/***/ "ext_mod_id_1604946726719_3":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/tslib/tslib.es6.js from dll-reference adminapp ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/tslib/tslib.es6.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_4":
/*!***************************!*\
  !*** external "adminapp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = adminapp;

/***/ }),

/***/ "ext_mod_id_1604946726719_5":
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js from dll-reference adminapp ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_6":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js from dll-reference adminapp ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_7":
/*!*******************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js from dll-reference adminapp ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js')

/***/ }),

/***/ "ext_mod_id_1604946726719_8":
/*!******************************************************************!*\
  !*** ./src/text-analysis/text-analysis-toolbar-item-provider.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "ext_mod_id_1604946726719_3");
var core_1 = __webpack_require__(/*! @angular/core */ "ext_mod_id_1604946726719_5");
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ "ext_mod_id_1604946726719_9");
var text_analysis_component_1 = __webpack_require__(/*! ./text-analysis.component */ "ext_mod_id_1604946726719_10");
__webpack_require__(/*! style-loader!css-loader!./toolbar.css */ "ext_mod_id_1604946726719_17");
var TextAnalysisToolBarItemProvider = /** @class */ (function () {
    function TextAnalysisToolBarItemProvider(componentFactoryResolver, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * The method that gets invoked when the editor constructs the toolbar actions.
     *
     * @param {*} editorHost The Kendo's editor object.
     * @returns {ToolBarItem[]} The custom toolbar items that will be added to the Kendo's toolbar.
     * @memberof TextAnalysisToolBarItemsProvider
     */
    TextAnalysisToolBarItemProvider.prototype.getToolBarItems = function (editorHost) {
        var _this = this;
        var textAnalyticsNode = document.createElement("div");
        textAnalyticsNode.id = "text-analytics";
        if (editorHost.context) {
            editorHost.context.parentElement.appendChild(textAnalyticsNode);
        }
        else {
            editorHost.parentElement.appendChild(textAnalyticsNode);
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(text_analysis_component_1.TextAnalysisComponent);
        this.textAnalysisComponent = componentFactory.create(this.injector, [], textAnalyticsNode);
        this.textAnalysisComponent.instance.editorHost = editorHost;
        this.textAnalysisComponent.changeDetectorRef.detectChanges();
        var TEXT_ANALYSIS_TOOLBAR_ITEM = {
            name: "text-analysis",
            tooltip: "Text Analysis",
            ordinal: 999,
            exec: function () {
                _this.textAnalysisComponent.instance.isVisible = !_this.textAnalysisComponent.instance.isVisible;
                _this.textAnalysisComponent.changeDetectorRef.detectChanges();
            }
        };
        return [TEXT_ANALYSIS_TOOLBAR_ITEM];
    };
    /**
     * If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
     * Otherwise return an empty array.
     * Example: return [ "embed" ];
     * The above code will remove the embed toolbar item from the editor.
     *
     * @returns {string[]}
     * @memberof SwitchTextDirectionProvider
     */
    TextAnalysisToolBarItemProvider.prototype.getToolBarItemsNamesToRemove = function () {
        return [];
    };
    /**
     * This gives access to the Kendo UI Editor configuration object
     * that is used to initialize the editor upon creation
     * Kendo UI Editor configuration Overiview documentation -> https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#configuration
     *
     * @param {*} configuration
     * @returns The modified configuration.
     * @memberof SwitchTextDirectionProvider
     */
    TextAnalysisToolBarItemProvider.prototype.configureEditor = function (configuration) {
        return configuration;
    };
    TextAnalysisToolBarItemProvider.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, decorators: [{ type: core_1.Inject, args: [core_1.ComponentFactoryResolver,] }] },
        { type: core_1.Injector, decorators: [{ type: core_1.Inject, args: [core_1.Injector,] }] }
    ]; };
    TextAnalysisToolBarItemProvider = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Inject(core_1.ComponentFactoryResolver)),
        tslib_1.__param(1, core_1.Inject(core_1.Injector)),
        tslib_1.__metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.Injector])
    ], TextAnalysisToolBarItemProvider);
    return TextAnalysisToolBarItemProvider;
}());
/**
 * The provider registration for Angular's DI
 */
exports.TEXT_ANALYSIS_TOOLBAR_ITEM_PROVIDER = {
    multi: true,
    provide: v1_1.TOOLBARITEMS_TOKEN,
    useClass: TextAnalysisToolBarItemProvider
};


/***/ }),

/***/ "ext_mod_id_1604946726719_9":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js from dll-reference adminapp ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __iris_require__('./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js')

/***/ })

},[["ext_mod_id_1604946726719_1","runtime"]]]);
//# sourceMappingURL=sample.extensions.bundle.js.map