// Fill with your values :)

export const authConstants = {
    TENANT_ID: '4ca6f56d-30d2-43b7-a68c-2589673312de',
    APPLICATION_ID: 'b7adfe6a-e3c8-4a5a-a854-8a6400819be9',
    REDIRECT_URI: 'http://localhost:4000/token', //Route in this React app to send the id_token to
    /**
     * NONCE: A value included in the request, generated by the app, that is 
     * included in the resulting id_token as a claim. The app can then verify 
     * this value to mitigate token replay attacks. The value is typically a 
     * randomized, unique string or GUID that can be used to identify the 
     * origin of the request.
     */
    NONCE: 'tesla'
};
