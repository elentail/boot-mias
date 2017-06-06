/**
 * 
 */
(function(){
'use strict';
angular.module('rk.mias').
factory('RoiList',function(){
	var memfunc = {};
	var memList = ['RK','SUB','JM'];
	memfunc.getList = function(){
		return memList;
	}
	return memfunc;
});
})();