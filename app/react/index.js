import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import Pages from './components/pages';
RWR.registerComponent('Pages', Pages);

import Page from './components/page';
RWR.registerComponent('Page', Page);