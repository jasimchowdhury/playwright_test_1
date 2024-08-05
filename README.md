# Playwright Hacker News Validation Script

This project contains a script that uses JavaScript and Microsoft's Playwright framework to validate the order of articles on Hacker News.

## Objective

The goal of this script is to navigate to the Hacker News Newest page and verify that the first 100 articles are sorted from newest to oldest. This ensures the accuracy of article sorting on the page.

## Setup

### Install Node Modules

Begin by installing the required Node modules. In the project root directory, run:
npm install

### Edit the Script
Open the index.js file in your preferred code editor. This file contains the Playwright script that performs the validation.

### Run the Script
Execute the script with the following command:
node index.js

The script will navigate to Hacker News Newest, fetch the titles of the first 100 articles, and check that they are sorted from newest to oldest.

### Dependencies
The project relies on the following dependencies:

### playwright: A Node.js library to automate browsers (version ^1.39.0).
@playwright/test: Playwright's test runner for writing and executing tests (version ^1.39.0).
@types/node: TypeScript definitions for Node.js (version ^20.8.9).
### How It Works
The script uses Playwright to open a browser and navigate to the Hacker News Newest page. It then retrieves the titles of the first 100 articles and verifies that they are ordered from newest to oldest. Any discrepancies in sorting will be reported.

### Running Tests
No specific tests are included beyond the core validation script. If you wish to add more tests or functionality, ensure you use Playwright's capabilities for browser automation.

### Contributing
Feel free to fork the repository and submit pull requests with any improvements or additional features.
