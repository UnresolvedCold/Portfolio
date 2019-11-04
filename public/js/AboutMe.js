$( document ).ready(function() {

	var url = "https://us-central1-portfolio-afa01.cloudfunctions.net/getAboutPageDetails ";
	$.get(url)
	.then(successCall,errorCall);
	
	function successCall(response)
	{
		MakeProjectHtml(response);
	}

	function errorCall(error)
	{

	}
	});


	function MakeProjectHtml(data)
	{
		var _ = JSON.parse(data);
		for(var i=_.length-1;i>=0;i--)
		{
            var {name, profileImg, aboutIntro,cvLink, skills} = _[i];
			
            $("#About-name").append(name);
            $(".general-intro").append(aboutIntro);
            $("#About-cv").attr("href", cvLink);
            $("#About-img").attr("src", profileImg)            
		}
	}