/**
 * 
 */
(function(){
'use strict';
/*
rkapp.
factory('RoiList',function(){
	var memfunc = {};
	var memList = ['RK','SUB','JM'];
	memfunc.getList = function(){
		return memList;
	}
	return memfunc;
});
*/
angular.module('rk.mias').
component('rkList',{
	templateUrl : 'angular/list.template',
	controller : ['$http','RoiList',function($http,RoiList){
		var self = this;
		
		$http.get('/getname').then(function pass(response){
			console.log('PASS');
			self.datas = response.data;
			
		},function fail(reponse){
			self.datas = RoiList.getList();
		});
	}]
});
})();