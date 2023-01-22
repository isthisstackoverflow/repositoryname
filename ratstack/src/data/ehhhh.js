import { RESTRICTION } from './restriction'
import { MODIFY_TYPE } from './modifyType'
import { MODIFIABLE } from './modifiable'
import { makeProperties } from './makeProperties'
import {
  MODIFIABLE,
  DECLARATION,
  BUILDING,
  THINK
} from './enums'

DECLARATION.properties = [
  makeProperties('Pack', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.THINK, 20]
  ]),
  makeProperties('Mafia', 500, RESTRICTION.FACTION, [
    [THINK, [THINK.BOSS_GOOD, THINK.OTHER_PACK_BAD]]
  ], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 100]
  ]),
  makeProperties('Lordship', 0, RESTRICTION.FACTION, [], []),
  makeProperties('Screeching', 0, RESTRICTION.FACTION, [], []),
  makeProperties('Holy Rat Empire', 0, RESTRICTION.FACTION, [], [])
]

BUILDING.properties = [
  makeProperties('Food Hole', 150, RESTRICTION.REGION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.THINK, 20]
  ]),
  makeProperties('Make Rats', 0, RESTRICTION.NONE, [], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.RATS, 2]
  ]),
  makeProperties('Rat Hole', 200, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]]
  ], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.RAT, 1.2]
  ]),
  makeProperties('Eat Bunker', 200, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]]
  ], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 100]
  ]),
  makeProperties('Sharp Teeth Shop', 300, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]],
    [THINK, [THINK.SHARPEN]]
  ], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.ATTACK_STEAL, 1.2],
    [MODIFY_TYPE.ADD, MODIFIABLE.ATTACK_TERRORIZE, 100]
  ])
]

THINK.properties = [
  makeProperties('Boss good', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20]
  ]),
  makeProperties('Other Pack Bad', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.ATTACK_STEAL, 20]
  ]),
  makeProperties('Turn Thing Around', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20]
  ]),
  makeProperties('Don\'t Eat All', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, -20]
  ]),
  makeProperties('Sharpen', 0, RESTRICTION.FACTION, [], []), // Plus Steal
  makeProperties('Share', 0, RESTRICTION.FACTION, [], []), // Minus Obedience, Plus Eat
  makeProperties('Brotherhood', 0, RESTRICTION.FACTION, [], []), // Add Obedience
  makeProperties('The Ratfather', 0, RESTRICTION.FACTION, [], []), // Plus Obedience
  makeProperties('Dominance is Family', 0, RESTRICTION.FACTION, [], []) // Other factions may join offer
]
