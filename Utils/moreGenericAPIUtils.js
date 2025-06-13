export class APIUtils {

    constructor(apiContext, loginPayload) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
        this.baseUrl = 'https://rahulshettyacademy.com/api/ecom';
    }

    async post(endpoint, data, headers = {}) {
        const response = await this.apiContext.post(`${this.baseUrl}${endpoint}`, {
            data,
            headers
        });
        return response.json();
    }

    async get(endpoint, headers = {}) {
        const response = await this.apiContext.get(`${this.baseUrl}${endpoint}`, {
            headers
        });
        return response.json();
    }

    async getToken() {
        const loginResponseJson = await this.post('/auth/login', this.loginPayload);
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayLoad) {
        const token = await this.getToken();
        const orderResponseJson = await this.post(
            '/order/create-order',
            orderPayLoad,
            {
                'authorization': token,
                'content-type': 'application/json'
            }
        );
        console.log(orderResponseJson);
        // Return the whole response for flexibility
        return orderResponseJson;
    }
}