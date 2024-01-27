import { sum } from "../index.js";
import { stringСomparison } from "../index.js";

describe('tests for index function', () => {

    it('sum function', ()=> {
        expect(sum(1, 2)).toBe(3);
    }),
    it('stringСomparison function', ()=> {
        expect(stringСomparison('Привет', 'привет')).toBeFalsy();
    });
    
});