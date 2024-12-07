# E-commerce Ionic 1 App

This project is an e-commerce mobile application built using Ionic Framework 1 and AngularJS, designed to provide a seamless shopping experience on both iOS and Android platforms.

## Features

- **User Authentication**: Sign in and sign up functionalities.
- **Product Catalog**: Browse products by categories.
- **Product Details**: View detailed information and images of products.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Order Management**: Track orders and view order history.
- **User Profile**: Manage personal information and addresses.
- **Search Functionality**: Search for products using keywords.
- **Payment Integration**: Support for PayPal and Stripe payments.
- **Multi-language Support**: Application available in multiple languages.
- **Pull to Refresh**: Refresh content with a pull-down gesture.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Ionic CLI**: Install the Ionic Command Line Interface globally:
  ```
  npm install -g ionic
  ```
## Cordova:

- Install Cordova globally:
```
npm install -g cordova
```
## Getting Started

- Clone the Repository

```
git clone https://github.com/badrkacimi/e-commerce-Ionic1-app.git
cd e-commerce-Ionic1-app
```
- Install Dependencies
```
npm install
bower install
```
- Run the Application
To serve the app in a web browser:
```
ionic serve
```

To emulate the app on a specific platform (e.g., iOS or Android), ensure the platform SDK is installed, then add the platform and emulate:
```
ionic platform add ios
ionic emulate ios
```

Replace ios with android for Android emulation.

## Project Structure

www/: Main directory containing the application's front-end code.
scss/: Stylesheets written in SASS.
resources/: Icons and splash screens for various platforms.
hooks/: Custom scripts to be executed at specific stages of the build process.
gulp-tasks/: Gulp tasks for automating development workflows.
bower.json: Bower configuration file for front-end dependencies.
package.json: Node.js configuration file for managing dependencies and scripts.
config.xml: Configuration file for Cordova settings.
ionic.config.json: Ionic project configuration file.
