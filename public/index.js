const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendmail(mail);
});

const sendmail = (mail) => {
    fetch("/send", { 
      
        // Adding method type 
        method: "POST", 
          
        // Adding body or contents to send 
        body: JSON.stringify(mail), 
          
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }) 
      
    // Converting to JSON 
    .then(response => response.json()) 
      
    // Displaying results to console 
    .then(json => console.log(json));
};
 





// const sendmail = (mail) => {
//     fetch("/send", {method: "POST",
//                     headers: {'Content-Type': 'application/json'}, // Set content type to JSON
//                     body: JSON.stringify(mail)} // Convert JSON data to a string and set it as the request body
//     )
//     .then(response => {
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // Parse the response as JSON
//         return response.json();
//     })
//     .then(data => {
//         // Handle the JSON data
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors that occurred the fetch
//         console.log('Fetch error:', error);
//     });
// };