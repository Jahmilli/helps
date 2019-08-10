import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

export default class Auth {
// https://auth0.com/docs/libraries/auth0js/v9
    auth0 = new auth0.WebAuth({
        domain:       'uts-helps.au.auth0.com',
        clientID:     'RyhxZk3WQTUFsZY4zsZvLqZJSd2ZaTqg',
        redirectUri: this.getRedirectUri(),
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    // getRedirectUri() {
    //     return window.location.href.includes('localhost') ? `http://localhost:3000/callback` : `https://${DOMAIN_NAME}/callback`;
    // }
    getRedirectUri() {
        // return window.location.href.includes('localhost') ? `http://localhost:3000/callback` : `https://${DOMAIN_NAME}/callback`;
        return 'http://localhost:3000/home'
    }
    authorise() {
        console.log('authorizing')
        this.auth0.authorize({
            connection: 'database'
        });
        console.log('authorized finished');
    }

    login(username: string, password: string) {
        this.auth0.login({
            // realm: 'tests',
            username: username,
            password: password,
        }, (err, result) => {
            console.log('callback');
            if (err) {
                console.log(`An error occurred during authentication`);
                console.log(err);
            } else {
                console.log('Login successful');
                console.log(result);
            }
        });
        console.log('made it here');
    }

    handleAuthentication() {
        let profile = {};
        this.auth0.parseHash((err, authResults: any) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem('access_token', authResults.accessToken);
                localStorage.setItem('id_token', authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                window.location.hash = "";
                window.location.href = "";
                profile = this.getProfile;
                console.log(profile);
                // if (profile.occupation === null || profile.occupation === undefined) {
                //     location.pathname = DOMAIN_NAME !== '' ? `${PATH}${LOGIN_FIRST_TIME_USER_PAGE}` : LOGIN_FIRST_TIME_USER_PAGE;
                // } else {
                //     location.pathname = DOMAIN_NAME !== '' ? `${PATH}${LOGIN_SUCCESS_PAGE}` : LOGIN_SUCCESS_PAGE;
                // }                
            } else if (err) {
                // location.pathname = '';
                console.log(err);
            }
        });
    }

    getProfile() {
        if (localStorage.getItem('id_token')) {
            console.log(jwtDecode(localStorage.getItem('id_token') || 'empty'));
            return jwtDecode(localStorage.getItem('id_token') || 'empty');
        } else {
            return {};
        }
    }

    isAuthenticated() {        
        let expiresAt = JSON.parse(localStorage.getItem('expires_at') || 'empty isAuth');        
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        window.location.pathname = '';
    }
};