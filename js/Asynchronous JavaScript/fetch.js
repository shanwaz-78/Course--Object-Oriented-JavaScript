// function get_data(url) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const data = JSON.parse(this.responseText);
//       console.log(data);
//     }
//   };

//   xhttp.open("GET", url, true);
//   xhttp.send();
//   xhttp.onerror = function () {
//     console.log("Error in fetching");
//   };
// }
// get_data("https://jsonplaceholder.typicode.com/users");

// With fetch();

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Error in ", response);
//     }
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     throw error;
//   }
// }
// getData("https://jsonplaceholder.typicode.com/users").catch((error) =>
//   console.log("Error in getting data ", error)
// );


   // Post Data.
async function post_data(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error in Post Request ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error ", error);
  }
}

async function user_data(url) {
  try {
    const data = {
      name: "Kyle",
      age: 26,
      designation: "Developer",
    };
    const result = await post_data(url, data);
    console.log(result);
  } catch (error) {
    console.error("error in posting data ", error);
  }
}
user_data("https://jsonplaceholder.typicode.com/users");
