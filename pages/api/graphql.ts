import { createYoga, createSchema } from 'graphql-yoga';
import { gql } from 'graphql-tag';
import axios from 'axios';
import products from 'data/products.json';

const typeDefs = gql`
  type Query {
    users: [User!]!
    githubUsers: [GithubUser!]!
    products: [Product]
  }
  type User {
    name: String
  }
  type GithubUser {
    id: ID!
    login: String!
    avatarUrl: String!
  }
  type Product = {
    id: Number!
    name: String!
    price: Number!
    description: String | Undefined!
  }
`

const resolvers = {
  Query: {
    users: () => {
      return [{ name: 'Nextjs' }]
    },
    products: () => {
      return products
    }
  },
}
const schema = createSchema({
  typeDefs,
  resolvers,
})
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}
export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})