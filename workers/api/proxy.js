'use strict'

const Base = require('./base')

class Proxy extends Base {
  space (service, msg) {
    const space = super.space(service, msg)
    return space
  }
}

module.exports = Proxy
