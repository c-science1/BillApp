jest.dontMock('../BillSummary');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import BillSummary from '../BillSummary';

describe('BillSummary Component', () => {

	var BillSummaryComponent;

	var AppDispatcher = require('../../dispatcher/AppDispatcher');

	var AppActions = require('../../actions/AppActions');

	var AppStore = require('../../stores/AppStore');

	//const BillSummary = require('../BillSummary');

	beforeEach(function() {
		// Render into document
		BillSummaryComponent = TestUtils.renderIntoDocument(
			<BillSummary statement="" />
		);
  	});
  	it('should exist', function() {
	   expect(TestUtils.isCompositeComponent(BillSummaryComponent)).toBeTruthy();
	 });

	afterEach(function() {

  	});

});

