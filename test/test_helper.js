import jsdom from 'jsdom';
import jquery from 'jquery'; //_


// Set up testing environment to run like a browser in the command line.
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);// This is to prevent jquery from reaching out to the DOM.

// build 'renderComponent' to render a given react class.


// Build helper for simulating events.


// Set up chai-jquery.
