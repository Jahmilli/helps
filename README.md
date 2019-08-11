# HELPS
## Setting up the application
### Requirements:
- nodejs (See https://nodejs.org/en/download/)
- npm (This comes with nodejs download)
- yarn (See https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Running the application
1. From the command line, cd into the application directory 
2. Run: `yarn install`

If you want to run with stubby:
3. __WINDOWS__ Run: `yarn run startWithStubbyWd` (Expect the application to startup and open your browser to 'localhost:3000')
3. __UNIX/Linux/Mac__ Run: `yarn run startWithStubby` (Expect the application to startup and open your browser to 'localhost:3000')
If you want to run with the helps-backend:
3. Run: `yarn run start` (Expect the application to startup and open your browser to 'localhost:3000')

### Changing Proxy Configuration Setting
The proxy configuration will be used to either point the application at stubby or our backend server (__Note:__ This requires you to have setup 'helps-backend' and it needs to be running locally for this to work).
The two proxy hosts are:
- http://localhost:8882 (Stubby)
- http://localhost:3001 (helps-backend)
In the package.json, you should see one of the proxy configurations, to change it just replace the port with the alternative. Then restart the development environment (Ie if changed to point to helps-backend run `yarn run start`).

If you have any issues, please ask someone in the group :)

# STEPS
1. Authentication
  - Authentication should be the same for admins and students (they will have different pages though)
How it should work:
  - User goes to create account
  - User inputs email and password
  - This registers with Auth0 which then returns a JWT containing their session
  - Once user is registered, they will then be directed to setting up user details

If the user navigates to any page on the app that requires them to login, they should be redirected to the login page
### Authentication
Authentication is done using Auth0. They have a global authentication feature but because we need a custom UI for our login/account creation, we have had to use their SDK and manage the auth ourselves.
For documentation on their SDK see: https://auth0.com/docs/libraries/auth0js/v9

### Directory Structure
── README.md
├── cypress                  // Where cypress tests/config is stored
├── cypress.json             // Cypress Configuration
├── package.json             // Application Manifest
├── public
│   ├── index.html           // Static application entry point
├── src
│   ├── App.tsx              // Root Application Component
│   ├── components
│   │   ├── common           // Where components common across the application should be stored
│   │   ├── containers       // Where components managing state and logic should be saved
│   │   ├── pages            // Where pages should be stored (Ie containing multiple components, navbar footer etc inside)
│   │   └── presentational   // Where presentational components should be saved (Ie not containing any state/logic)
│   ├── images               // Where images should be saved (TODO: Move to a cloud file storage with a CDN instead)
│   ├── index.tsx            // React application entrypoint
│   ├── logic
│   │   ├── domains          // Where domain objects should be stored
│   │   └── functions
│   │       ├── core         // Where functions containing logic critical to the application should be stored
│   │       └── testFetch.ts // Example Fetch Function 
├── stubby                   // Stubbed endpoint configs