async function getUserData() {
    const username = document.getElementById('username').value;
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (response.ok) {
            window.userData = data;
        } else {
            document.getElementById('result').innerHTML = `Hiba: ${data.reason}`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `Hiba a lekérés során: ${error.message}`;
    }
}

async function showData(){
  let username = document.getElementById("username").value;        
  await fetch("https://www.codewars.com/api/v1/users/"+username)
      .then(response => {                
          return response.json()
      })
      .then(user => {                
          let userData = `
            <h2>A felhasználó adatai:</h2>
              <dl>
                <dt>Username: ${user.username}</dt>
                <dd>ID: ${user.id}</dd>
                <dd>Name: ${user.name}</dd>
                <dd>Honor: ${user.honor}</dd>
                <dd>Clan: ${user.clan}</dd>
                <dd>Leaderboard Position: ${user.leaderboardPosition}</dd>
              </dl>
          `;
          document.getElementById("result").innerHTML = userData;
      })
      .catch(error => {
          document.getElementById("result").innerHTML = error;
      });   
}

async function showLanguage(){
  let username = document.getElementById("username").value;        
  await fetch("https://www.codewars.com/api/v1/users/"+username)
      .then(response => {                
          return response.json()
      })
      .then(user => {                
          let listaLanguage = `
            <h2>Az elért pontok nyelvek szerint:</h2>
              <dl>
                <dt>C#</dt>
                <dd>${user.ranks.languages.csharp.score} pont</dd><br>
                <dt>Javascript</dt>
                <dd>${user.ranks.languages.javascript.score} pont</dd>
              </dl>
          `;
          document.getElementById("result").innerHTML = listaLanguage;
      })
      .catch(error => {
          document.getElementById("result").innerHTML = error;
      });    
}