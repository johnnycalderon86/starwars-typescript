import React from 'react'
import { ResultPeople } from './People'
import '../styles/Characters.css'
type Pprops = {
    person: ResultPeople
}
export const Person = ({ person }: Pprops) => {


    return (
        <div className="cardCharacters">
            <h3 className="personName">{person.name}</h3>
            <p className="birth">Day of birth - {person.birth_year}</p>
            <p className="gender">Gender - {person.gender}</p>
            <p className="homeplanet"><a className="homeplanet" href={person.homeworld}>Homeplanet</a></p>
        </div>
    )
}
