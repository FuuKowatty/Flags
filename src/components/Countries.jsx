import React from 'react'

//components
import Country from './CountryCard'




const Countries = ({countries}) => {

  const {data, isPending, error} = countries


  return (
    <div className='w-full flex flex-wrap flex-1 justify-center gap-[50px] dark:text-dark-mode-text'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.length === 0 && <p>No Country</p>}
      {data && data.map(country => (
        <Country 
          key={country.name.common}
          country={country}
        />
      ))}
    </div>
  )
}

export default Countries
