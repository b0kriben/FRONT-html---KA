document.getElementById('betolt').addEventListener('click', load);
document.getElementById("kereses").addEventListener("input", search);


//Felhasználó keresés
function search() {
        let src = document.getElementById("kereses").value.toLowerCase();
        let users = document.querySelectorAll("#list > li");
        users.forEach(user => {
        let userName = user.firstChild.textContent.toLowerCase();
        let stringList = user.querySelector('ul');
        let scores = stringList.querySelectorAll('li');
        if (!src) {
            user.style.display = "block";
            scores.forEach(score => {
                score.style.display = "block";
            });
        } else {
            if (userName.includes(src)) {
                user.style.display = "block";
                scores.forEach(score => {
                    score.style.display = "block";
                });
            } else {
                let result = false;
                scores.forEach(student => {
                    let scoreName = score.textContent.toLowerCase();
                    if (scoreName.includes(src)) {
                        score.style.display = "block";
                        result = true;
                    } else {
                        score.style.display = "none";
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
        data.forEach(course => {
            let li = document.createElement('li');
            li.innerHTML = '(' + course.id + ') ' + course.name;
            let stringList = document.createElement('ul');
            course.students.forEach(student => {
                let stringLi = document.createElement('li');
                stringLi.textContent = '(' + student.id + ') ' + student.name;
                let editB = document.createElement('button');
                editB.textContent = 'Szerkesztés';
                editB.onclick = () => editStudent(student.id, student.name, course.id);
                let deleteB = document.createElement('button');
                deleteB.textContent = 'Törlés';
                deleteB.onclick = () => deleteStudent(student.id);
                stringLi.appendChild(editB);
                stringLi.appendChild(deleteB);
                stringList.appendChild(stringLi);
            });
            let addStudentC = document.createElement('input');
            addStudentC.type = "text";
            addStudentC.placeholder = "Új diák hozzáadása";
            let addStudentButton = document.createElement('button');
            addStudentButton.textContent = "Diák hozzáadása";
            addStudentButton.onclick = () => addStudent(course.id, addStudentC.value);
            li.appendChild(stringList);
            li.appendChild(addStudentC);
            li.appendChild(addStudentButton);
            list.appendChild(li);
        });
        document.getElementById("betoltes").style.display = "none";  
        } catch (error) {
            console.log('Hiba történt: ' + error);
            document.getElementById("betoltes").style.display = "none";
        }
    }