import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";

export function BarChart(props) {
    const { offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline } = props;

    const maxCount = max(data, d => d.Count);

    const xScale = scaleLinear().domain([0, maxCount]).range([0, width]);
    const yScale = scaleBand()
        .domain(data.map(d => d.AirlineName))
        .range([0, height])
        .padding(0.2);

    const color = (airlineID) => {
        return airlineID === selectedAirline ? "#992a5b" : "#2a5599";
    };

    const onMouseOver = (airlineID) => {
        setSelectedAirline(airlineID);
    };

    const onMouseOut = () => {
        setSelectedAirline(null);
    };

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {data.map(d => (
                <rect
                    key={d.AirlineID}
                    x={0}
                    y={yScale(d.AirlineName)}
                    width={xScale(d.Count)}
                    height={yScale.bandwidth()}
                    fill={color(d.AirlineID)}
                    onMouseOver={() => onMouseOver(d.AirlineID)}
                    onMouseOut={onMouseOut}
                />
            ))}
            <XAxis xScale={xScale} width={width} height={height} />
            <YAxis yScale={yScale} offsetX={offsetX} />
        </g>
    );
}
