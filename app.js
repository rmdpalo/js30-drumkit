    // Listens for an event that happens in the window, specifically when someone presses a "key down" on the keyboard. Passes that event down into the function as e.
    // querySelector returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    

    function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        console.log(audio);
        console.log(key);
        if(!audio) return; //stops the function from running altogether
        audio.currentTime = 0; //restarts the audio that's playing, so if we press the same key multiple times it will keep playing again and again.
        audio.play();
        key.classList.add('playing'); //allows us to trigger the playing class selector by adding playing as a class to our keys
    }

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; //skip it if it's not a transform
        this.classList.remove('playing');
    }

    function handleClick(e){
        const audio = document.querySelector(`audio[data-key="${e.target.id}"]`)
        const key = document.querySelector(`.key[data-key="${e.target.id}"]`)
        console.log(audio);
        console.log(key);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    window.addEventListener('click', handleClick);