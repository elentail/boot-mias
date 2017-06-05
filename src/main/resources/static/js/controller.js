/**
 * 
 */
'use strict';
var rkapp = angular.module('rkapp',[]);


rkapp.
factory('RoiList',function(){
	var memfunc = {};
	var memList = ['RK','SUB','JM'];
	memfunc.getList = function(){
		return memList;
	}
	return memfunc;
});

rkapp.
component('rkList',{
	templateUrl : 'angular/list.template',
	controller : ['$http','RoiList',function($http,RoiList){
		var self = this;
		self.datas = RoiList.getList();
	}]
});