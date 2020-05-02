import React from 'react';
import { withRouter } from 'react-router-dom';
// eslint-disable-next-line max-len
import GroupIndexContainer from '../group/group_index_container';

const Splash = () => {
  return (
    <div>

      <main className="splash">
        <video
          autoPlay
          loop
          className="splash-video"
          >
          <source
            src="https://www.meetup.com/mu_static/en-US/dddafbfe4574fc19c6718950691dcb78.mp4"
            type="video/mp4"
          />
        </video>
        
            <div className="splash-black-div">
            </div>
            <section className="splash-section">
              <h1>What do you love?</h1>
              <h3>Do more of it with Meetups</h3>
            </section>
      </main>
      <div>
              <GroupIndexContainer />
      </div>
    </div>
  );
};

export default withRouter(Splash);
