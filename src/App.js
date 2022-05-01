import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '../node_modules/@material-ui/core/index';
import GlobalStyle from 'commons/styles/global-style';
import Main from './containers/Main'

const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
