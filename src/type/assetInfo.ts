export default interface AssetInfo {
  owner: string;
  metadata: Metadata[];
  type: string;
  supply: string;
  isLoaded: boolean;
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
