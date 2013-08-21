;(function() {
	'use strict';
	poc.controller( 'menuController', [ '$scope', '$compile', '$rootScope', 'menuService', function( $scope, $compile, $rootScope, menuService ){

		var classes = ['icon-key', 'icon-user', 'icon-bubbles', 'icon-airplane', 'icon-book-alt2', 'icon-microphone', 'icon-headphones'];

		var init = function( initalView ) {
			menuService.setItems( $scope.menuItems );
			$rootScope.$broadcast( 'updateSubItems', initalView );
		};

		var generateSubItem = function( total, imgSrc ){
			var items = [],
				rand;
			for( var i = 0; i < total; i++ ){
				rand = Math.floor(Math.random() * (classes.length - 0)) + 0;
				items.push( { img: imgSrc, name: 'sub'+(i+1), id: i, 'class': classes[ rand ]} );
			}
			return items;
		};

		$scope.menuItems = [
			{
				title: 'menu 1',
				items: generateSubItem( 7, '')
			},
			{
				title: 'menu 2',
				items: generateSubItem( 4, '')
			},
			{
				title: 'menu 3',
				items: generateSubItem( 10, '')
			}
		];

		


		$scope.changeMenu = function( item ) {
			//$compile( angular.element( document.querySelector( '.content' ) ), $scope );
			$rootScope.$broadcast( 'updateSubItems', item );
		};

		$rootScope.$on( 'updateItem', function( msg, data ){
			console.log(data);
		});

		//TODO: move the 'init' function into the resolved promise for the menuItems
		return init( $scope.menuItems[0] );

	}]);


})();