import { useCountriesQuery } from '@/graphql/generated/schema';
import React from 'react'
import CountryCard from './CountryCard';

export default function Countries() {
    const { data, loading, error } = useCountriesQuery();

    if (loading) return <>loading</>
    if (error) return <>error</>

    if(data)
    return (
    <div className="flex flex-wrap justify-center">
        {data?.countries.map(country => (
          <CountryCard key={country.id} country={country} />
        ))}
    </div>
    )
}
    
