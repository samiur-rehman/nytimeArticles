# NY Times Most Popular Articles

This project fetches and displays the most popular articles from The New York Times.

## Live Demo

Check out the live demo on Vercel: [NY Times Most Popular Articles](https://nytime-articles.vercel.app/)

## Prerequisites

Ensure you have Node.js (v15.14.0 or higher) installed on your machine.

#### Note:
Usually, we don't push the .env file to GitHub.  Instead, I ensure that when you clone the project from GitHub, it's straightforward to set up and run smoothly on your local machine.

## Installation

Clone the repository and install dependencies using npm:

```bash
git clone https://github.com/samiur-rehman/nytimeArticles.git
cd nytimeArticles
npm install
```

## Development
To start the development server using Parcel:

```bash
npm run start
```
This will start the development server using Parcel, which will bundle your application and serve it at http://localhost:1234

## Production Build
To build the application for production:
```bash
npm run build
```

## Running Tests
To run tests using Jest:

```bash
npm test
```
## Generating Coverage Report
```bash
npm run coverage
```
After successfully running the coverage command, it will open a UI report at http://localhost:4000/
### Have a look Coverage Report
![UI Test](https://github.com/samiur-rehman/nytimeArticles/assets/76886357/2d2fc18a-05c4-4e80-b97a-5df376310832)

![coverageReport](https://github.com/samiur-rehman/nytimeArticles/assets/76886357/8a2fdf22-663d-4f7f-9aaf-6fa4d356e524)



# Code Quality
## ESLint with Airbnb Configuration
This project uses ESLint with the Airbnb style guide. To lint your code
```bash
npm run lint
```
To automatically fix linting issues:
```bash
npm run lint:fix
```

## SonarQube Report
![sonarQubeReport](https://github.com/samiur-rehman/nytimeArticles/assets/76886357/790215d4-3765-4a54-a7f2-c64b6c678e73)

