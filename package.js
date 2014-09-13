Package.describe({
    summary: "Meteor sign up and sign in templates core package.",
    version: "1.0.0",
    name: "splendido:accounts-templates-core",
    git: "https://github.com/splendido/accounts-templates-core.git",
});

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.1");

    api.use([
        'check',
        'accounts-base',
        'underscore',
        'iron:router@0.9.3',
        'softwarerero:accounts-t9n@0.0.19',
    ], ['client', 'server']);

    api.use([
        //'minimongo',
        //'mongo-livedata',
        'blaze',
        'reactive-dict',
        'sha',
    ], 'client');

    api.imply([
        'softwarerero:accounts-t9n@0.0.19',
        'iron:router@0.9.3',
    ], ['client', 'server']);

    api.imply([
        'templating',
    ], ['client']);

    api.add_files([
        'lib/core.js',
        'lib/server.js',
        'lib/methods.js',
    ], ['server']);

    api.add_files([
        'lib/utils.js',
        'lib/core.js',
        'lib/field.js',
        'lib/client.js',
        'lib/at_error.js',
        'lib/at_form.js',
        'lib/at_input.js',
        'lib/at_oauth.js',
        'lib/at_pwd_form.js',
        'lib/at_pwd_form_btn.js',
        'lib/at_pwd_link.js',
        'lib/at_result.js',
        'lib/at_signin_link.js',
        'lib/at_signup_link.js',
        'lib/at_social.js',
        'lib/at_terms_link.js',
        'lib/at_title.js',
        'lib/methods.js',
    ], ['client']);

    api.export([
        'AccountsTemplates',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use('splendido:accounts-templates-core');
    api.use([
        //'softwarerero:accounts-t9n@0.0.17',
        //'iron:router@0.9.3',
    ], ['client', 'server']);
    api.use([
        //'tinytest',
        //'test-helpers',
    ], ['client', 'server']);

    api.add_files([
        'tests/accounts-templates-core_tests.js',
    ], ['client', 'server']);
});
