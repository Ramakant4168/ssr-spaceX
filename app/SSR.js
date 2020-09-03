import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import template from './template';
import App from './components/App';

export default function render(req, res) {
  const appString = renderToStaticMarkup(<App />);
  res.send(template({
    body: appString,
    title: 'SpaceX Mission Programs',
  }));
}
