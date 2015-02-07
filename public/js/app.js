'use strict';

var phineApp = angular.module("phineApp", [
	'ngRoute',
	'phineControllers'
	]);

phineApp.config(('$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/dashboard', {
			templateURL : 'dashboard.html',
			controller : 'dashboardCtrl'
		}).
		when('/friendList', {
			templateURL : 'friendList.html',
			controller : 'friendListCtrl'
		}).
		when('/account', {
			templateURL : 'account.html',
			controller : 'accountCtrl'
		}).
		when('/newTransaction', {
			templateURL : 'newTransaction.html',
			controller : 'newTransactionCtrl'
		}).
		when('/transactions', {
			templateURL : 'transactions.html',
			controller : 'transactionsCtrl'
		}).

	}