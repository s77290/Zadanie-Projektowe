function toggleTheme() {
    let themeLink = document.getElementById("theme-style");
    if (themeLink.getAttribute("href") === "red.css") {
        themeLink.setAttribute("href", "green.css");
    } else {
        themeLink.setAttribute("href", "red.css");
    }
}

function toggleSection() {
    let section = document.getElementById("sekcja-doswiadczenie");
    let button = document.getElementById("btn-ukryj");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerText = "👁️ Ukryj Doświadczenie"; 
    } 
    else {
        section.style.display = "none";
        button.innerText = "👁️ Pokaż Doświadczenie"; 
    }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();
    let isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const hasNumbersRegex = /\d/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
        showError('firstNameError', 'Pole Imię jest wymagane.');
        isValid = false;
    } else if (hasNumbersRegex.test(firstName)) {
        showError('firstNameError', 'Imię nie może zawierać cyfr.');
        isValid = false;
    }

    if (!lastName) {
        showError('lastNameError', 'Pole Nazwisko jest wymagane.');
        isValid = false;
    } else if (hasNumbersRegex.test(lastName)) {
        showError('lastNameError', 'Nazwisko nie może zawierać cyfr.');
        isValid = false;
    }

    if (!email) {
        showError('emailError', 'Pole E-mail jest wymagane.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Proszę podać poprawny adres e-mail.');
        isValid = false;
    }

    if (!message) {
        showError('messageError', 'Wiadomość jest wymagana.');
        isValid = false;
    }

    if (isValid) {
        console.log("=== Otrzymano nowe dane z formularza ===");
        console.log("Imię: " + firstName);
        console.log("Nazwisko: " + lastName);
        console.log("E-mail: " + email);
        console.log("Wiadomość: " + message);
        console.log("========================================");

        alert('Sukces! Formularz wypełniony poprawnie. Sprawdź konsolę (F12), aby zobaczyć dane.');
        
        document.getElementById('contactForm').reset();
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

// === ZADANIE 6: Pobieranie danych z pliku JSON ===

document.addEventListener('DOMContentLoaded', () => {
    // 5. Pobieranie danych za pomocą fetch()
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd ładowania pliku JSON');
            }
            return response.json();
        })
        .then(data => {
            // 2 & 3. Generowanie listy umiejętności
            const skillsList = document.getElementById('skills-list');
            data.umiejetnosci.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            // 2 & 3. Generowanie listy projektów
            const projectsList = document.getElementById('projects-list');
            data.projekty.forEach(project => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${project.nazwa}</strong>: ${project.opis}`;
                projectsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Wystąpił błąd:', error);
        });
});
function addNote() {
    const input = document.getElementById('newNote');
    const text = input.value.trim();
    if (!text) return;

    let notes = JSON.parse(localStorage.getItem('cvNotes') || '[]');
    notes.push(text);
    localStorage.setItem('cvNotes', JSON.stringify(notes));

    input.value = '';
    renderNotes();
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('cvNotes') || '[]');
    notes.splice(index, 1);
    localStorage.setItem('cvNotes', JSON.stringify(notes));
    renderNotes();
}

function renderNotes() {
    const list = document.getElementById('notes-list');
    const notes = JSON.parse(localStorage.getItem('cvNotes') || '[]');
    list.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${note} <button onclick="deleteNote(${index})" style="margin-left: 10px; cursor: pointer;">🗑️</button>`;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();
});
