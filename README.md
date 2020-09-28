# js30-drumkit
The drumkit I made for day 1/30 of JavaScript30.
To run, fork it and download then drag index.html to your browser.

Notes for myself:
- every button on the keyboard has a corresponding keycode you can use to map things to it like an event.
- an event is just an object full of data describing what happened.
- data attributes are not the standard
  - they were brought about when people were making up their own attributes.
  - works similar to a class or src.
  - in this app we use it to bind the button w/ the corresponding audio clip and to identify which button should render the "playing" effect.
  
Todo:
- Clicking on desktops work, but clicking or tapping on mobile does not.
