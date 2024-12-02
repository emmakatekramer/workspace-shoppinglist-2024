/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('#four').addClass('hot');
$('.hot').each(toCool);
function toCool() {
  $(this).removeClass('hot')
  $(this).addClass('cool')
}

// traverse the elements
$('#two').next().next().text('cheese');
$('#three').prev().prev().text('sugar');

// add a new element by clicking the plus sign
$('#todo').append('<li class="cool">meat</li>');
$('#add').click(addElement);


// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element

  // add a input text box
  $('#todo').append('<input type="text" id="newElement">');

  

  // whenever the user are done add the element
  $('input').blur(convertLi);
  $('#save').text("Need to Save to Database")
  $('li').click(changeStyle);
  
}

function convertLi() {
  // get the value of the input box
  var userInput = $(this).val();
  console.log(userInput);
  $('#todo').append('<li class="cool">' + userInput + '</li>');
  $('input').click(changeStyle);
  $(this).remove();
  
  
}
// bind click with the event handler

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
$('li').click(changeStyle);
function changeStyle() {
  // change the style of this to complete
  $(this).addClass('complete');
  if ($(this).hasClass('cool')) {
    //remove cool add complete
    $(this).removeClass('cool');
    $this.addClass('complete');
  }
  else{
    //remove complete and add cool
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
  $('#save').text("Need to Save to Database")
}
