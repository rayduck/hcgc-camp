# Guide on running the react app on localhost
1. `npm install` to get all the dependencies
2. `npm run start` to start the localhost server

### Todo

- [x] Routing
- [x] Setup authentication with firebase
- [x] Main component (info about the camp)
- [x] Students component
- [x] Admin component
- [x] Export to JSON/CSV/EXCEL
- [x] Styling (preferably with flexbox)
- [ ] Add user instructions
- [ ] Functionalities

# Building the app for production with surge.sh
1. `npm run build` to 'compile' the app (webpack doing its stuff)
2. `cd` into the build folder, `cp index.html 200.html` to make a copy of 'index.html' and name it '200.html' (This allows for react routing)
3. `surge ./ https://hcgc-camp.surge.sh` and follow commandline interactive prompts to deploy the app
