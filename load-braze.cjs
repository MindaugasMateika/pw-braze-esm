function loadBraze() {
    globalThis.navigator = { platform: '_', userAgent: '_' }
  
    return import('@braze/web-sdk')
  }
  
  module.exports = loadBraze
  