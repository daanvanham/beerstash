import { gql } from "@apollo/client/core";

const StashesQuery = gql`
query stashes {
    Stashs {
        items {
            _id
            code
            type
            title
            coordinates
            location {
                latitude
                longitude
            }
            _created_on
            creator
        }
    }
}
`;

export default StashesQuery;