import { gql } from "@apollo/client/core";

const StashesQuery = gql`
query stashes {
    Stashs {
        items {
            _id
            code
            type
            title
            hint
            coordinates
            location {
                latitude
                longitude
            }
            description {
                ... on Text {
                    _id
                    _type
                    body
                    format
                }
                ... on Assets {
                    _type
                    items {
                        _id
                        cdn_files {
                            url
                        }
                    }
                }
            }
            placed_on
            creator
        }
    }
}
`;

export default StashesQuery;