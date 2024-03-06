import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: '5ir4p4o5',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
};

const SanityClient = createClient(config);

export default SanityClient;
