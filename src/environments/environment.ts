// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    systemName: "SmartONE Track & Trace",
    apiV1: "https://tnt-stage-api.smartoneclub.com",
    siteKey: "6LfzdZgiAAAAABffsAFvGXMQqlBOc5DQWCbZa9F0",
    asan: "https://asanloginpreprod.my.gov.az/",
    demo: true,
    underConstruction: false,
    az: false,
    captcha: false,

    newLogo: true,

    asanV2: {
        active: true,
        asan_login_url: "https://portal.login.gov.az/",
        client_id: "b4cfc4d71425441cb625e7cd1d400006",
        redirect_uri: "https:%2F%2Ftnt.e-taxes.gov.az%2Flogin-asan",
        redirect_uri_raw: "https://tnt.e-taxes.gov.az/login-asan",
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
