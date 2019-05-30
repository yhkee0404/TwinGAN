var image_src; // let input img;
var model_src; // let style; 
var transferStyle;
let video;
let isTransferring = false;
let resultImg;
//image change using select tag
function select_style(selected) {
  cur_value = selected.text();
  console.log(cur_value);
  image_src = "img/styles/" + cur_value + ".jpg";
  model_src = "ckpts/"+cur_value;
  console.log(image_src);
  console.log(model_src);
  $("#style-img").attr("src", image_src);
  // Create two Style methods with different pre-trained models
  transferStyle = ml5.styleTransfer(model_src,video, modelLoaded);
}
function select_content(selected) {
  cur_value = selected.text();
  console.log(cur_value);
  $("#content-img").attr("src", "img/" + cur_value + ".jpg");
  inputImg = select('#content-img');
}
$("#style-select").change(function() {
  select_style($('option:selected', this));
});
$("#content-select").change(function() {
  select_content($('option:selected', this));
});
//

// let statusMsg;
let transferBtn;
// let style1;
// let style2;

function setup() {
//  //let myCanvas = createCanvas(600,400);
    //noCanvas();
    
  //new 
  createCanvas(800, 800).parent('canvasContainer');

  video = createCapture(VIDEO);
  video.hide();
    
  resultImg = createImg('');
  resultImg.hide();
  // new // 
    
  // Get the input image
  select_style($("#style-select option:selected"));
  select_content($("#content-select option:selected"));
  // Transfer Button
  transferBtn = select('.transferBtn')
  transferBtn.mousePressed(startStop);
}


// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(transferStyle.ready){
    console.log('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  console.log('Applying Style Transfer...!');

  transferStyle.transfer(inputImg, function(err, result) {
    $(".outputImg").attr("src", result.src);
  });
}



/////   new    ///// 

function draw(){
  // Switch between showing the raw camera or the style
  if (isTransferring) {
    image(resultImg, 0, 0, 800, 800);
  } else {
    image(video, 0, 0, 800, 800);
  }
}

// Start and stop the transfer process
function startStop() {
  if (isTransferring) {
    select('.transferBtn').html('Start');
  } else {
    select('.transferBtn').html('Stop');
    // Make a transfer using the video
    transferStyle.transfer(gotResult);
  }
  isTransferring = !isTransferring;
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  if (isTransferring) {
    transferStyle.transfer(gotResult);
  }
}




