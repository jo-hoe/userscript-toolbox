'use strict';

/**
 * Generates a mailto links
 * https://datatracker.ietf.org/doc/html/rfc2368
 * @param {Array<string>} to
 * @param {string} subject
 * @param {string} body
 * @param {Array<string>} cc
 * @param {Array<string>} bcc
 * @returns {string} mailto link
 */
function generateMailToLink(to, subject, body, cc, bcc) {
  var result = "mailto:"

  result += stringArrayTo(to)
  if(subject !== undefined || body !== undefined || cc !== undefined || bcc !== undefined){
    
  }

  return result
}

/**
 * @param mailaddresses is either a string or Array<string> of mail addresses
 */
function stringArrayTo(mailaddresses) {
  // return if only a string is provided
  if (typeof mailaddresses == "string") {
    return mailaddresses
  }
  // return empty if not string provided
  if (!mailaddresses instanceof Array) {
    return ""
  }

  // concat all input strings
  var result = ""
  for (let i = 0; i < mailaddresses.length; i++) {
    if (isEmptyOrSpaces(mailaddresses[i])){
      continue
    }
    if (i > 0) {
      result += ", "
    }
    result += mailaddresses[i]
  }

  return result
}


/**
 * @param {string} str
 * @returns {boolean} true in case string is empty or contains only whitespaces
 */
function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}