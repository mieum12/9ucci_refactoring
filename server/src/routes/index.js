const express = require('express')
const router = express.Router()
//auth
const authUser = require('../middleware/authUser.js')
const authAdmin = require('../middleware/authAdmin.js')
//User
const login = require ('./user/login.js')
const logout = require ('./user/logout.js')
const register = require ('./user/register.js')

//UserInfo
const updateUserInfo = require ('./userInfo/update.js')
const readUserInfo = require('./userInfo/read.js')
//Product
const createProduct= require ('./product/create.js')
const readProduct= require ('./product/read.js')
const updateProduct= require ('./product/update.js')
const deleteProduct = require ('./product/delete.js')
//Order
const createOrder= require ('./order/create.js')
const updateOrder= require ('./order/update.js')
const deleteOrder= require ('./order/delete.js')
const readOrder= require ('./order/read.js')



//인증없이도 접근이 가능한 라우터
//User
router.use('/signin',login)//get
router.use('/signup',register)//post

//Product //product test시 사용
router.use('/products',readProduct)//get



//인증이후에 접근이 가능한 라우터
router.use(authUser)
//User
router.use('/signout',logout)

//UserInfo
router.use('/userinfo',readUserInfo)//get
router.use('/userinfo', updateUserInfo)//put

//Order
router.use('/orders', createOrder)//post
router.use('/orders', readOrder)//get
router.use('/orders', updateOrder)//put
router.use('/orders', deleteOrder)//delete

//인증+관리자 권한을 부여받았을 경우에만 접근이 가능한 라우터
router.use(authAdmin)
//Product
router.use('/products',createProduct)//post
router.use('/products',updateProduct)//put
router.use('/products',deleteProduct)//delete

module.exports = router