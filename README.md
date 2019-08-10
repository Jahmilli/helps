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
3. Run: `yarn run startWithStubby` (Expect the application to startup and open your browser to 'localhost:3000')
If you want to run with the helps-backend:
3. Run: `yarn run start` (Expect the application to startup and open your browser to 'localhost:3000')

### Changing Proxy Configuration Setting
The proxy configuration will be used to either point the application at stubby or our backend server (__Note:__ This requires you to have setup 'helps-backend' and run it locally for this to work).
The two proxy hosts are:
- http://localhost:8882 (Stubby)
- http://localhost:3001 (helps-backend)
In the package.json, you should see one of the proxy configurations, to change it just replace the port with the alternative. Then rerun the development environment (Note if you have change)

If you have any issues, please ask someone in the group :)