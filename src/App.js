import { Link } from 'react-router-dom';
import { FaDesktop, FaCloudversify, FaAndroid, FaMoneyCheck } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App" id="page-top">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">Hi, I'm Tam!</a>         
          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item"><a className="navbar-brand" href="#about">About</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#portfolio">Projects</a></li>
              <li className="nav-item"><a className="navbar-brand" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">WELCOME</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <a className="btn btn-primary btn-xl" href="#about">About me</a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white font-weight-bold">ABOUT ME</h2>
              <hr className="divider" />
              <p className="text-white-85 mb-4">I'm a senior Computer Science student at Georgia Tech.</p>
              <a className="btn btn-primary btn-xl" href="#portfolio">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Projects--> */}
      <section className="page-section" id="portfolio">
      <div className="container px-4 px-lg-5">
          <h2 className="text-center font-weight-bold">PROJECTS</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><FaDesktop className="fs-1 text-primary"/></div>
                <Link to="/portfolioModal1">
                  <h3 className="h4 mb-2">Adobe Features</h3>
                </Link>
                <p className="text-muted mb-0">Implement Modals for Adobe Marketo Users using Adobe React Spectrum Components</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><FaCloudversify className="fs-1 text-primary" /></div>
                <Link to="/portfolioModal2">
                  <h3 className="h4 mb-2">Citi REST API</h3>
                </Link>
                <p className="text-muted mb-0">Expose RESTful web APIs from Citi's internal database</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><FaAndroid className="fs-1 text-primary" /></div>
                <Link to="/portfolioModal3">
                  <h3 className="h4 mb-2">DACO App</h3>
                </Link>
                <p className="text-muted mb-0">DACO Airfield Management Android Application</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><FaMoneyCheck className="fs-1 text-primary" /></div>
                <Link to="/portfolioModal4">
                  <h3 className="h4 mb-2">Expense Tracker App</h3>
                </Link>
                <p className="text-muted mb-0">An application makes sure that users adhere to spend money based on their financial projections and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Thank you--> */}
      <section className="page-section massProjects bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">THANK YOU!</h2>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <h2 className="mt-0">CONTACT</h2>
              <hr className="divider" />
              <i className="bi-envelope fs-2 mb-3 text-muted"></i>
              <div>tnguyen606@gatech.edu</div>
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (404) 883-7474</div>
              <a className="App-link"
                href="https://www.linkedin.com/in/hongtam-nguyen/"
                target="_blank"
                rel="noopener"><strong>Linkedin</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5"><div className="small text-center text-muted">&copy; 2022 tnguyen606-cs.github.io</div></div>
      </footer>
    </div>
  );
}

export default App;
