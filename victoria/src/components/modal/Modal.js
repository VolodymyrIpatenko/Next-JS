import React from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';

export default function Modal() {
  return (
    <Backdrop>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <p>Дякуємо!В найближчий час ми з вами зв'яжемося.</p>
      </div>
    </Backdrop>
  );
}
