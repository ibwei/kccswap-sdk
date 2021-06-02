
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./kccswap-testnet-sdk.cjs.production.min.js')
} else {
  module.exports = require('./kccswap-testnet-sdk.cjs.development.js')
}
