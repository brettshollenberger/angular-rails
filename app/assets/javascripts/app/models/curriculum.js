angular
  .module('ngRails')
  .factory('Curriculum', ['ngActiveResource', function(ngActiveResource) {

    Curriculum.inherits(ngActiveResource.Base);

    Curriculum.hasMany('forks', {
      provider: 'Curriculum'
    });

    Curriculum.hasMany('course_materials');

    Curriculum.belongsTo('source', {
      provider: 'Curriculum',
      foreignKey: 'source_id'
    });

    Curriculum.belongsTo('owner', {
      provider: 'User',
      foreignKey: 'owner_id'
    })

    Curriculum.api.configure(function(config) {
      config.resource = 'curriculum';
    });

    function Curriculum() {
      this.string('name');
    }

    Curriculum.validates({
      name: { required: true }
    })

    Curriculum.prototype.$fork = function() {
      var parent_curriculum_clone = _.cloneDeep(this);
      var source_id = parent_curriculum_clone.id;

      delete parent_curriculum_clone.id;

      var child_curriculum = Curriculum.new(_.defaults({
        source_id: source_id
      }, parent_curriculum_clone));

      return child_curriculum.$save();
    }

    return Curriculum;

  }]);
