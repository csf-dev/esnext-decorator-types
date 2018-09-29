//@flow
import type { MethodKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { Constructor } from './Constructor';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type MethodDescriptor<T> = {
    kind : MethodKind;
    key : Key;
    placement : Placement;
    descriptor : PropertyDescriptor<T>;
};

/* The output decorator descriptor */
type MethodDescriptorOutputExtensions = {
    extras? : ?Array<ElementDescriptor<mixed>>;
    finisher? : ?Constructor;
};
export type MethodOutputDescriptor<T> = MethodDescriptor<T> & MethodDescriptorOutputExtensions;

/* The decorator function itself */
export type MethodDecorator<T> = (descriptor : MethodDescriptor<T>) => MethodOutputDescriptor<T>;
