const hideable = document.getElementsByClassName("hideable");
let curProfile;
let title;

const changeProfile = () => {
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
    document.getElementById("name").innerHTML = title;
}

//////////////////////////////////////////////////////////

window.onload = function() {
    changeProfile();

    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            changeProfile();
        } 
    });
}
