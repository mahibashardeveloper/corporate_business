import pagebanner from "../../image/page-banner.jpg";
import about1 from "../../image/about-1.png";
import icontop1 from "../../image/icon-1.png";
import icontop2 from "../../image/icon-2.png";
import icontop3 from "../../image/icon-3.png";
import icontop4 from "../../image/icon-4.png";
import testimonial from "../../image/testimonial.png";
export default function About() {
    const user = true;
    return (
        <>

            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> About </span> </span>
            </div>

            <div className="content w-10 ml-5 mr-5 d-flex j-c-a">
                <div className="w-10 d-flex a-i-c ">
                    <div className="w-5 p-3">
                        <div className="fs-3 fw-1 pt-1">
                            Provide the Best Solutions to Improve your Business
                        </div>
                        <div className="fs-5 fw-1 pt-1">
                            Create some exclusive way to solve our customer problems
                        </div>
                        <p className="pt-1">
                            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                        </p>
                        <a className="btn mt-2 mb-2" href="">Let's Go</a>
                    </div>
                    <div className="w-5 p-3">
                        <img src={about1} className="img-fluid"/>
                    </div>
                </div>
            </div>

            <div className="content ml-5 mr-5 pb-5">
                <div className="w-10 d-flex text-center j-c-a pt-3 pb-3">
                  <div className="w-5 fs-4 pt-3 fw-1">
                    Sucessfully <span className="text-blue"> completed </span> 2100+ <span className="text-blue"> projects </span> with numbers of satisfied client
                  </div>
                </div>
                <div className="w-10 d-flex j-c-a-a text-center">
                    <div className="w-2 pa-3">
                      <div className="fs-4 text-blue fw-1"> 750+ </div>
                      <div className="fs-5">Satisfied Clients</div>
                    </div>
                    <div className="w-2 pa-3">
                      <div className="fs-4 text-blue fw-1"> 950+ </div>
                      <div className="fs-5">Completed Project</div>
                    </div>
                    <div className="w-2 pa-3">
                      <div className="fs-4 text-blue fw-1"> 600+ </div>
                      <div className="fs-5">Cup Coffee</div>
                    </div>
                    <div className="w-2 pa-3">
                      <div className="fs-4 text-blue fw-1"> 95+ </div>
                      <div className="fs-5">Awareds Wining</div>
                    </div>
                  </div>
            </div>

            <div className="content w-10 d-flex j-c-a ml-5 mr-5">
                <div className="w-2 p-2">
                    <img src={icontop1}
                         className="img-hover"/>
                    <div className="fs-5 fw-2 pt-1">Creative Idea</div>
                    <div className="pt-1"> Ideas es to obtain pain of itself, because it is pain, but because
                        occasionallyght ocean
                    </div>
                </div>
                <div className="w-2 p-2">
                    <img src={icontop2}
                         className="img-hover"/>
                    <div className="fs-5 fw-2 pt-1">Creative Idea</div>
                    <div className="pt-1"> Ideas es to obtain pain of itself, because it is pain, but because
                        occasionallyght ocean
                    </div>
                </div>
                <div className="w-2 p-2">
                    <img src={icontop3}
                         className="img-hover"/>
                    <div className="fs-5 fw-2 pt-1">Creative Idea</div>
                    <div className="pt-1"> Ideas es to obtain pain of itself, because it is pain, but because
                        occasionallyght ocean
                    </div>
                </div>
                <div className="w-2 p-2">
                    <img src={icontop4}
                         className="img-hover"/>
                    <div className="fs-5 fw-2 pt-1">Creative Idea</div>
                    <div className="pt-1"> Ideas es to obtain pain of itself, because it is pain, but because
                        occasionallyght ocean
                    </div>
                </div>
            </div>

            <div className="content w-10 ml-5 mr-5 d-flex a-i-c">
                <div className="w-4 p-5">
                    <div className="fs-3 fw-3 ">What <span className="text-blue"> Client’s </span> say happy reviews</div>
                    <div className="pt-3">
                        labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis uscipit laboriosam, nisi ex ea commodi consequatur
                    </div>
                    <div className="fs-5 pt-3 fw-2 text-blue">
                        Roberto Carlox
                    </div>
                </div>
                <div className="w-6 p-5">
                    <img src={testimonial} className="img-fluid"/>
                </div>
            </div>

        </>
    )
};