//@flow

/** Types used by the 'placement' property of a decorator */

export type StaticPlacement = 'static';
export type PrototypePlacement = 'prototype';
export type OwnPlacement = 'own';
export type Placement = StaticPlacement | PrototypePlacement | OwnPlacement;

const allPlacements = {
    static:     'static',
    prototype:  'prototype',
    own:        'own'
};
Object.freeze(allPlacements);
export const Placements = allPlacements;
