import { Provider } from 'react-redux';

import {
  AppThemeProvider,
  CountriesProvider,
  LanguageProvider,
  store,
} from '@/store';

import './App.css';
import { Router } from './components';

function App() {
  return (
    <CountriesProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <LanguageProvider>
            <Router />
          </LanguageProvider>
        </AppThemeProvider>
      </Provider>
    </CountriesProvider>
  );
}

export default App;
