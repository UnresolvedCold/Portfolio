$( document ).ready(function() {

	var url = "https://us-central1-*********.cloudfunctions.net/functionName";
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
		for(var i=0;i<_.length;i++)
		var {name, img, start,end, comment,href} = _[i];
		
		var html = 
		`
			<div class="project">
				<img src="${img}">
				<div style="margin: 10px; width:100%; height:100%;">
					<H1>${name}</H1>
					<p>${start}-${end}</p>
					
					<p>${comment}</p>
					
				</div>
				<a style="margin:10px;" href="${href}">Know More</a>
	
			</div>
		`;

		$("#projectlist").append(html);
	}
	