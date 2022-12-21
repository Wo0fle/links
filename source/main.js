let curProfile = 'SEBY';
const linkSections = document.getElementsByClassName("link-section")
console.log(linkSections)
// learn how to loop through HTMLCollectionOf

const changeProfile = () => {
    if (curProfile === 'WOOFLE') {
        curProfile = 'SEBY'
        document.title = "Seby Amador's Links";

        // unhide seby links
        // hide woofle links

        console.log("profile is now seby");
    }
    else {
        curProfile = 'WOOFLE'
        document.title = "Woofle's Links";

        // unhide woofle links
        // hide seby links        

        console.log("profile is now woofle");
    }
}

//////////////////////////////////////////////////////////

changeProfile();

window.onload = function() {
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            changeProfile();
        } 
    });
}
