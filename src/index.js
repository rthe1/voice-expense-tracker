import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="5bf9e5a6-e623-4a86-aada-e804e1edba19" language="en-US">
    <Provider>
      <App />
    </Provider>,
  </SpeechProvider>

  , document.getElementById('root'));