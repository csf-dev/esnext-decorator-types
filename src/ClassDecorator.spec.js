//@flow
import type { ClassDescriptor, ClassOutputDescriptor } from './ClassDecorator';
import type { ElementDescriptor } from './MultipurposeDecorators';
import type { ClassKind, MethodKind } from './Kind';
import type { PrototypePlacement } from './Placement';
import { Kinds } from './Kind';
import { Placements } from './Placement';

describe('Class decorators', function() {

    let descriptor : ClassDescriptor;
    let instance : {};
    let classInstance : any;

    type HasExtraField = { extraField : number };
    type HasFoo = { foo : string };

    beforeEach(function() {
        function myClassDecorator(desc : ClassDescriptor) : ClassOutputDescriptor<MyClass> {
            descriptor = desc;
            let elements = desc.elements.slice();
            elements.push({
                kind: (Kinds.method : MethodKind),
                key: 'extraField',
                placement: (Placements.prototype : PrototypePlacement),
                descriptor: {
                    configurable: false,
                    get: () => 5
                }
            });
            return {
                kind: desc.kind,
                elements: elements,
                finisher: (clazz) => {
                    classInstance = new clazz();
                },
            };
        }

        @myClassDecorator
        class MyClass {
            get myField() : number { return 22; };
        }

        instance = new MyClass();
    });

    describe('should receive a desriptor', function() {
        it('which has the correct elements', function() {
            expect(descriptor.elements.length).toBe(1);
            expect(descriptor.elements[0].key).toBe('myField');
        });

        it('which has the correct kind', function() {
            expect(descriptor.kind).toBe(Kinds.class);
        });
    });

    it('should execute a finisher', function() {
        let fooInstance = ((instance : any) : HasFoo);
        expect((classInstance : HasExtraField).extraField).toBe(5);
    });
});