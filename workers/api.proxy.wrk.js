'use strict'

const async = require('async')
const WrkProxy = require('./proxy.wrk')

class WrkProxyApi extends WrkProxy {
  init () {
    super.init()

    this.conf.init.facilities.push(
      ['fac', 'grc', 'p0', 'bfx_api', {
        services: [],
        svc_port: this.ctx.ap ? parseInt(this.ctx.ap, 10) : this.conf.proxy.apiBfxPort
      }],
      ['fac', 'api', 'bfx', 'bfx_proxy', {
        path: this.conf.bfx_api_class
      }]
    )
  }

  getPluginCtx (type) {
    const ctx = super.getPluginCtx(type)

    switch (type) {
      case 'api_bfx_proxy':
        ctx.grc_bfx = this.grc_bfx
        break
    }

    return ctx
  }

  _start (cb) {
    async.series([
      next => { super._start(next) },
      next => {
        this.updateBfxApiServices()
        this.grc_bfx_api.setServices(this.conf.bfx_api_services)

        if (this.api_bfx_proxy) {
          this.grc_bfx_api.set('api', this.api_bfx_proxy.api)
        }

        next()
      }
    ], cb)
  }
}

module.exports = WrkProxyApi
