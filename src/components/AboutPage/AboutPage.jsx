import React from "react";
import "./AboutPage.css";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
      <div>
        <div className="container">
          <p className="about-page">
            <figure className="cathy">
              <img
                className="cathy"
                src="/images/cathy.png"
                width={150}
                height={200}
              />
              <figcaption>Cathy Paper</figcaption>
            </figure>
            Unsure where to go to meet new people and make new quality
            connections to grow your career, your community, or your sales
            results? Paper’s List, think Yelp for events, is a crowd-sourced
            collection of upcoming professional events that I've personally
            curated to give you more confidence in your search for the best
            return-on-networking . <br></br>A bit of history: Fifteen years ago,
            when I was building my business and started networking, I went to
            more than 100 plus events without any plan or insights into what
            would be a 'worthwhile' event. After eventually building a powerful
            community through time-intensive trial and error and a lot of phony
            conversations, I want to share my experiences with you and built a
            list of networking events to save you time and make you money and
            connections to build an ALLSTAR network. <br></br>I hope Paper’s
            List works for you, and you will add your comments or submit your
            events and upcoming dates to be added to Paper's List. If I’ve left
            out a good event or I don’t know where to park at an event (because
            who doesn’t love a good parking spot?!), please share your insights.
            <br></br>Happy Connecting!
          </p>
        </div>
      </div>
      <div className="contact-box">
        <h2>This website created at Prime Academy by:</h2>
      </div>
      <div className="pictures">
        <img src="/images/Josh.jpg" width={150} height={200} />
        <img
          className="christian"
          src="/images/Christian.jpg"
          width={150}
          height={200}
        />
        <img src="/images/Evan.jpg" width={150} height={200} />
        <img src="/images/braden.jpg" width={150} height={200} />
      </div>
      <div className="linkedin">
        <img src="/images/LinkedIn.png" width={150} height={200} />
        <img
          src="/images/LinkedIn_Christian.png"
          width={150}
          height={200}
        />
        <img src="/images/LinkedIn_Evan.png" width={150} height={200} />
        <img src="/images/LinkedIn_Braden.png" width={150} height={200} />
      </div>
    </>
  );
}

export default AboutPage;
