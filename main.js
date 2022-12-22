const hideable = document.getElementsByClassName("hideable");
let curProfile;
let title;

const changeProfile = () => {
    if (curProfile === 'woofle') {
        curProfile = 'seby';
        title = 'Seby Amador';

        document.querySelector("link[rel*='icon']").href = "./images/seby.jpg";

        document.getElementById("other-profile-message").innerHTML = 'Woofle-related links';
    } else {
        curProfile = 'woofle';
        title = 'Woofle';

        document.querySelector("link[rel*='icon']").href = "./images/woofle.jpg";

        document.getElementById("other-profile-message").innerHTML = 'music-related links';
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
    document.getElementById("name-location").innerHTML = title;
}

//////////////////////////////////////////////////////////

changeProfile(); // set profile initially to Woofle

document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        changeProfile(); // when pfp clicked, change profile
    } 
});
