jest.dontMock('../SkyStore'); 

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

'use strict';
import SkyStore from '../SkyStore';

describe('SkyStore Component', () => {

	var SkyStoreComponent;

	beforeEach(function() {
		// Render into document
		SkyStoreComponent = TestUtils.renderIntoDocument(<SkyStore />);
  	});

	it('should exist', function() {
	   	expect(TestUtils.isCompositeComponent(SkyStoreComponent)).toBeTruthy();
	 });

	afterEach(function() {

  	});
});