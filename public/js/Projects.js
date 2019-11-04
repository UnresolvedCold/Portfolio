$( document ).ready(function() {

	var url = "https://us-central1-portfolio-afa01.cloudfunctions.net/getProjectsList";
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
		var container = document.getElementById("projectlist");
		var _ = JSON.parse(data);
		for(var i=_.length-1;i>=0;i--)
		{
			var {name, img, start,end, comment,href} = _[i];
			
			var html = 
			`
				<div class="project">
					<a style="margin:10px;" href="${href}">
						<img src="${img}" style="padding:5px">
						<div style="margin: 10px; width:100%; height:100%;">
							<H1>${name}</H1>
							<p>${start}-${end}</p>
							
							<p>${comment}</p>
							
						</div>
					</a>
		
				</div>
			`;

			$("#projectlist").append(html);
		}
	}