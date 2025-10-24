import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

export function AmplifyConfig() {
  Amplify.configure(outputs);
}
