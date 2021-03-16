# Wizeline QA Certification

Assessment session 1, end to end testing with Testcafe

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node, NPM](https://nodejs.org/en/) - Javascriptruntime and package manager
* [Testcafe](http://www.dropwizard.io/1.0.2/docs/) - Tool to automate end-to-end web testing

### Installing

With node and npm installed just run in the root project folder

```
npm install
```

If you didn't installed testcafe globally, you will need to add it to the project manually.

## Running the tests

Teste are divided on fixtures:

- To run all tests:

```
npm test
```

- To run specific tests: 

```
npm run test-{metatag}
```

> Available metatags: ***auth***, ***cart***, ***info***, ***checkout***

[^Reports]: Each test will generate its respective report placed under page_model/report/*

### End to end tests

- **Auth**: Tests authentiacion functionality: login with different credentials, log out.
- **Info**: Test for user info when placing order after cart.
- **Cart**: Tests cart funcionality to add items to the order, and verifies add them correctly.
- **Checkout**: Tests to place order correctly.

### Config

A config file **`.testcaferc.json`** is included. Edit the next keys to change behavior

- **browsers**: Default browser is chrome, edit this to change or add browsers.
- **src**: Directory where tests are located to run. **DO NOT EDIT**.
- **concurrency**: Edit to create concurrent workers.

 *Full Testcafe config file can be found here* - [Testcafeconfig](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html)

### TODO:

- On cart/checkout functionality, testing when user removes items from the cart is recommended.
- There are users with long login response. Need spec to detect performance issues


## Authors

* **Gerardo Alvarez Muñoz** - *Not updated* - [Github](https://github.com/gerhardx)

## Acknowledgments

* Assesment for session 1 of Wizeline Academy 
* [Wizeline Academy](https://academy.wizeline.com)
