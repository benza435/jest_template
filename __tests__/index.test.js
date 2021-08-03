const {jestTest} = require('../index.js')

describe('jest configuration OK?',()=>{
    it('passes this test...',()=>{
        expect(jestTest()).toEqual(1)
    })
})