//import wd from 'wd';
const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'pkg': 'host.exp.exponent',
  'intentAction': 'android.intent.action.VIEW',
  'activity': 'host.exp.exponent.experience.HomeActivity',
  'appWaitForLaunch': true,
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function launchExpoAndroid() {
  const driver = await remote(wdOpts, capabilities);
  await driver.pause(1000);
  await driver.closeApp();
  await driver.startActivity(androidCaps.pkg, androidCaps.activity,);
//  await driver.deleteSession();
  await client.execute('mobile:deepLink', { url: 'exp://127.0.0.1:19000', package: androidCaps.pkg });
  return client;
  }
  describe('Example Test', () => {
    let client;

    beforeAll(async () => {
      client = await launchExpoAndroid();
    });

    afterAll(async () => {
      await client.deleteSession();
    });

    // Add tests here
  });


launchExpoAndroid().catch(console.error);