'use strict';

/**
 * To call unittest via npm rewire all tested functions have to be called
 * in at least one other function. Therefore this dummy function is introduced 
 * https://github.com/speedskater/babel-plugin-rewire/blob/master/README.md
 */
function __rewire() {
  generateMailToLink()
  isEmptyOrSpaces()
  stringArrayTo()
}

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

  result += encodeURIComponent(stringArrayTo(to))

  if (!isEmptyOrSpaces(subject) || !isEmptyOrSpaces(body) || cc !== undefined | bcc !== undefined) {
    result += "?"
    var queryparams = []
    if (subject) {
      queryparams.push("subject=" + encodeURIComponent(subject))
    }
    if (body) {
      queryparams.push("body=" + encodeURIComponent(body))
    }
    if (cc) {
      queryparams.push("cc=" + encodeURIComponent(stringArrayTo(cc)))
    }
    if (bcc) {
      queryparams.push("bcc=" + encodeURIComponent(stringArrayTo(bcc)))
    }
    result += queryparams.join("&")
  }

  return result
}

/**
 * @param {string} str
 * @returns {boolean} true in case string is empty or contains only whitespaces
 */
function isEmptyOrSpaces(str) {
  return str == null || str.match(/^ *$/) !== null;
}

/**
 * @param mailaddresses is either a string or Array<string> of mail addresses
 * @returns {string} comma concadinated mail addresses
 */
function stringArrayTo(mailaddresses) {
  // return if only a string is provided
  if (typeof mailaddresses == "string") {
    return mailaddresses
  }
  // return empty if not string provided
  if (!(mailaddresses instanceof Array)) {
    return ""
  }

  // concat all input strings
  return mailaddresses.join(", ")
}