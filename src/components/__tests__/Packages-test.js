jest.dontMock('../Packages'); 

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

'use strict';
import Packages from '../Packages';

describe('Packages Component', () => {

	var PackagesComponent;

	beforeEach(function() {
		// Render into document
		PackagesComponent = TestUtils.renderIntoDocument(<Packages />);
  	});

	it('should exist', function() {
	   	expect(TestUtils.isCompositeComponent(PackagesComponent)).toBeTruthy();
	 });

	let chev = TestUtils.findRenderedDOMComponentWithClass(PackagesComponent, 'glyphicon glyphicon-chevron-down pull-right');

	it('Clicking on the chevron should change it's state, () => {
		TestUtils.Simulate.click(chev);
		expect(chev.className)
		.toEqual('glyphicon glyphicon-chevron-up pull-right');
		});

	afterEach(function() {

  	});
});