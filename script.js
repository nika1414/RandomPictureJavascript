let clientID = "wBSyjx_jEPed7_FYQbb6MNpI1oKsAj0kbzdU06UDTX0";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let imageElm = document.querySelector("#unsplashImage");

fetch(endpoint)
  .then((resp) => {
    return resp.json();
    console.log(resp.json());
  })
  .then((completeData) => {
    console.log(completeData);
    imageElm.src = completeData.urls.regular;
  });
