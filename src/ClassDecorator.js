//@flow
import type { ClassKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type ClassDescriptor = {
    kind : ClassKind;
    elements : Array<PropertyDescriptor<mixed>>;
};

/* The output decorator descriptor */
export type ClassOutputDescriptor = {
    elements : Array<ElementDescriptor<mixed>>;
    constructor? : (...params : Array<mixed>) => void;
    finisher? : ?Class<{}>;
}

/* The decorator function itself */
export type ClassDecorator = (descriptor : ClassDescriptor) => ClassOutputDescriptor;
