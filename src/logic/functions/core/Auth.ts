import auth0, { Auth0UserProfile } from 'auth0-js';
import jwtDecode from 'jwt-decode';

const DOMAIN = 'uts-helps.au.auth0.com'
const ACCESS_TOKEN = 'access_token';
const ID_TOKEN = 'id_token';
const EXPIRES_AT = 'expires_at';

type UserProfile = {
    userId: string;
    nickname: string;
    name: string;
    updated_at: string;
    exp: number;
    isRegisteredUser?: boolean;
};


export default class Auth {
    initialUser = {} as UserProfile;
    // Our basic Auth0 config
    auth0: auth0.WebAuth;
    auth0Manage: auth0.Management;

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: DOMAIN, // DO NOT CHANGE THIS
            audience: `https://uts-helps.au.auth0.com/api/v2/`,
            clientID:     'RyhxZk3WQTUFsZY4zsZvLqZJSd2ZaTqg', // DO NOT CHANGE THIS
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile read:current_user read:users update:current_user_metadata create:current_user_metadata'
        }); 
        this.auth0Manage = this.setupAuthManage();
    }
    // Used to initialise our auth0 client
    authorise() {
        this.auth0.authorize({
            connection: 'database'
        });
    }

    // Called at login
    async login(username: string, password: string): Promise<auth0.LoginOptions | auth0.Auth0Error> {
        return new Promise((resolve, reject) => {
            this.auth0.login({
                username: username,
                password: password,
            }, (err, result) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            });
        }) 
    }

    handleAuthentication() {
        this.auth0.parseHash(async (err, authResults: any) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem(ACCESS_TOKEN, authResults.accessToken);
                localStorage.setItem(ID_TOKEN, authResults.idToken);
                localStorage.setItem(EXPIRES_AT, expiresAt);
                window.location.hash = '';
                window.location.href = '';
                // TODO: Will need to check email or something to verify user is student or admin and redirect on that.
                window.location.pathname = '/student/register';
            } else if (err) {
                console.log('An error occurred during authentication');
                console.log(err);
            }
        });
    }

    // Display the profile of the user
    getProfile(): UserProfile {
        if (localStorage.getItem(ID_TOKEN)) {
            let decodedJwt: any = jwtDecode(localStorage.getItem(ID_TOKEN) || '');
            let { nickname, name, updated_at, sub, exp, isRegisteredUser } = decodedJwt;
            const userId = sub;
            return { userId, nickname, name, updated_at, exp, isRegisteredUser } as UserProfile;
        } else {
            return this.initialUser;
        }
    }

    isAuthenticated(): boolean {        
        let expiresAt = JSON.parse(localStorage.getItem(EXPIRES_AT) || "0");        
        return new Date().getTime() < expiresAt;
    }

    checkCurrentSession() {
        this.auth0.checkSession({
            audience: `https://uts-helps.au.auth0.com/api/v2/`,
            scope: 'read:current_user'
        }, (err, result) => {
            // err if automatic parseHash fails
        })
    }

    setupAuthManage(): auth0.Management {
        const TEMPORARY_ACCESS_TOKEN = localStorage.getItem(ACCESS_TOKEN);
        // Maybe throw an error if it doesn't exist here...
        // if (!TEMPORARY_ACCESS_TOKEN) {
        //     return;
        // }
        console.log('setting up auth manage');
        const auth0Manage = new auth0.Management({
            domain: 'uts-helps.au.auth0.com',
            token: TEMPORARY_ACCESS_TOKEN || ''
        });
        return auth0Manage;
    }

    updateUserMetaData(_id: string, isStudent: boolean): Promise<Auth0UserProfile | string> {
        const userData: UserProfile = this.getProfile();
        const metaDataObject = {
            isRegisteredUser: true,
            isStudent,
            _id
        };

        return new Promise((resolve, reject) => {
            this.auth0Manage.patchUserMetadata(userData.userId, 
                metaDataObject, 
                (err: auth0.Auth0Error | null, profile: Auth0UserProfile) => {
                    if (err) {
                        console.log('An error occurred when updating usermetadata', err);
                        return reject('error occurred when updating usermetadata');
                        // throw Error('error occurred when updating usermetadata');
                    } else {
                        return resolve(profile);
                    }
            })
        })
    }

    readUserMetaData(): Promise<any> {
        const profile = this.getProfile();
        if (!profile.userId) {
            return Promise.reject('You have not logged in....');
        }
        console.log('reading user metadata');
        return new Promise((resolve, reject) => {
            this.auth0Manage.getUser(profile.userId, 
                (err: auth0.Auth0Error | null, userProfile: auth0.Auth0UserProfile) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log('profile is ', userProfile.user_metadata);
                    profile.isRegisteredUser = userProfile.user_metadata.isRegisteredUser;
                    return resolve(userProfile.user_metadata);
            }); 
        })
    }

    getAuth(): auth0.WebAuth {
        return this.auth0;
    }

    getManagement(): auth0.Management {
        return this.auth0Manage;
    }

    logout() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(ID_TOKEN);
        localStorage.removeItem(EXPIRES_AT);
        // window.location.replace(`https://${DOMAIN}/v2/logout`);
        window.location.replace('http://localhost:3000/student/login');
    }
};