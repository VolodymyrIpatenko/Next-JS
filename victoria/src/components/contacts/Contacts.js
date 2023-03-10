import { React, useState } from 'react';
import Modal from '../modal/Modal.js';
import emailjs from 'emailjs-com';
import validator from 'validator';
import { useInput, useToggle } from '../customHooks/CustomHooks';

import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
  FormWrapper,
} from './Contacts.styled';

const Contacts = () => {
  const [name, setName] = useInput('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useInput('');
  const [phone, setPhoneNumber] = useState('');
  const [isModalOpen, setModalOpen] = useToggle(false);

  const values =
    name === '' ||
    email === '' ||
    phone === '' ||
    message === '' ||
    email !== 'Valid Email :)';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  const validatePhoneNumber = e => {
    const phone = e.currentTarget.value;
    if (!Number(phone)) {
      setPhoneNumber((e.currentTarget.value = ''));
      alert('Введіть номер');
    } else {
      setPhoneNumber(e.currentTarget.value);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_08bxowc',
        'template_wzku9hr',
        e.target,
        '3SDHZ_wnfkYeO2bfX'
      )
      .then(
        result => {
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <FormWrapper>
        <MyForm onSubmit={sendEmail}>
          <h1>Напишіть нам</h1>
          <LabelText>
            <p>Ім&apos;я</p>
            <Input
              type="text"
              placeholder="Ваше ім'я"
              onChange={setName}
              name="name"
            />
          </LabelText>
          <LabelText>
            <p>Пошта</p>
            <Input
              type="email"
              placeholder="Ваша пошта"
              onChange={validateEmail}
              name="email"
            />
            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {email}
            </p>
          </LabelText>
          <LabelText>
            <span>Телефон</span>
            <Input
              type="tel"
              placeholder="Ваш номер телефону"
              name="phone"
              value={phone}
              maxLength="12"
              onChange={validatePhoneNumber}
            />
          </LabelText>
          <LabelText>
            <p>Повідомлення</p>
            <Textarea
              placeholder="Напишіть своє повідомлення"
              onChange={setMessage}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={() => setModalOpen.onToggle()}
          >
            {values ? 'Заповніть поля' : 'Відправити'}
          </ButtonSubmit>
          {isModalOpen ? <Modal /> : null}
        </MyForm>
      </FormWrapper>
    </>
  );
};

export default Contacts;
