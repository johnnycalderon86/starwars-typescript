import React from 'react'
import { QueryStatus, useQuery } from 'react-query'
import { Planet } from './Planet';

export interface Result {
    climate: string;
    created: string;
    diameter: string
    edited: string
    films: string[]
    gravity: string
    name: string
    orbital_period: string
    population: string
    residents: string[]
    rotation_period: string
    surface_water: string
    terrain: string
    url: string
}

type results = {
    results: Result[],
    status: QueryStatus
}




const fetchPlanets = async (): Promise<results> => {
    const endpoint: string = 'https://swapi.dev/api/planets';
    const data: results = await (await fetch(endpoint)).json()
    return data
}
export const Planets = (): JSX.Element => {



    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);


    return (
        <div>
            <h2>Planets</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (

                <div>
                    {data?.results.map((planet: Result) => {
                        return <Planet key={planet.name} planet={planet} />
                    })}</div>
            )}
        </div>
    )
}
