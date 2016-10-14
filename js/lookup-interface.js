var apiKey = require('./../.env').apiKey;

$(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    var numberRepos;
    $.get("https://api.github.com/users/" + searchInput + "?access_token=" + apiKey).then(function(response){
        $("#userProfile").append("<h3>User: " + response.login + "</h3>")
          .then(append("<p>User bio: " + response.bio + "/p>"))
        console.log(JSON.stringify(response));
        var numberRepos = response.public_repos;
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });

    $.get("https://api.github.com/users/" + searchInput + "/repos?access_token=" + apiKey).then(function(response){
        for(var i=0; i < response.length; i++){
          $("#userRepos").append("<div class='well'><a href=" + response[i].html_url + ">" + response[i].html_url + "</a><br>" + response[i].description + "</div>");
        }
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
  });
});
