//@flow
import type { FieldKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { Constructor } from './Constructor';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type FieldDescriptor<T> = {
    kind : FieldKind;
    key : Key;
    placement : Placement;
    descriptor : PropertyDescriptor<T>;
    initializer? : ?Initializer<T>;
};

/* The output decorator descriptor */
type FieldDescriptorOutputExtensions = {
    extras? : Array<ElementDescriptor<mixed>>;
    finisher? : Constructor;
};
export type FieldOutputDescriptor<T> = FieldDescriptor<T> & FieldDescriptorOutputExtensions;

/* The decorator function itself */
export type FieldDecorator<T> = (descriptor : FieldDescriptor<T>) => FieldOutputDescriptor<T>;