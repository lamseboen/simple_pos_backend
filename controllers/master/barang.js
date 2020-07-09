const getBarang = (req, res, next) => {
  res.send('barang')
}

const postBarang = (req, res, next) => {
  res.send('barang post')
}

const putBarang = (req, res, next) => {
  res.send('barang put')
}

const deleteBarang = (req, res, next) => {
  res.send('barang delete')
}

const coba = (a, b) => {
  return a + b
}

module.exports = {
  getBarang,
  postBarang,
  putBarang,
  deleteBarang,
  coba
}
