import React from "react";

function Routes({ projection, routes, selectedAirlineID }) {
    // If no airline is selected, return an empty <g></g>
    if (!selectedAirlineID) {
        return <g></g>; // the selectedAirlineID is null, it returns the empty
    }

    // Filter the routes by the selected airline ID
    const filteredRoutes = routes.filter(route => route.AirlineID === selectedAirlineID);

    // Draw the lines for the filtered routes
    return (
        <g>
            {filteredRoutes.map((route, index) => {
                const [x1, y1] = projection([route.srcLongitude, route.srcLatitude]);
                const [x2, y2] = projection([route.dstLongitude, route.dstLatitude]);

                return (
                    <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#992a5b"
                        strokeWidth={0.1}
                        opacity={0.8}
                    />
                );
            })}
        </g>
    );
}

export { Routes };
