import logo from '../../image/logo.png';
export default function Header() {
  const user = true;
return (
  <>
<div className="h-md-none content bg-blue">
  <div className="h-w-10 h-d-flex h-a-i-c text-white">
    <div className="h-w-5 text-start">
      <span className="h-ml-5"> Contact Us: 01645820007 </span>
    </div>
  <div className="h-w-5 text-end">
    <span className="h-mr-5">
      <a className="link text-white fab fa-facebook" href=""></a>
      <a className="link text-white h-ml-1 h-mr-1 h-p-0 fab fa-twitter" href=""></a>
      <a className="link text-white h-ml-1 h-mr-1 h-p-0 fab fa-instagram" href=""></a>
      <a className="link text-white h-ml-1 h-mr-1 h-p-0 fab fa-linkedin" href=""></a>
      <a className="dropdown-link text-white h-mr-1 h-mr-1 h-p-0" href="#">English
        <span className="link-menu shadow">
          <a href="#" className="select-effect">English</a>
            <a href="#" className="select-effect">French</a>
          </span>
        </a>
      </span>
    </div>
  </div>
</div>

<div className="h-w-10 h-d-flex h-a-i-c content">
  <div className="h-w-3 h-m-d-flex h-a-i-c h-a-i-b">
    <span className="h-ml-5">
      <img src={logo} className="logo-img"/>
    </span>
    <span className="berger-menu h-d-none-lg">
      <button className="h-btn text-end fas fa-bars"></button>
      <span className="left-side-menu">
        <form action="" method="POST" className="form-action-left-sidebar">
          <span className="center-form">
            <input type="text" name="" placeholder="Search Here Anything" className="left-side-form" required/>
          <button type="submit" className="btn-form-1 fas fa-search"></button>
        </span>
        </form>
        <div className="btn-touch">
            <a href="#" className="btn-close fas fa-xmark"></a>
        </div>
        <div className="left-side-link">Home
         <div className="link-side-menu">
          <a href="#" className="menu-inner-link">Home Version 1</a>
          <a href="#" className="menu-inner-link">Home Version 2</a>
          <a href="#" className="menu-inner-link">Home Version 3</a>
         </div>
        </div>
        <a href="#" className="left-side-link">About Us</a>
        <div className="left-side-link">Services
         <div className="link-side-menu">
          <a href="#" className="menu-inner-link">Services</a>
          <a href="#" className="menu-inner-link">Services Details</a>
         </div>
        </div>
        <div className="left-side-link">Team
         <div className="link-side-menu">
          <a href="#" className="menu-inner-link">Team</a>
          <a href="#" className="menu-inner-link">Team Details</a>
         </div>
        </div>
        <div className="left-side-link">Blogs
         <div className="link-side-menu">
          <a href="#" className="menu-inner-link">Blog Left Sidebar</a>
          <a href="#" className="menu-inner-link">Blog Right Sidebar</a>
          <a href="#" className="menu-inner-link">Blog No Sidebar</a>
          <a href="#" className="menu-inner-link">Right Sidebar</a>
          <a href="#" className="menu-inner-link">Blog Details</a>
         </div>
        </div>
        <div className="left-side-link">Pages
          <div className="link-side-menu">
          <a href="#" className="menu-inner-link">Faq</a>
          <a href="#" className="menu-inner-link">404 Not Founded</a>
         </div>
        </div>
        <a href="#" className="left-side-link">Contact Us</a>
        <div className="left-side-link">
          <a href="#" className="social-media-link fab fa-facebook"></a>
          <a href="#" className="social-media-link fab fa-twitter"></a>
          <a href="#" className="social-media-link fab fa-instagram"></a>
          <a href="#" className="social-media-link fab fa-linkedin"></a>
        </div>
        <div className="left-side-link">
          Contact Us: 01645820007
        </div>
        <div className="left-side-link">
          Email Us: info@yourdomain.com
        </div>
      </span>
    </span>
  </div>
<div className="h-md-none h-w-7 text-end">
  <span className="h-mr-5">
    <a className="dropdown-link text-dark h-p-1" href="#">Home
      <span className="link-menu shadow">
        <a href="#" className="sub-link">Home Version 1</a>
        <a href="#" className="sub-link">Home Version 2</a>
      </span>
    </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> About Us </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> Services
      <span className="link-menu shadow">
        <a href="#" className="sub-link">Service</a>
        <a href="#" className="sub-link">Service Details</a>
      </span>
    </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> Team
      <span className="link-menu shadow">
        <a href="#" className="sub-link">Team</a>
        <a href="#" className="sub-link">Team Style 2</a>
        <a href="" className="sub-link">Team Details</a>
      </span>
    </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> Blogs
      <span className="link-menu shadow">
        <a href="#" className="sub-link">Blogs Left Sidebar</a>
        <a href="#" className="sub-link">Blogs Right Sidebar</a>
        <a href="#" className="sub-link">Blogs No Sidebar</a>
        <a href="#" className="sub-link">Blogs Details</a>
        <a href="" className="sub-link">Blogs Left Details Sidebar</a>
      </span>
    </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> Pages
      <span className="link-menu shadow">
        <a href="#" className="sub-link">faq</a>
        <a href="#" className="sub-link">Page Not Found</a>
      </span>
    </a>
    <a className="dropdown-link text-dark h-p-1" href="#"> Contact Us </a>
  </span>
</div>
  </div>
    </>
    )
  }
;