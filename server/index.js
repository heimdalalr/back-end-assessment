const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//Compliment
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// Fortune Cookie
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A golden egg of opportunity falls into your lap this month.",
					 "A friend asks only for your time not your money.",
					 "A hunch is creativity trying to tell you something.",
           "A new perspective will come with the new year.",
           "A smile is your personal welcome mat.",
  ];

  // choose random fortune
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];

  res.status(200).send(randomFortune);
  
});

 // Guess your age
 app.post('api/age', (req, res) => {
  res.send("POST Request Called")
})

app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
});



const divForImg = document.getElementById("img-box");
const requestOne = "https://api.unsplash.com/search/photos?page=1&query=dogs&client_id=bkt400oyadcaDykv164wUfd6Ld6_xCKKxRZn7Ebkj0A";

function makeRequestToUnsplash(requestUrl){
  fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    });
}

function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "300px";
  image.style.height = "200px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}

makeRequestToUnsplash(requestOne);





app.listen(4000, () => console.log("Server running on 4000"));
