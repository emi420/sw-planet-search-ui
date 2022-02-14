import React, { useState, useContext } from 'react'
import PlanetService from '../../services/Planets/Planets';

const PlanetSearchContext = React.createContext()
export const usePlanetSearch = () => useContext(PlanetSearchContext)

const planetService = new PlanetService();

export default function PlanetSearchProvider (props) {

    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const search = async (query) => {
        setLoading(true);
        const result = await planetService.search(query);
        setPlanets(result.results);
        setQuery(query);
        setLoading(false);
    }
    
    const clear = () => {
        setQuery("");
    }
    
    return (
        <PlanetSearchContext.Provider value={{
            loading,
            planets,
            query,
            search,
            clear
        }}>
            {props.children}
        </PlanetSearchContext.Provider>
    )
}


