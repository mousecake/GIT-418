$(document).ready(function(){
	var target = $("ul#list");

	$("select#focus").change(function(){
		var isNull = levelSelected();
		var sel = $( "select#focus option:selected").attr("value");
		target.empty();
		var copy = courses;
		var filtered = copy.filter(function(i){return (i.category == sel && (isNull? true : i.isUpper == isUpper()))});
		appendItems(filtered, target);
		$("select#focus option#default").remove()
	});

	$("select#level").change(function(){
		var categorySelected = selectedCategory().attr("value") != null;
		var sel = isUpper();
		target.empty();
		var copy = courses;
		var filtered = copy.filter(function(i){return (i.isUpper == sel && (categorySelected ? i.category == selectedCategory().attr("value") : true))})
		appendItems(filtered, target);
		$("select#level option#default").remove()
	});
});

function appendItems(itemArray, target){
	$.each(itemArray, function(i,v){
			target.append("<li><h5>GIT " + v.course +"</h5><label>" + v.description + "</label><li>")
		});
}

function getUpper(){
	return $("select#level option:selected")
}

function selectedCategory(){
	return $("select#focus option:selected")
}

function levelSelected(){
	var upperSelected = getUpper();
	return upperSelected.attr("value") != "upper" && upperSelected.attr("value") != "lower"
}

function isUpper(){
	var upper = getUpper();
	return upper.attr("value") == "upper";
}