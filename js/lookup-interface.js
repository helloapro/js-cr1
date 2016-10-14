var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/search/users?q=tom+repos:%3E10?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

$(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    $("#userRepos").empty();
    $("#login").empty();
    $("#userProfile").empty();
    var searchInput = $("#searchInput").val();
    var numberRepos;
    $.get("https://api.github.com/users/" + searchInput + "?access_token=" + apiKey).then(function(response){
        var bio;
        if(response.bio === null){
          bio = "This user has not set up their bio!";
        } else {
          bio = response.bio;
        }
        $("#login").append(" " + response.login);
        $("#userProfile").append("<p>User bio: " + bio + "</p>");
      }).fail(function(error){
        alert("Not a user. Try again!");
        console.log(error.responseJSON.message);
      });

    $.get("https://api.github.com/users/" + searchInput + "/repos?access_token=" + apiKey).then(function(response){
      for(var i=0; i < response.length; i++){
        var description;
        if(response[i].description === null){
          description = "The user did not set a description :-(";
        } else {
          description = response[i].description;
        }

        $("#userRepos").append("<div class='well'><a href=" + response[i].html_url + ">" + response[i].html_url + "</a><br>" + description + "</div>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });


  });
});
