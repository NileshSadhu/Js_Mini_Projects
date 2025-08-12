document.addEventListener("DOMContentLoaded", () => {
    const pads = document.querySelectorAll('.pad');

    pads.forEach(pad => {
        pad.addEventListener('click', function () {
            const btnName = this.dataset.sound;
            playSound(btnName);
        });
    });

    function playSound(key) {
        switch (key) {
            case 'boom':
                new Audio('./audio/boom.wav').play();
                break;
            case 'clap':
                new Audio('./audio/clap.wav').play();
                break;
            case 'hihat':
                new Audio('./audio/hihat.wav').play();
                break;
            case 'kick':
                new Audio('./audio/kick.wav').play();
                break;
            case 'openhat':
                new Audio('./audio/openhat.wav').play();
                break;
            case 'ride':
                new Audio('./audio/ride.wav').play();
                break;
            case 'snare':
                new Audio('./audio/snare.wav').play();
                break;
            case 'tink':
                new Audio('./audio/tink.wav').play();
                break;
            case 'tom':
                new Audio('./audio/tom.wav').play();
                break;
        }
    }

    document.addEventListener('keydown', (event) => {
        const keyMap = {
            q: 'boom',
            w: 'clap',
            e: 'hihat',
            a: 'kick',
            s: 'openhat',
            d: 'ride',
            z: 'snare',
            x: 'tink',
            c: 'tom'
        };

        const soundName = keyMap[event.key.toLowerCase()];
        if (soundName) {
            playSound(soundName);
            highlightPad(soundName);
        }
    });
});
