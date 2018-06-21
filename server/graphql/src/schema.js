export default`
  type games {
    _id: String
    text: String
  }

  type Query {
    getGames: [Games]
  }

  schema {
    query: Query
  }
`;