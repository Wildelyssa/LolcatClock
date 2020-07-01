##Lolcat Clock
* Idea taken from a skillcrush.com project, where I saw the idea and decided to write my own code from scratch and add pictures of my cat!

## Tech Used
* **JavaScript CSS HTML**

## Purpose

# A 12 hour clock which displays images dependant on different times set by defaults, or set by the user

## Features
* Responsive design accross all screen types
* 12 hour clock with AM and PM displayed, set to GMT
* User can select Wake-Up, Lunch, and Nap times using selectors, image changes accordingly
* Party Button activates party image. Button changes text and appearance accordingly
* Default times and images set for morning, afternoon, and evening

## Improvements and Edits
* Solved issues:
* 12 hour clock was showing -12 at midnight: added if statement to display 0
* Improved responsiveness for mobile

** Party Button issue:
  * If event listener has been triggered, party button does not activate. 
  Tried placing party button code higher up in the code to parse first, but didn't work. 
  Look into the issue and find a fix: possibly add a conditional statement
  
## Future Improvements and additions
** Add message text on photos into a <span> and change using JavaScript to make furture edits easier
** Add a "night mode" with sleeping night image, and darker colours
  * Night mode activated by a crescent moon shaped button, and for a set default time using JS

