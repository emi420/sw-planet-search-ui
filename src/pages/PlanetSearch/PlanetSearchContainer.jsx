import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import PlanetSelect from './components/PlanetSelect/PlanetSelect';
import PlanetList from './components/PlanetList/PlanetList';
import Overlayed from '../../components/Overlayed/Overlayed';
import { useSelectedPlanets } from '../../contexts/PlanetSelectContext/PlanetSelectContext';
import { usePlanetSearch } from '../../contexts/PlanetSearchContext/PlanetSearchContext';

const PlanetSearchContainer = function () {
    const { selected, add, remove } = useSelectedPlanets();
    const { loading, planets, query, search, clear } = usePlanetSearch();
    
    const handleSearch = async (query) => {
        search(query);
    }
    const handleSelect = (planet) => {
        if (selected.filter(x => x.name === planet.name).length === 0) {
            add(planet);
            clear();
        }
    }
    const handleDelete = (planet) => {
        remove(planet);
    }
    const handleClear = () => {
        clear();
    }

    return (
        <>
            <h5>{ 
                selected.length > 0 ? <span>{selected.length} selected</span>
                : <em>No planets selected. Select your first one!</em> 
            }
            </h5>            
            <Overlayed enabled={ query !== ""} onClick={handleClear}>
                <SearchForm 
                    onEscKeyPress={handleClear}
                    isLoading={loading}
                    onSearch={handleSearch} 
                />
                { query && 
                    <PlanetSelect
                        onClose={handleClear}
                        onSelect={handleSelect}
                        query={query}
                        planets={planets}
                        noResults={!loading && planets.length === 0}
                    />
                }
            </Overlayed>
            <hr />
            <PlanetList 
                disabled={query !== ""} 
                planets={selected}
                onDelete={handleDelete} 
            />
        </>
    )
}

export default PlanetSearchContainer;