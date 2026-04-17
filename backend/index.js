const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const { ethers } = require('ethers')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3001
