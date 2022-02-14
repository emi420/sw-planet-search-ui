import React from 'react';
import PlanetSearchContainer from './PlanetSearchContainer';
import SelectedPlanetsProvider from '../../contexts/PlanetSelectContext/PlanetSelectContext';
import PlanetSearchProvider from '../../contexts/PlanetSearchContext/PlanetSearchContext';

const PlanetSearchPage = function () {

    return (
        <PlanetSearchProvider value={{}}>
        <SelectedPlanetsProvider value={{}}>
            <h2 className="title">Planet Search</h2>
            <PlanetSearchContainer />
        </SelectedPlanetsProvider>
        </PlanetSearchProvider>
    )
}

export default PlanetSearchPage;