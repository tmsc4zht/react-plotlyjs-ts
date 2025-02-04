"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlotlyChartFC = void 0;
var plotly_js_1 = __importDefault(require("plotly.js"));
var react_1 = __importStar(require("react"));
/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
var PlotlyChart = /** @class */ (function (_super) {
    __extends(PlotlyChart, _super);
    function PlotlyChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = null;
        _this.resize = function () {
            if (_this.container) {
                plotly_js_1.default.Plots.resize(_this.container);
            }
        };
        _this.draw = function (props) { return __awaiter(_this, void 0, void 0, function () {
            var data, layout, config, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = props.data, layout = props.layout, config = props.config;
                        if (!this.container) return [3 /*break*/, 2];
                        // plotly.react will not destroy the old plot: https://plot.ly/javascript/plotlyjs-function-reference/#plotlyreact
                        _a = this;
                        return [4 /*yield*/, plotly_js_1.default.react(this.container, data, Object.assign({}, layout), config)];
                    case 1:
                        // plotly.react will not destroy the old plot: https://plot.ly/javascript/plotlyjs-function-reference/#plotlyreact
                        _a.container = _b.sent();
                        this.attachListeners();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    PlotlyChart.prototype.attachListeners = function () {
        if (this.container == null) {
            return;
        }
        if (this.props.onAfterExport) {
            this.container.on("plotly_afterexport", this.props.onAfterExport);
        }
        if (this.props.onAfterPlot) {
            this.container.on("plotly_afterplot", this.props.onAfterPlot);
        }
        if (this.props.onAnimated) {
            this.container.on("plotly_animated", this.props.onAnimated);
        }
        if (this.props.onAnimatingFrame) {
            this.container.on("plotly_animatingframe", this.props.onAnimatingFrame);
        }
        if (this.props.onAnimationInterrupted) {
            this.container.on("plotly_animationinterrupted", this.props.onAnimationInterrupted);
        }
        if (this.props.onAutoSize) {
            this.container.on("plotly_autosize", this.props.onAutoSize);
        }
        if (this.props.onBeforeExport) {
            this.container.on("plotly_beforeexport", this.props.onBeforeExport);
        }
        // did not find onButtonClicked in @types/plotly.js?
        // if (this.props.onButtonClicked) {
        //   this.container!.on('plotly_buttonclicked', this.props.onButtonClicked);
        // }
        if (this.props.onClick) {
            this.container.removeAllListeners("plotly_click");
            this.container.on("plotly_click", this.props.onClick);
        }
        if (this.props.onClickAnnotation) {
            this.container.removeAllListeners("plotly_clickannotation");
            this.container.on("plotly_clickannotation", this.props.onClickAnnotation);
        }
        if (this.props.onDeselect) {
            this.container.removeAllListeners("plotly_deselect");
            this.container.on("plotly_deselect", this.props.onDeselect);
        }
        if (this.props.onDoubleClick) {
            this.container.removeAllListeners("plotly_doubleclick");
            this.container.on("plotly_doubleclick", this.props.onDoubleClick);
        }
        if (this.props.onFramework) {
            this.container.removeAllListeners("plotly_framework");
            this.container.on("plotly_framework", this.props.onFramework);
        }
        if (this.props.onHover) {
            this.container.removeAllListeners("plotly_hover");
            this.container.on("plotly_hover", this.props.onHover);
        }
        if (this.props.onLegendClick) {
            this.container.removeAllListeners("plotly_legendclick");
            this.container.on("plotly_legendclick", this.props.onLegendClick);
        }
        if (this.props.onLegendDoubleClick) {
            this.container.removeAllListeners("plotly_legenddoubleclick");
            this.container.on("plotly_legenddoubleclick", this.props.onLegendDoubleClick);
        }
        if (this.props.onRelayout) {
            this.container.removeAllListeners("plotly_relayout");
            this.container.on("plotly_relayout", this.props.onRelayout);
        }
        if (this.props.onRestyle) {
            this.container.removeAllListeners("plotly_restyle");
            this.container.on("plotly_restyle", this.props.onRestyle);
        }
        if (this.props.onRedraw) {
            this.container.removeAllListeners("plotly_redraw");
            this.container.on("plotly_redraw", this.props.onRedraw);
        }
        if (this.props.onSelecting) {
            this.container.removeAllListeners("plotly_selecting");
            this.container.on("plotly_selecting", this.props.onSelecting);
        }
        if (this.props.onSliderChange) {
            this.container.removeAllListeners("plotly_sliderchange");
            this.container.on("plotly_sliderchange", this.props.onSliderChange);
        }
        if (this.props.onSliderEnd) {
            this.container.removeAllListeners("plotly_sliderend");
            this.container.on("plotly_sliderend", this.props.onSliderEnd);
        }
        if (this.props.onSliderStart) {
            this.container.removeAllListeners("plotly_sliderstart");
            this.container.on("plotly_sliderstart", this.props.onSliderStart);
        }
        if (this.props.onTransitioning) {
            this.container.removeAllListeners("plotly_transitioning");
            this.container.on("plotly_transitioning", this.props.onTransitioning);
        }
        if (this.props.onTransitionInterrupted) {
            this.container.removeAllListeners("plotly_transitioninterrupted");
            this.container.on("plotly_transitioninterrupted", this.props.onTransitionInterrupted);
        }
        if (this.props.onUnHover) {
            this.container.removeAllListeners("plotly_unhover");
            this.container.on("plotly_unhover", this.props.onUnHover);
        }
        if (this.props.onEvent) {
            this.container.removeAllListeners("plotly_event");
            this.container.on("plotly_event", this.props.onEvent);
        }
        window.addEventListener("resize", this.resize);
    };
    PlotlyChart.prototype.componentDidUpdate = function (prevProps) {
        this.draw(prevProps);
    };
    PlotlyChart.prototype.componentDidMount = function () {
        this.draw(this.props);
    };
    PlotlyChart.prototype.componentWillUnmount = function () {
        if (this.container) {
            plotly_js_1.default.purge(this.container);
        }
        window.removeEventListener("resize", this.resize);
    };
    PlotlyChart.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, layout = _a.layout, config = _a.config, onAfterExport = _a.onAfterExport, onAfterPlot = _a.onAfterPlot, onAnimated = _a.onAnimated, onAnimatingFrame = _a.onAnimatingFrame, onAnimationInterrupted = _a.onAnimationInterrupted, onAutoSize = _a.onAutoSize, onBeforeExport = _a.onBeforeExport, onClick = _a.onClick, onClickAnnotation = _a.onClickAnnotation, onDeselect = _a.onDeselect, onDoubleClick = _a.onDoubleClick, onFramework = _a.onFramework, onHover = _a.onHover, onLegendClick = _a.onLegendClick, onLegendDoubleClick = _a.onLegendDoubleClick, onRelayout = _a.onRelayout, onRestyle = _a.onRestyle, onRedraw = _a.onRedraw, onSelected = _a.onSelected, onSelecting = _a.onSelecting, onSliderChange = _a.onSliderChange, onSliderEnd = _a.onSliderEnd, onSliderStart = _a.onSliderStart, onTransitioning = _a.onTransitioning, onTransitionInterrupted = _a.onTransitionInterrupted, onUnHover = _a.onUnHover, onEvent = _a.onEvent, other = __rest(_a, ["data", "layout", "config", "onAfterExport", "onAfterPlot", "onAnimated", "onAnimatingFrame", "onAnimationInterrupted", "onAutoSize", "onBeforeExport", "onClick", "onClickAnnotation", "onDeselect", "onDoubleClick", "onFramework", "onHover", "onLegendClick", "onLegendDoubleClick", "onRelayout", "onRestyle", "onRedraw", "onSelected", "onSelecting", "onSliderChange", "onSliderEnd", "onSliderStart", "onTransitioning", "onTransitionInterrupted", "onUnHover", "onEvent"]);
        return (react_1.default.createElement("div", __assign({}, other, { ref: function (node) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(node && !this.container)) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, plotly_js_1.default.newPlot(node, data, Object.assign({}, layout), config)];
                        case 1:
                            _a.container = _b.sent();
                            this.attachListeners();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); } })));
    };
    return PlotlyChart;
}(react_1.default.Component));
var PlotlyChartFC = function (props) {
    var container = (0, react_1.useRef)(null);
    var plot = (0, react_1.useRef)(null);
    var firstRender = (0, react_1.useRef)(true);
    var resize = function () {
        if (container.current != null) {
            plotly_js_1.default.Plots.resize(container.current);
        }
    };
    // onMount and unMount
    (0, react_1.useEffect)(function () {
        if (container.current != null) {
            plotly_js_1.default.newPlot(container.current, props.data, props.layout, props.config)
                .then(function (p) {
                plot.current = p;
            })
                .catch(function (e) { return console.log(e); });
        }
        addEventListener("resize", resize);
        var p = container.current;
        return function () {
            if (p != null) {
                plotly_js_1.default.purge(p);
            }
            removeEventListener("resize", resize);
        };
    }, []);
    // data layout config update
    (0, react_1.useEffect)(function () {
        if (container.current == null) {
            return;
        }
        if (firstRender.current == true) {
            firstRender.current = false;
            return;
        }
        plotly_js_1.default.react(container.current, props.data, props.layout, props.config).catch(function (e) { return console.log(e); });
    }, [props.data, props.layout, props.config]);
    // listeners
    (0, react_1.useEffect)(function () {
        if (plot.current == null) {
            return;
        }
        if (props.onAfterExport) {
            plot.current.on("plotly_afterexport", props.onAfterExport);
        }
        if (props.onAfterPlot) {
            plot.current.on("plotly_afterplot", props.onAfterPlot);
        }
        if (props.onAnimated) {
            plot.current.on("plotly_animated", props.onAnimated);
        }
        if (props.onAnimatingFrame) {
            plot.current.on("plotly_animatingframe", props.onAnimatingFrame);
        }
        if (props.onAnimationInterrupted) {
            plot.current.on("plotly_animationinterrupted", props.onAnimationInterrupted);
        }
        if (props.onAutoSize) {
            plot.current.on("plotly_autosize", props.onAutoSize);
        }
        if (props.onBeforeExport) {
            plot.current.on("plotly_beforeexport", props.onBeforeExport);
        }
        // did not find onButtonClicked in @types/plotly.js?
        // if (props.onButtonClicked) {
        //   plot.current!.on('plotly_buttonclicked', props.onButtonClicked);
        // }
        if (props.onClick) {
            plot.current.removeAllListeners("plotly_click");
            plot.current.on("plotly_click", props.onClick);
        }
        if (props.onClickAnnotation) {
            plot.current.removeAllListeners("plotly_clickannotation");
            plot.current.on("plotly_clickannotation", props.onClickAnnotation);
        }
        if (props.onDeselect) {
            plot.current.removeAllListeners("plotly_deselect");
            plot.current.on("plotly_deselect", props.onDeselect);
        }
        if (props.onDoubleClick) {
            plot.current.removeAllListeners("plotly_doubleclick");
            plot.current.on("plotly_doubleclick", props.onDoubleClick);
        }
        if (props.onFramework) {
            plot.current.removeAllListeners("plotly_framework");
            plot.current.on("plotly_framework", props.onFramework);
        }
        if (props.onHover) {
            plot.current.removeAllListeners("plotly_hover");
            plot.current.on("plotly_hover", props.onHover);
        }
        if (props.onLegendClick) {
            plot.current.removeAllListeners("plotly_legendclick");
            plot.current.on("plotly_legendclick", props.onLegendClick);
        }
        if (props.onLegendDoubleClick) {
            plot.current.removeAllListeners("plotly_legenddoubleclick");
            plot.current.on("plotly_legenddoubleclick", props.onLegendDoubleClick);
        }
        if (props.onRelayout) {
            plot.current.removeAllListeners("plotly_relayout");
            plot.current.on("plotly_relayout", props.onRelayout);
        }
        if (props.onRestyle) {
            plot.current.removeAllListeners("plotly_restyle");
            plot.current.on("plotly_restyle", props.onRestyle);
        }
        if (props.onRedraw) {
            plot.current.removeAllListeners("plotly_redraw");
            plot.current.on("plotly_redraw", props.onRedraw);
        }
        if (props.onSelecting) {
            plot.current.removeAllListeners("plotly_selecting");
            plot.current.on("plotly_selecting", props.onSelecting);
        }
        if (props.onSliderChange) {
            plot.current.removeAllListeners("plotly_sliderchange");
            plot.current.on("plotly_sliderchange", props.onSliderChange);
        }
        if (props.onSliderEnd) {
            plot.current.removeAllListeners("plotly_sliderend");
            plot.current.on("plotly_sliderend", props.onSliderEnd);
        }
        if (props.onSliderStart) {
            plot.current.removeAllListeners("plotly_sliderstart");
            plot.current.on("plotly_sliderstart", props.onSliderStart);
        }
        if (props.onTransitioning) {
            plot.current.removeAllListeners("plotly_transitioning");
            plot.current.on("plotly_transitioning", props.onTransitioning);
        }
        if (props.onTransitionInterrupted) {
            plot.current.removeAllListeners("plotly_transitioninterrupted");
            plot.current.on("plotly_transitioninterrupted", props.onTransitionInterrupted);
        }
        if (props.onUnHover) {
            plot.current.removeAllListeners("plotly_unhover");
            plot.current.on("plotly_unhover", props.onUnHover);
        }
        if (props.onEvent) {
            plot.current.removeAllListeners("plotly_event");
            plot.current.on("plotly_event", props.onEvent);
        }
    }, [
        props.onAfterExport,
        props.onAfterPlot,
        props.onAnimated,
        props.onAnimatingFrame,
        props.onAnimationInterrupted,
        props.onAutoSize,
        props.onBeforeExport,
        // onButtonClicked,
        props.onClick,
        props.onClickAnnotation,
        props.onDeselect,
        props.onDoubleClick,
        props.onFramework,
        props.onHover,
        props.onLegendClick,
        props.onLegendDoubleClick,
        props.onRelayout,
        props.onRestyle,
        props.onRedraw,
        props.onSelected,
        props.onSelecting,
        props.onSliderChange,
        props.onSliderEnd,
        props.onSliderStart,
        props.onTransitioning,
        props.onTransitionInterrupted,
        props.onUnHover,
        props.onEvent,
        props.onBeforePlot,
    ]);
    return react_1.default.createElement("div", { ref: container });
};
exports.PlotlyChartFC = PlotlyChartFC;
exports.default = PlotlyChart;
