/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function HomePage() {
  return (
    /*
    BEM -> Bolck Element Modifier
    here  
    1. header is a Bolck
    2. header__logo-box so __logo-box is an element
    3. heading-primary--main so --main is a modifier
    */
    <div>
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />
        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>

        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a href='#' className='navigation__link'>
                <span>01</span> About Natous
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#' className='navigation__link'>
                <span>02</span> Your benfits
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#' className='navigation__link'>
                <span>03</span> Popular tours
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#' className='navigation__link'>
                <span>04</span> Stories
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#' className='navigation__link'>
                <span>05</span> Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header'>
        <div className='header__logo-box'>
          <img
            src='../assets/logo-white.png'
            alt='Logo'
            className='header__logo'
          />
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>E-commerce</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>

          <a href='#section-tours' className='btn btn--white btn--animated'>
            Find our product
          </a>
        </div>
      </div>
      <main>
        <section className='section-about'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              Exciting tours for adventurous people
            </h2>
          </div>
          <div className='row'>
            <div className='col-1-of-2'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                You're going to fall in love with nature
              </h3>
              <p className='paragraph'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                culpa eaque minus consequatur reprehenderit perferendis pariatur
                eveniet minima earum quo suscipit commodi laudantium, distinctio
                est illum repellat. Distinctio, asperiores repudiandae.
              </p>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Live adventures like you never have before
              </h3>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nam, laboriosam, deserunt cumque reiciendis libero fugit eum
                magni.
              </p>
              <a href='#' className='btn-text'>
                Learn more &rarr;
              </a>
            </div>
            <div className='col-1-of-2'>
              {/* 
              to get 3 img at one tab from emment
              .composition>(img.composition__photo.composition__photo--p1)*3 
              */}

              <div className='composition'>
                <img
                  srcSet='../assets/nat-1.jpg 300w, ../assets/nat-1-large.jpg 1000w'
                  sizes=' (max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                  alt='Ph 1'
                  className='composition__photo composition__photo--p1'
                  src='img/nat-1-large.jpg'
                />

                <img
                  srcSet='../assets/nat-2.jpg 300w, ../assets/nat-2-large.jpg 1000w'
                  sizes=' (max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                  alt='Ph 1'
                  className='composition__photo composition__photo--p2'
                  src='img/nat-2-large.jpg'
                />

                <img
                  srcSet='../assets/nat-3.jpg 300w, ../assets/nat-3-large.jpg 1000w'
                  sizes=' (max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                  alt='Ph 1'
                  className='composition__photo composition__photo--p3'
                  src='img/nat-3-large.jpg'
                />
                {/* <img
                  src='../assets/nat-1-large.jpg'
                  alt='Ph 1'
                  className='composition__photo composition__photo--p1'
                />
                <img
                  src='../assets/nat-2-large.jpg'
                  alt='Ph 2'
                  className='composition__photo composition__photo--p2'
                />
                <img
                  src='../assets/nat-3-large.jpg'
                  alt='Ph 3'
                  className='composition__photo composition__photo--p3'
                /> */}
              </div>
            </div>
          </div>
        </section>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. olor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-map'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Find your way
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section-tours' id='section-tours'>
          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>MOst popular tours</h2>
          </div>
          <div className='row'>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--1'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--1'>
                      The sea explorer
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-1'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$297</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--2'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--2'>
                      the forest hiker
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>7 day tours</li>
                      <li>up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>sleep in provided tents</li>
                      <li>difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-2'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$497</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-1-of-3'>
              <div className='card'>
                <div className='card__side card__side--front'>
                  <div className='card__picture card__picture--3'>&nbsp;</div>
                  <h4 className='card__heading'>
                    <span className='card__heading-span card__heading-span--3'>
                      the show adventurer
                    </span>
                  </h4>
                  <div className='card__details'>
                    <ul>
                      <li>5 day tours</li>
                      <li>up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className='card__side card__side--back card__side--back-3'>
                  {/*cta = call to action*/}
                  <div className='card__cta'>
                    <div className='card__price-box'>
                      <p className='card__price-only'>Only</p>
                      <p className='card__price-value'>$897</p>
                    </div>
                    <a href='#popup' className='btn btn--white'>
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn btn--green'>
              Discover all tours
            </a>
          </div>
        </section>
        <section className='section-stories'>
          <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
              <source src='../assets/video.mp4' type='video/mp4' />
              <source src='../assets/video.webm' type='video/webm' />
              Your browser is not supported!
            </video>
          </div>

          <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary'>
              We make people genuinely happy
            </h2>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src='../assets/nat-8.jpg'
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>Mary Smith</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  i had the best week ever with my family
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolor nam. Dolor nam. Dolor
                  nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='story'>
              <figure className='story__shape'>
                <img
                  src='../assets/nat-9.jpg'
                  alt='Person on a tour'
                  className='story__img'
                />
                <figcaption className='story__caption'>Jack Wilson</figcaption>
              </figure>
              <div className='story__text'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  wow! my life is completely different now
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nam. Dolor nam. Dolor nam.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolor nam. Dolor nam. Dolor
                  nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nam. Dolor nam. Dolor nam.
                </p>
              </div>
            </div>
          </div>

          <div className='u-center-text u-margin-top-huge'>
            <a href='#' className='btn-text'>
              Read all stories&rarr;
            </a>
          </div>
        </section>

        <section className='section-book'>
          <div className='row'>
            <div className='book'>
              <div className='book__form'>
                <form action='#' className='form'>
                  <div className=' u-margin-bottom-medium'>
                    <h2 className='heading-secondary'>Start booking now</h2>
                  </div>
                  <div className='form__group'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder='Full name'
                      id='name'
                      required
                    />
                    <label htmlFor='name' className='form__label'>
                      Full name
                    </label>
                  </div>
                  <div className='form__group'>
                    <input
                      type='email'
                      className='form__input'
                      placeholder='Email address'
                      id='email'
                      required
                    />
                    <label htmlFor='email' className='form__label'>
                      Email address
                    </label>
                  </div>
                  <div className='form__group u-margin-bottom-medium'>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='small'
                        name='size'
                      />
                      <label htmlFor='small' className='form__radio-label'>
                        <span className='form__radio-button'></span>
                        Small tour group
                      </label>
                    </div>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='large'
                        name='size'
                      />
                      <label htmlFor='large' className='form__radio-label'>
                        <span className='form__radio-button'></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className='form__group'>
                    <button className='btn btn--green'>Next step&rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source
              srcSet='../assets/logo-green-small-1x.png 1x, ../assets/logo-green-small-2x.png 2x'
              media='(max-width: 37.5em)'
            />
            <img
              srcSet='../assets/logo-green-1x.png 1x, ../assets/logo-green-2x.png 2x'
              alt='Full logo'
            />
          </picture>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    company
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    COntact
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    carreres
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Privacy policy
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built my{' '}
              <a href='#' className='footer__link'>
                Asif
              </a>
              for learning purpose
              <a href='#' className='footer__link'>
                Advanced css and sass.
              </a>
              . Copyright &copy; by Asif Mohammad Ashique
            </p>
          </div>
        </div>
      </footer> */}

      <div className='popup' id='popup'>
        <div className='popup__content'>
          <div className='popup__left'>
            <img
              src='../assets/nat-8.jpg'
              alt='Tour pic'
              className='popup__img'
            />
            <img
              src='../assets/nat-9.jpg'
              alt='Tour pic'
              className='popup__img'
            />
          </div>
          <div className='popup__right'>
            <a href='#section-tours' className='popup__close'>
              &times;
            </a>
            <h2 className='heading-secondary u-margin-bottom-small'>
              Start booking now
            </h2>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Important &ndash; Please read these terms before booking
            </h3>
            <p className='popup__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              commodi ducimus dolor natus voluptas omnis, illum nostrum aliquam
              accusantium unde voluptate ullam nulla iste delectus repellendus
              ut necessitatibus, quasi quisquam!Lorem Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Iste sequi hic, magnam libero,
              minus quaerat rerum, qui aspernatur culpa similique saepe
              consectetur numquam aliquid reiciendis ut sed illo officia
              nesciunt! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Eius eaque autem fuga earum maiores, totam quo sapiente unde
              dicta porro nulla vel recusandae libero aliquam! Eius facilis
              maxime voluptatem assumenda!
            </p>
            <a href='#' className='btn btn--green'>
              book now
            </a>
          </div>
        </div>
      </div>
      {/* <section className='grid-test'>
        <div className='row'>
          <div className='col-1-of-2'>Col 1 of 2</div>
          <div className='col-1-of-2'>Col 1 of 2</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
          <div className='col-1-of-3'>Col 1 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-3'> Col 1 of 3</div>
          <div className='col-2-of-3'>Col 2 of 3</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-2-of-4'>Col 2 of 4</div>
        </div>
        <div className='row'>
          <div className='col-1-of-4'>Col 1 of 4</div>
          <div className='col-3-of-4'>Col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
