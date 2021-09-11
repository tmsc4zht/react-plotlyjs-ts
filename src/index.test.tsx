import { render } from '@testing-library/react';
import PlotlyChart, {PlotlyChartFC} from "./index"

test("react can create PlotlyChart component", () => {

	const data = [
		{
			marker: {
				color: 'rgb(16, 32, 77)'
			},
			type: 'scatter',
			x: [1, 2, 3],
			y: [6, 2, 3]
		},
		{
			name: 'bar chart example',
			type: 'bar',
			x: [1, 2, 3],
			y: [6, 2, 3],
		}
	];
	const layout = {
		title: 'simple example',
		xaxis: {
			title: 'time'
		}
	}


	render(
		<PlotlyChart data={data}
			layout={layout}
		/>
	)

})

test("react can create PlotlyChartFC component", () => {

	const data = [
		{
			marker: {
				color: 'rgb(16, 32, 77)'
			},
			type: 'scatter',
			x: [1, 2, 3],
			y: [6, 2, 3]
		},
		{
			name: 'bar chart example',
			type: 'bar',
			x: [1, 2, 3],
			y: [6, 2, 3],
		}
	];
	const layout = {
		title: 'simple example',
		xaxis: {
			title: 'time'
		}
	}


	render(
		<PlotlyChartFC data={data}
			layout={layout}
		/>
	)

})