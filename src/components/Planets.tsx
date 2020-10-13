import React, { useState } from 'react'
import { QueryStatus, usePaginatedQuery } from 'react-query'
import { Planet } from './Planet';
import '../styles/Planets.css'
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
    status: QueryStatus,
    next: string
}




const fetchPlanets = async (key: string, page: string): Promise<results> => {


    const endpoint: string = `https://swapi.dev/api/planets/?page=${page}`;
    const data: results = await (await fetch(endpoint)).json()
    return data
}
export const Planets = (): JSX.Element => {

    const [page, setPages] = useState(1);

    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['planets', page], fetchPlanets);


    return (
        <div className="Planets-div">
            <h2 className="titleCharacters">Planets</h2>

            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (
                <>
                <div className="buttonsDiv">
                       <button className="buttonNavigationCharacters"
                        onClick={() => {
                            if (page > 1) {
                                setPages(prevState => prevState - 1)
                            }
                        }}
                        disabled={page === 1}
                    >Previous Page</button>
                    <span className="page-number">{page}</span>
                    <button  className="buttonNavigationCharacters" onClick={() => setPages(prevState => (!latestData || !latestData.next ? prevState : prevState + 1))
                    }
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>
                </div>
                 
                    <div className="cardcontainer">
                        {resolvedData?.results.map((planet: Result) => {
                            return <Planet key={planet.name} planet={planet} />
                        })}</div>
                </>
            )}
        </div>
    )
}
