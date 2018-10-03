//@flow
import type { MethodDescriptor, MethodOutputDescriptor } from './MethodDecorator';
import type { FieldKind, MethodKind } from './Kind';
import type { PrototypePlacement } from './Placement';
import { Kinds } from './Kind';
import { Placements } from './Placement';


describe('Field decorators', function() {

    let descriptor : MethodDescriptor<number>;
    let instance : {};
    let classInstance : any;

    type HasExtraField = { extraField : string };

    beforeEach(function() {
        function myInputDecorator(desc : MethodDescriptor<number>) : MethodOutputDescriptor<number,MyClass> {
            descriptor = desc;
            return {
                ...desc,
                extras: [{
                    kind: (Kinds.method : MethodKind),
                    key: 'extraField',
                    placement: (Placements.prototype : PrototypePlacement),
                    descriptor: {
                        configurable: false,
                        value: 'Hello there'
                    }
                }],
                finisher: (clazz) => {
                    classInstance = new clazz();
                },
            };
        }

        class MyClass {
            @myInputDecorator get myField() : number { return 22; };
        }

        instance = new MyClass();
    });

    describe('should accept an input', function() {
        it('which has the correct kind', function() {
            expect(descriptor.kind).toBe('method');
        });

        it('which has the correct key', function() {
            expect(descriptor.key).toBe('myField');
        });

        it('which has the correct placement', function() {
            expect(descriptor.placement).toBe('prototype');
        });

        describe('which has a descriptor object', function() {
            it('that is writable', function() {
                expect(descriptor.descriptor.writable).toBeFalsy();
            });
            it('that is configurable', function() {
                expect(descriptor.descriptor.configurable).toBeTruthy();
            });
            it('that is enumerable', function() {
                expect(descriptor.descriptor.enumerable).toBeFalsy();
            });
        });
    });

    describe('should be able to add an extra property', function() {
        it('which has the added property', function() {
            expect(instance.hasOwnProperty('extraField')).toBeFalsy();
        });
        it('which has the correct getter', function() {
            var typedInstance = ((instance : any ) : HasExtraField);
            expect(typedInstance.extraField).toBe('Hello there');
        });
    });

    describe('should be able to use a finisher', function() {
        it('which receives the class declaration', function() {
            expect(classInstance['myField']).toBe(22);
        });
    });
});

