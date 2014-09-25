angular
  .module('ngRails')
  .factory('Curriculum', ['ngActiveResource', function(ngActiveResource) {

    Curriculum.inherits(ngActiveResource.Base);

    Curriculum.hasMany('forks', {
      provider: 'Curriculum'
    });

    Curriculum.belongsTo('source', {
      provider: 'Curriculum',
      foreign_key: 'source_id'
    });

    Curriculum.belongsTo('owner', {
      provider: 'User',
      foreign_key: 'owner_id'
    })

    Curriculum.api.configure(function(config) {
      config.resource = 'curriculum';
    });

    // Curriculum.validates({
    //   zip_code: { integer: { ignore: /\-/g } }
    // });

    function Curriculum() {
      this.string('name');
    }

    Curriculum.validates({
      name: { required: true },
      owner_id: { required: true}
    })

    return Curriculum;

  }]);
