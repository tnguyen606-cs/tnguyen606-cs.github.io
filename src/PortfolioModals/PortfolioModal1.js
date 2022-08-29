import { Link } from 'react-router-dom';
import '../App.css';
import adobe from '../img/adobe.jpg';

export function Modal1() {
  return (
    <div className="modal-fullscreen modal-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="modal-body text-center">
                {/* <!-- Project details--> */}
              <h2 className="text-uppercase">Adobe Internship</h2>
              <p className="item-intro text-muted">Summer Internship 2022</p>
              <img className="d-block mx-auto" width="250" height="350" src={ adobe } alt="..." />
              <h3 className="h4 mb-4 mt-5">Responsibilities</h3>
              <ul className="list-inline-item mb-4">
                <li>
                  Performed daily coding skills such as TypeScript/JavaScript with one general responsibility is to ensure that the users can easily interact with Marketo website's appearance. 
                </li>
                <li>
                  Produced 'clean' code to prevent possible bugs, regression, and keep the code readable for other developers.
                </li>
                <li>
                  Developed unit tests according to each implementation to tackle such scenarios against the expected feature, and cover all functionality and prevent possible issues that could have been added.
                </li>
                <li>
                  Attended to daily Scrum standup meetings and Sprint Retrospective meetings to share status updates and identify obstacles standing regarding the project. 
                </li>
              </ul>
              <Link className="col-r" to="/">
                <button className="btn btn-success btn-l text-uppercase mt-6" type="button">
                Close Project
                </button>
              </Link>
              <a href="https://tamnguyen-adobe-internship.azurewebsites.net" 
                target="_blank"
                rel="noopener"
                className="col-r">
                <button className="btn btn-primary btn-l text-uppercase mt-6" type="button">
                  Project Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}