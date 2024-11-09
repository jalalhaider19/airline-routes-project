import React from "react";

export { XAxis, YAxis };
//TODO: complete the YAxis
// 1.Draw the y-axis, using <line>;
// 2.Draw the ticks, using yScale.domain() to get the ticks (i.e., names of airlines);
// For each tick line, we set x1={-5}, x2={0}, y1 and y2 are the half of yScale.bandwidth()
// For the tick text, we set style={{textAnchor: 'start', fontSize:'10px'}}, x={-offsetX+10},y={yScale.bandwidth()/2}
function YAxis (props) {
    const { yScale, height, offsetX } = props;
    return <g>
        {/* Draw the ticks */}
        {yScale.domain().map((tickValue) => (
                <g key={tickValue} transform={`translate(0, ${yScale(tickValue) + yScale.bandwidth() / 2})`}>
                    <line x1={-5} x2={0} stroke="black" />
                    <text
                        style={{ textAnchor: 'end', fontSize: '12px' }}
                        x={-10}
                        y={yScale.bandwidth() / 4}
                    >
                        {tickValue}
                    </text>
                </g>
            ))}
    </g>
}

function XAxis(props) {
    const { xScale, width, height } = props;

    if (!xScale || typeof xScale.ticks !== 'function') {
        console.error("xScale is not defined or does not have a 'ticks' method.");
        return null;
    }

    return (
        <g transform={`translate(0, ${height})`}>
            <line x2={width} stroke="black" />
            {xScale.ticks(5).map(tickValue => (
                <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
                    <line y2={10} stroke="black" />
                    <text style={{ textAnchor: 'middle', fontSize: '10px' }} y={20}>
                        {tickValue}
                    </text>
                </g>
            ))}
        </g>
    );
}
