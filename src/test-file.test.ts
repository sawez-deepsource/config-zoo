// This is a test file - overrides should apply
// jest env should be available, no-eval should be off
describe("test suite", () => {
  it("should work", () => {
    expect(true).toBe(true);
    eval("this should be allowed in tests"); // no-eval is off for tests
  });
});
