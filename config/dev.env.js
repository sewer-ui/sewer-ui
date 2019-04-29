'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
let  NODE_ENV = '"development"'
if(process.env.NODE_ENV == "testing"){
  NODE_ENV = '"testing"'
}
module.exports = merge(prodEnv, {
  NODE_ENV: NODE_ENV
})
