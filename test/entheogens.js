const app = require("../server.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const expect = chai.expect;
const agent = chai.request.agent(app);

// Import Entheogen model
const Entheogen = require('../models/entheogen');
const server = require('../server');

chai.config.includeStack = true;

chai.should();
chai.use(chaiHttp);

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

describe("Entheogens", function() {
  // const agent = chai.request.agent(server);
  //Test Entheogen
  const newEntheogen = {
    name: 'Test Enth',
    plantSource: 'Test Source',
    psychoactiveChemical: 'Test chemical',
    dosage: 'Test dosage',
    healingApplications: 'Test applications'
  };
  // Describe what you are testing
  it("should create with valid attributes at POST /new", function(done) {
    // Checks how many posts there are now
    Entheogen.estimatedDocumentCount()
      .then(function (initialDocCount) {
          agent
              // .request(app)
              .post("/entheogens/new")
              // This line fakes a form post,
              // since we're not actually filling out a form
              .set("content-type", "application/x-www-form-urlencoded")
              // Make a request to create another
              .send(newEntheogen)
              .then(function (res) {
                Entheogen.estimatedDocumentCount()
                      .then(function (newDocCount) {
                          // Check that the database has one more entheogens in it
                          expect(res).to.have.status(200);
                          // Check that the database has one more entheogens in it
                          expect(newDocCount).to.be.equal(initialDocCount + 1)
                          done();
                      })
                      .catch(function (err) {
                          done(err);
                      });
              })
              .catch(function (err) {
                  done(err);
              });
      })
      .catch(function (err) {
          done(err);
      });

    after(function () {
      Entheogen.findOneAndDelete(newEntheogen);
  });
});
});