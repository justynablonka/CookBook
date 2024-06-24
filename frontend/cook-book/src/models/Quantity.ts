export enum QuantityType {
    Countable,
    Weight,
    Liquid
}

export interface Quantity {
    value: number,
    type: QuantityType
}