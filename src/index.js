import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { GlobalStyles, theme } from 'styles';
import { store, persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/react_node_fs70_DmytroKarpenko88">
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </PersistGate>
  </Provider>
  //    </React.StrictMode>
);
