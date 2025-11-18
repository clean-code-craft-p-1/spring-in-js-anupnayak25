import { computeStatistics } from "../statistics.mjs";
import { expect } from "chai";

describe("Statistics", () => {
  it("reports average, min, max", () => {
    const computedStats = computeStatistics([98.6, 98.2, 97.8, 102.2]);
    const epsilon = 0.001;
    expect(computedStats.average).to.be.closeTo(99.2, epsilon);
    expect(computedStats.min).to.be.closeTo(97.8, epsilon);
    expect(computedStats.max).to.be.closeTo(102.2, epsilon);
  });
  it("reports NaN for empty input", () => {
    const computedStats = computeStatistics([]);
    expect(Number.isNaN(computedStats.average)).to.be.true;
    expect(Number.isNaN(computedStats.min)).to.be.true;
    expect(Number.isNaN(computedStats.max)).to.be.true;
  });

  it("throws on non-array input", () => {
    expect(() => computeStatistics("98.6")).to.throw(TypeError);
  });

  it("returns NaN triplet when any element is NaN", () => {
    const computedStats = computeStatistics([98.6, NaN, 99.1]);
    expect(Number.isNaN(computedStats.average)).to.be.true;
    expect(Number.isNaN(computedStats.min)).to.be.true;
    expect(Number.isNaN(computedStats.max)).to.be.true;
  });

  it("accepts numeric strings by coercion", () => {
    const computedStats = computeStatistics(["98.6", "99.4"]);
    expect(computedStats.min).to.equal(98.6);
    expect(computedStats.max).to.equal(99.4);
  });

  it("returns NaN when any value is non-numeric", () => {
    const computedStats = computeStatistics([98.6, "oops", 99.1]);
    expect(Number.isNaN(computedStats.average)).to.be.true;
    expect(Number.isNaN(computedStats.min)).to.be.true;
    expect(Number.isNaN(computedStats.max)).to.be.true;
  });
  
});
