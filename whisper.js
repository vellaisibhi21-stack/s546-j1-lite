function whisper(text = 'hello') {
  return `${String(text).toLowerCase()}...`;
}
module.exports = { whisper };
