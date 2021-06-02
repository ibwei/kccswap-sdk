
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./kccswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./kccswap-sdk.cjs.development.js')
}
