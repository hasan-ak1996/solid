import { Bird } from "./bird";

export class Kiwi implements Bird{
    // this method not use
    fly(): void {
        throw new Error("Method not implemented.");
    }
    walk(): void {
        console.log('this bird can just walk');
    }
}
