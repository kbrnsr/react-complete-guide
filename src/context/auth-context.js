import { createContext } from 'react';

const AuthContext = createContext({
  authenticated: false,
  // better auto-completion from IDE
  login: () => {}
});

export default AuthContext;
