import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

export default function Backdrop({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.backdrop}>{children}</div>,
    document.getElementById('portal')
  );
}
