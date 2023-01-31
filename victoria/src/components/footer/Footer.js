// import { Logo } from '../header/Header.styled';
import { Footer, MailLink } from './Footer.styled';
import Image from 'next/image';
import Link from 'next/link';
// import { LogoImg } from 'components/common/Common.styled';

const PageFooter = () => {
  return (
    <Footer>
      <Link title="На головну" href="/">
        <Image src="/logo.jpg" width="70" height="50" alt="Логотип" />
      </Link>
      <MailLink href="mailto:sport_club_victoria@gmail.com">
        sport_club_victoria@gmail.com
      </MailLink>
    </Footer>
  );
};

export default PageFooter;
