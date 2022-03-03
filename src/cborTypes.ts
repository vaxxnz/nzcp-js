export type Data = string | number | Uint8Array | Data[] | Map<Data, Data> | { [key: string]: Data } | null;