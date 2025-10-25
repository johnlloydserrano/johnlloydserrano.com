import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import outputs from '../../amplify_outputs.json';
import { Schema } from '../../amplify/data/resource';

export function AmplifyConfig() {
  Amplify.configure(outputs);
}

export const client = generateClient<Schema>();
