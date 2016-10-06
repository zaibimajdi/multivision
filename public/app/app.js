angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(
    {
        enabled: true,
        requireBase: false
    });
    var routeRoleCheks = {
        admin:{ auth: function(mvAuth){
            return mvAuth.authorizeCurrentUserForRoute('admin');
        }}
    }

    $routeProvider.when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'});
    $routeProvider.when('/admin/users', {templateUrl: '/partials/admin/user-list', controller: 'mvUserListCtrl',
        resolve: routeRoleCheks.admin});
    $routeProvider.when('/signup', {templateUrl:'/partials/account/signup', controller: 'mvSignupCtrl'});
    $routeProvider.when('/courses', {templateUrl:'/partials/courses/course-list', controller: 'mvCourseListCtrl'});
    $routeProvider.when('/courses/:id', {templateUrl: '/partials/courses/course-details', controller: 'mvCourseDetailCtrl'});
});

angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
    })
})