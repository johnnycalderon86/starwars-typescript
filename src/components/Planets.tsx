import React from 'react'
import {useQuery} from 'react-query'


const fetchPlanets = async ()=>{
    const endpoint = 'https://swapi.dev/api/planets';
    const data = await (await fetch(endpoint)).json()
    return data
}
export const Planets = (): JSX.Element => {



    const {data, status}  = useQuery('planets', fetchPlanets)

    return (
        <div>
            Planets
        </div>
    )
}
