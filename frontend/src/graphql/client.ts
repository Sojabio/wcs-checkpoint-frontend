import { gql } from "@apollo/client";

export const COUNTRIES = gql`
  query Countries {
  countries {
    name
    id
    emoji
    code
  }
}
`;

export const GET_COUNTRY_BY_CODE = gql`
query Country($code: String!) {
  country(code: $code) {
    name
    emoji
    continent {
      name
    }
    code
  }
}
`;

export const CONTINENTS = gql`
 query Continents {
  continents {
    name
    id
  }
}
`;

export const ADD_NEW_COUNTRY = gql`
 mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}`