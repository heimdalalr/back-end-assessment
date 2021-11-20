// console.log('I am here')

const ageForm = document.getElementById('AgeGuessing')

// console.log(ageForm)

ageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("submission submitted");
const username = document.getElementById("nameValue");

axios
.post(
  `https://api.agify.io?name=${nameValue}`
)
.then((res) => {
  console.log(res.data);
  const ageMessage = document.createElement("h2");
  ageMessage.textContent = `Hey ${res.data.nameValue}! You are probaby`;
  messageSection.append(loginMessage);
})
.catch((err) => {
  console.log(err.response.data);
});
});