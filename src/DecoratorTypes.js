//@flow
import * as descriptor from './Descriptors';
import type { Data, Accessor, Property } from './Descriptors';

// Fields
export type FieldDescriptor<T: Property> = {
    kind : descriptor.FieldKind;
    key : descriptor.Key;
    placement : descriptor.Placement;
    descriptor : T;
    initializer? : ?descriptor.PropertyInitializer;
};
type FieldDescriptorOptionalOutputs = {
    extras? : ?Array<MemberDescriptor<Property>>;
    finisher? : ?(clazz : {}) => void;
};
export type FieldOutputDescriptor<T: Property> = FieldDescriptor<T> & FieldDescriptorOptionalOutputs;

// Methods
export type MethodDescriptor<T: Property> = {
    kind : descriptor.MethodKind;
    key : descriptor.Key;
    placement : descriptor.Placement;
    descriptor : T;
};
type MethodDescriptorOptionalOutputs = {
    extras? : ?Array<MemberDescriptor<Property>>;
    finisher? : ?(clazz : {}) => void;
};
export type MethodOutputDescriptor<T: Property> = MethodDescriptor<T> & MethodDescriptorOptionalOutputs;

// Classes
export interface ClassDescriptor {
    kind : descriptor.ClassKind;
    elements : Array<MemberDescriptor<Property>>;
};
export interface ClassOutputDescriptor {
    elements : Array<MemberDescriptor<Property>>;
    constructor? : ?(...args : Array<mixed>) => void;
    finisher? : ?(clazz : {}) => void;
}

// Generalised descriptors
export type MemberDescriptor<T: Property> = FieldDescriptor<T> | MethodDescriptor<T>;
export type MemberOutputDescriptor<T: Property> = FieldOutputDescriptor<T> | MethodOutputDescriptor<T>;

// Decorators
export type FieldDecorator<T: Property> = (descriptor : FieldDescriptor<T>) => FieldOutputDescriptor<T>;
export type MethodDecorator<T: Property> = (descriptor : MethodDescriptor<T>) => MethodOutputDescriptor<T>;
export type ClassDecorator = (descriptor : ClassDescriptor) => ClassOutputDescriptor;
