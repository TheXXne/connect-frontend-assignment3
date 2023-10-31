export default interface Asset {
  owner: string;
  metadata: Metadata[];
  type: string;
  supply: string;
}

interface Metadata {
  name: string;
  image: string;
  attributes: Attributes[];
  id: string;
  uri: string;
}

interface Attributes {
  trait_type: string;
  value: string;
}
