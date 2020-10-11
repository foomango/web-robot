const { element } = require("protractor");

describe('VA DMV', () => {
    it('should find an available date', async () => {
        try {
        browser.get('https://vadmvappointments.as.me/schedule.php?calendarID=3874794')
        element(by.css('label[for="categoryType-0"]')).click()
        element(by.css('[data-qa="appointment-16554603-select"]')).click()
        const EC = protractor.ExpectedConditions
        //browser.wait(EC.presenceOf($('.activeday')), 5000)
        const activeDay = await element(by.css('.activeday')).getAttribute('day')
        
        console.log('day:', activeDay)
        } catch (e) {
            console.log('error:', e)
        }

        browser.driver.sleep(60000);
    })
})