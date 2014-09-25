 angular
  .module('ngRails')
  .factory('CourseMaterial', ['ngActiveResource', function(ngActiveResource) {

    CourseMaterial.inherits(ngActiveResource.Base);

    CourseMaterial.belongsTo('curriculum');
    CourseMaterial.belongsTo('course_material');
    CourseMaterial.belongsTo('user');

    CourseMaterial.api.configure(function(config) {
      config.resource = 'course_materials';
    });

    function CourseMaterial() {
      this.string('name');
      this.string('filetype');
      this.string('classification');
      this.string('url');
    }

    CourseMaterial.validates({
      name: { required: true },
      filetype: { required: true, inclusion: { in: ["txt". "pdf", "md"] } },
      classification: { required: true, inclusion: { in: ["quiz", "assignment", "directory", "reading"] } }
    })

    return CourseMaterial;

  }]);
