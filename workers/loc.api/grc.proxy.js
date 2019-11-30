'use strict'

const _ = require('lodash')
const async = require('async')
const MProxy = require('./proxy')
const request = require('request')

class Grc extends MProxy {

  proxy (space, method, args, cb) {
    const ctx = this.ctx

    ctx.grc_bfx.req(`rest:${ctx.dest}`, method, args, {}, cb)
  }
}

module.exports = Grc
