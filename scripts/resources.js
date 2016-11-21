var resources = {
	'career': 		{'resource': 'Career Preparation',		'url': 'https://students.asu.edu/careerguide/careerpreparation'},
	'advising':		{'resource': 'College Advising',		'url': 'https://http://poly.engineering.asu.edu/advising'},
	'counseling':	{'resource': 'Counseling Services',		'url': 'https://students.asu.edu/counseling'},
	'financial':	{'resource': 'Financial Aid',			'url': 'https://students.asu.edu/financialaid'},
	'fitness':		{'resource': 'Fitness & Recreation',	'url': 'http://fitness.asu.edu/'},
	'health':		{'resource': 'Health Services',			'url': 'https://students.asu.edu/health'},
	'housing':		{'resource': 'Housing',					'url': 'http://housing.asu.edu/home'},
	'library':		{'resource': 'Library',					'url': 'http://lib.asu.edu/'},
	'parking':		{'resource': 'Parking',					'url': 'https://cfo.asu.edu/pts'},
	'scholarships':	{'resource': 'Scholarships',			'url': 'https://students.asu.edu/scholarships'},
	'employment':	{'resource': 'Student Employment',		'url': 'https://students.asu.edu/employment'},
	'organizations':{'resource': 'Student Organizations',	'url': 'http://asu.orgsync.com/'},
	'tutoring':		{'resource': 'Tutoring Support',		'url': 'https://tutoring.asu.edu/'},
	'writing':		{'resource': 'Writing Support',			'url': 'https://tutoring.asu.edu/writing-centers'}
}


function getLinks(){
	var output = $("#output")
	output.html('')
	var selected = $("input[type='checkbox']:checked")
	var div = $('<div>');
	
	
	if(selected.length == 0)
	{
		output.html("Unfortunately you did not select anything, please make at least one selection.")
		return;
	}
	
	div.append('You have indicated an interest in ')
	
	if(selected.length > 2){
		selected.each(function(i, v, l, m){
			var item = $(v)
			var r = resources[item.val()]
			if(selected.length - 1 === i)
				div.append(" and ")
			else if(i != 0)
				div.append(", ")
			
			div.append(getLink(r))
		});
	}
	else if (selected.length == 2){
		var left = $(selected[0]);
		var right = $(selected[1]);
		
		div.append(getLink(resources[left.val()]));
		div.append(" and ");
		div.append(getLink(resources[right.val()]));
	}
	else if (selected.length == 1){
		div.append(getLink(resources[$(selected[0]).val()]));
	}
	
	div.append(". Please click on these links to learn more about these resources.");
	
	output.append(div);
}

function getLink(resource){
	return '<a href="' + resource.url + '">' + resource.resource + '</a>';
}