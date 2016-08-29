// jQuery coded by: Tobias Årud
$(document).ready(function(){
    // GETs Flickr API pictures from a partiicular user. This one uses getJSON rather than get.
    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?id=28590554@N05&lang=en-us&format=json&jsoncallback=?", function(data){
        var photos = "";
        $.each(data.items, function(i, item){
            photos += '<div class="column-1-6"><img class="responsive" src="' + item.media.m + '"></div>';
        });
        $(".gallery-content").append(photos);
    });
    
    // Showing understanding of how to POST to API using jQuery.
    var inputNamn = $("#namn");
    var inputBetyg = $("#betyg");
    $("#addcontent").submit(function(e){
        e.preventDefault();
        $.post("https://bakverksapi.herokuapp.com/bakverk", {namn: inputNamn.val(), betyg: inputBetyg.val()})
    });
});