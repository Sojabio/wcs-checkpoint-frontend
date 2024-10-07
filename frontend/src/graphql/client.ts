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