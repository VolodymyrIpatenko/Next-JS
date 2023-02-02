import Link from 'next/link';
import { navigation, socialsList } from '../common/common.js';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import MobileMenuComponent from '../mobileMenu/Mobile.Menu.js';
import { useRouter } from 'next/router';
import {
  Header,
  SocialsContainer,
  NavList,
  Wrap,
  Icon,
} from './Header.styled.js';

const HeaderComponent = () => {
  // const { pathname } = useRouter;

  return (
    <>
      <Header>
        <Wrap>
          <Link href="/" title="На головну">
            <Image src="/logo.jpg" width="70" height="30" alt="Логотип" />
          </Link>
          <nav>
            <NavList>
              {navigation.map(({ id, title, path }) => (
                <li key={id}>
                  <Link href={path} className={styles.link}>
                    {title}
                  </Link>
                </li>
              ))}
            </NavList>
          </nav>
          <SocialsContainer>
            {socialsList.map(({ id, path, component }) => (
              <li key={id}>
                <Link href={path} passHref legacyBehavior>
                  <Icon target="_blank">{component}</Icon>
                </Link>
              </li>
            ))}
          </SocialsContainer>
        </Wrap>
      </Header>
      <MobileMenuComponent />
    </>
  );
};

export default HeaderComponent;
