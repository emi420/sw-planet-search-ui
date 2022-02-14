import React from 'react';
import HighlightText from '../../../../components/HighlightText/HighlightText';
import PlanetItem from '../PlanetItem/PlanetItem';
import "./PlanetSelect.css";

const PlanetSelect = function ({ planets = [], onSelect, query, noResults }) {
    return (
        <>
            <div className="PlanetSelect">
                { noResults ? <em>No results found</em> : 
                planets.map(planet => (
                    <div key={planet.name} className={"PlanetSelectItem"}>
                        <PlanetItem 
                            onSelect={onSelect} key={planet.name}
                            planet={planet}
                            title={<HighlightText text={planet.name} highlightedText={query} />}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PlanetSelect;