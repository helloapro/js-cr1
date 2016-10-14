var apiKey = require('./../.env').apiKey;
// 
// exports.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//     console.log(apiKey);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

$(function(){
  $("#user-search").submit(function(event){
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    $.get("https://api.github.com/users/" + searchInput + "?access_token=" + apiKey).then(function(response){
        console.log(JSON.stringify(response));
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
  });
});
