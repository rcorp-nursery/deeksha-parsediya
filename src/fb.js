var webdriver = require('webdriverio'),
// chrome = require('chromedriver'),
//    By = require('selenium-webdriver').By,
//    until = require('selenium-webdriver').until;
//
// var driver = new webdriver.Builder()
//    .forBrowser('chrome')
//    .build();


client = webdriver.remote({ desiredCapabilities: {browserName: 'firefox'} });
console.log('here')
client.init()
      .url('http://facebook.com')
      .click('#email')
      .keys('kumarisomya37@gmail.com')
      .click('#pass')
      .keys('')
      .click('input#u_0_w')    /*  click for login */
      
      .click('div._1k67._4q39') /* click for profile */

      //.click('a._39g5')

      //.click('span._50f5_5kx5')
      
      //.click('div#u_0_g')  /* click on message box */

      //.click('div#MercuryJewelFooter')   /* click on see all */

      /*.selectorExecute('ul#wmMasterViewThreadlist')

        .selectorExecute('._l1',function (a,b)
        {
              console.log(a,b);
       } ); */



     // client.elements('._l1',function(a,b)

     // {

      //  console.log(a,b);

      //} );


      //.click('div._l2')

      //.click('div._1rt')

      //.click('a.seeMore')
      //.click('span.f_click')
      //.click('a#u_0_g')
    //  .click('div._2n_9')

    //  setTimeout (function(){client.init().click('div._2n_9')},10000)


    //  setTimeout(function)

        //.timeouts('Page load',10000)


    //  client.timeouts('',500);

      //.waitForSelected('div._2n_9.f_click',[500])



      //.click('input.inputtext.textinput')

      //.click('a#Findfriends')

// driver.get('http://www.facebook.com/').click("#email");
// driver.quit();
