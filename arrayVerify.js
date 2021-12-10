const arrayVerify = {
  isEmpty : (array) => {
    if(array.length === 0) return true;
    return false;
  },

  typeNumber : (array) => { return array.every((el) => typeof el === 'number')},

  typeString : (array) => { return array.every((el) => typeof el === 'string')},
}

module.exports = arrayVerify;
