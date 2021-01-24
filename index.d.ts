declare module 'whmcs-api' {
    export = class WhmcsAPI {

        public identifier: string;
        public secret: string;
        public baseURL: string;

        constructor (identifier?: string, secret?: string, baseURL?: string);

        request (action: string, method?: string, body?: any): Promise<unknown>;
    }
}
