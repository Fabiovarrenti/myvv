// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Spesa, Item } = initSchema(schema);

export {
  Spesa,
  Item
};