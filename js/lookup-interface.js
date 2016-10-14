var apiKey = require('./../.env').apiKey;

$(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    $("#userResults").empty();
    $("#userRepos").empty();
    $("#login").empty();
    $("#userProfile").empty();
    var searchInput = $("#searchInput").val();
    $.get("https://api.github.com/search/users?q=" + searchInput + "+repos:%3E10").then(function(response){
      console.log(JSON.stringify(response));
      for(var i=0; i < 10; i++){
        $("#userResults").append("<div class='well user'><img class='img-responsive initial-imgs' src='" + response.items[i].avatar_url + "'><span class='login'>" + response.items[i].login + "</span></div>");
        $(".user").click(userClick);
      }
    }).then(function(){
      $(".user").click(userClick);
    }).fail(function(error){
      alert("Something errored, or no results returned for your search. Try again!");
      console.log(error.responseJSON.message);
    });

  });
});
