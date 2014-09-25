angular
  .module('ngRails')
  .factory('User', ['ngActiveResource', function(ngActiveResource) {

    User.inherits(ngActiveResource.Base);

    User.hasMany('curriculum', {
      provider: 'User'
    });

    User.api.configure(function(config) {
      config.resource = 'users';
    });

    // Curriculum.validates({
    //   zip_code: { integer: { ignore: /\-/g } }
    // });

    function User() {
      this.string('first_name');
      this.string('last_name');
      this.string('email');
      this.computedProperty('full_name', function() {
      	return this.first_name + " " + this.last_name;
      }, ['first_name', 'last_name']);
    }

    User.validates({
      first_name: { required: true },
      last_name: { required: true}
    })

    return User;

  }]);
