# Tiny World Builder

This is a simplest-possible demo to build tiny worlds with. Included is a character with basic movement control, a Tiled project file and a helper script (useImageCollections.js) to assist with the import of image collections that have been used in object layers.

##  🌺 useImageCollections.js

These helper functions allow the user to (1) load the Tiled JSON data in to the project registry, (2) save the individual image collections to the registry and load all of the associated images in to the project and finally (3) access the images keys when create sprites.

Basic usage is laid out in the code itself, denoted by numbered 🌺 emojis. You'll see 1, 2 & 3 in Level1_Preload.js, alongside #4 in Level1_Pixel.js, when image keys are being accessed. 

## Credits
The main code is simply a mashup of [Nathan Altice's demos](https://github.com/nathanaltice), with special emphasis on [mappy](https://github.com/nathanaltice/Mappy) for the tiled integration and physics setup, alongside [FSM]( https://github.com/nathanaltice/FSM) for player movement & animations.

The running sprite was taken [Quin N's Free Platformer Character](https://quin-n.itch.io/free-platformer-character)


