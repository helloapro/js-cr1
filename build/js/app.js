(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var apiKey = require('./../.env').apiKey;

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

//var apiKey = require('./../.env').apiKey;

function userClick(){
    $("#userResults").empty();
    $("#userRepos").empty();
    $("#login").empty();
    $("#userProfile").empty();
    $("#userResultsHeader").hide();
    $("#userReposHeader").show();
    $("#login").show();
    var user = $(this).find("span.login").text();
    //$.get("https://api.github.com/users/" + user + "?access_token=" + apiKey).then(function(response){
    $.get("https://api.github.com/users/" + user).then(function(response){
      console.log(JSON.stringify(response));
      var bio;
      if(response.bio === null){
        bio = "This user has not set up their bio!";
      } else {
        bio = response.bio;
      }
      $("#login").append("Github User: " + response.login);
      $("#userProfile").append("<img class='img-responsive profile-img' src='" + response.avatar_url + "'><h4>" + response.name + "</h4>" +
      "<div class='row'>" +
        "<div class='col-sm-4'>company: " + response.company + "</div>" +
        "<div class='col-sm-4'>location: " + response.location + "</div>" +
        "<div class='col-sm-4'>website: <a href='" + response.blog + "'>" + response.blog + "</div></div><br>" +
      "<p>User bio: " + bio + "</p>");
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    //$.get("https://api.github.com/users/" + user + "/repos?access_token=" + apiKey).then(function(response){
    $.get("https://api.github.com/users/" + user + "/repos").then(function(response){
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



},{}]},{},[1]);
