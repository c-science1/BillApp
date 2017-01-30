jest.dontMock('../PayBill'); 

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

'use strict';
import PayBill from '../PayBill';

describe('PayBill Component', () => {

	var PayBillComponent;

	beforeEach(function() {
		// Render into document
		PayBillComponent = TestUtils.renderIntoDocument(<PayBill />);
  	});

	it('should exist', function() {
	   	expect(TestUtils.isCompositeComponent(PayBillComponent)).toBeTruthy();
	 });

	afterEach(function() {

  	});
});