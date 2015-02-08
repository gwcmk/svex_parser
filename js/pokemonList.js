$( "form" ).submit(function( event ) {
	event.preventDefault();
	var listValues = $('textarea').val();
	var list = listValues.split('\n');
	$('.output').empty();
	for(var i = 0; i < list.length; i++){
		if(list[i].match(/^\d{4}$/)){
			$('.output').append( list[i] + 
							 ' - <a href="' +
							 'https://www.reddit.com/r/SVExchange/search?q=title%3A' + 
							 list[i] + 
							 '+flair%3A%27trainer+shiny+value%27&sort=relevance&restrict_sr=on&t=year" target="_blank">' + 
							 'Link</a><br>');
		}
	}
});