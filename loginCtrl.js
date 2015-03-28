var app = angular.module('app');

app.controller("MyAuthCtrl", ["$scope", "$firebaseAuth", function($scope, $window, $firebaseArray, $firebaseObject, $firebaseAuth, $timeout, loginService) {

		var ref = new Firebase("https://kmhardy-books.firebaseIO.com/Protector");
		//var authData = $scope.authObj.$getAuth();

		ref.createUser({
			email: userData.email,
			password: userData.password
		}, function(error, userData) {
			if (error) {
				console.log("error creating user:", error);
			} else {
				console.log("Successfully created user  account with uid: ", userData.uid);
			}
		});

		ref.authWithPassword({
			email: userData.email,
			password: userData.password
		}, function(error, authData) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated succesfully with Payload:", authData);
		}
		});

/*		$scope.authObj = $firebaseAuth(ref);
		

		$scope.authObj.$authWithCustomToken("H6IIrCqkVGmRxaXtR6OOpllbAvQGHzzjCyRE1ulE").then(function(authData) {
			console.log("Logged in as: ", authData.uid);
		}).catch(function(error) {
			console.error("Authentication failed: ", error);
		});

		$scope.login = function() {
			return loginService.login(authData.email, authData.password);
		};

		$scope.authObj.$authWithPassword({
			email: "my@email.com",
			password: "mypassword"
		}).then(function(authData) {
			console.log("Loggin in as: ", authData.uid);
		}).catch(function(error) {
			console.error("Authentication failed: ", error);
		});

		$scope.authObj.$onAuth(function(authData) {
			if (authData) {
				console.log("Logged in as:", authData.uid);
			} else {
				console.log("Logged out");
			}
		});*/

]});