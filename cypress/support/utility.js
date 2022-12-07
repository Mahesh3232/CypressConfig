//utility.ts
export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'production') //Check the value
            return "https://www.guru99.com"; //return desired url
        else if (envi == 'staging')
            return "https://www.google.com";
        else if (envi == 'qa')
            return "http://www.instagram.com";
    }
}