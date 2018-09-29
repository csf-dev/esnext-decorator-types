//@flow

/** Types used by the 'placement' property of a decorator */

export opaque type StaticPlacement = 'static';
export opaque type PrototypePlacement = 'prototype';
export opaque type OwnPlacement = 'own';
export type Placement = StaticPlacement | PrototypePlacement | OwnPlacement;

type AllPlacementTypes = {
    static:     StaticPlacement,
    prototype:  PrototypePlacement,
    own:        OwnPlacement
};

const allPlacements = {
    static:     'static',
    prototype:  'prototype',
    own:        'own'
};
Object.freeze(allPlacements);
export const Placements : AllPlacementTypes = allPlacements;
