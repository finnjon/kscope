# Kaleidoscope

This code comprises the entirety of the Kaleidoscope website. Kaleidoscope is an almost entirely front-end app that enables students to reflect on what kind of learner they are and if they wish, to send their reflections to themselves and their teacher at the University of Helsinki Language Centre.

## Engineering

The site has been built using angular 4.0 (using the angular cli) with a node server on the backend used only for sending emails. The texts can be found in the i18n folder in Finnish and English and can be amended there. Additional texts can be found in each of the components for the various sections. For example, personality-ref, needs-ref, motivation-ref and so on. These are the only places where texts exist and they can be edited there directly.

## emails

Emails are sent using node.js and gmail as can be seen in the server.js file.

## CSS

This project uses pureCSS mostly for the grid.

## Server

This project is hosted on the university's webhotel. This is build on Centos7 and uses an apache server. It is hosted at http://kaleidoscope.helsinki.fi. The basic site is served using apache but the emails are processed using the node server.js, which is accessed via reverse proxy. This is configured in the apache config file that uses the proxy to direct requests ending in node to the node server on port 3000 instead of 80. The node server is managed using PM2.

## Acknowledgements

The site was rebuilt from the original design by Jonathon Martin (jonathondsmartin@gmail.com). The images were taken from the original site but many have been replaced with css. The audio files were also produced by Jonathon Martin. 
