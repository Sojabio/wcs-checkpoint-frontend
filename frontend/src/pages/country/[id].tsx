import { useCountryQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

const CountryDetails = () => {
    const router = useRouter();
    const { data, loading, error } = useCountryQuery({
        variables: { code: router.query.id as string },
      })
 
      if (loading) return <>loading</>
      if (error) return <>error</>
      if(data)

      return (
        <div className='p-10 flex flex-col g-2'>
            <div className='text-6xl pb-6'>{data.country.emoji}</div>
            <div>Name : {data.country.name} ({data.country.code})</div>
            {data.country.continent && 
                <div>Continent : {data.country.continent.name}</div> 
            }
        </div>
        )
  }
  

  export default CountryDetails;
  