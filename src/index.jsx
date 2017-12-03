import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

const renderApp = () => render(
  <AppContainer><div>app</div></AppContainer>,
  document.getElementById('app')
);

renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
