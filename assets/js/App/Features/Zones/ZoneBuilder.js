import { Zone } from "./Zone.js";

/**
 * A fluent builder, for each drum and cymbal within the drum kit.
 */
export class ZoneBuilder
{
    /** @type {String} */
    #_touchZoneId = '';

    /** @type {String} */
    #_displayName = '';

    /** @type {String} */
    #_keyBinding = '';
    
    /** @type {Audio} */
    #_soundFile;

    /** @type {Array<(String, String)>} */
    #_animations = [];

    /**
     * Initialises a new instance of the {@link ZoneBuilder} class.
     * 
     * @param {String} elementId - The id of the HTML element to use as a click/touch zone for playing this instrument.
     */
    constructor(elementId)
    {
        this.#_touchZoneId = elementId;
    }

    /**
     * Initialises a new instance of the {@link ZoneBuilder} class.
     * 
     * @param {String} elementId - The id of the HTML element to use as a click/touch zone for playing this instrument.
     */
    static Create(elementId)
    {
        return new ZoneBuilder(elementId);
    }

    /**
     * Assigns a human readable name for the zone.
     * 
     * @param {String} displayName - The name to display to the user, on the page.
     * @returns {ZoneBuilder} - The same instance that called the method. Fluent pattern.
     */
    WithDisplayName(displayName)
    {
        this.#_displayName = displayName;
        return this;
    }

    /**
     * Assigns a key binding to the zone.
     * 
     * @param {String} keyCode - The key to press, to play the sound for the instument.
     * @returns {ZoneBuilder} - The same instance that called the method. Fluent pattern.
     */
    WithKeyBinding(keyCode)
    {
        this.#_keyBinding = keyCode;
        return this;
    }

    /**
     * Assigns a sound file to the zone.
     * 
     * @param {String} soundName - The name of the sound file to use, when the instrument is struck.
     * @returns {ZoneBuilder} - The same instance that called the method. Fluent pattern.
     */
    WithSoundFile(soundName)
    {
        this.#_soundFile ??= new Audio(`./assets/audio/${soundName}.ogg`);
        this.#_soundFile.preload = 'auto';
        return this;
    }

    /**
     * Assigns a CSS animation to the zone.
     * 
     * @param {String} elementId - The id of the HTML element to add the animation to.
     * @param {String} className - The CSS class used to trigger the animation.
     * @returns {ZoneBuilder} - The same instance that called the method. Fluent pattern.
     */
    WithAnimation(elementId, className)
    {
        this.#_animations.push({ elementId, className });
        return this;
    }

    /**
     * Builds the {@link Zone}, and returns the newly instantiated instance.
     * 
     * @returns {Zone} - A newly instantiated instance of the {@link Zone} class.
     */
    Build()
    {
        return new Zone(
            this.#_touchZoneId,
            this.#_displayName, 
            this.#_keyBinding, 
            this.#_soundFile, 
            this.#_animations);
    }
}