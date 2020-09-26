import React from 'react'


type NProps = {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export const Navbar = ({ setPage }: NProps) => {



    return (
        <div>
            <button onClick={()=>setPage('people')}>People</button>
            <button onClick={()=>setPage('planets')}>Planets</button>
        </div>
    )
}
