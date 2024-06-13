const crypto = require('crypto');

const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((color1) => {
      colors.push(numsToRGBColor([...color1]))
      return color1
    })
    .then((color2) => {
      colors.push(numsToRGBColor([...color2]))
      return color2
    })
    .then((color3) => {
      colors.push(numsToRGBColor([...color3]))
      return color3
    })
    .then((color4) => {
      colors.push(numsToRGBColor([...color4]))
      return colors
    })
    .catch((err) => {
      console.error(err);
    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
