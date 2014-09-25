angular
  .module('ngRails')
  .controller('CurriculaIndexCtrl', ['$scope', 'Curriculum', 'User', 'CourseMaterial',
  function($scope, Curriculum, User, CourseMaterial) {

    $scope.users = User.findAll();

    $scope.curricula = Curriculum.findAll().then(function() {
      $scope.curricula.each(function(curriculum) {
        curriculum.course_materials.findAll();
      });
    });

  }]);
