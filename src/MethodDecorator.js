//@flow
import type { MethodKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type MethodDescriptor<T> = {
    kind : MethodKind;
    key : Key;
    placement : Placement;
    descriptor : PropertyDescriptor<T>;
};

/* The output decorator descriptor */
type MethodDescriptorOutputExtensions<TClass> = {
    extras? : ?Array<ElementDescriptor<mixed>>;
    finisher? : (clazz : Class<TClass>) => void;
};
export type MethodOutputDescriptor<TField,TClass> = MethodDescriptor<TField> & MethodDescriptorOutputExtensions<TClass>;

/* The decorator function itself */
export type MethodDecorator<TField,TClass> = (descriptor : MethodDescriptor<TField>) => MethodOutputDescriptor<TField,TClass>;
