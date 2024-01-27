import { houseForSale } from "../indexObject.js";

describe ('tests houseForSale', () => {

    it('bath', ()=> {
        expect(houseForSale).toHaveProperty('bath');
    }),
    xit('bedrooms', ()=> {
        expect(houseForSale).toHaveProperty('bedrooms', 4);
    }),
    xit('pool', ()=> {
        expect(houseForSale).not.toHaveProperty('pool');
    });

});