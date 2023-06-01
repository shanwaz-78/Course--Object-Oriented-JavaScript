function get_request() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const parseData = JSON.parse(this.responseText);
        console.log(parseData);
      } else {
        console.error("Error in request:", this.status);
      }
    }
  };

  xhttp.onerror = function () {
    console.error("Network error occurred");
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}

get_request();
