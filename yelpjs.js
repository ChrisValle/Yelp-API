function callAjax(searchString)
{
    var url = `https://rebecca-proxy.herokuapp.com/search?location=${searchString}`
    
    $.ajax({
        url: url,  
        headers: {
          "Authorization": "Bearer 7KOHw0vW1q-qnDzTqsPORRTxllUcHZA74ed4Jv6A0ITsWXgvC30TXnyxlI1hiZiad1ei7-6GpElLGK04Qs_OlEHy71T7CNrmHkDhi4-oeRjn3kmS_bKnT2opkV-iW3Yx"
        },   

        success: function(data) {
          console.log(data);
          
          let numberOfResults = data.businesses.length
          $("someid").text(numberOfResults)

          $("#results").html('');

          data.businesses.forEach(function(business){
            let name = 
            business.name
            let rating = 
            business.rating
            let image_url =
            business.image_url
            let location =
            business.location.display_address.join(' ,')
            let url =
            business.url;


            let myDiv = `<a href=${url} target="_blank" style="text-decoration:none">
            <div class='result-div'>
              <p>Name: ${name} | Rating: ${rating}</p>
              <p>Address: ${location}</p>
              
              <img src=${image_url} />
            </div></a>`
            
        
            $("#results").append(myDiv);
          })
        },
    });
}

$("#tfnewsearch").on('submit', function(event) {
    event.preventDefault();
    let searchString = $('#the-input').val();
    callAjax(searchString);

})