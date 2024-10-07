import Link from 'next/link'
import React from 'react'

type Country = {
    id: number,
    name: string
    emoji: string
    code: string
}

interface CountryCardProps {
  country: Country; 
}

export default function CountryCard({country}: CountryCardProps) {
  return (
    <Link href={`/country/${country.code}`}>
      <div className="bg-gray-300 p-4 m-2 flex flex-col items-center justify-center">
          <div>{country.name}</div>
          <div>{country.emoji}</div>
      </div>
    </Link>
  )
}
