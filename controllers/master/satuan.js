const getSatuan = (req, res, next) => {
  res.send('Satuan')
}

const postSatuan = (req, res, next) => {
  res.send('Satuan post')
}

const putSatuan = (req, res, next) => {
  res.send('Satuan put')
}

const deleteSatuan = (req, res, next) => {
  res.send('Satuan delete')
}

module.exports = {
  getSatuan,
  postSatuan,
  putSatuan,
  deleteSatuan
}
