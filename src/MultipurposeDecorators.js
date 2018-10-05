//@flow
import type { MethodDecorator, MethodDescriptor, MethodOutputDescriptor } from './MethodDecorator';
import type { FieldDecorator, FieldDescriptor, FieldOutputDescriptor } from './FieldDecorator';
import type { ClassDecorator, ClassDescriptor, ClassOutputDescriptor } from './ClassDecorator';

/**
 * Contains type declarations for decorators which are multi-purpose (across method/field/class).
 * 
 * It is expected that these will be used only rarely, since you can get more type safety
 * if you know in advance that a given decorator will be used only for fields, or only methods,
 * or only classes.
 */

export type ElementDescriptor<T> = FieldDescriptor<T> | MethodDescriptor<T>;
export type ElementOutputDescriptor<T> = FieldOutputDescriptor<T> | MethodOutputDescriptor<T>;
export type ElementDecorator<T> = MethodDecorator<T> | FieldDecorator<T>;

export type MultipurposeDescriptor = ClassDescriptor | ElementDescriptor<mixed>;
export type MultipurposeOutputDescriptor = ClassOutputDescriptor<mixed> | ElementOutputDescriptor<mixed>;
export type MultipurposeDecorator = ClassDecorator<mixed> | ElementDecorator<mixed>;