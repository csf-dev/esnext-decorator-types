//@flow

export type ClassKind = 'class';
export type FieldKind = 'field';
export type MethodKind = 'method';
export type Kind = ClassKind | FieldKind | MethodKind;

export type Key = string | Symbol;

export type StaticPlacement = 'static';
export type PrototypePlacement = 'prototype';
export type OwnPlacement = 'own';
export type Placement = StaticPlacement | PrototypePlacement | OwnPlacement;

export type Data = {
    configurable : boolean,
    enumerable : boolean,
    value? : mixed,
    writable? : boolean,
};
export type Accessor = {
    configurable : boolean,
    enumerable : boolean,
    get? : ?() => mixed,
    set? : ?(val : mixed) => void
};
export type Property = Data | Accessor;

export type PropertyInitializer = () => mixed;

const allKinds = {
    class: 'class',
    field: 'field',
    method: 'method'
};
Object.freeze(allKinds);
export const Kinds = allKinds;

const allPlacements = {
    static: 'static',
    prototype: 'prototype',
    own: 'own'
};
Object.freeze(allPlacements);
export const Placements = allPlacements;