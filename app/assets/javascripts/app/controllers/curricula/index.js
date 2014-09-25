angular
  .module('ngRails')
  .controller('CurriculaIndexCtrl', ['$scope', 'Curriculum', 'User',
  function($scope, Curriculum, User) {

    $scope.users = User.findAll();

    $scope.curricula = [];

    $scope.curriculum = Curriculum.find(2).then(function() {
      $scope.curriculum3 = Curriculum.find(3);

      $scope.curricula.push($scope.curriculum);
      $scope.curricula.push($scope.curriculum3);
      $scope.curriculum.name = "Poops";

      $scope.curriculum.$save();
      debugger;
    });

    

  }]);
