test('mailToLink_isEmptyOrSpaces_Empty', () => {
  var test = require('./mailTo');
  var generateMailToLink = test.__get__('generateMailToLink');

  expect(generateMailToLink("a@mail.com", "hallo", "how are you")).toBe("mailto:a%40mail.com?subject=hallo&body=how%20are%20you")
});

test('mailToLink_stringArrayTo_single_array_element', () => {
  var test = require('./mailTo');
  var stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com"])).toBe("a@mail.com");
});

test('mailToLink_stringArrayTo_single_multiple_elements', () => {
  var test = require('./mailTo');
  var stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com", "b@mail.com", "c@mail.com"])).toBe("a@mail.com, b@mail.com, c@mail.com");
});

test('mailToLink_stringArrayTo_wrong_type', () => {
  var test = require('./mailTo');
  var stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(1)).toBe("");
});

test('mailToLink_stringArrayTo_undefined_input', () => {
  var test = require('./mailTo');
  var stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com", undefined])).toBe("a@mail.com, ");
});
