import React, { PropTypes, Component } from 'react';
import styles from './styles.scss';
import Slider from 'react-slick';
import noPictire from 'static/nopicture.png';
import { Modal } from 'react-bootstrap';
import classnames from 'classnames';

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };

  state = {
    showModal: false,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images } = this.props;
    const { showModal, selectedImg } = this.state;
    const showDots = images.length > 1;

    return (
      <div>
        <Modal show={showModal} onHide={this.closeModal} className={styles.modal}>
          <Modal.Body>
            <Slider
              initialSlide={selectedImg}
              customPaging={(i) => <a key={images[i].id}><img src={images[i].mini_url} role="presentation" /></a>}
              dots={showDots}
              infinite={false}
              dotsClass="slick-dots slick-thumb"
              slidesToShow={1}
              slidesToScroll={1}
              className={styles.slider}
            >
              {images.map((image) => <div key={image.id} className={styles.carouselImgWrapper}>
                <img src={image.large_url} role="presentation" />
              </div>)}
            </Slider>
          </Modal.Body>
        </Modal>
        {images.length > 0
          ? <Slider
            customPaging={(i) => <a key={images[i].id}><img src={images[i].mini_url} role="presentation" /></a>}
            dots={showDots}
            dotsClass="slick-dots slick-thumb"
            infinite={false}
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            className={classnames(styles.slider, { [styles.withNav]: images.length > 1 })}
          >
            {images.map((image, index) => <div key={image.id} className={styles.carouselImgWrapper}>
              <img src={image.large_url} onClick={() => this.setState({ showModal: true, selectedImg: index })} role="presentation" />
            </div>)}
          </Slider>
          : <Slider
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            className={styles.slider}
          >
            <div className={styles.carouselImgWrapper}>
              <img src={noPictire} className={styles.noPicture} role="presentation" />
            </div>
          </Slider>
        }
      </div>
    );
  }
}
