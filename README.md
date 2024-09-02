# admin-dashboard
A Full Stack Admin Dashboard created using PostgreSQL, Next.js, Express.js, and Node.js 

Authenticated a backend system using Node and Express with a PostgreSQL database for Next.js frontend [Modernize Admin Dashboard](https://vercel.com/templates/next.js/modernize-admin-dashboard) created by [Vercel](https://vercel.com/)

<strong>8/15/2024 Update:</strong> Website updated to use PostgreSQL as the new database. The mysql branch in this repo contains the original code that utilizes a MySQL database!

#### Please run <code>npm i</code> in your command line with this project in your current path to restore node modules for your development environment!

## Home Page
Prior to Website Authentication

<img width="735" alt="Screenshot 2024-08-29 at 9 47 26 AM" src="https://github.com/user-attachments/assets/f8acacae-2461-46bb-a438-0d363c2b95f6">

After Website Authentication

<img width="735" alt="Screenshot 2024-08-29 at 10 06 05 AM" src="https://github.com/user-attachments/assets/67b0bf40-d61b-45fe-874d-eb13a8b21b00">


## Utilized a PostgreSQL database to track all users registered onto the website
<img width="1151" alt="Screenshot 2024-08-29 at 9 52 33 AM" src="https://github.com/user-attachments/assets/50d18298-2fda-4d66-a07b-93daff32bec1">
Uses Node.js bcrypt library to encrypt users' passwords for security reasons


## registration authentication
When user is already registered onto the website
<img width="735" alt="Screenshot 2024-08-29 at 10 27 24 AM" src="https://github.com/user-attachments/assets/dfe51bd5-da13-4ee8-bbb8-794b2886edf6">

When all credentials are properly filled and formatted, the user has registered successfully with a username, email, and password added into the PostgreSQL database

<img width="735" alt="Screenshot 2024-08-29 at 10 11 46 AM" src="https://github.com/user-attachments/assets/493d7aad-9da2-4fe0-8fc6-257b0dd156c4">

### for demo purposes, the text in each field still shows up after clicking on the Register button. Ideally, the text in each field is cleared after clicking on the Register button!

User added into PostgreSQL database after registering successfully to the website
<img width="903" alt="Screenshot 2024-08-29 at 10 29 06 AM" src="https://github.com/user-attachments/assets/87382654-56dd-47fa-92e1-ecd84837c445">

## login authentication
Login Screen UI/UX when the user has not registered yet
<img width="735" alt="Screenshot 2024-08-29 at 9 49 56 AM" src="https://github.com/user-attachments/assets/96b466c2-2b53-4a0f-abf1-3e0a4a4f5ef2">

Login Screen UI/UX when the user has entered an incorrect username and password
<img width="735" alt="Screenshot 2024-08-29 at 9 52 57 AM" src="https://github.com/user-attachments/assets/2d82373b-9869-4f4e-8a29-5c241181e3ae">

Login Screen UI/UX when the user has successfully entered the correct auth credentials -> username and password match the same info that was added into database once registered
<img width="735" alt="Screenshot 2024-08-29 at 9 57 08 AM" src="https://github.com/user-attachments/assets/4dcacdf9-dab3-4c00-b21c-3e7e32e04954">

### for demo purposes, the text in each field still shows up after clicking on the Register button. Ideally, the text in each field is cleared after clicking on the Register button!

## Registration and Login both have proper feedback for missing fields or incorrectly formatted fields

Example - Incorrectly Formatted Field

<img width="735" alt="Screenshot 2024-08-29 at 10 24 07 AM" src="https://github.com/user-attachments/assets/baec69df-42bc-47e6-94f0-1801e264534f">

Example - Missing Field

<img width="735" alt="Screenshot 2024-08-29 at 10 25 42 AM" src="https://github.com/user-attachments/assets/cc56b335-0030-4610-822f-6e0908f3096f">

