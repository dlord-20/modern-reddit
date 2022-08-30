import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Nav from './features/nav/Nav';
import UserPosts from './features/userPosts/UserPosts';
import Footer from './features/footer/Footer';
import reportWebVitals from './reportWebVitals';
import'./index.css';
import styles from '../src/index.module.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className={styles.container}>
        <Nav />
        <UserPosts />
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
