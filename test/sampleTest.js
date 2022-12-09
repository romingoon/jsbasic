import assert from 'assert';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';



const user = { id: 1, name: 'Hong' };
const getUser = () => ({ id: 1, name: 'Hong' });


describe('@Array!!', () => {
    describe('#indexOf()', () => {
        before(() => console.log('#before!!'));
        beforeEach(() => console.log('#beforeEach!!'));
        after(() => console.log('#after!!'));
        afterEach(() => console.log('-------------- #afterEach!!'));
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('should return 1 when the value is 2', () => {
            assert.equal([1, 2, 3].indexOf(2), 1);
        });

        it('sample deepEqual user and getUser()', () => {
            assert.deepEqual(getUser(), user);
        });
    });
});
const should = chai.should();
chai.use(chaiHttp);

describe.only('HttpServer:80 TEST', () => {
    it('json - GET', done => {
        chai
            .request('http://localhost')
            .get('/json')
            .end((err, res) => {
                // console.log(res.body);
                should.not.exist(err);
                should.exist(res);

                const { body } = res;
                const { id, name } = body;
                id.should.to.be.a('number');
                id.should.to.be.eq(1);
                id.should.eq(1);
                id.should.not.to.be.eq(0);
                id.should.not.eq(0);

                name.should.to.be.a('string');

                const user2 = { ...user, name: '홍길동' };
                body.should.to.be.deep.eq(user2);
                expect(body).deep.eq(user2);

                body.should.have.property('id');
                body.should.have.property('id').and.eq(1);

                done();
            });
    });
});

describe('JSON-Server:5001 TEST', () => {


});