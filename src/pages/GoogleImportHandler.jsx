import { gapi } from "gapi-script";

const CLIENT_ID = "302636986991-rmoucmd7fcfvc5c9avmdnje51sl10nkh.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/contacts.readonly";
const DISCOVERY_DOC = "https://people.googleapis.com/$discovery/rest?version=v1";

export const handleGoogleImport = async () => {
  return new Promise((resolve, reject) => {
    const initClient = () => {
      gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [DISCOVERY_DOC], // Add this line
        })
        .then(() => {
          return gapi.auth2.getAuthInstance().signIn();
        })
        .then(() => {
          return gapi.client.people.people.connections.list({
            resourceName: "people/me",
            pageSize: 100,
            personFields: "names,emailAddresses",
          });
        })
        .then((response) => {
          const contacts = response.result.connections || [];
          resolve(contacts);
        })
        .catch((error) => {
          console.error("Google Import Error:", error);
          reject(error);
        });
    };

    gapi.load("client:auth2", initClient);
  });
};











// import { gapi } from "gapi-script";

// const CLIENT_ID = "302636986991-rmoucmd7fcfvc5c9avmdnje51sl10nkh.apps.googleusercontent.com";
// // const API_KEY = "YOUR_GOOGLE_API_KEY";
// const SCOPES = "https://www.googleapis.com/auth/contacts.readonly";

// export const handleGoogleImport = async () => {
//   return new Promise((resolve) => {
//     const initClient = () => {
//       gapi.client.init({
//         // apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         scope: SCOPES,
//       }).then(() => {
//         gapi.auth2.getAuthInstance().signIn().then(() => {
//           gapi.client.people.people.connections
//             .list({
//               resourceName: "people/me",
//               pageSize: 100,
//               personFields: "names,emailAddresses",
//             })
//             .then((response) => {
//               const contacts = response.result.connections || [];
//               resolve(contacts);
//             });
//         });
//       });
//     };

//     gapi.load("client:auth2", initClient);
//   });
// };


// import { gapi } from "gapi-script";

// const CLIENT_ID = "302636986991-rmoucmd7fcfvc5c9avmdnje51sl10nkh.apps.googleusercontent.com";
// const API_KEY = "YOUR_GOOGLE_API_KEY";
// const SCOPES = "https://www.googleapis.com/auth/contacts.readonly";

// export const handleGoogleImport = (callback) => {
//   gapi.load("client:auth2", () => {
//     gapi.client.init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       scope: SCOPES,
//     }).then(() => {
//       gapi.auth2.getAuthInstance().signIn().then(() => {
//         gapi.client.people.people.connections
//           .list({
//             resourceName: "people/me",
//             pageSize: 100,
//             personFields: "names,emailAddresses",
//           })
//           .then((response) => {
//             console.log("Contacts:", response.result.connections);
//             callback(); // show success modal
//           });
//       });
//     });
//   });
// };

