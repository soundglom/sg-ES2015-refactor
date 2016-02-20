import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from 'components/todos/todo.factory';
import todosController from 'components/todos/todos.controller';

const app = angular.module('app', [
  uiRouter, 
  todoFactory.name
]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('todos', {
    url: '/',
    template: require('components/todos/todos.html'),
    controller: todosController
  })
  .state('about', {
    url: '/about',
    template: require('components/about/about.html')
  });

  $locationProvider.html5Mode(true);
});

export default app;
