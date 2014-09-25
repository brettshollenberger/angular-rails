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

    Curriculum.api.configure(function(config) {
      config.resource = 'curriculum';
    });

    // Curriculum.validates({
    //   zip_code: { integer: { ignore: /\-/g } }
    // });

    function Curriculum() {
      this.string('name');
    }

    return Curriculum;

  }]);
