## Lolcat Clock
A digital 12 hour clock, with images which change according to corresponding times of the day. Some times are default, such as morning, afternon, and evening. Other times can be set by the user with the selectors below. There is a fun party button feature which has its own corresponding image. 

Practise project idea from a skillcrush blog which lists ideas for JavaScript projects. 
I have written my own code from scratch as a challenge and used pictures of my cat! The design is fully responsive.

## Link to live code: https://wildelyssa.github.io/LolcatClock/

Credit to www.skillcrush.com for some great JS project ideas.

## Tech Used
**JavaScript**
**CSS** 
**HTML**

## Purpose

A 12 hour clock which displays images dependant on different times set by defaults, or set by the user. 

## Features
* Responsive design accross all screen types
* 12 hour clock with AM and PM displayed, set to GMT
* User can select Wake-Up, Lunch, and Nap times using selectors, image changes accordingly
* Party Button activates party image. Button changes text and appearance accordingly
* Default times and images set for morning, afternoon, and evening

## Improvements and Edits
** Party Button issue:
  * If time === selecter.value (event listener has been selected) the party button does not activate. Selecter overrides party button.
  Tried placing party button code higher up in the code to parse first, but didn't make any difference. 
  Look into the issue and find a fix: possibly add a conditional statement.
  
## Future Improvements and additions
** Add caption/quote on photos as `<span>` and change using JavaScript to make furture edits easier
** Add a "night mode" with sleeping night image, and darker colours
  * Night mode activated by a crescent moon shaped button, and for a set default time using JS

