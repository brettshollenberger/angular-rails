angular
  .module('ngRails')
  .controller('CurriculaIndexCtrl', ['$scope', 'Curriculum',
  function($scope, Curriculum) {

    $scope.curricula = [];

    $scope.curriculum = Curriculum.find(2).then(function() {
      $scope.curriculum3 = Curriculum.find(3);

      $scope.curricula.push($scope.curriculum);
      $scope.curricula.push($scope.curriculum3);
    });

  }]);
