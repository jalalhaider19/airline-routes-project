import React from "react";
import { geoPath, geoMercator } from "d3-geo";

function AirportMap({ width, height, countries, airports, routes, selectedAirline }) {
    const projection = geoMercator()
        .scale(97)
        .translate([width / 2, height / 2 + 20]);

    const pathGenerator = geoPath().projection(projection);

    // Filter routes based on the selected airline
    const filteredRoutes = selectedAirline ? routes.filter(route => route.AirlineID === selectedAirline) : [];

    return (
        <g>
            {/* Plot the world map */}
            {countries.features.map((feature, index) => (
                <path
                    key={index}
                    d={pathGenerator(feature)}
                    stroke="#ccc"
                    fill="#eee"
                />
            ))}

            {/* Plot the airports */}
            {airports.map((airport, index) => {
                const [x, y] = projection([airport.Longitude, airport.Latitude]);
                return (
                    <circle key={index} cx={x} cy={y} r={1} fill="#2a5599" />
                );
            })}

            {/* Plot the routes if an airline is selected */}
            {filteredRoutes.map((route, index) => {
                const [x1, y1] = projection([route.SourceLongitude, route.SourceLatitude]);
                const [x2, y2] = projection([route.DestLongitude, route.DestLatitude]);
                return (
                    <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#992a5b"
                        strokeWidth={0.1}
                    />
                );
            })}
        </g>
    );
}

export { AirportMap };
