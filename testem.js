/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed&nocontainer",
  "disable_watching": true,
  "launch_in_ci": [
    "Firefox"
  ],
  "launch_in_dev": [
    "Chrome",
    "Firefox"
  ]
};
