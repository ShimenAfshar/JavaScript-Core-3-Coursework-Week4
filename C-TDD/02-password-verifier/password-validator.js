function verify(password) {
  // if (
  //   password &&
  //   password.length >= 8 &&
  //   password !== null &&
  //   password.match(/[A-Z][a-z]/) &&
  //   password.match(/[0-9]/)
  // )
  //   return "Password accepted";
  // else {
  //   return "Password rejected";
  // }

  return password !== null &&
    password.length >= 8 &&
    password.match(/[A-Z]/) &&
    password.match(/[0-9]/)
    ? "Password accepted"
    : "Password rejected";
}
//  console.log(verify("kingh67hgdbPs"));
module.exports = verify;

// edge cases