//@flow

// TODO: Replace/remove this type once Flow supports describing a class constructor object.
// It appears that there is no appropriate way to do this at present:
//   https://github.com/facebook/flow/issues/1409
//
// This type is a temporary workaround to that problem, until a solution is available,
// at which point it should be replaced with the solution..
export type ConstructorObject = any;

export type Constructor = (args : Array<mixed>) => void;