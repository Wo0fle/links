const hideable = document.getElementsByClassName("hideable");
let curProfile;
let title = "Seby Amador";

const changeProfile = () => {
    document.getElementById("name-location-2").innerHTML = title;
    if (curProfile === 'woofle') {
        curProfile = 'seby';
        title = 'Seby Amador';
    } else {
        curProfile = 'woofle';
        title = 'Woofle';
    }

    for (let i = 0; i < hideable.length; i++) {
        if (hideable[i].classList.contains(curProfile)) {
            hideable[i].classList.remove('hidden');
        }
        else {
            hideable[i].classList.add('hidden');
        }
    }
    document.title = title + "'s Links";
    document.getElementById("name-location-1").innerHTML = title;
}

//////////////////////////////////////////////////////////

changeProfile(); // set profile initially to Woofle

document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        changeProfile(); // when pfp clicked, change profile
    } 
});
