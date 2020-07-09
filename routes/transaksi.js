var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('transaksi')
})

// penjualan
router.get('/penjualan', function (req, res, next) {
  res.send('penjualan')
})

router.post('/penjualan', function (req, res, next) {
  res.send('penjualan post')
})

router.put('/penjualan', function (req, res, next) {
  res.send('penjualan put')
})

router.delete('/penjualan', function (req, res, next) {
  res.send('penjualan delete')
})

// pembelian
router.get('/pembelian', function (req, res, next) {
  res.send('pembelian')
})

router.post('/pembelian', function (req, res, next) {
  res.send('pembelian post')
})

router.put('/pembelian', function (req, res, next) {
  res.send('pembelian put')
})

router.delete('/pembelian', function (req, res, next) {
  res.send('pembelian delete')
})

module.exports = router
