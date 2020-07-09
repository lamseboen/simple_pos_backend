const getSupplier = (req, res, next) => {
  res.send('supplier')
}

const postSupplier = (req, res, next) => {
  res.send('supplier post')
}

const putSupplier = (req, res, next) => {
  res.send('supplier put')
}

const deleteSupplier = (req, res, next) => {
  res.send('supplier delete')
}

module.exports = {
  getSupplier,
  postSupplier,
  putSupplier,
  deleteSupplier
}
