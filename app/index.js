global.React = require('react');
global.ReactDOM = require('react-dom');

var mainContainer = document.getElementById('react-main');

var title = require('components/title');
var dropdown = require('components/dropdown');
title.apply(mainContainer, ['test']);
dropdown.apply(mainContainer, [
  [
    'choice 1',
    'choice 2',
    'choice 3',
    'choice 4',
    'choice 5'
  ]
]);
