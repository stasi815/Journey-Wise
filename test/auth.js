const app = require("../server.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.config.includeStack = true;

chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(server);

const User = require("../models/user");

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe("User", function() {
  // TESTS WILL GO HERE.

  // login
  it("should not be able to login if they have not registered", function(done) {
    agent.post("/auth/login", { email: "wrong@wrong.com", password: "nope" }).end(function(err, res) {
      res.status.should.be.equal(401);
      done();
    });
  });

  // signup
  it("should be able to signup", function(done) {
    User.findOneAndRemove({ username: "testone" }, function() {
      agent
        .post("/auth/sign-up")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ username: "testone", password: "password" })
        .end(function(err, res) {
          console.log(res.body);
          res.should.have.status(200);
          agent.should.have.cookie("jwttoken");
          done();
        });
    });
  });
});
