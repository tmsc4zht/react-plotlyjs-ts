import React from "react";
import Plotly from "plotly.js";
import { render } from "@testing-library/react";
import PlotlyChart, { PlotlyChartFC } from "./index";

test("react can create PlotlyChart component", () => {
  const data: Array<Plotly.Data> = [
    {
      marker: {
        color: "rgb(16, 32, 77)",
      },
      type: "scatter",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
    {
      name: "bar chart example",
      type: "bar",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
  ];
  const layout = {
    title: "simple example",
    xaxis: {
      title: "time",
    },
  };

  render(<PlotlyChart data={data} layout={layout} />);
});

test("react can create PlotlyChartFC component", () => {
  const data: Array<Plotly.Data> = [
    {
      marker: {
        color: "rgb(16, 32, 77)",
      },
      type: "scatter",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
    {
      name: "bar chart example",
      type: "bar",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
  ];
  const layout = {
    title: "simple example",
    xaxis: {
      title: "time",
    },
  };

  render(<PlotlyChartFC data={data} layout={layout} />);
});

test("PlotlyChartFC purge plotly.js object if unmount", () => {
  const data: Array<Plotly.Data> = [
    {
      marker: {
        color: "rgb(16, 32, 77)",
      },
      type: "scatter",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
    {
      name: "bar chart example",
      type: "bar",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
  ];
  const layout = {
    title: "simple example",
    xaxis: {
      title: "time",
    },
  };

  const newPlotSpy = jest.spyOn(Plotly, "newPlot");
  const purgeSpy = jest.spyOn(Plotly, "purge");

  const plot = render(<PlotlyChartFC data={data} layout={layout} />);

  plot.unmount();

  expect(newPlotSpy).toHaveBeenCalledTimes(1);
  expect(purgeSpy).toHaveBeenCalledTimes(1);

  newPlotSpy.mockRestore();
  purgeSpy.mockRestore();
});
