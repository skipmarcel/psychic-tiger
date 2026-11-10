import { defineCliConfig } from 'sanity/cli';
import { projectId, dataset } from './env.js';

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: 'psychic-tiger', // https://psychic-tiger.sanity.studio
  deployment: { appId: 'tonvb5bjehis75ynrbpzzmgp', autoUpdates: true },
});
