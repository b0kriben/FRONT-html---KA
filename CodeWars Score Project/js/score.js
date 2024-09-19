
async function getUserData() {
    const username = document.getElementById('username').value;
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (response.ok) {
            window.userData = data;
            showTotalPoints();
        } else {
            document.getElementById('result1').innerHTML = `Hiba: ${data.reason}`;
        }
    } catch (error) {
        document.getElementById('result1').innerHTML = `Hiba a lekérés során: ${error.message}`;
    }
  
    const totalPoints = window.userData.ranks.overall.score;
    if (!window.userData.name) {
        document.getElementById('result1').innerHTML = `
        <h2>Összesített pontok</h2>
        <p><strong>${window.userData.username}</strong> felhasználó összesen <strong>${totalPoints}</strong> ponttal rendelkezik.</p>
      `;
    }
    else {
        document.getElementById('result1').innerHTML = `
      <h2>Összesített pontok</h2>
      <p><strong>${window.userData.username}</strong> felhasználó  azaz ${window.userData.name} összesen <strong>${totalPoints}</strong> ponttal rendelkezik.</p>
    `;
    }
  
    const languages = window.userData.ranks.languages;
    let lista = `
      <h2>Az elért pontok nyelvek szerint</h2>`;
    for (const language in languages) {
        lista += `
        <dl>
          <dt>${language}</dt>
          <dd>${languages[language].score} pont</dd>
        </dl>`;
    }
    document.getElementById('result2').innerHTML = lista;
}