import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import Pages from './components/pages';
RWR.registerComponent('Pages', Pages);

import Page from './components/page';
RWR.registerComponent('Page', Page);

import Welcome from './components/welcome';
RWR.registerComponent('Welcome', Welcome);

import Header from './components/headers/header';
RWR.registerComponent('Header', Header);

import HeaderZal from './components/headers/headerzal';
RWR.registerComponent('HeaderZal', HeaderZal);

import Footer from './components/headers/footer';
RWR.registerComponent('Footer', Footer);