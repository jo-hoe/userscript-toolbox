describe("tests for generateMailToLink", () => {
  var test = require('./mailTo');
  var generateMailToLink = test.__GetDependency__('generateMailToLink');

  it("test positive case", () => {
    expect(generateMailToLink("a@mail.com", "hallo", "how are you")).toBe("mailto:a%40mail.com?subject=hallo&body=how%20are%20you")
  });

  it("test cc and bcc", () => {
    expect(generateMailToLink("a@mail.com", "", "", ["b@mail.com"], ["c@mail.com", "d@mail.com"])).toBe("mailto:a%40mail.com?cc=b%40mail.com&bcc=c%40mail.com%2C%20d%40mail.com")
  });

  it("set only mail address", () => {
    expect(generateMailToLink("a@mail.com")).toBe("mailto:a%40mail.com")
  });
});

describe("tests for stringArrayTo", () => {
  var test = require('./mailTo');
  var stringArrayTo = test.__GetDependency__('stringArrayTo');

  it("test single array element", () => {
    expect(stringArrayTo(["a@mail.com"])).toBe("a@mail.com");
  });

  it("test multiple array elements", () => {
    expect(stringArrayTo(["a@mail.com", "b@mail.com", "c@mail.com"])).toBe("a@mail.com, b@mail.com, c@mail.com");
  });

  it("test wrong type", () => {
    expect(stringArrayTo(1)).toBe("");
  });

  it("test undefined input", () => {
    expect(stringArrayTo(["a@mail.com", undefined])).toBe("a@mail.com, ");
  });
});