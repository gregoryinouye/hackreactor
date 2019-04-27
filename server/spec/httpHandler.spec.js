
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const server = require('./mockServer');

const httpHandler = require('../js/httpHandler');



describe('server responses', () => {

  it('should respond to a OPTIONS request', (done) => {
    let {req, res} = server.mock('/', 'OPTIONS');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    expect(res._data.toString()).to.be.empty;

    done();
  });

  it('should respond to a GET request for a swim command', (done) => {
    let {req, res} = server.mock('/', 'GET');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    expect(res._data.toString()).to.be.oneOf(['up', 'down', 'left', 'right', 'no moves stored']);
    done();
  });

  it('should respond with 404 to a GET request for a missing background image', (done) => {
    httpHandler.backgroundImageFile = path.join('.', 'spec', 'missing.jpg');
    let {req, res} = server.mock(httpHandler.backgroundImageFile, 'GET');

    httpHandler.router(req, res, () => {
      expect(res._responseCode).to.equal(404);
      expect(res._ended).to.equal(true);
      done();
    });
  });

  it('should respond with 200 to a GET request for a present background image', (done) => {
    let {req, res} = server.mock('./background.jpg', 'GET');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    // expect(res._data.toString()).to.be.
    done();
  });

  xit('should respond to a POST request to save a background image', (done) => {
    // write your test here
    done();
  });

  xit('should send back the previously saved image', (done) => {
    // write your test here
    done();
  });
});
