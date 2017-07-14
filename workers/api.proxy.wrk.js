'use strict'

const WrkApi = require('./api.wrk')

class WrkProxyApi extends WrkApi {
  getPluginCtx (type) {
    const ctx = super.getPluginCtx(type)

    switch (type) {
      case 'api_bfx_main':
        ctx.grc_bfx = this.grc_bfx
        break
    }

    return ctx
  }
}

module.exports = WrkProxyApi
