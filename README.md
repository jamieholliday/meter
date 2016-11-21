## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## To-dos

This meter is not a finished piece.<br>
Here is a list of improvements that need to be made:

* To demonstrate handling the different currencies the meter sets the currency symbol based on the API response. I think a better option would be to set the currency in an admin panel of some sort and then just receive the values from the API. Ordinarily I'd expect the API to return a value from the same currency each time. The meter could be set to perform some conversion of the currency based on another service perhaps.
* The loader needs improvement. It is functional but not the best to look at.
* The meter is currently set to display the needle at the min or max position respectively if the value is out of bounds. There is probably a nicer way to handle this.
* The error message could be improved to show an icon as well as the message as this may be harder to read when viewed on a dashboard.
* The size of the meter is hardcoded. An improvement would be to allow the user to configure the size and recalculate positions accordingly.
* The current value as well as min and max values and their symbols should be adjusted so they align better.
* The current way of displaying the currency symbol is naive. This should be handled by an internationalisation library to account for the differences in symbol placement and how numbers are separated in different languages.
* This has only been tested to work in the latest versions of Chrome, Safari, Firefox and Edge on desktop browsers. It is not responsive and will not look good on mobile devices.
* Provide a way to change the colours
