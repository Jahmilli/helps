import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const ACCESS_TOKEN = 'access_token';
const ID_TOKEN = 'id_token';
const EXPIRES_AT = 'expires_at';
export default class Auth {
    // Our basic Auth0 config
    auth0 = new auth0.WebAuth({
        domain:       'uts-helps.au.auth0.com', // DO NOT CHANGE THIS
        clientID:     'RyhxZk3WQTUFsZY4zsZvLqZJSd2ZaTqg', // DO NOT CHANGE THIS
        redirectUri: 'http://localhost:3000/home',
        responseType: 'token id_token',
        scope: 'openid profile'
    });
    // Used to initialise our auth0 client
    authorise() {
        this.auth0.authorize({
            connection: 'database'
        });
    }
    // Called at login
    login(username: string, password: string) {
        this.auth0.login({
            username: username,
            password: password,
        }, (err, result) => {
            if (err) {
                console.log(`An error occurred during authentication`);
                console.log(err);
            } else {
                console.log('Login successful');
            }
        });
    }

    handleAuthentication() {
        let profile = {};
        this.auth0.parseHash((err, authResults: any) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem(ACCESS_TOKEN, authResults.accessToken);
                localStorage.setItem(ID_TOKEN, authResults.idToken);
                localStorage.setItem(EXPIRES_AT, expiresAt);
                window.location.hash = "";
                window.location.href = "";
                profile = this.getProfile;
            } else if (err) {
                console.log('An error occurred during authentication')
                console.log(err);
            }
        });
    }

    // Display the profile of the user
    getProfile() {
        if (localStorage.getItem(ID_TOKEN)) {
            console.log(jwtDecode(localStorage.getItem(ID_TOKEN) || ''));
            return jwtDecode(localStorage.getItem(ID_TOKEN) || '');
        } else {
            return {};
        }
    }

    isAuthenticated() {        
        let expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT) || "0");        
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(ID_TOKEN);
        localStorage.removeItem(EXPIRES_AT);
        window.location.pathname = '';
    }
};