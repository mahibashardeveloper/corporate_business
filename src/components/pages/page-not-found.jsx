import pagebanner from "../../image/page-banner.jpg";

export default function PageNotFound() {
    const user = true;
    return (
        <>

            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Page Not Found </span> </span>
            </div>

            <div className="p-3">
              <div className="w-10">
                <div className="text-center f-404 text-blue fw-1 pb-1">
                  404
                </div>
                  <div className="text-center fs-4 fw-1 pb-1">
                      OPPS! PAGE NOT BE FOUND
                  </div>
                  <div className="d-flex j-c-c pb-2">
                  <div className="text-center w-5">
                      Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.
                  </div>
                  </div>
                  <div className="d-flex j-c-c pb-2">
                      <div className="w-5 form-cover">
                          <input type="text" name="" className="form-width-square" placeholder="Search Keyword"/>
                          <button type="submit" name="" className="form-btn-square"> <i className="fas fa-search"></i> </button>
                      </div>
                  </div>
                  <div className="d-flex j-c-c pb-2">
                      <a className="form-btn" href="">Back To Home Page</a>
                  </div>
              </div>
            </div>
        </>
    )
};