function myFunction() 
	{
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") 
		{
			x.className += " responsive";
		} else 
		{
			x.className = "topnav";
		}
	}
//3 images

function navprod1(id1, id2)
{
	document.getElementById(id1).style.display = "block";
	document.getElementById(id2).style.display = "none";
}

function navprod2(id1, id2)
{
	document.getElementById(id1).style.display = "none";
	document.getElementById(id2).style.display = "block";
}

function prod1js()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg4").style.display="none";
	
	
}

function prod2js()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimg2").style.display="block";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg4").style.display="none";
}

function prod3js()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimgsmall3").style.opacity="1";
	document.getElementById("prodimg3").style.display="block";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg4").style.display="none";
}

function prod4js()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimgsmall4").style.opacity="1";
	document.getElementById("prodimg4").style.display="block";
}

//2 images
function prod1js2()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
}

function prod2js2()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
}

//4 images
function prod1js4()
{
	document.getElementById("prodimgsmall1").style.opacity="1";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="block";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="none";
}

function prod2js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="1";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="block";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="none";
}

function prod3js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="1";
	document.getElementById("prodimgsmall4").style.opacity="0.7";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="block";
	document.getElementById("prodimg4").style.display="none";
}

function prod4js4()
{
	document.getElementById("prodimgsmall1").style.opacity="0.7";
	document.getElementById("prodimgsmall2").style.opacity="0.7";
	document.getElementById("prodimgsmall3").style.opacity="0.7";
	document.getElementById("prodimgsmall4").style.opacity="1";
	document.getElementById("prodimg1").style.display="none";
	document.getElementById("prodimg2").style.display="none";
	document.getElementById("prodimg3").style.display="none";
	document.getElementById("prodimg4").style.display="block";
}

//shops crafts, fashion, arts, gifts

function craftjs()
{
	document.getElementById("crafttext").style.opacity = "1";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("foodtext").style.opacity = "0.6";
	document.getElementById("organictext").style.opacity = "0.6";
	document.getElementById("organicitems").style.display = "none";
	document.getElementById("craftitems").style.display = "block";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";
	document.getElementById("fooditems").style.display = "none";


}

function fashionjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "1";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("foodtext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "block";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";
	document.getElementById("fooditems").style.display = "none";
	document.getElementById("organictext").style.opacity = "0.6";
	document.getElementById("organicitems").style.display = "none";
}
function artsjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "1";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("foodtext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "block";
	document.getElementById("giftsitems").style.display = "none";
	document.getElementById("fooditems").style.display = "none";
	document.getElementById("organictext").style.opacity = "0.6";
	document.getElementById("organicitems").style.display = "none";
}
function giftsjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "1";
	document.getElementById("foodtext").style.opacity = "0.6";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "block";
	document.getElementById("fooditems").style.display = "none";
	document.getElementById("organictext").style.opacity = "0.6";
	document.getElementById("organicitems").style.display = "none";
}
function foodjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("foodtext").style.opacity = "1";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";
	document.getElementById("fooditems").style.display = "block";
	document.getElementById("organictext").style.opacity = "0.6";
	document.getElementById("organicitems").style.display = "none";
}
function organicjs()
{
	document.getElementById("crafttext").style.opacity = "0.6";
	document.getElementById("fashiontext").style.opacity = "0.6";
	document.getElementById("arttext").style.opacity = "0.6";
	document.getElementById("giftstext").style.opacity = "0.6";
	document.getElementById("foodtext").style.opacity = "0.6";
	document.getElementById("organictext").style.opacity = "1";
	document.getElementById("craftitems").style.display = "none";
	document.getElementById("fashionitems").style.display = "none";
	document.getElementById("artitems").style.display = "none";
	document.getElementById("giftsitems").style.display = "none";
	document.getElementById("fooditems").style.display = "none";
	document.getElementById("organicitems").style.display = "block";
}

function wire()
{
	
	var wirex = document.getElementById("wireitem").style.display;
	console.log(wirex);
	if (wirex == 'none')
	{
	document.getElementById("wireitem").style.display = 'block';
	}
	else
	{
	document.getElementById("wireitem").style.display = 'none';
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?wire');
}

function cloth()
{
	
	var clothx = document.getElementById("clothbagitems").style.display;
	if (clothx == 'none')
	{
	document.getElementById("clothbagitems").style.display = "block";
	}
	else
	{
	document.getElementById("clothbagitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?cloth');
	
}

function jewels()
{
	
	var clothx = document.getElementById("jewelitems").style.display;
	if (clothx == 'none')
	{
	document.getElementById("jewelitems").style.display = "block";
	}
	else
	{
	document.getElementById("jewelitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?jewels');
	
}

function dress()
{
	
	var dressx = document.getElementById("dressitems").style.display;
	if (dressx == 'none')
	{
	document.getElementById("dressitems").style.display = "block";
	}
	else
	{
	document.getElementById("dressitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?dress');
	
}
function canvas()
{
	
	var clothx = document.getElementById("canvasitem").style.display;
	if (clothx == 'none')
	{
	document.getElementById("canvasitem").style.display = "block";
	}
	else
	{
	document.getElementById("canvasitem").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?canvas');
	
}
function food()
{
	
	var foodx = document.getElementById("foodsitems").style.display;
	if (foodx == 'none')
	{
	document.getElementById("foodsitems").style.display = "block";
	}
	else
	{
	document.getElementById("foodsitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?healthdrink');
	
}

function organic()
{
	
	var foodx = document.getElementById("organicessentials").style.display;
	if (foodx == 'none')
	{
	document.getElementById("organicessentials").style.display = "block";
	}
	else
	{
	document.getElementById("organicessentials").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?organicessentials');
	
}

function foodvp()
{
	
	var foodx = document.getElementById("foodvpitems").style.display;
	if (foodx == 'none')
	{
	document.getElementById("foodvpitems").style.display = "block";
	}
	else
	{
	document.getElementById("foodvpitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?immuneboosters');
	
}

function foodmasala()
{
	
	var foodx = document.getElementById("foodmasitems").style.display;
	if (foodx == 'none')
	{
	document.getElementById("foodmasitems").style.display = "block";
	}
	else
	{
	document.getElementById("foodmasitems").style.display = "none";
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?foodmasala');
	
}

function koodai()
{
	
	var wirex = document.getElementById("koodaiitem").style.display;
	console.log(wirex);
	if (wirex == 'none')
	{
	document.getElementById("koodaiitem").style.display = 'block';
	}
	else
	{
	document.getElementById("koodaiitem").style.display = 'none';
	}
	window.history.pushState({"html":"","pageTitle":""},"", '?koodai');
}

/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} */

	