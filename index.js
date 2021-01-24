const fetch = require('node-fetch')

module.exports = class WhmcsAPI {

    constructor ({ identifier, secret, baseURL }) {
        this.identifier = identifier || process.env.WHMCS_IDENTIFIER;
        this.secret = secret || process.env.WHMCS_SECRET;
        this.baseURL = baseURL || process.env.WHMCS_URL;
    }


    request (action, method = 'GET', body) {
            return new Promise((resolve) => {
            fetch(`${this.baseURL}/includes/api.php`, {
                action,
                method,
                body
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data);
                });
            });
        });
    }

}