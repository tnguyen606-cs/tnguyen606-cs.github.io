import { Link } from 'react-router-dom';
import '../App.css';
import citi from '../img/cachedImage.jpg';

export function Modal2() {
  return (
    <div className="modal-content modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
              {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Citi Internship</h2>
              <p className="item-intro text-muted">Summer Internship 2021</p>
              <img className="d-block mx-auto" width="350" height="300" src={ citi } alt="..." />
              <h3 className="h4 mb-4 mt-5">Responsibilities</h3>
              <ul className="list-inline-item">
                <li>
                  Built a REST API in Node.js with Lambda, API Gateway, DynamoDB, and Serverless Framework on a fleet of AWS EC2 Virtual Machines to handle mass amounts of incoming Computer Vision data and queries for said data.
                </li>
                <li>
                  Demonstrated how to expose internal APIs from CI/CD process using API Management (APIM) which were deployed inside a Virtual Network to Developer Hub to allow for utilization of the full potential of the APIs.
                </li>
                <li>
                  Follow test driven development (TDD), achieved ~80% code coverage writing with JUnit.
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