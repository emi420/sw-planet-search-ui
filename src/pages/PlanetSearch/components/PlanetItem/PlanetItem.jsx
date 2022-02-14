import React from 'react';
import "./PlanetItem.css";

const PlanetItem = function ({ planet, onSelect, onDelete, selected, title }) {
    return (
        <div 
            className={`PlanetItem ${!selected && onSelect && "PlanetItemHoverable"}`} 
            onClick={() => !selected && onSelect && onSelect(planet)
        }>
            <strong>
                { selected !== undefined &&
                    <span className={selected ? "SelectedIcon" : "UnselectedIcon"}>&#9679; </span>
                }
                { title || planet.name }
            </strong>

            <table className={"PlanetItemTable"}>
                <tbody>
                    <tr>
                        <th>Rotation period:</th>
                        <td>{planet.rotation_period}</td>
                        <th>Orbital period:</th>
                        <td>{planet.orbital_period}</td>
                    </tr>
                    <tr>
                        <th>Diameter:</th>
                        <td>{planet.diameter}</td>
                        <th>Climate:</th>
                        <td>{planet.climate}</td>
                    </tr>
                    <tr>
                        <th>Gravity:</th>
                        <td>{planet.gravity}</td>
                        <th>Terrain:</th>
                        <td>{planet.terrain}</td>
                    </tr>
                    <tr>
                        <th>Surface water:</th>
                        <td>{planet.surface_water}</td>
                        <th>Population:</th>
                        <td>{planet.population}</td>
                    </tr>
                </tbody>
            </table>

            {onDelete && <button className="PlanetItemDeleteButton" onClick={() => onDelete(planet)}>Delete</button>}
        </div>
    )
}

export default PlanetItem;
