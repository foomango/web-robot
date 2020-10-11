exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--test-type=browser', 'disable-infobars'],
        },
        platform: 'ANY',
        version: 'ANY',
      },
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false)
    },
    specs: ['src/va-dmv.js']
}