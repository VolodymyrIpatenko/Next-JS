import React from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';

export default function Modal() {
  return (
    <Backdrop>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <p>Найближчим часом ми з вами зв&apos;яжемося.</p>
      </div>
    </Backdrop>
  );
}
