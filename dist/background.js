chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// let isFetching = false;

// async function getAuthToken() {
//   return new Promise((resolve, reject) => {
//     chrome.storage.local.get(["token"], (result) => {
//       if (chrome.runtime.lastError) {
//         console.error(
//           "Error accessing local storage:",
//           chrome.runtime.lastError
//         );
//         return reject(new Error("Failed to access local storage"));
//       }

//       const token = result.token;

//       if (token) {
//         resolve(token);
//       } else {
//         console.log("No token found in local storage");
//       }
//     });
//   });
// }

// // // Function to fetch unread emails and send to backend
// // async function fetchAndSendUnreadEmails() {
// //   try {
// //     const token = await getAuthToken();

// //     // Get unread emails
// //     const unreadEmailsResponse = await fetch(
// //       "https://www.googleapis.com/gmail/v1/users/me/messages?q=is:unread",
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );

// //     const unreadEmails = await unreadEmailsResponse.json();
// //     // console.log("Unread Emails:", unreadEmails);
// //     if (unreadEmails.messages && unreadEmails.messages.length > 0) {
// //       const emailDetails = await Promise.all(
// //         unreadEmails.messages.map(async (message) => {
// //           const messageResponse = await fetch(
// //             `https://www.googleapis.com/gmail/v1/users/me/messages/${message.id}`,
// //             {
// //               headers: {
// //                 Authorization: `Bearer ${token}`,
// //               },
// //             }
// //           );
// //           return await messageResponse.json();
// //         })
// //       );
// //       console.log(emailDetails);
// //       const processingResponse = await fetch(
// //         "http://localhost:8000/start_email_processing_client",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify({ emails: emailDetails }),
// //         }
// //       );

// //       if (!processingResponse.ok) {
// //         throw new Error(`HTTP error! status: ${processingResponse.status}`);
// //       }

// //       const processingResult = await processingResponse.json();
// //       console.log("Processing Result:", processingResult);
// //     } else {
// //       console.log("No unread emails found.");
// //     }
// //   } catch (error) {
// //     console.error("Failed to fetch and send unread emails:", error);
// //   }
// // }

// async function fetchAndSendUnreadEmails() {
//   if (isFetching) return;
//   isFetching = true;
//   console.log("fetchAndSendUnreadEmails triggered");

//   try {
//     const token = await getAuthToken();
//     console.log("Token retrieved:", token);

//     const unreadEmailsResponse = await fetch(
//       "https://www.googleapis.com/gmail/v1/users/me/messages?q=is:unread",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!unreadEmailsResponse.ok) {
//       console.error(
//         "Failed to fetch unread emails:",
//         unreadEmailsResponse.status
//       );
//       return;
//     }

//     const unreadEmails = await unreadEmailsResponse.json();
//     console.log("Unread Emails Response:", unreadEmails);

//     if (unreadEmails.messages && unreadEmails.messages.length > 0) {
//       const emailDetails = await Promise.all(
//         unreadEmails.messages.map(async (message) => {
//           const messageResponse = await fetch(
//             `https://www.googleapis.com/gmail/v1/users/me/messages/${message.id}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );
//           return await messageResponse.json();
//         })
//       );
//       console.log("Fetched Email Details:", emailDetails);

//       const processingResponse = await fetch(
//         "http://localhost:8000/start_email_processing_client",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(emailDetails),
//         }
//       );

//       if (!processingResponse.ok) {
//         throw new Error(`HTTP error! status: ${processingResponse.status}`);
//       }

//       const processingResult = await processingResponse.json();
//       console.log("Processing Result:", processingResult);
//     } else {
//       console.log("No unread emails found.");
//     }
//   } catch (error) {
//     console.error("Failed to fetch and send unread emails:", error);
//   } finally {
//     isFetching = false;
//   }
// }

// setInterval(fetchAndSendUnreadEmails, 10000);
