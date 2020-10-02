import React, { useState } from 'react'
import { QueryStatus,  usePaginatedQuery } from 'react-query'
import { Person } from './Person';


export interface ResultPeople {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[]
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string
    name: string;
    skin_color: string;

}

type fetchResults = {
    results: ResultPeople[],
    status: QueryStatus,
    next: string
}




const fetchThemPeepz = async (key: string, page: string): Promise<fetchResults> => {

    const endpoint: string = `https://swapi.dev/api/people/?page=${page}`;
    const data: fetchResults = await (await fetch(endpoint)).json()
    return data
}
export const People = (): JSX.Element => {
    const [page, setPages] = useState(1);



    const { resolvedData, latestData, status } = usePaginatedQuery(['people', page], fetchThemPeepz);


    return (
        <div>
            <h2>People</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'success' && (

                <>
                    <button
                        onClick={() => {
                            if (page > 1) {
                                setPages(prevState => prevState - 1)
                            }
                        }}
                        disabled={page === 1}
                    >Previous Page</button>
                    <span>{page}</span>
                    <button onClick={() => setPages(prevState => (!latestData || !latestData.next ? prevState : prevState + 1))
                    }
                        disabled={!latestData || !latestData.next}
                    >Next Page</button>
                    <div>
                        {resolvedData?.results.map((people: ResultPeople) => {
                            return <Person key={people.name} person={people} />
                        })}</div>
                </>
            )}
        </div>
    )
}
