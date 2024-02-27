import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

if (!Amplify.getConfig().API) {
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint: process.env.GRAPHQL_ENDPOINT as string,
        region: 'us-west-2',
        defaultAuthMode: 'apiKey',
        apiKey: process.env.API_KEY
      }
    }
  });
}

export const client = generateClient();
