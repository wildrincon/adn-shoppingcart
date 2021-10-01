import * as React from 'react';
import { AppRouter } from 'app/AppRouter';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { Provider } from 'react-redux';
import store from 'app/core/redux/store';

// Styles
import '../assets/scss/styles.scss';

function App() {
  return (
    <GlobalErrorBoundary>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </GlobalErrorBoundary>
  );
}

export default App;
