import React, {Component, Fragment} from 'react';
//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Highlights from '../../components/Highlights';
import ConsumerExperience from '../../components/ConsumerExperience';
import LearnMore from '../../components/LearnMore';

class Home extends Component {
  closeModal = () => {};
  render() {
      return (
        <Fragment>
          <Header />
          <Highlights />
          <ConsumerExperience />
          <LearnMore />
          <Footer />
      </Fragment>
    )
      }
  }

export default Home;
