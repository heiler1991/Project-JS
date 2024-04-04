import Pojistenec from './Pojistenec.js';
import SeznamPojistencu from './SeznamPojistencu.js';

const seznamPojistencu = new SeznamPojistencu();

document.addEventListener('DOMContentLoaded', () => {
    const buttonUloz = document.getElementById('buttonUloz');
    buttonUloz.addEventListener('click', ulozData);

    const savedData = localStorage.getItem('pojistenci');
    if (savedData) {
        seznamPojistencu.pojistenci = JSON.parse(savedData);
    }
});

function ulozData() {
    const inputJmeno = document.getElementById('inputJmeno');
    const inputPrijmeni = document.getElementById('inputPrijmeni');
    const inputVek = document.getElementById('inputVek');
    const inputTel = document.getElementById('inputTel');

    const jmeno = inputJmeno.value;
    const prijmeni = inputPrijmeni.value;
    const vek = inputVek.value;
    const telefon = inputTel.value;

    if (jmeno.trim() != '' && prijmeni.trim() != '' && vek.trim() != '' && telefon.trim() != '') {
        const pojistenec = new Pojistenec(jmeno, prijmeni, vek, telefon);
        seznamPojistencu.pridatPojistence(pojistenec);

        inputJmeno.value = '';
        inputPrijmeni.value = '';
        inputVek.value = '';
        inputTel.value = '';

        localStorage.setItem('pojistenci', JSON.stringify(seznamPojistencu.pojistenci));

        alert('Pojištěnec byl uložen.');
    } else {
        alert('Vyplňte prosím vaše údaje');
    }
}

function RegexText() {
    const key = event.key;
    const disallowedCharacters = /^[a-zA-Z]+$/;

    if (!disallowedCharacters.test(key)) {
        event.preventDefault();
    }
}

function RegexNumber() {
    const key = event.key;
    if (!isNaN(key)) {
    } else {
        event.preventDefault();
    }
}

inputVek.addEventListener('keypress', (event) => {
    RegexNumber();
})

inputTel.addEventListener('keypress', (event) => {
    RegexNumber();
})

inputPrijmeni.addEventListener('keypress', (event) => {
    RegexText();
})
inputJmeno.addEventListener('keypress', (event) => {
    RegexText();
});
