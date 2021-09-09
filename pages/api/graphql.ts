import { ApolloServer } from "apollo-server-micro";
import { db } from "../../backend/db";
import { schema } from "../../backend/schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema, context: { db } });

export default apolloServer.createHandler({ path: "/api/graphql" });
