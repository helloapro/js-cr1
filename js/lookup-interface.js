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
      var forLoop = response.items.length > 24 ? 24 : response.items.length;
      for(var i=0; i < forLoop; i++){
        $("#userResults").append("<div class='col-sm-3 col-md-3'>"+
            "<div class='thumbnail user'>"+
              "<img class='img-responsive' src='" + response.items[i].avatar_url + "'>" +
              "<div class='caption'>" +
                "<h3><span class='login'>" + response.items[i].login + "</span></h3><p><a href='#' class='btn btn-primary btn-block' role='button'>That's mah homie!</a></p>"+
              "</div>"+
            "</div>"+
          "</div>");
      }
    }).then(function(){
      $(".user").click(userClick);
    }).fail(function(error){
      alert("Something errored, or no results returned for your search. Try again!");
      console.log(error.responseJSON.message);
    });

  });
});
