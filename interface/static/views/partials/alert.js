
$("signupbtn").attr( "onclick", function(){
            if(!($('input[name="password"]')===$('input[name="passwordcheck"]'))){
               Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: '<a href>Why do I have this issue?</a>'
                }); 
            }
                }
                                  );
