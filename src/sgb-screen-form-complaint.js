'use strict';

angular.module('sgb-screen-form-complaint', ['megazord'])

  .controller('sgb-screen-form-complaint-controller',
              ['_router', '_screen', '_screenParams','$stateParams', '$scope', 'lodash',
              function(_router, _screen, _screenParams, $stateParams, $scope, _){
   			  _screen.initialize($scope, _screenParams);

  }]); 

