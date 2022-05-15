# Crypt Eye
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Description
Crypt Eye, Your very own personal crypto currancy journal.

Patch 1.0 Features:

- TradingView Powered Chart Widget
    Stay on top of your favourite crypto currancie's positions with the TradingView powered widget in your dashboard. 
    Currently supports viewing against TetherUS for BTC, ETH, XRP, LUNA, USDC, SOL, ADA, AVAX, XLM and DOGE.

- Dynamic PNL Chart
    View your investment information without the need for your own calculations with our real-time Dynamic PNL tracking chart!
    Powered by Coinspot API information, this chart records:
    - Currency
    - Quantity
    - Bought date
    - Bought price
    It then aoutomatically loads the current price from coinspot, and calculates your PNL displaying in red for negative and green for posetive!


The application was written using JavaScript and includes the following technologies: 
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/) 
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express](https://www.npmjs.com/package/express)
- [graphql](https://www.npmjs.com/package/graphql)
- [json-web-token](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [apollo-client](https://www.npmjs.com/package/@apollo/client)
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#tests)
# Installation
The following dependencies are necessary to run this application: 

- To use this application, simply click the below link
- [Crypt Eye](https://crypt-eye.herokuapp.com/)


# Usage
To use this application you must create an account.
This is easily done from the signup page.

Once you are signed in, you will be directed to the dashboard.

To use the Chart widget, simply click on any of the available coin names at the top of the widget, this will display that currencies history on the chart.

To use the PNL chart enter the coins abreiviated name ```BTC, ETH, DOGE etc...``` , enter the quantity, bought date and bought price and save coin.

This entry will now appear in the table and automatically call the current price in AUD as well as calculate your profit position!

# Screenshots
<p>Home/Login Page</p>
![]


<p>Signup Page</p>\



<p>Demonstration</p>

![Book Search](./assets/img/booksearch.gif)



# License
This project is licensed under:
- [MIT](https://opensource.org/licenses/MIT)

# Contributing
Contributors: 
```
Pat Brown (Pattiqus)
```
# Tests
This application was not developed using a Test driven environment.
# Questions
If you have any qestions regrading the repository or the project please contact: 
<ul>
  <li>GitHub:  <a href=https://github.com/pattiqus>pattiqus</a></li> 
  <li>Email: <a href=mailto:Patticus.tv@gmail.com>Patticus.tv@gmail.com</a></li>
  <li>LinkedIn: <a href=https://www.linkedin.com/in/patrick-brown-52553410a>Pat Brown</a></li>
</ul>

# Links
- [GitHub Repository](https://github.com/Pattiqus/cryptEye)
- [Deployed (HEROKU)](https://crypt-eye.herokuapp.com/)
