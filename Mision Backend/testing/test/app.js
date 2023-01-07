let expect = require('chai').expect;
let converter = require("../app.js");


describe("Color Code Converter", function () {

    describe("RGB to HEX conversion", function() {
        it("converts basic colors", function() {
            let redHex = converter.rgbToHex(255, 0, 0);
            let greenHex = converter.rgbToHex(0, 255, 0);
            let blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("HEX to RGB conversion", function() {
        it("converts basic colors", function() {
            
        });
    });

});