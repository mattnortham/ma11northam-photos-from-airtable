module.exports = {
  nicejson: (string) => {
    if (!string) {
      return '""';
    }
    return JSON.stringify(string);
  },
}
