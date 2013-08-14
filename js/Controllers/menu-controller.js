;(function() {
	'use strict';
	poc.controller( 'menuController', [ '$scope', '$compile', '$rootScope', 'menuService', function( $scope, $compile, $rootScope, menuService ){

		var init = function( initalView ) {
			$rootScope.$broadcast( 'updateSubItems', initalView.items );
		};


		$scope.menuItems = [
			{
				title: 'menu 1',
				items: [
					{
						img:'',
						name: 'sub1'
					},
					{
						img:'',
						name: 'sub2'
					},
					{
						img:'',
						name: 'sub3'
					},
					{
						img:'',
						name: 'sub4'
					},
					{
						img:'',
						name: 'sub5'
					},
					{
						img:'',
						name: 'sub6'
					},
					{
						img:'',
						name: 'sub7'
					},
					{
						img:'',
						name: 'sub8'
					}
				]
			},
			{
				title: 'menu 2',
				items: [
					{
						img:'',
						name: 'sub02'
					},
					{
						img:'',
						name: 'sub023'
					},
				]
			},
			{
				title: 'menu 3',
				items: []
			}
		];


		$scope.changeMenu = function( item ) {
			//$compile( angular.element( document.querySelector( '.content' ) ), $scope );
			$rootScope.$broadcast( 'updateSubItems', item.items );
		};

		//TODO: move the 'init' function into the resolved promise for the menuItems
		return init( $scope.menuItems[0] );

	}]);


})();