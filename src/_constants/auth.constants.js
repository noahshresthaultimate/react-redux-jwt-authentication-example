// Fill with your values :)

export const authConstants = {
    TENANT_ID: '4ca6f56d-30d2-43b7-a68c-2589673312de',
    APPLICATION_ID: '79262d33-be3a-4e6a-bf8d-3c4c6995c751',
    REDIRECT_URI: 'http://localhost:8080/login', //Route in this React app to send the id_token to
    /**
     * STATE: A value included in the request that is returned in the token response. 
     * It can be a string of any content that you wish. A randomly generated 
     * unique value is typically used for preventing cross-site request forgery 
     * attacks. The state is also used to encode information about the user's 
     * state in the app before the authentication request occurred, such as the 
     * page or view they were on.
     */
    STATE: 'gustav', 
    /**
     * NONCE: A value included in the request, generated by the app, that is 
     * included in the resulting id_token as a claim. The app can then verify 
     * this value to mitigate token replay attacks. The value is typically a 
     * randomized, unique string or GUID that can be used to identify the 
     * origin of the request.
     */
    NONCE: 'tesla'
};
