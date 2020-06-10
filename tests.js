const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('.');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Server Alive Test', () => {
  it('should say hello', done => {
    chai
      .request(app)
      .get('/ping')
      .end((err, res) => {
        expect(res.text).to.equal('hello world');
        done();
      });
  });

  after(done => {
    process.exit(0);
  });
});