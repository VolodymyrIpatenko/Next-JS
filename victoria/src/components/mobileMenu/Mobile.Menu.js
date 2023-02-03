import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { useToggle } from '../customHooks/CustomHooks';
import { navigation, socialsList } from '../common/common';
import styles from '@/styles/Header.module.scss';
import {
  Icon,
  MobileMenu,
  NavList,
  SocialsContainer,
} from '../header/Header.styled';
import { useState } from 'react';
import Image from 'next/image';
import { Breakpoint } from 'react-socks';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useToggle(false);

  return (
    <MobileMenu>
      <Breakpoint style={{ display: 'flex', gap: '300px' }} small down>
        <Link href="/" title="На головну">
          <Image src="/logo.jpg" width="70" height="30" alt="Логотип" />
        </Link>
        <GiHamburgerMenu
          onClick={() => setMobileMenuOpen.onToggle()}
        ></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
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
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
