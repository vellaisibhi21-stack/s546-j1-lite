function shout(text = 'hello') {
  return `${String(text).toUpperCase()}!`;
}
module.exports = { shout };
