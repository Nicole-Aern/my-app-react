import React from 'react';
//css
import '../../css/components/LearnMore.css';

const LearnMore = () => (
  <div className="wrapper1">
      <header>
          <h1 className = 'text-font'>LEARN MORE</h1>
      </header>
      <section className="columns">
          <div className="column">
              <h2 className = 'text-font1'>BRINGING YOUR IT IN LINE WITH YOUR BUSINESS</h2>
              <p className = 'text-font2'>Gary Miles, Amdocs’ chief marketing officer, discusses the growing divide between IT and operations, DevOps readiness and how content is changing the market</p>
          </div>
          <div className="column">
              <h2 className = 'text-font1'>5G: MONETIZE THE NEXT</h2>
              <p className = 'text-font2'>Learn more how a focus on 5G business models can help maximize your 5G monetization potential</p>
          </div>
          <div className="column">
              <h2 className = 'text-font1'>DIGITAL IDENTITY: CENTRAL TO GOING DIGITAL FOR SERVICE PROVIDERS</h2>
              <p className = 'text-font2'>Download report by TM Forum on how identity and user management can be a strategic capability that goes to the very heart of the customer relationship</p>
          </div>
      </section>
  </div>
);

export default LearnMore;
