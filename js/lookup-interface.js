var apiKey = require('./../.env').apiKey;

$(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    $("#userResults").empty();
    $("#userRepos").empty();
    $("#login").empty();
    $("#userProfile").empty();
    $("#userReposHeader").hide();
    $("#login").hide();
    $("#userResultsHeader").show();
    var searchInput = $("#searchInput").val();
    $.get("https://api.github.com/search/users?q=" + searchInput + "+repos:%3E10").then(function(response){
      console.log(JSON.stringify(response));
      var forLoop = response.items.length > 10 ? 10 : response.items.length;
      for(var i=0; i < forLoop; i++){
        $("#userResults").append("<div class='row'>"+
          "<div class='col-sm-3 col-md-3'>"+
            "<div class='thumbnail user'>"+
              "<img class='img-responsive' src='" + response.items[i].avatar_url + "'>" +
              "<div class='caption'>" +
                "<h3><span class='login'>" + response.items[i].login + "</span></h3><p><a href='#' class='btn btn-primary' role='button'>That's mah homie - go to hims/hers!</a></p>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>");

        // <div class='well user'><img class='img-responsive initial-imgs' src='" + response.items[i].avatar_url + "'><span class='login'>" + response.items[i].login + "</span></div>"
      }
    }).then(function(){
      $(".user").click(userClick);
    }).fail(function(error){
      alert("Something errored, or no results returned for your search. Try again!");
      console.log(error.responseJSON.message);
    });

  });
});
