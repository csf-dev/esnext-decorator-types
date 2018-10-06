//@flow
import type { FieldKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type FieldDescriptor<TField> = {
    kind : FieldKind;
    key : Key;
    placement : Placement;
    descriptor : PropertyDescriptor<TField>;
    initializer? : ?Initializer<TField>;
};

/* The output decorator descriptor */
type FieldDescriptorOutputExtensions<TClass> = {
    extras? : Array<ElementDescriptor<mixed>>;
    finisher? : (clazz : Class<TClass>) => void;
};
export type FieldOutputDescriptor<TField,TClass> = FieldDescriptor<TField> & FieldDescriptorOutputExtensions<TClass>;

/* The decorator function itself */
export type FieldDecorator<TField,TClass> = (descriptor : FieldDescriptor<TField>) => FieldOutputDescriptor<TField,TClass>;