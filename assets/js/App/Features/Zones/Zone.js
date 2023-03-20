import '../../Core/Abstractions/prototype.js';

/**
 * A zone on the screen, which represents an instrument within the drum kit.
 */
export class Zone
{
    /** @type {String} */
    #_defaultKeyBinding = '';

    /** @type {String} */
    #_currentKeyBinding = '';

    /** @type {String} */
    #_zoneId = '';

    /** @type {String} */
    #_displayName = '';
    
    /** @type {Audio} */
    #_soundFile;

    /** @type {Array<(String, String)>} */
    #_animations = [];

    constructor(zoneId, displayName, keyBinding, soundFile, animations)
    {
        this.#_zoneId = zoneId;
        this.#_displayName = displayName;
        this.#_defaultKeyBinding, this.#_currentKeyBinding = keyBinding;
        this.#_soundFile = soundFile;
        this.#_animations = animations;
    }

    initialise()
    {
        document.querySelector(this.#_zoneId)
            .addEventListener('click', () => {
                this.#_onClick();
            });

        this.keyBindingElement = `
            <article id="${this.#_zoneId}-key">
                <header><h3>${this.#_displayName}</h3></header>
                <footer><h4>${this.#_currentKeyBinding}</h4></footer>
            </article>`.parseAsHtml();

        this.keyBindingElement.addEventListener('click', () => {
            this.#_onClick();
        });
    }

    onKeyPress(keyboardEvent)
    {
        if (keyboardEvent.key.toUpperCase() !== this.#_currentKeyBinding) return false;
        this.#_onClick();
        return true;
    }

    playSound()
    {
        console.log(`Playing sound: ${this.#_soundFile.src}`);
        this.#_soundFile.currentTime = 0;
        this.#_soundFile.play();
    }

    #_onClick()
    {
        this.keyBindingElement.triggerClass('hover', 100);
        this.playSound();

        this.#_animations.forEach(a => {
            this.#_playAnimation(a.elementId, a.className);
        });
    }

    #_playAnimation(elementId, className)
    {
        const element = document.querySelector(elementId);
        if (element === null) return;

        const elementBack = `#${element.id}back`;
        this.#_playAnimation(elementBack,  className + 'Back');
        console.log(`Playing animation for: ${elementId}`);

        // Remove the animation class if it was already added.
        element.classList.remove(className); 
        
        // Force a reflow to ensure the animation restarts from the beginning.
        void element.offsetWidth;

        // Add the animation class to trigger the animation.
        element.classList.add(className);
    
        element.addEventListener('animationend', function() {
            element.classList.remove(className);
        }, { once: true });
    }
}