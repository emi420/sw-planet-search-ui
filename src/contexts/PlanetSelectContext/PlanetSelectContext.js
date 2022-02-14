import React, {createContext, useState, useContext} from 'react'

const SelectedPlanetsContext = createContext([]);
export const useSelectedPlanets = () => useContext(SelectedPlanetsContext)

export default function SelectedPlanetsProvider({ children }) {

    const [selected, setSelected] = useState([]);

    const add = planet => {
      setSelected([
          ...selected,
          planet
      ])
    }

    const remove = planet => {
      setSelected(prevState => prevState.filter(x => x.name !== planet.name));
    }

    return (
      <SelectedPlanetsContext.Provider value={{ selected, add, remove}}>
          { children }
      </SelectedPlanetsContext.Provider>
  )
}
