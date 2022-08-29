import { Link } from 'react-router-dom';
import '../App.css';
import daco from '../img/team.jpg';

export function Modal3() {
  return (
    <div className="modal-content modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
                {/* <!-- Project details--> */}
                <h2 className="text-uppercase">myDACO App</h2>
                <p className="item-intro text-muted">Research project at Georgia Tech, 2022</p>
                <img className="d-block mx-auto" width="350" height="300" src={ daco } alt="..." />
                <h3 className="h4 mb-4 mt-5">Client</h3>
                <p>The 75th Ranger Regiment of the US Army</p>
                <h3 className="h4 mb-4 mt-5">Introduction</h3>
                <p>The DACO, short for Departure Airfield Control Officer, is responsible for organizing who and what goes on each aircraft, and when they depart. An important part of the DACO’s job is to calculate a bump plan in the event that one of the scheduled aircrafts cannot take off for whatever reason. The bump plan should send personnel and equipment to functional aircraft so that everyone can arrive at their destination as close to their planned time as possible.</p>
                <h3 className="h4 mb-4 mt-5">Responsibilities</h3>
                <ul className="list-inline-item">
                  <li>
                    Working in a team of 4 to build an Android mobile app.
                  </li>
                  <li>
                    I'm mainly working as a back-end teammate who is in charge of creating an algorithm that is able to generate a “bump plan”, which redistributes displaced personnel and cargo to other flights in order to ensure that each ends up in its correct destination.
                  </li>
                  <li>
                    Programming language used: Java.
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn btn-success btn-l text-uppercase mt-3" type="button">
                    Close Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}