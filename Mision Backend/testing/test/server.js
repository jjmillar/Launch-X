const expect = require('chai').expect;
const request = require("request");

describe("Color Code Converter API", function() {

    describe("RGB to HEX conversion", function() {
        const url = "http://localhost:3000/rgbtohex?hex=00ff00";

        it("return status 200", function() {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("return color in rgb", function() {
            request(url, function(error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });

    describe("HEX to RGB conversion", function() {
        const url = "http://localhost:3000/hextorgb?red=255&green=255&blue=255";

        it("return status 200", function() {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("return color in hex", function() {
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });
    });

});
