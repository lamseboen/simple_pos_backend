const getKategori = (req, res, next) => {
  res.send('kategori')
}

const postKategori = (req, res, next) => {
  res.send('kategori post')
}

const putKategori = (req, res, next) => {
  res.send('kategori put')
}

const deleteKategori = (req, res, next) => {
  res.send('kategori delete')
}

module.exports = {
  getKategori,
  postKategori,
  putKategori,
  deleteKategori
}
