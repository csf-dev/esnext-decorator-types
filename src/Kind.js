//@flow

/** Types used by the 'kind' property of a decorator */

export type ClassKind = 'class';
export type FieldKind = 'field';
export type MethodKind = 'method';
export type Kind = ClassKind | FieldKind | MethodKind;

type AllKindTypes = {
    class: ClassKind,
    field: FieldKind,
    method: MethodKind
};

const allKinds = {
    class:  'class',
    field:  'field',
    method: 'method'
};
Object.freeze(allKinds);
export const Kinds : AllKindTypes = allKinds;
