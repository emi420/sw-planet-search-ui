import React from 'react';
import PlanetItem from '../PlanetItem/PlanetItem';
import "./PlanetList.css";

const PlanetList = function ({ planets = [], onDelete, disabled }) {
    return (
        <div className={disabled ? "disabled" : ""}>
            {planets.map(planet => (
                <PlanetItem 
                    onDelete={() => !disabled && onDelete(planet)} 
                    key={planet.name} 
                    planet={planet} />
            ))}
        </div>
    )
}

export default PlanetList;