$(() => {

//Create a div, which is a button

//add a class to the button

//Create div for bio button
const $bio = $('<div>');
$bio.attr('id', 'button1').addClass('button').text('bio').appendTo$('body');

//Create div for resume button
const $resume = $('<div>');
$resume.attr('id', 'button2').addClass('button').text('resume').appendTo$('body');

//Create div for projects button
const $projects = $('<div>');
$projects.attr('id', 'button3').addClass('button').text('project').appendTo$('body');

//Create div for links
const $links = $('<div>');
$links.attr('id', 'button4').addClass('button').text('project').appendTo$('body');

//What should the bio text be held on? A div? A section? Create this here, so it can be called upon by bioButton function.
const $bioPlacement = $('<section>').text('Bio Goes Here').addClass('section');
$('body').append($bioPlacement);

const $bioText = $('<p>')
$bioText.text('afjsdljfkdsljfksdlfsdaaljdl;kjl;kjfsda').appendTo($bioPlacement).attr('id', 'bio').addClass('bio');

//----------------------START ON BUTTON LOGIC-----------------------------
//Create a button for each div. When the button is clicked, that div's content shows up in center of on sun.
      //Can probably just send the text to appear on a div, figure out the placement later
//
// const bioButton () => {
//   //reveal bio text on center of page. How do I tell the text to appear on center? Maybe just styling that section in css with text-align center & a reverse hide?
//
// }
// //Find way for text to be fixed to its cloud



//Find way to position clouds in different places around the page (padding/floating?)


//
// //Call buttons here:
// $(() => {
// $('#1').on('click', bioButton);
//
//
// }
//
//
//
//
//
// });
