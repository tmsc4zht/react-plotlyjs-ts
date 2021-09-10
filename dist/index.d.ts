import Plotly from "plotly.js-dist";
import React from "react";
export interface IPlotlyChartProps {
    config?: any;
    data: any;
    layout?: any;
    style?: any;
    onAfterExport?: () => void;
    onAfterPlot?: () => void;
    onAnimated?: () => void;
    onAnimatingFrame?: (event: Plotly.FrameAnimationEvent) => void;
    onAnimationInterrupted?: () => void;
    onAutoSize?: () => void;
    onBeforeExport?: () => void;
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
declare class PlotlyChart extends React.Component<IPlotlyChartProps, any> {
    container: Plotly.PlotlyHTMLElement | null;
    attachListeners(): void;
    resize: () => void;
    draw: (props: IPlotlyChartProps) => Promise<void>;
    componentDidUpdate(prevProps: IPlotlyChartProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PlotlyChart;
