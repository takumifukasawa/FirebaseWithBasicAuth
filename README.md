# FirebaseWithBasicAuthExcludeIPAddresses

Basic authentication excluded ip addoress for firebase functions and hosting

## Demo

[https://fir-withbasicauth.web.app/](https://fir-withbasicauth.web.app/)

## Folder Structure

```
.
├── README.md
...
├── firebase
│   ├── dist // Functions files. All files will be uploadd to functions.
    ...
│   ├── public // For hosting public. All files are redirect functions for authentication
│   ├── src // functions src
│   │   └── index.ts
    ...
...
└── static // Real public directory
    └── index.html
```