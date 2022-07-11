import {stringArrayTo, generateMailToLink} from "./mailTo.js"

test('mailToLink_stringArrayTo_single_array_element', () => {
  expect(stringArrayTo(["a@mail.com"])).toBe("a@mail.com");
});

test('mailToLink_stringArrayTo_single_multiple_elements', () => {
  expect(stringArrayTo(["a@mail.com", "b@mail.com", "c@mail.com"])).toBe("a@mail.com, b@mail.com, c@mail.com");
});

test('mailToLink_stringArrayTo_wrong_type', () => {
  expect(stringArrayTo(1)).toBe("");
});

test('mailToLink_stringArrayTo_undefined_input', () => {
  expect(stringArrayTo(["a@mail.com", undefined])).toBe("a@mail.com, ");
});

test('mailToLink_generateMailToLink_with_mail', () => {
  expect(generateMailToLink(["a@mail.com"])).toBe("mailto:a%40mail.com");
});