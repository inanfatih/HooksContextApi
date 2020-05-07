import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <ThemeContext.Consumer>
          {/* ContextAPI i bu sekilde kullaninca bunu functional component ta da kullanabiliyoruz. */}
          {(themeContext) => {
            const { isAuthenticated, toggleAuth } = authContext;
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};
export default Navbar;
