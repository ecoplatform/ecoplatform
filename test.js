const {remote} = require('webdriverio');

const capabilities = {
  'appium:platformName': 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
//  'appium:app': '/home/sebjaka/Downloads/application-2d68cc66-e51c-4031-8811-8e269158df25.apk'
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};
const appEco_path = '~Ecoplatform DEV';
const btn_path = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.Button';
const dev = 'exp://u.expo.dev/update/1948fed0-461c-4ee5-8eeb-8272910d266d';
const connect = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.Button';

async function runTest() {
  const driver = await remote(wdOpts);
  try {
  const appEco = await driver.$(appEco_path);
//  console.log(btn.innerHTML);
//  await driver.pause(10000);
  await appEco.click();
  const btn = await driver.$(btn_path);
  await btn.click();
  await driver.pause(5000);
//  await driver.$(input).sendKeys("exp://u.expo.dev/update/1948fed0-461c-4ee5-8eeb-8272910d266d");


//    const batteryItem = await driver.$('#DevLauncherURLInput');
    const link = await driver.$("//*[@class='android.widget.EditText']").addValue(dev);
    driver.pressKeyCode(66);
    const launch = await driver.$(connect);
    await launch.click();
    await driver.pause(10000);


  } finally {
//    await driver.deleteSession();
  }
}

runTest().catch(console.error);