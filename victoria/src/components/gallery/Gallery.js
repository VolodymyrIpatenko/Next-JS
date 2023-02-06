import { Main } from '../home/Home.styled';
import { GalleryListColumn, GalleryListRow } from './Gallery.styled';
import Typed from 'react-typed';
import Image from 'next/image';
import first from './galleryGym/1.jpeg';
import second from './galleryGym/2.jpeg';
import third from './galleryGym/3.jpeg';
import fourth from './galleryGym/4.jpeg';
import fifth from './galleryGym/5.jpeg';
import sixth from './galleryGym/6.jpeg';
import seventh from './galleryGym/7.jpeg';
import eightth from './galleryGym/8.jpeg';
import nineth from './galleryGym/9.jpeg';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useToggle } from '../customHooks/CustomHooks';
import { Breakpoint } from 'react-socks';
import { Fragment } from 'react';
import { nanoid } from 'nanoid';

const id = nanoid();

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const photoArr = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eightth,
  nineth,
];

const Gallery = () => {
  const [column, setColumn] = useToggle(true);

  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Наші фото']}
          typeSpeed={100}
          showCursor={false}
        />
        <Breakpoint
          style={{
            display: 'flex',
            gap: '20px',
            marginLeft: 'auto',
            fontSize: '30px',
            cursor: 'pointer',
          }}
          xlarge
          up
        >
          <Fragment>
            <button
              onClick={() => setColumn.onToggle()}
              style={{
                fontSize: '30px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <FaExpandArrowsAlt title="Змінити напрям"></FaExpandArrowsAlt>
            </button>
          </Fragment>
        </Breakpoint>
        {column ? (
          <GalleryListColumn>
            {photoArr.map(photo => {
              return (
                <li key={id}>
                  <Image src={photo} alt="gym" width="400" height="600" />
                </li>
              );
            })}
          </GalleryListColumn>
        ) : (
          <GalleryListRow>
            {photoArr.map(photo => {
              return (
                <li key={id}>
                  <Image src={photo} alt="gym" width="400" height="600" />
                </li>
              );
            })}
          </GalleryListRow>
        )}
      </Main>
    </>
  );
};

export default Gallery;
