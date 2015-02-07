'use strict';

var phineApp = angular.module("phineApp", [
	'ngRoute',
	'phineControllers'
	]);

phineApp.config(('$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/dashboard', {
			templateUrl : 'dashboard.html',
			controller : 'dashboardCtrl'
		}).
		when('/friendList', {
			templateUrl : 'friendList.html',
			controller : 'friendListCtrl'
		}).
		when('/account', {
			templateUrl : 'account.html',
			controller : 'accountCtrl'
		}).
		when('/newTransaction', {
			templateUrl : 'newTransaction.html',
			controller : 'newTransactionCtrl'
		}).
		when('/transactions', {
			templateUrl : 'transactions.html',
			controller : 'transactionsCtrl'
		}).
		otherwise({
			redirectTo : "/dashboard"
		});

	}));