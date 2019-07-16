# Firebase Bookshelf

bookshelf made with next.js and typescript, works on firebase.

## Usage

Setup firebase:

- Create a project at the [Firebase console](https://console.firebase.google.com/).
- Get your account credentials from the Firebase console at _settings>service accounts_, where you can click on _generate new private key_ and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `client id`. Now copy them into your project in the `src/app/credentials/server.js` file.
- Get your authentication credentials from the Firebase console under _authentication>users>web setup_. It will include keys like `apiKey`, `authDomain` and `databaseUrl` and it goes into your project in `src/app/credentials/client.js`.
- Back at the Firebase web console, go to _authentication>signup method_ and select _Google_.
- edit `firestore.rules` for set up your write, read rules. Examples can be found here: https://firebase.google.com/docs/database/security/quickstart#sample-rules

Install it and run:

```
npm install
npm run dev
```

Deploy:

```
npm run deploy
```
