const sayHEllo = (req, res) => {
  res.status(200).send('Hello, World!');
};

const addNum = (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== 'number') {
    return res.status(400).json({ message: 'a must be a number' });
  }
  if (typeof b !== 'number') {
    return res.status(400).json({ message: 'b must be a number' });
  }

  res.status(200).json({ sum: a + b });
};

module.exports = {
  sayHEllo,
  addNum
};
