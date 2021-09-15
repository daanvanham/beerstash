import { gql } from "@apollo/client/core";

const StashQuery = gql`
query stash($code: String!) {
    Stash(slug: $code) {
        _id
        code
        type
        title
        coordinates
        hint
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
        location {
            latitude
            longitude
        }
        logs {
            author
            body
        }
        _created_on
        creator
    }
}
`;

export default StashQuery