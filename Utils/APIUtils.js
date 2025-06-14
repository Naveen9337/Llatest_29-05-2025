export class APIUtils {

    constructor(apiContext,loginPayload)
    {
    
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;

    }

    async getToken()
    {
      const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
      
              {
                  data : this.loginPayload,
              }
          )
          
         
          const loginResponseJson = await loginResponse.json();
         const token = loginResponseJson.token;
          console.log(token);  
          return token;
    }

    async createOrder(orderPayLoad)
    {
        let response = {};
        response.token = await this.getToken();
        let orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
                data: orderPayLoad,
                headers: {
                    'authorization': response.token,
                    'content-type': 'application/json'
                },
            });
        
            const orderResponseJson = await orderResponse.json();
            console.log(orderResponseJson);
            let orderId = orderResponseJson.orders[0];
            response.orderId = orderId;
            return response;
    }
    
}