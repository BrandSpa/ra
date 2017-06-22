webpackJsonp([0],{

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(68);

var _react2 = _interopRequireDefault(_react);

var _reactMultipleRender = __webpack_require__(197);

var _reactMultipleRender2 = _interopRequireDefault(_reactMultipleRender);

var _slider = __webpack_require__(483);

var _slider2 = _interopRequireDefault(_slider);

var _sliderImgs = __webpack_require__(484);

var _sliderImgs2 = _interopRequireDefault(_sliderImgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactMultipleRender2.default)(_slider2.default, '.ra-slider');

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token (14:31)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m\t\t\u001b[36mconst\u001b[39m viewportStyle \u001b[33m=\u001b[39m {\n \u001b[90m 13 | \u001b[39m\t\t\twidth\u001b[33m:\u001b[39m \u001b[32m`${100 * slides.length}%`\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m\t\t\ttransform\u001b[33m:\u001b[39m \u001b[32m`translate3d( -${}%, 0, 0 )`\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m    | \u001b[39m\t\t\t                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m\t\t\ttransition\u001b[33m:\u001b[39m \u001b[32m'transform 500ms'\u001b[39m\n \u001b[90m 16 | \u001b[39m\t\t}\u001b[33m;\u001b[39m\n \u001b[90m 17 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(68);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderImgs = function (_Component) {
	_inherits(SliderImgs, _Component);

	function SliderImgs() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SliderImgs);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderImgs.__proto__ || Object.getPrototypeOf(SliderImgs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			slide: 1
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SliderImgs, [{
		key: 'render',
		value: function render() {
			var slides = this.props.slides;

			var slideStyle = {
				height: '100vh',
				width: '100%',
				position: 'absolute',
				top: '0'
			};

			return _react2.default.createElement(
				'div',
				null,
				slides.map(function (slide) {
					return _react2.default.createElement(
						'div',
						{ style: { position: 'relative', height: '100vh' } },
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.bg_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.model_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: slideStyle },
							_react2.default.createElement('img', { src: slide.object_img, style: { width: '100%' } })
						),
						_react2.default.createElement(
							'div',
							{ style: { width: '30%', position: 'absolute', left: '0' } },
							_react2.default.createElement(
								'h2',
								null,
								slide.slide_content
							)
						)
					);
				})
			);
		}
	}]);

	return SliderImgs;
}(_react.Component);

exports.default = SliderImgs;

/***/ })

},[482]);