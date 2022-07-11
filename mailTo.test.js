test('mailToLink_stringArrayTo_single_array_element', () => {
  let test = require('./mailTo');
  let stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com"])).toBe("a@mail.com");
});

test('mailToLink_stringArrayTo_single_multiple_elements', () => {
  let test = require('./mailTo');
  let stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com", "b@mail.com", "c@mail.com"])).toBe("a@mail.com, b@mail.com, c@mail.com");
});

test('mailToLink_stringArrayTo_wrong_type', () => {
  let test = require('./mailTo');
  let stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(1)).toBe("");
});

test('mailToLink_stringArrayTo_undefined_input', () => {
  let test = require('./mailTo');
  let stringArrayTo = test.__get__('stringArrayTo');

  expect(stringArrayTo(["a@mail.com", " "])).toBe("a@mail.com");
});