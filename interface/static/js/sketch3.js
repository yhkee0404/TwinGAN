//var model_src2;
//var transferStyle;
//let inputImg2; 
//let inputImg3 = new Image();
////image change using select tag
//
//
//function select_style(selected) {
//  cur_value = selected.text();
//  console.log(cur_value);
//  model_src2 = "ckpts/"+cur_value;
//  console.log(model_src2);
//  // Create two Style methods with different pre-trained models
//  transferStyle = ml5.styleTransfer(model_src2,modelLoaded);
//}
//
//function select_content(selected) {
//  cur_value = selected.text();
////  console.log(cur_value);
////  $("#snapshot").attr("src", "img/" + cur_value + ".jpg");
//  inputImg2 = select('#snapshot');
//  console.log(inputImg2);
//  inputImg3.src= inputImg2.elt.toDataURL();
//}
//
//$("#style-select").change(function() {
//  select_style($('option:selected', this));
//});
////$("#snapshot").change(function() {
////  select_content($('option:selected', this));
////});
////
//
//// let statusMsg;
//let transferBtn2;
//// let style1;
//// let style2;
//
//
//function setup() {
//  //let myCanvas = createCanvas(600,400);
//  noCanvas();
//  // Get the input image
//  select_style($("#style-select option:selected"));
//  select_content($("#snapshot"));
//  // Transfer ButtonC
//  transferBtn2 = select('.transferBtnCapture')
//  transferBtn2.mousePressed(transferImages);
//}
//
//
//// A function to be called when the models have loaded
//function modelLoaded() {
//  // Check if both models are loaded
//  if(transferStyle.ready){
//    console.log('Ready!')
//  }
//}
//
//
//// Apply the transfer to both images!
//function transferImages() {
//  console.log('Applying Style Transfer...!');
//  
//  transferStyle.transfer(inputImg3, function(err, result) {
//    $(".outputImg").attr("src", result.src);
//  });
//
//}