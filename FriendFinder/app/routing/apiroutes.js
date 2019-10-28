var friends = require("../data/friends.js");
var express = require("express");
var bodyParser = require("body-parser");
var apirouter = express.Router();

//json for friends list
apirouter.get("/api/friends", function(req,res){
	res.json(friends);
})


//posts a new user and returns a match
apirouter.post("/api/friends", function(req, res){
	console.log("posting...");
	var newFriend = req.body;
	console.log(newFriend);

	//coverts users's results into a array of numbers
	var newScore = function(array){
		var newScore = [];
		for (var i = 0; i < array.length; i++) {
			newScore.push(parseInt(array[i]));
		}
		return newScore;
	}
	//calculates difference of elements between both arrays and then finds the difference
	var totalDiff = function(arrA, arrB){
		delta = 0;
		for(var i=0; i<arrA.length; i++){
			delta += Math.abs(arrA[i] - arrB[i]);
		}
		return delta;
	}
	
	
	function indexOfMin(array) {
    	if (array.length === 0) {
        	return -1;
    	}

    	var min = array[0];
    	var minIndex = 0;

    	for (var i = 1; i < array.length; i++) {
        	if (array[i] < min) {
            	minIndex = i;
            	min = array[i];
        	}
    	}

    	return minIndex;
	}
