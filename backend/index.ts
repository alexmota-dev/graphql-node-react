import path from 'path';
import {ApolloServer} from 'apollo-server';
import "reflect-metadata";
import {buildSchema} from 'type-graphql';
//Import reflect-metadata deve estar antes do buildSchema do type-graphql
import { UserResolver } from './src/resolvers/UserResolver';


async function main(){
    const schema = await buildSchema({
        resolvers: [
            UserResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen();

    console.log(`Server ready at ${url}`);
}

main();