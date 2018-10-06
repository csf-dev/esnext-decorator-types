//@flow
import type { ClassKind } from './Kind';
import type { Key } from './Key';
import type { Placement } from './Placement';
import type { Initializer } from './Initializer';
import type { ElementDescriptor } from './MultipurposeDecorators';

/* The input decorator descriptor */
export type ClassDescriptor = {
    kind : ClassKind;
    elements : Array<ElementDescriptor<mixed>>;
};

/* The output decorator descriptor */
type ClassOutputDescriptorExtensions<TClass> = {
    finisher? : (clazz : Class<TClass>) => void;
}

export type ClassOutputDescriptor<TClass> = ClassDescriptor & ClassOutputDescriptorExtensions<TClass>;

/* The decorator function itself */
export type ClassDecorator<TClass> = (descriptor : ClassDescriptor) => ClassOutputDescriptor<TClass>;
