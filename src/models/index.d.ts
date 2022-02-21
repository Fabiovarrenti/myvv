import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Item {
  readonly NewField?: string;
  readonly name?: string;
  readonly quantita?: number;
  readonly price?: number;
  constructor(init: ModelInit<Item>);
}

type SpesaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Spesa {
  readonly id: string;
  readonly owner?: string;
  readonly itemList?: Item;
  readonly nam: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Spesa, SpesaMetaData>);
  static copyOf(source: Spesa, mutator: (draft: MutableModel<Spesa, SpesaMetaData>) => MutableModel<Spesa, SpesaMetaData> | void): Spesa;
}