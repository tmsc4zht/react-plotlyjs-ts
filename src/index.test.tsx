import renderer from 'react-test-renderer';
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
		annotations: [
			{
				text: 'simple annotation',
				x: 0,
				xref: 'paper',
				y: 0,
				yref: 'paper'
			}
		],
		title: 'simple example',
		xaxis: {
			title: 'time'
		}
	}


	const component = renderer.create(
		<PlotlyChart data={data}
			layout={layout}
		/>
	)

	const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

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
		annotations: [
			{
				text: 'simple annotation',
				x: 0,
				xref: 'paper',
				y: 0,
				yref: 'paper'
			}
		],
		title: 'simple example',
		xaxis: {
			title: 'time'
		}
	}


	const component = renderer.create(
		<PlotlyChartFC data={data}
			layout={layout}
		/>
	)

	const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

})