$(() => {

  //Create a rising sun
  const $sun = $('<div>').attr('id', 'sun').addClass('sun');
  $('body').append($sun);



//            <!--------Bio Button Display--------->

//Create section as bio button placeholder, appended to body
const $container = $('<div>').addClass('container');
  $('body').append($container);

//Create bio div & append to bio section
const $bioDiv = $('<div>').addClass('buttonContainer');
  $container.append($bioDiv);


//Create bio button title & append to its div
const $bioTitle = $('<button>').text('Bio').attr('id', 'button1').addClass('button');
  $bioDiv.append($bioTitle);


//            <!------Resume Button Display-------->
//Create resume section as resume button placeholder, append to body


//Create resume div & append to resume section
const $resumeDiv = $('<div>').addClass('buttonContainer');
  $container.append($resumeDiv);

//Create resume button title & append to resume div
const $resumeTitle = $('<button>').text('Resume').attr('id', 'button2').addClass('button');
  $resumeDiv.append($resumeTitle);



//           <!------Projects Button Display------>

//Create project section as project button placeholder, append to body

//Create project div & append to resume $section
const $projectDiv = $('<div>').addClass('buttonContainer');
  $container.append($projectDiv);

//Create project button title & append to project div
const $projectTitle = $('<button>').text('Projects').attr('id', 'button3').addClass('button');
  $projectDiv.append($projectTitle);


//         <!--------Links Button Display-------->

//Create links section as link button placeholder, append to body


//Create links div & append to links $section
const $linksDiv = $('<div>').addClass('buttonContainer');
  $container.append($linksDiv);

//Create links button title & append to links DIV
const $linksTitle = $('<button>').text('Links').attr('id', 'button4').addClass('button');
  $linksDiv.append($linksTitle);


//           <!-----------------START ON BUTTON LOGIC------------->
//Create a button for each div. When the button is clicked, that div's content shows up in center of on sun.
      //Can probably just send the text to appear on a div, figure out the placement later


//       <!-----Bio function----->
const $bioText = $('<p>').text('My name is Liat Paradise, and I am an aspiring Fullstack Web Developer.').attr('id', 'bio').addClass('text').css('visibility', 'hidden');
  $container.append($bioText);

// const $resumeText = $('<p>').text('My Resume Text Appears Here').attr('id', 'resume').addClass('text').css('visibility', 'hidden');
//       $container.append($resumeText);



const $linkText = $('<p>').html('<a href="https://www.linkedin.com/in/liatparadise">LinkedIn</a><br><a href="https://twitter.com/liat_paradise">Twitter</a>').attr('id', 'links').addClass('text');
      $linkText.css('visibility', 'hidden');
      $container.append($linkText);



const bio = () => {
  $bioText.css('visibility', 'visible');
  $resumeText.css('visibility', 'hidden');
  $linkText.css('visibility', 'hidden');
  $project1.css('visibility', 'hidden');

}


//     <!----Resume function----->

const $resumeText = $('<p>').html('<a href="https://zety.com/profile/liat-paradise">Resume</a>').attr('id', 'resume').addClass('text').css('visibility', 'hidden');
      $container.append($resumeText);

const resume = () => {
  $bioText.css('visibility', 'hidden');
  $resumeText.css('visibility', 'visible');
  $linkText.css('visibility', 'hidden');
  $project1.css('visibility', 'hidden');
  };





//     <!-----Projects function---->

// const projectArray = [];

//question: how can I make it open in a new window in a jquery way?
const $project1 = $('<div>').html('<a href="file:///Volumes/External/Desktop/Projects.html">Future Projects</a>').attr('id', 'projects').addClass('text');
      $project1.css('visibility', 'hidden');
      $container.append($project1)

const projects = () => {
  $project1.css('visibility', 'visible');
  $bioText.css('visibility', 'hidden');
  $resumeText.css('visibility', 'hidden');
  $linkText.css('visibility', 'hidden');
}


// const projects = () => {
//
//     let currentImgIndex = 0
//     let numOfImages = $('.carousel-images').children().length - 1
//
//     $('.next').on('click', () => {
//         $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
//         currentImgIndex++
//       } else {
//         currentImgIndex = 0
//       }
//         $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
//     })
//
//
//   $('.previous').on('click', () => {
//
//       $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
//
//         if(currentImgIndex > 0) {
//           currentImgIndex--
//         } else {
//           currentImgIndex = numOfImages
//         }
//
//         $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
//
//       });



//     <!-----Links function------>



const links = () => {
  $bioText.css('visibility', 'hidden');
  $resumeText.css('visibility', 'hidden');
  $project1.css('visibility', 'hidden');
  $linkText.css('visibility', 'visible');
}


//Create Audio
// const $music = $('#music');
//
// $audioContainer = $('<div>').addClass('container');
//
// $audioContainer.append($music);
//
// function playAudio() {
//   $music.play();
// }

//Create audio button

// const $audioContainer = $('<div>').attr('id', 'audio-container').addClass('audio-container');
// $('body').append($audioContainer);
//
// $audioContainer.text('Click here for audio');


const soundTrack = new Audio('Audio/Audio.mp3');




//
// //Call buttons here:
$(() => {
$('#button1').on('click', bio);
$('#button2').on('click', resume);
$('#button3').on('click', projects);
$('#button4').on('click', links);
$('#button1').click(e => soundTrack.play());
$('#submitBtn').click(function(){
  $('#myForm').submit();
});
});


//
//
//
//
});
