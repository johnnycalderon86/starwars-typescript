import React from 'react'
import { ResultPeople } from './People'

type Pprops = {
    person: ResultPeople
}
export const Person = ({ person }: Pprops) => {
    
    
    return (
        <div className="card">
            <h3>{person.name}</h3>
            <p> {person.birth_year}</p>
            <p>{(person.gender)}</p>
        </div>
    )
}
