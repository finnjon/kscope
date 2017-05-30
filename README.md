# Kaleidoscope

This code comprises the entirety of the Kaleidoscope website. Kaleidoscope is an almost entirely front-end app that enables students to reflect on what kind of learner they are and if they wish, to send their reflections to themselves and their teacher at the University of Helsinki Language Centre.

## Engineering

The site has been built using angular 4.0 (using the angular cli) with a node server on the backend used only for sending emails. The texts can be found in the i18n folder in Finnish and English and can be amended there. Additional texts can be found in each of the components for the various sections. For example, personality-ref, needs-ref, motivation-ref and so on. These are the only places where texts exist and they can be edited there directly.

## emails

When the profile is complete it is sent using node/express and a gmail account I set up to send the emails. This very basic node server is found in the server folder under app.js. The credentials for the gmail account are in there.

## CSS

This project uses pureCSS mostly for the grid.

## Acknowledgements

The site was rebuilt from the original design by Jonathon Martin (jonathondsmartin@gmail.com). The images were taken from the original site but many have been replaced with css. The audio files were also produced by Jonathon Martin.
