import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line.
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //Fake HTML document.
global.window = global.document.defaultView;
const $ = jquery(global.window);// This is to prevent jquery from reaching out to the DOM.
                                // The $ (jquery) will only ever now reach out to the fake instance
                                // of the DOM (global.window).


// build 'renderComponent' to render a given react class.
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); //Produces HTML and wrapped in jquery.

}

// Build helper for simulating events.
$.fn.simulate = function(eventName, value) { //This ($.fn.method) creates a method in jquery.
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]); //'this' is a reference to the element that was selected eg $('div')
}
// Set up chai-jquery.
chaiJquery(chai, chai.util, $);

export  { renderComponent, expect }
