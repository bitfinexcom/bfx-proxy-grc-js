'use strict'

const Base = require('./base')

class WrkProxy extends Base {
  init () {
    super.init()
    this.conf.init.facilities.push(
      ['fac', 'grc', 'p0', 'bfx', {}]
    )
  }
}

module.exports = WrkProxy
