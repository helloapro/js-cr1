var apiKey = require('./../.env').apiKey;

function userClick(){
    $("#userResults").empty();
    $("#userRepos").empty();
    $("#login").empty();
    $("#userProfile").empty();
    $("#userResultsHeader").hide();
    $("#userReposHeader").show();
    $("#login").show();
    var user = $(this).find("span.login").text();
    $.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
        var bio;
        if(response.bio === null){
          bio = "This user has not set up their bio!";
        } else {
          bio = response.bio;
        }
        $("#login").append(" " + response.login);
        $("#userProfile").append("<p>User bio: " + bio + "</p>");
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });

    $.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
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

}
