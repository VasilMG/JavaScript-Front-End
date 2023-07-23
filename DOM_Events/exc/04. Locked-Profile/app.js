function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('.profile'))

    profiles.forEach(prof => {
        let theButton = prof.children[10]
        let unlocked = prof.children[4]
        let locked = prof.children[2]
        let hiddeField = prof.children[9]

        theButton.addEventListener('click', (e) => {
            if (e.target.textContent === 'Show more') {
                if (unlocked.checked) {
                    hiddeField.style.display = 'block';
                    e.target.textContent = 'Hide it'
                }
            } else {
                if (unlocked.checked) {
                hiddeField.style.display = 'none';
                e.target.textContent = 'Show more';
                }
            }
        })

        
    })
}

    //  lock - console.log(prof.children[2]);
            //  unlock - console.log(prof.children[4])
        // hidden field = console.log(prof.children[9])
        // button = console.log(prof.children[10])

// - lock - div.profile:nth-child(2) > input:nth-child(3)

// - unlock - div.profile:nth-child(2) > input:nth-child(5)

// - hidden - #user1HiddenFields