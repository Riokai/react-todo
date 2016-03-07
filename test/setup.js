import jsdom from 'jsdom'

if (typeof document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
  global.window = document.defaultView
  global.navigator = global.window.navigator
}

function noop() {
  return null;
}

require.extensions['.styl'] = noop;
// you can add whatever you wanna handle
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.css'] = noop;
