// import libraries
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// import images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaWrench } from 'react-icons/fa';

class Cards extends Component {
  render() {
    return (
      <div className="segment">
        <ScrollAnimation animateIn="fadeIn">
          <div className="innerSegment servers__innerSegment">
            <h1 className="header">Services</h1>
            <div className="header__underline"></div>

            <div className="services__wrapper">
              <div className="services__box"  onClick={() => this.props.showPopup('Website Design')}>
                  <div className="services__iconCircle">
                    <FontAwesomeIcon icon="pencil-ruler" className="services__icon" />
                  </div>
                  <div className="services__boxTitle">WEBSITE DESIGN</div>
                  <div className="services__boxsub">We design beautiful mordern websites that match your brand aesthetics.</div>
              </div>
              <div className="services__box" onClick={() => this.props.showPopup('Website Development')}>
                  <div className="services__iconCircle">
                    <FontAwesomeIcon icon="laptop-code" className="services__icon" />
                  </div>
                  <div className="services__boxTitle">WEBSITE DEVELOPMENT</div>
                  <div className="services__boxsub">We build fast websites with state of the art functionality and user experience.</div>

              </div>
              <div className='services__box' onClick={() => this.props.showPopup('Website Maintanence')}>

                  <div className="services__iconCircle">
                    <FaWrench className="services__icon"/>
                  </div>

                  <div className="services__boxTitle">WEBSITE MAINTANENCE</div>
                  <div className="services__boxsub">We can main your website to keep it up to date in every aspect.</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      )}}

export default Cards
