'use strict'

const async = require('async')
const _ = require('lodash')
const WrkProxyApi = require('./api.proxy.wrk')

class WrkProxyApiGrc extends WrkProxyApi {

  constructor (conf, ctx) {
    super(conf, ctx)

    this.dest = ctx.dest
    this.loadConf('grc.proxy', 'proxy')

    this.init()
    this.start()
  }


  getGrcConf () {
    const grcConf = super.getGrcConf()
    grcConf.services = [`rest:proxy:${this.dest}`]

    return grcConf
  }

  getApiConf () {
    return {
      path: 'grc.proxy'
    }
  }

  getPluginCtx (type) {
    super.init()

    const ctx = super.getPluginCtx(type)

    switch (type) {
      case 'api_bfx':
        ctx.grc_bfx = this.grc_bfx
        ctx.dest = this.dest
        break
    }

    return ctx
  }
}

module.exports = WrkProxyApiGrc
