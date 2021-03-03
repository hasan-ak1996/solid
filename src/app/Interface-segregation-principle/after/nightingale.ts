import { CanFly } from "./can-fly";
import { CanWalk } from "./can-walk";

export class Nightingale implements CanWalk , CanFly{
    fly(): void {
        console.log('this bird can fly');
    }
    walk(): void {
        console.log('this bird can walk');
    }
}
