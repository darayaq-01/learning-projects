const urlAPI = 'https://apis.scrimba.com/hexcolors/?count=1';
const body = document.querySelector('.wrapper');
const heart = document.querySelector('.heart');

// document.querySelector(".flex *").setAttribute("style", "margin: 10px")
document
    .querySelector('#btn-heart')
    .addEventListener('click', changeHeartColor);
document.getElementById('btn').addEventListener('click', changeColor);

async function changeColor() {
    // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
    // 2. Use that color to update the background color of the body.
    await fetch(urlAPI)
        .then((response) => {
            if (!response.ok) {
                throw Error('Try again');
            }
            return response.json();
        })
        .then((data) => {
            const newColor = data.colors[0].value;
            body.style.setProperty('background-color', newColor);
        });
}
// class heart
async function changeHeartColor() {
    await fetch(urlAPI)
        .then((response) => {
            if (!response.ok) {
                throw Error('Try again');
            }
            return response.json();
        })
        .then((data) => {
            const newColor = data.colors[0].value;
            heart.style.setProperty('--white', newColor);
        });
}

/* 
- Make sure you are only retrieving one color at a time from the API: https://apis.scrimba.com/hexcolors/?count=1
- Update the background color by using setProperty.
 */
