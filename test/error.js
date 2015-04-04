'use strict';
/**
 * @file error test
 * @module transfer-rate
 * @subpackage test
 * @version 0.0.1
 * @author https://github.com/expressjs/serve-static
 * @license GPLv3
 */

/*
 * initialize module
 */
var transfer = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('error', function() {

  describe('req', function() {

    it('should throw "req required". empty', function(done) {

      var rate = transfer();
      try {
        rate();
      } catch (err) {
        assert.equal(err.message, 'req required');
        done();
      }
    });
    it('should throw "req required". string', function(done) {

      var rate = transfer();
      try {
        rate('foo');
      } catch (err) {
        assert.equal(err.message, 'req required');
        done();
      }
    });
  });

  describe('start', function() {

    it('should throw "start required". empty', function(done) {

      var rate = transfer();
      try {
        rate({});
      } catch (err) {
        assert.equal(err.message, 'start required');
        done();
      }
    });
    it('should throw "start required". string', function(done) {

      var rate = transfer();
      try {
        rate({}, 'foo');
      } catch (err) {
        assert.equal(err.message, 'start required');
        done();
      }
    });
  });

});