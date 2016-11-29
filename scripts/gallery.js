var apiKey = '119d7abbf046881226c38f4d1088c07a';
var user = 'asucti';
var flickr = new Flickr(apiKey);

function GetPhotos(page)
{
	flickr.photos.search(
	    {
	        'user_id': user,
	        'per_page' : 10,
	        'page' : page
	    }, 
		function(data){
			var photos = data.photos.photo;
			$.each(photos, function( index, value ) {
				AddPhoto(value);
			});
			AddPhotoPages(data.photos.pages)
		}
	);
}

function ClearPhotos()
{
	$("ul#photos").empty()
}

function AddPhoto(photo)
{
	var photoitem = $('<li class="photo"></li>');
	photoitem.append('<img src="' + photo.src() + '" class="gallery-photo" />');
	$("ul#photos").append(photoitem);
}

function AddPhotoPages(count)
{
	var photoPage = $("ol#photopage");
	
	if(!(photoPage.children().length > 0))
	{
		for(i = 1; i < count; i++)
		{
			photoPage.append($("<li><a class='photo-page'>" + i + "</a></li>"))
		}
	}
}