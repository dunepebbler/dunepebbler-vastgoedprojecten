import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: 'https://dunepebbler.nl/graphql/' })

  // middleware
  const link = httpLink
  return {
    link,
    cache: new InMemoryCache()
  }
}
