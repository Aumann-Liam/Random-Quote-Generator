$("#quote").click(function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
      $("#space").text(result.quoteText + " ");
    });
});