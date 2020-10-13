import React from 'react'
import { Result } from './Starships'

type TStarship = {
    starship: Result
}

export const Starship = ({ starship }: TStarship) => {
    return (
        <div className="cardCharacters">
            <h3 className="personName">{starship.name}</h3>
            <p>Model - {starship.model}</p>
            <p>Manufacturer - {starship.manufacturer}</p>
        </div>
    )
}
