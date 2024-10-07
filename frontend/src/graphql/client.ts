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