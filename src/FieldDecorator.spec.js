//@flow
import type { FieldDescriptor, FieldOutputDescriptor } from './FieldDecorator';
import type { MethodKind } from './Kind';
import type { OwnPlacement } from './Placement';
import { Kinds } from './Kind';
import { Placements } from './Placement';


describe('Field decorators', function() {

    let descriptor : FieldDescriptor<string>;
    let instance : {};
    let classInstance : any;

    type HasExtraField = { extraField : number };

    beforeEach(function() {
        function myInputDecorator(desc : FieldDescriptor<string>) : FieldOutputDescriptor<string,MyClass> {
            descriptor = desc;
            return {
                ...desc,
                extras: [{
                    kind: (Kinds.method : MethodKind),
                    key: 'extraField',
                    placement: (Placements.own : OwnPlacement),
                    descriptor: {
                        configurable: false,
                        get: () => 5
                    }
                }],
                finisher: (clazz) => {
                    classInstance = new clazz();
                },
            };
        }

        class MyClass {
            @myInputDecorator myField : string;

            constructor() {
                this.myField = 'Ohai';
            }
        }

        instance = new MyClass();
    });

    describe('should accept an input', function() {
        it('which has the correct kind', function() {
            expect(descriptor.kind).toBe('field');
        });

        it('which has the correct key', function() {
            expect(descriptor.key).toBe('myField');
        });

        it('which has the correct placement', function() {
            expect(descriptor.placement).toBe('own');
        });

        describe('which has a descriptor object', function() {
            it('that is writable', function() {
                expect(descriptor.descriptor.writable).toBeTruthy();
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
            expect(instance.hasOwnProperty('extraField')).toBeTruthy();
        });
        it('which has the correct getter', function() {
            var typedInstance = ((instance : any ) : HasExtraField);
            expect(typedInstance.extraField).toBe(5);
        });
    });

    describe('should be able to use a finisher', function() {
        it('which receives the class declaration', function() {
            expect(classInstance['myField']).toBe('Ohai');
        });
    });
});

