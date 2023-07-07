import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

const CharacterList = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((resp) => resp.json())
      .then((data) => setChars(data.results))
      .catch((error) => console.log(error));
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className='fullscreen-container'>
      <h1 className='title'>Star Wars Characters</h1>
      <div class='swiper-container'>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className='swiper-wrapper'
        >
          {chars.map((char) => (
            <SwiperSlide key={char.name} className='swiper-slide'>
              <div className='slide-content'>
                <h2>
                  <span class='highlight-container'>
                    <span class='highlight'>{char.name}</span>
                  </span>
                </h2>
                <div class='p'>
                  <p>
                    <span className='label'>Birth year:</span>{' '}
                    <span className='result'>{char.birth_year}</span>
                  </p>
                  <p>
                    <span className='label'>Eye color:</span>{' '}
                    <span className='result'>{char.eye_color}</span>
                  </p>
                  <p>
                    <span className='label'>Gender:</span>{' '}
                    <span className='result'>{char.gender}</span>
                  </p>
                  <p>
                    <span className='label'>Hair color:</span>{' '}
                    <span className='result'>{char.hair_color}</span>
                  </p>
                  <p>
                    <span className='label'>Height:</span>{' '}
                    <span className='result'>{char.height}</span>
                  </p>
                  <p>
                    <span className='label'>Mass:</span>{' '}
                    <span className='result'>{char.mass}</span>
                  </p>
                  <p>
                    <span className='label'>Skin color:</span>{' '}
                    <span className='result'>{char.skin_color}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CharacterList;
