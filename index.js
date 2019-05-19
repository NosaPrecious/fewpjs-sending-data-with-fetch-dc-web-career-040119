// Add your code here
function submitData(name, email){
  
  return fetch("http://localhost:3000/users", configurationObject = {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body : JSON.stringify({
      username : name,
      email : email
    })
  }
  .then(response => response.json())
  .then(jsonData => {
    jsonData.forEach(userData)
    
  }).catch(error => {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }));
  
}



function userData(userInfo){
  document.appendChild(div);
  div.innerHTML += `${userInfo}<br>`;
}

function createDiv(){
  let div = document.createElement('div');
}