import {getPercents} from './getPercents.test.js'

describe(getPercents, ()=>{
    const abc = 'abc';
    const percent =  50;
    const number = 2000;



    it('Not a number', ()=>{
        expect((abc)).toBe(0)
    }),
    it('Number', ()=>{
        expect((number,percent)).toBe(1000)
    })

});