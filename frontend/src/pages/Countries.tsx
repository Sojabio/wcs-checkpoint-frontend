import { useCountriesQuery } from '@/graphql/generated/schema';
import React from 'react'

export default function Countries() {
    const { data, loading, error } = useCountriesQuery();

    if (loading) return <>loading</>
    if (error) return <>error</>

    console.log("data", data)
  return (
    
    <div className='bg-blue-500'>Countries</div>
  )
}
