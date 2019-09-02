import React from 'react';
//css
import '../../css/components/Highlights.css';
//images
import img from '../../images/newyork.jpg';
import ball from '../../images/ball.jpg';
import cars from '../../images/buildingpx.jpg';

const Highlights = () => (
  <div className="container">
      <div className="row">
          <div className="col-md-4">
              <img className="inner-img" src={img} alt="test" className="img-responsive" />
              <div className="carousel-caption">
                  <h1 className='text'>ANALYST INSIGHTS YOU NEED TO KNOW</h1>
              </div>
          </div>
          <div className="col-md-4">
              <img className="inner-img" src={ball} alt="test" className="img-responsive" />
              <div className="carousel-caption">
                  <h1 className='text'>STARTING YOUR AUTOMATION JOURNEY?</h1>
              </div>
          </div>
          <div className="col-md-4">
              <img className="inner-img" src={cars} alt="test" className="img-responsive" />
              <div className="carousel-caption">
                  <h1 className='text'>POWER 5G WITH OPEN CLOUD NETWORKS</h1>
              </div>
          </div>
      </div>
      <div>
          <div className="wrapper1">
              <header>
                  <h1 className = 'text-font'>HIGHLIGHTS</h1>
              </header>
              <section className="columns">
                  <div className="column">
                      <h2 className = 'text-font1'>Rich library of licensed premium content</h2>
                      <p className = 'text-font2'>Secure rights to premium content on favorable commercial terms, across all devices and geographies</p>
                  </div>
                  <div className="column">
                      <h2 className = 'text-font1'>Maximize premium content distribution</h2>
                      <p className = 'text-font2'>Outsource operations for performance and flexibility; scale economics via global automated platforms</p>
                  </div>
                  <div className="column">
                      <h2 className = 'text-font1'>New growth opportunities via partnerships</h2>
                      <p className = 'text-font2'>Leverage a platform that supports swift onboarding and monetization of new partners</p>
                  </div>
              </section>
          </div>
      </div>
  </div>
);

export default Highlights;
