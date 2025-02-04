import Plotly, { PlotlyHTMLElement } from "plotly.js";
import React, { ReactNode, useEffect, useRef } from "react";

export interface IPlotlyChartProps {
  config?: Partial<Plotly.Config>;
  data: Array<Plotly.Data>;
  layout?: Partial<Plotly.Layout>;
  style?: any;
  onAfterExport?: () => void;
  onAfterPlot?: () => void;
  onAnimated?: () => void;
  onAnimatingFrame?: (event: Plotly.FrameAnimationEvent) => void;
  onAnimationInterrupted?: () => void;
  onAutoSize?: () => void;
  onBeforeExport?: () => void;
  // did not find onButtonClicked in @types/plotly.js?
  // onButtonClicked?: (event: plotly.ButtonClickEvent) => void;
  onClick?: (event: Plotly.PlotMouseEvent) => void;
  onClickAnnotation?: (event: Plotly.ClickAnnotationEvent) => void;
  onDeselect?: () => void;
  onDoubleClick?: () => void;
  onFramework?: () => void;
  onHover?: (event: Plotly.PlotMouseEvent) => void;
  onLegendClick?: (event: Plotly.LegendClickEvent) => boolean;
  onLegendDoubleClick?: (event: Plotly.LegendClickEvent) => boolean;
  onRelayout?: (event: Plotly.PlotRelayoutEvent) => void;
  onRestyle?: (evemt: Plotly.PlotRestyleEvent) => void;
  onRedraw?: () => void;
  onSelected?: (event: Plotly.PlotSelectionEvent) => void;
  onSelecting?: (event: Plotly.PlotSelectionEvent) => void;
  onSliderChange?: (event: Plotly.SliderChangeEvent) => void;
  onSliderEnd?: (event: Plotly.SliderEndEvent) => void;
  onSliderStart?: (event: Plotly.SliderEndEvent) => void;
  onTransitioning?: () => void;
  onTransitionInterrupted?: () => void;
  onUnHover?: (event: Plotly.PlotMouseEvent) => void;
  onEvent?: (data: any) => void;
  onBeforePlot?: (event: Plotly.BeforePlotEvent) => void;
}

/***
 * Usage:
 *  <PlotlyChart data={toJS(this.model_data)}
 *               layout={layout}
 *               onClick={({points, event}) => console.log(points, event)}>
 */
class PlotlyChart extends React.Component<IPlotlyChartProps> {
  public container: Plotly.PlotlyHTMLElement | null = null;

  public attachListeners(): void {
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
      this.container.on(
        "plotly_animationinterrupted",
        this.props.onAnimationInterrupted
      );
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
      this.container.on(
        "plotly_legenddoubleclick",
        this.props.onLegendDoubleClick
      );
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
      this.container.on(
        "plotly_transitioninterrupted",
        this.props.onTransitionInterrupted
      );
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
  }

  public resize = (): void => {
    if (this.container) {
      Plotly.Plots.resize(this.container);
    }
  };

  public draw = async (props: IPlotlyChartProps): Promise<void> => {
    const { data, layout, config } = props;
    if (this.container) {
      // plotly.react will not destroy the old plot: https://plot.ly/javascript/plotlyjs-function-reference/#plotlyreact
      this.container = await Plotly.react(
        this.container,
        data,
        Object.assign({}, layout),
        config
      );
      this.attachListeners();
    }
  };

  public componentDidUpdate(prevProps: IPlotlyChartProps): void {
    this.draw(prevProps);
  }

  public componentDidMount(): void {
    this.draw(this.props);
  }

  public componentWillUnmount(): void {
    if (this.container) {
      Plotly.purge(this.container);
    }
    window.removeEventListener("resize", this.resize);
  }

  public render(): ReactNode {
    const {
      data,
      layout,
      config,
      onAfterExport,
      onAfterPlot,
      onAnimated,
      onAnimatingFrame,
      onAnimationInterrupted,
      onAutoSize,
      onBeforeExport,
      onClick,
      onClickAnnotation,
      onDeselect,
      onDoubleClick,
      onFramework,
      onHover,
      onLegendClick,
      onLegendDoubleClick,
      onRelayout,
      onRestyle,
      onRedraw,
      onSelected,
      onSelecting,
      onSliderChange,
      onSliderEnd,
      onSliderStart,
      onTransitioning,
      onTransitionInterrupted,
      onUnHover,
      onEvent,
      ...other
    } = this.props;
    return (
      <div
        {...other}
        ref={async (node) => {
          if (node && !this.container) {
            this.container = await Plotly.newPlot(
              node,
              data,
              Object.assign({}, layout),
              config
            );
            this.attachListeners();
          }
        }}
      />
    );
  }
}

const PlotlyChartFC: React.FC<IPlotlyChartProps> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const plot = useRef<PlotlyHTMLElement | null>(null);
  const firstRender = useRef(true);

  const resize = () => {
    if (container.current != null) {
      Plotly.Plots.resize(container.current);
    }
  };

  // onMount and unMount
  useEffect(() => {
    if (container.current != null) {
      Plotly.newPlot(container.current, props.data, props.layout, props.config)
        .then((p) => {
          plot.current = p;
        })
        .catch((e) => console.log(e));
    }

    addEventListener("resize", resize);

    const p = container.current;

    return () => {
      if (p != null) {
        Plotly.purge(p);
      }
      removeEventListener("resize", resize);
    };
  }, []);

  // data layout config update
  useEffect(() => {
    if (container.current == null) {
      return;
    }
    if (firstRender.current == true) {
      firstRender.current = false;
      return;
    }
    Plotly.react(
      container.current,
      props.data,
      props.layout,
      props.config
    ).catch((e) => console.log(e));
  }, [props.data, props.layout, props.config]);

  // listeners
  useEffect(() => {
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
      plot.current.on(
        "plotly_animationinterrupted",
        props.onAnimationInterrupted
      );
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
      plot.current.on(
        "plotly_transitioninterrupted",
        props.onTransitionInterrupted
      );
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

  return <div ref={container}></div>;
};

export default PlotlyChart;
export { PlotlyChartFC };
