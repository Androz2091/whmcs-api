const fetch = require('node-fetch')

module.exports = class WhmcsAPI {

    constructor (options = {}) {
        this.identifier = options.identifier || process.env.WHMCS_IDENTIFIER;
        this.secret = options.secret || process.env.WHMCS_SECRET;
        this.baseURL = options.baseURL || process.env.WHMCS_BASE_URL;
    }


    /**
     * Make a request to the WHMCS API.
     * @param {string} method The request method
     * @param {any} body The request payload
     * @param {any} options Options (identifier, secrets and URL to use for this request)
     */
    request (method = 'GET', body, options = {}) {
        return new Promise((resolve) => {
            const params = new URLSearchParams();
            params.append('identifier', options.identifer || this.identifier);
            params.append('secret', options.secret || this.secret);
            Object.keys(body).forEach((key) => params.append(key, body[key]));
            fetch(`${this.baseURL}${options.endpoint || '/includes/api.php'}`, {
                method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params.toString()
            }).then((res) => {
                res.text().then((data) => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        throw new Error(`Invalid response: ${data}`);
                    }
                });
            });
        });
    }

}