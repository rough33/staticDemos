exports.config = {

  baseUrl: 'file:///Users/weit/Documents/dropdown.html',

  onPrepare: function() {
    browser.resetUrl = 'file://';
  },
  specs: ['spec/e2e.js'],
  framework: 'jasmine',
  capabilities: {

    name: 'FUNCTIONAL TEST',
    browserName: 'chrome',
    chromeOptions: {

      args: ['allow-file-access-from-files']
    }
  }
};
