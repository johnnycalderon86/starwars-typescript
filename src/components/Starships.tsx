import React, { useState } from 'react'
import { QueryStatus, usePaginatedQuery } from 'react-query'
import {Starship} from'./Starship'
import '../styles/Starships.css'
export interface Result {
    name: string;
    model: string;
    manufacturer: string
    cost_in_credits: string
    length: string[]
    max_atmosphering_speed: string
    crew: string
    passengers: string
    cargo_capacity: string
    consumables: string[]
    hyperdrive_rating: string
    pilots: string
   
}

type results = {
    results: Result[],
    status: QueryStatus,
    next: string
}




const fetchStarShips = async (key: string, page: string): Promise<results> => {


    const endpoint: string = `https://swapi.dev/api/starships/?page=${page}`;
    const data: results = await (await fetch(endpoint)).json()
    return data
}
export const Starships = (): JSX.Element => {

    const [page, setPages] = useState(1);

    const {
        resolvedData,
        latestData,
        status
    } = usePaginatedQuery(['starships', page], fetchStarShips);


    return (
        <div className="Starships-div">
            <h2 className="titleCharacters">Starships</h2>

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
                    <button className="buttonNavigationCharacters" onClick={() => setPages(prevState => (!latestData || !latestData.next ? prevState : prevState + 1))
                    }
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>
                </div>
                    <div className="cardcontainer">
                        {resolvedData?.results.map((starship: Result) => {
                            return <Starship key={starship.name} starship={starship} />
                        })}</div>
                </>
            )}
        </div>
    )
}
