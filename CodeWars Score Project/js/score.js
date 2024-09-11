document.getElementById('betolt').addEventListener('click', load);
document.getElementById("kereses").addEventListener("input", search);


//Felhasználó keresés
function search() {
        let src = document.getElementById("kereses").value.toLowerCase();
        let users = document.querySelectorAll("#list > li");
        users.forEach(user => {
        let userName = user.firstChild.textContent.toLowerCase();
        let stringList = user.querySelector('ul');
        let students = stringList.querySelectorAll('li');
        if (!src) {
            user.style.display = "block";
            students.forEach(student => {
                student.style.display = "block";
            });
        } else {
            if (userName.includes(src)) {
                user.style.display = "block";
                students.forEach(student => {
                    student.style.display = "block";
                });
            } else {
                let result = false;
                students.forEach(student => {
                    let studentName = student.textContent.toLowerCase();
                    if (studentName.includes(src)) {
                        student.style.display = "block";
                        result = true;
                    } else {
                    student.style.display = "none";
                    }
                });
                user.style.display = result ? "block" : "none";
            }
        }
    });
}


//Felhasználó betöltése
async function load() {
    try{
        document.getElementById("betoltes").style.display = "block";
        const response = await fetch('https://www.codewars.com/api/v1/users/b0kriben')
        const data = await response.json()
        if (data)
            data.forEach(element => {
                console.log(element)
        })
        let list = document.getElementById('list');
        list.innerHTML = '';
        console.log(data);
        data.forEach(username => {
            let li = document.createElement('li');
            li.innerHTML = '(' + username.id + ') ' + username;
            let stringList = document.createElement('ul');
            username.languages.forEach(language => {
                let stringLi = document.createElement('li');
                stringLi.textContent = '(' + language.id + ') ' + language.score;
                stringList.appendChild(stringLi);
            });
        });
        document.getElementById("betoltes").style.display = "none";  
        } catch (error) {
            console.log('Hiba történt: ' + error);
            document.getElementById("betoltes").style.display = "none";
        }
    }