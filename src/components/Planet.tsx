import React from 'react'
import { Result } from './Planets'

type Tplanet = {
    planet: Result
}

export const Planet = ({ planet }: Tplanet) => {
    return (
        <div className="card">
        <h3>{planet.name}</h3>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
    </div>
    )
}
