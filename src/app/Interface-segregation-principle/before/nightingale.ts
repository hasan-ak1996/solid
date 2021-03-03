import { Bird } from "./bird";

export class Nightingale implements Bird {
    fly(): void {
        console.log('this bird can fly');
    }
    walk(): void {
        console.log('this bird can walk')
    }

}
