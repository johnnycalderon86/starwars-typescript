import React from 'react'
import { Result } from './Planets'

type Tplanet = {
    planet: Result
}

export const Planet = ({ planet }: Tplanet) => {
    return (
        <div className="cardCharacters">
        <h3 className="personName">{planet.name}</h3>
        <p className="birth">Population  - {planet.population}</p>
        <p className="gender"> Terrain - {planet.terrain}</p>
        <p className="climate">Climate - {planet.climate}</p>

    </div>
    )
}
