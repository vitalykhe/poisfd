import {ApolloClient} from 'apollo-client'
import {ApolloLink} from 'apollo-link'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {withClientState} from 'apollo-link-state'

//pretending graphql to run locally

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/grahql'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache
})

export default client

