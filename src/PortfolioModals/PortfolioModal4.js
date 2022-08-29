import { Link } from 'react-router-dom';
import '../App.css';

export function Modal4() {
  return (
    <div className="modal-dialog">
      <div className="modal-content modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
            {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Expense Tracker App</h2>
              <p className="item-intro text-muted">Self project, August 2022 - Present</p>
              <h3 className="h4 mb-4 mt-5">Introduction</h3>
              <p>A mobile application provides users a real-time expense tracking by offering valuable financial insights based on their previous spending habits. </p>
              <h3 className="h4 mb-4 mt-5">How to build this app?</h3>
              <ul className="list-inline-item">
                <li>
                    Using React.js, React Hooks for a front end, having features of adding, removing, and updating the expenses.
                </li>
                <li>
                    Design backend server in NodeJS for authentication, routing, and smooth data storage in MongoDB.
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
    </div>
  );
}