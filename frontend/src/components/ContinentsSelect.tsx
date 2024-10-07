import { useContinentsQuery } from '@/graphql/generated/schema';
import { Select } from 'antd';
import React from 'react'

interface ContinentSelectProps {
    onChange: (value: any) => void
    value?: any
}


export default function ContinentSelect({onChange, value} : ContinentSelectProps) {
    const { data, loading, error } = useContinentsQuery({
      })
    
    if (loading) return <>loading</>
    if (error) return <>error</>

    const selectOptions = data?.continents.map(continent => ({
        value: continent.id,
        label: continent.name
        }))
          
    
    if(data)
    return (
        <Select
        options={selectOptions}
        onChange={onChange}
        value={value}/> 
  )
}
