import Link from 'next/link';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Header, SocialsContainer, Nav, Wrap, Icon } from './Header.styled.js';

const navigation = [
  { id: 1, title: 'Головна', path: '/' },
  { id: 2, title: 'Контакти', path: '/contacts' },
  { id: 3, title: 'Спортбар', path: '/sportbar' },
  { id: 3, title: 'Наш зал', path: '/gallery' },
];

const socialsList = [
  {
    id: 1,
    path: 'https://www.instagram.com/sport_club_victoria/',
    component: <SlSocialInstagram />,
  },
  {
    id: 2,
    path: 'https://www.facebook.com/VICTORIAclubsport/',
    component: <BsFacebook />,
  },
];

const HeaderComponent = () => {
  const { pathname } = useRouter;

  return (
    <>
      <Header>
        <Wrap>
          <Link href="/" title="На головну">
            <Image src="/logo.jpg" width="70" height="30" alt="Логотип" />
          </Link>
          <Nav>
            <ul>
              <li>
                {navigation.map(({ id, title, path }) => (
                  <Link href={path} key={id} className={styles.link}>
                    {title}
                  </Link>
                ))}
              </li>
            </ul>
          </Nav>
          <SocialsContainer>
            {socialsList.map(({ id, path, component }) => (
              <li>
                <Link key={id} href={path} passHref legacyBehavior>
                  <Icon target="_blank">{component}</Icon>
                </Link>
              </li>
            ))}
          </SocialsContainer>
        </Wrap>
      </Header>
    </>
  );
};

export default HeaderComponent;
