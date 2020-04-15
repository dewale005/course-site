const { expect } = require('chai')
const dotenv = require('dotenv');

describe('Configuration environment', () => {
    dotenv.config();
    const env = process.env
    it('development server runs on port 3000', () => {
        expect(env.PORT).to.equal('3000')
    });

    it('node environment runs development', () => {
        expect(env.NODE_ENV).to.equal('development')
    })

})