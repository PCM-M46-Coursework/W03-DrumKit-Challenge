# Week 03 - Drum Kit Challenge

**Author:** Peter C. Matthews

This repository contains my submission for the [Master Coding](https://wearecodenation.com/2022/04/25/master-coding/) course at *CodeNation*.

## Brief

These criteria must be met:
 - When a key is pressed, the associated sound is played.
 - When a button is clicked, the associated sound is played.

That is all.

Example: [https://johnmuir2001.github.io/DrumKit](https://johnmuir2001.github.io/DrumKit)

## Implementation

For this project, I have envisaged the following hypothetical scenario:


> *I have been contracted by **Virtual Drumming**, to produce a proof-of-concept virtual drumkit, integrated within **Iron Maiden**'s official website. The PoC site would be used within a sales pitch to **Iron Maiden**, to provide a mini-game for their website; with the aim of boosting marketing for an upcoming drum Masterclass series, on **Virtual Drumming**, hosted by **Nicko McBrain**.*


To this end, the skeleton framework of the site is heavily based around the design from [`www.ironmaiden.com`](https://www.ironmaiden.com). Their choice of typography, logos, favicon, background assets, and general page structure have all been retained. This is to ensure that the proof of concept design is as close as possible to the site it would eventually be hosted on.

The virtual drumkit audio, and visual assets, for Nicko's drumkit, have been lifted from [`www.virtualdrumming.com`](http://www.virtualdrumming.com), and tweaked to fit into a new host container. This is to ensure that the proof of concept mini-game is as close as possible to the original, as possible.

Finally, a full JS framework has been written from scratch to allow multiple ways of interacting with the virtual drumkit.

 - Clicking on each instrument, within the image on the screen.
 - Clicking on each box that displays the keyboard shortcut for each instrument.
 - Pressing the associated keyboard shortcut, for each instrument.

### Background

I have tried to build on skills learnt throughout this course so far:

 - **Website Clone** - In Week 01, we learnt to take inspiration, and use front-end design patterns from different websites. I have incorporated that into this project, by amalgamating two websites, to form one hypothetical integration between the two businesses. This brings the project into the real-world, and gives it a sure foundation, and setting.

 - **CSS Animation** - In Week 01, we were introduce to CSS animation, using transitions, and keyframes. For this project, while the initial keyframes were taken as assets, from *Virtual Drumming*, I have had to tweak them, to make them work within this new context, and I have added triggers for them, encapsulating the animation, sound effects, and event listeners, all within the same JS class.
 
 - **Keyboard Events** - In Week 03, the KeyCode Challenge showed how to listen to events raised by the user interacting with the keyboard. In this project, I have used this knowledge to be able to bind keys to specific instruments, on the page. Likewise, mouse click events have also been bound to each instrument, and their corresponding placement zones on the page. 
 
 - **Business Focus** - This course is teaching us to be industry ready, so this project has enabled me to envisage a real-world scenario, as a freelance web developer, being contracted by one company, within a business-to-business proposition. This adds context to the project, rather than it existing within a vacuum.

### Asset Attribution

All visual, and audio assets from ***Virtual Drumming*** and ***Iron Maiden*** are being used under fair dealing, as an educational resource; within a derived work, created to demonstrate, and evaluate their usage.

 - **Iron Maiden Website Assets:** - Rights reserved by ***Keane Creative Ltd***.
 - **Virtual Drumming Audio Assets:** - Rights reserved by ***Virtual Drumming***.
 - **Virtual Drumming Visual Assets:** - Rights reserved by ***Virtual Drumming***.