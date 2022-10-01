const express = require("express")
const router = express.Router()
const {handleValidationErrors} = require('express-validator')
const {check, param} = require('express-validator')
const {setTokenCookie, requireAuth, restoreUser} = require("../../utils/auth")
const {sequelize, User, Spot, SpotImage, Review, ReviewImage, Booking} = require('../../db/models')
const {Op} = require("sequelize")
