'use strict';

var phineControllers = angular.module('phineControllers', []);
var address = "/api";
var user = address + "/user/";
var group = address + "/group/";
var transaction = address + "/transaction/";

phineControllers.controller('dashboardCtrl',
	['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get(user).success(function(data) {
			$scope.first_name = data.first_name;
			$scope.last_name = data.last_name;
			$scope.display_name = data.display_name;
			$scope.account_balance = data.account_balance;
		});
		$http.get(transaction).success(function(transaction) {
			$scope.transaction = transaction;
		})
	}]);

phineControllers.controller('accoutEditCtrl',
	['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get(user).success(function(data) {
			$scope.first_name = data.first_name;
			$scope.last_name = data.last_name;
			$scope.email = data.email;
		});
	}]);

phineControllers.controller('friendListCtrl', 
	['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get(user).success(function(data) {
			 $scope.friends = data.friends;
		});
	}]);

phineControllers.controller('addTransactionCtrl',
	['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get(user).success(function(data) {
			//RIGHT FIELD?????
			$scope.past_transactions = data.past_transactions;
		})
	}]);

phineControllers.controller('transactionsCtrl',
	['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$http.get(transaction).success(function(transaction) {
			$scope.transactions = transaction;
		})
	}]);
