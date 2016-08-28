// jQuery coded by: Tobias Årud
$(document).ready(function(){
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=28590554@N05&lang=en-us&format=json&jsoncallback=?", function(data){
        var photos = "";
        $.each(data.items, function(i, item){
            photos += '<div class="column-1-6"><img class="responsive" src="' + item.media.m + '"></div>';
        });
        $(".gallery-content").append(photos);
    });
});