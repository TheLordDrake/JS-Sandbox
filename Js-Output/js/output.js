/*
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

// Throws: Cannot set property 'innerHTML' of null
// Caused because script is running before <p id='demo> is being rendered
// document.getElementById('demo').innerHTML = 5 + 6;

// Use window.onload event hook to wait for <p id='demo'> to be rendered
window.onload = function ()
{
    document.getElementById('demo').innerHTML = 5 + 6;
}