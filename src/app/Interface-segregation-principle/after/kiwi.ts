import { CanWalk } from "./can-walk";

export class Kiwi implements CanWalk {
    walk(): void {
        console.log('this bird can just walk');
    }
}
