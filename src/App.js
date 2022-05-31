import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import pic from "./img/wobot-logo.png";
import Companydetail from "./component/CompanySize";

const App = () => {
  return (
    <>
      <div className="background">
        <div className="background-style-1"></div>
        <div className="background-style-2"></div>
        <div className="background-style-3"></div>
      </div>

      <div>
        <img src={pic} className="logo" />
      </div>

      <div className="container ">
        <div className="text-center">
          <div className="solid-line">
            <div className="rectangle-1"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
          </div>

          <div className="heading">
            <h4 className="big-heading">It's a delight to have you onboard</h4>
            <h6 className="sm-heading">Help us know you better.</h6>
            <h6 className="sm-heading pb-2">
              (This is how we optimize Wobot as per your business needs)
            </h6>
          </div>
        </div>

        <label className="form-label mt-2">Company Name</label>
        <input
          className="form-control mb-3 text-fill"
          type="text"
          placeholder="Example: Abc Pvt Ltd"
        ></input>

        <label className="form-label mt-2">Industry</label>
        <select
          className="form-select mb-3 text-fill"
          aria-label="Default select example"
        >
          <option selected>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <Companydetail />

        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Get Started
          </button>
        </div>
      </div>

      <div className="bottom">
        <h6 className="bottom-heading text-center">
          Terms of use | Privacy policy
        </h6>
      </div>
    </>
  );
};

export default App;