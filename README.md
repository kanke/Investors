#  :bowtie: About this application #
Create a SPA that talks to the Preqin API /api/Investors to return a list of
investors in a table format

##  Original Problem Statement ##
Compulsory:
1. Create a SPA that talks to the Preqin API /api/Investors to return a list of
   investors in a table format
   for firmIds 2670, 2792, 332, 3611
2. Table will show the following data: 
      FirmId
      FirmName 
      Type
      DateAdded 
      Address
   
Nice to have:
1. Once clicking on a row in the table it will navigate to an investors page (example: /investors/1234).
   We expect you to show your “craft” for the exercise e.g. commits, unit
   tests, running code and deployment concerns.
2. In this investors page show a dropdown with AssetClasses: PE(Private Equity), PD(Private Debt), RE(Real Estate), INF(Infrastructure), NR(Natural Resources), HF(Hedge Funds)
3. When selecting a particular AssetClass, it will show commitment information for the investor in that particular asset class (API: /api/Investor/commitment/<asset_class>/<investorId>).

##  To run this project ##
- :computer: -  Clone to computer
- 🧹 -  Run `npm start` in the project root directory to start the application. It should start on http://localhost:3000/
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

- 🧹 -  Run `npm test` in the project root directory to run application unit tests.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Future Todo ##
- Better token management to use redux or server or apollo or axis interceptor?
- Maybe use a different package manager? yarn etc

## Limitations/Issues ##
-  Api doesn’t return AssetClasses data for investors. Not sure why?

### Other Available Scripts .... ###
- 🧹 -  Run `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- 🧹 -  Run `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
