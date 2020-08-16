/**
 * 
 */
/**
 * 
 */
			$(document).ready(function(){
			    $('#hideshowtrial').hide();
			    $('#whoweare, #whoweare1').click(function(){
			   		 $('#hideshowtrial').show('slow');
			    });
			    $('#hideshowtrial, #hideshowtrial1').hide();
			    	 $('#ourcoffee,#ourcoffee1').click(function(){
			    $('#hideshowtrial1').show('slow'); 
				});
			    $('#menu2,#menu3').hide();
			    $('#menu1').click(function(){
			    	 $('#menu2, #menu3').show('slow');
				});
	            $('#menu1').on('click', function (event) { 
	                if ('#menu2,#menu3' !== "") { 
	                    event.preventDefault(); 
	                    var hash = this.hash; 
	                    $('html, body').animate({ 
	                        scrollTop: $(hash).offset().top 
	                    }, 500, function () { 
	                        window.location.hash = hash; 
	                    }); 
	                } // End if 
	            });
	            // To scroll down while clicking on a button on same page
	            $('#about').on('click', function (event) { 
	                if ('#aboutcafe' !== "") { 
	                    event.preventDefault(); 
	                    var hash = this.hash; 
	                    $('html, body').animate({ 
	                        scrollTop: $(hash).offset().top 
	                    }, 500, function () { 
	                        window.location.hash = hash; 
	                    }); 
	                } // End if 
	            }); 
	            $('#contact,#visitus,#visitus1').on('click', function (event) { 
	                if ('#contactme' !== "") { 
	                    event.preventDefault(); 
	                    var hash = this.hash; 
	                    $('html, body').animate({ 
	                        scrollTop: $(hash).offset().top 
	                    }, 500, function () { 
	                        window.location.hash = hash; 
	                    }); 
	                } // End if 
	            }); 
		        }); 
			function myFunction() {
				  var x = document.getElementById("myTopnav");
				  if (x.className === "topnav") {
				    x.className += " responsive";
				  } else {
				    x.className = "topnav";
				  }
				}
			$(document).ready(function(){
				$("#srchTextBtn").click(function(){
					window.location.href = "https://google.com/search?q=" + $("#advSrchInput0").val() ;
				});
			});	

