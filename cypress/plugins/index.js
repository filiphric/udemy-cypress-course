module.exports = (on) => {
  
  on('before:browser:launch', (browser = {}, launchOptions) => {

    if (browser.name === 'chrome') {

      launchOptions.args.push('--start-fullscreen');

      return launchOptions;
    }
    
  });

};