import pagebanner from "../../image/page-banner.jpg";

export default function Contact() {
    const user = true;
    return (
        <>

          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe id="gmap_canvas" className="frame" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

<div className="content w-10 d-flex a-i-c">
  <div className="w-5 p-5">
    <span className="pr-1 pl-1 fs-4 fw-1"> Tell Us Your Project </span>
      <form action="">
        <div className="d-flex">
          <div className="w-5 pl-1 pr-1 pt-2">
            <input type="text" name="" placeholder="Name *" className="form-width-square"/>
          </div>
          <div className="w-5 pl-1 pr-1 pt-2">
            <input type="text" name="" placeholder="Phone *" className="form-width-square"/>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-5 pl-1 pr-1 pt-2">
            <input type="text" name="" placeholder="Email *" className="form-width-square"/>
          </div>
          <div className="w-5 pl-1 pr-1 pt-2">
            <input type="text" name="" placeholder="Subject *" className="form-width-square"/>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-10 pl-1 pr-1 pt-2">
            <textarea name="" className="form-width-square height-2" cols="30" placeholder="Message *"></textarea>
          </div>
        </div>
        <div className="pl-1 pr-1 pt-2 pt-2">
          <button type="submit" name="" className="btn-square">Send Message</button>
        </div>
      </form>
    </div>
    <div className="w-5 p-5">
      <span className="pr-1 pl-1 fs-4 fw-1"> Contact Us </span>
      <p className="pr-1 pl-1 pt-1 pb-1">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
      <p className="pr-1 pl-1 pt-1 pb-1">Address No: 40 Baria Sreet 133/2 NewYork City</p>
      <p className="pr-1 pl-1 pt-1 pb-1">E-mail: info@yourdomain.com</p>
      <p className="pr-1 pl-1 pt-1 pb-1">Phone Number: +88013245657</p>
    </div>
  </div>
</>
  )
};