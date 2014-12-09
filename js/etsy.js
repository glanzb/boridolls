$.getJSON();
$.ajax({
    url: 'https://openapi.etsy.com/v2/public/shops/5723525/listings/active.js?&limit=12&includes=Images:1',
    data: {api_key: '77uplw1dwfgt4henv6u84f0v'},
    dataType: 'jsonp',
    success: function(data){
        console.log(data,'success');
        for(x in data.results){
            $('#elist')
                .append('<div class="col-sm-4 col-xs-6"> <a href="'+data.results[x].url+'" target="_blank">'+data.results[x].title+'</a>' +'<img src="' +data.results[x].Images[0].url_170x135+'"> </div>')
        }
    },
    error: function(data){
        console.log(data,'error');        
    }
});