function reverse(text = '') {
  return Array.from(String(text)).reverse().join('');
}
module.exports = { reverse };
