# Kaleidoscope

This code comprises the entirety of the Kaleidoscope website. Kaleidoscope is an almost entirely front-end app that enables students to reflect on what kind of learner they are and if they wish, to send their reflections to themselves and their teacher at the University of Helsinki Language Centre.

## Engineering

The site has been built using angular 4.0 (using the angular cli) with a node server on the backend used only for sending emails. The texts can be found in the i18n folder in Finnish and English and can be amended there. Additional texts can be found in each of the components for the various sections. For example, personality-ref, needs-ref, motivation-ref and so on. These are the only places where texts exist and they can be edited there directly.

## emails

Emails are sent using node.js and currently we are using a free account with SendGrid. The password is in the .env file. We have a hundred a day which is plenty. Note though that sometimes the emails are rejected by the university servers because the IP address used by SendGrid has been flagged by a spam service. As of August 2021 this hasn't happened in some time.

## CSS

This project uses pureCSS mostly for the grid.

## Server

This project is hosted on the university's webhotel. This is build on Centos7 and uses an apache server. It is hosted at http://kaleidoscope.helsinki.fi. The basic site is served using apache but the emails are processed using the node server.js, which is accessed via reverse proxy. This is configured in the apache config file that uses the proxy to direct requests ending in /node to the node server on port 3000 instead of 80. The node server is managed using PM2.

To access the site remotely you will need to use a vpn, otherwise permission is not granted. Access is through ssh at h127.it.helsinki.fi. Using something like FileZilla you will need the prefix sftp://.

## Notes to Self

Often the university admins seem to reset everything and then I have trouble getting in or changing files with FileZilla because although I have admin permissions, I don't have permissions to access the html folder with my 'jmartin' username. I solve this by navigating to the html folder and using 'sudo chmod 777 -R html'. This means I can sftp the files in again.

If it's not working check the following:
- is the reverse proxy working (go to kaleidoscope.helsinki.fi/node). You should see a message.
- have you updated the server.js file, but not uploaded it to the server. The angular build does not deal with the server.js file so it is not in the dist folder and needs to be uploaded seperately.

##

The site is on Jonathon's Github account here: https://github.com/finnjon/kscope. Because it's angular you need to rebuild the site to create the dist folder. 

## Acknowledgements

The site was rebuilt from the original design by Jonathon Martin (jonathondsmartin@gmail.com). The images were taken from the original site but many have been replaced with css. The audio files were also produced by Jonathon Martin. 
