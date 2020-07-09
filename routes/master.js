var express = require('express')
var router = express.Router()
var kategoriController = require('../controllers/master/kategori')
var supplierController = require('../controllers/master/supplier')
var satuanController = require('../controllers/master/satuan')
var barangController = require('../controllers/master/barang')

router.get('/', function (req, res, next) {
  res.send('master')
})

// kategori
router.get('/kategori', kategoriController.getKategori)

router.post('/kategori', kategoriController.postKategori)

router.put('/kategori', kategoriController.putKategori)

router.delete('/kategori', kategoriController.deleteKategori)

// supplier
router.get('/supplier', supplierController.getSupplier)

router.post('/supplier', supplierController.postSupplier)

router.put('/supplier', supplierController.putSupplier)

router.delete('/supplier', supplierController.deleteSupplier)

// barang
router.get('/barang', barangController.getBarang)

router.post('/barang', barangController.postBarang)

router.put('/barang', barangController.putBarang)

router.delete('/barang', barangController.deleteBarang)

// satuan
router.get('/satuan', satuanController.getSatuan)

router.post('/satuan', satuanController.postSatuan)

router.put('/satuan', satuanController.putSatuan)

router.delete('/satuan', satuanController.deleteSatuan)

module.exports = router
