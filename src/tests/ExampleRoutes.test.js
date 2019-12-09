const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);
chai.use(require('chai-things'));

const expect = chai.expect;

describe('/GET to do a GET in /exampleRoute', () => {
  it('should return status code 200 and the message(Resposta GET OK!)', done => {
    chai
      .request(server)
      .get('/exampleRoute')
      .then(response => {
        expect(response).to.have.status(200);
        expect(response).to.be.an('object');
        expect(response.body.response).to.be.equal('Resposta GET OK!');
        done();
      });
  }).timeout(5000);
});
