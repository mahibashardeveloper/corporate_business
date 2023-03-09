import pagebanner from "../../image/page-banner.jpg";
import blog from "../../image/blog-1.jpg";
export default function ServiceDetails(){
    const user = true;
    return (
        <>

            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Service Details </span> </span>
            </div>

            <div className="p-3">
                <div className="content w-10 d-flex">
                    <div className="w-3 p-2">
                        <div className="w-10 bg-light">
                          <div className="fs-4 fw-3 p-1">Services</div>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-0">Agency</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1">Banking</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1">Technology</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1">Financial</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1">Marketing</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1 pb-1">Construction</a>
                          </div>
                        <div className="w-10 bg-light mt-2">
                          <div className="fs-4 fw-3 p-1">Download Source</div>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-0">Brochures.PDF</a>
                            <a href="#" className="decoration-none d-block text-blue-hover pl-1 pt-1 pb-1">Brochures.DOC</a>
                        </div>
                        </div>
                    <div className="w-9 p-2">
                        <img src={blog} className="img-fluid"/>
                        <div className="fs-4 fw-1 pt-2">
                            Technology
                        </div>
                        <div className="pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error id ipsa atque unde quis dolore nobis eum aperiam enim blanditiis pariatur inventore eius commodi consectetur ut. Totam, assumenda! Laboriosam possimus, corporis dicta!
                        </div>
                        <div className="pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?
                        </div>
                        <div className="w-10 d-flex">
                            <div className="w-5">
                                <div className="fs-5 fw-1 pt-2">Project Analysis</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                            </div>
                            <div className="w-5">
                                <div className="fs-5 fw-1 pt-2">Project Costing</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                            </div>
                        </div>
                        <div className="w-10 d-flex">
                            <div className="w-5">
                                <div className="fs-5 fw-1 pt-2">Project Planning</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                            </div>
                            <div className="w-5">
                                <div className="fs-5 fw-1 pt-2">Project Strategy</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};