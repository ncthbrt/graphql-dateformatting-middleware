import { IResolvers } from "graphql-tools";
import { Resolvers } from "./autogenerated-resolver-types";

export default function resolvers(): Resolvers<unknown> & Resolvers & IResolvers<any, any> {
    return {
        Query: {
            user: () => {
                return {
                    age: 8,
                    firstName: 'Oliver',
                    familyName: 'Jones',
                    fullName: 'Oliver Gracy Jones',
                    favouriteFoods: ['Bananna', 'Pizza', 'Tadpoles']
                }
            }
        }
    }
};