import pagebanner from "../../image/page-banner.jpg";
import team1 from "../../image/team-1.png";
export default function TeamDetails() {
    const user = true;
    return (
        <>

            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Team Details </span> </span>
            </div>

            <div className="p-5">
                <div className="content w-10 d-flex">
                    <div className="w-3">
                        <div className="w-10 p-3 bg-light text-center">
                          <img src={team1}/>
                        </div>
                        <div className="w-10 p-2 bg-light mt-2">
                          <div className="fs-4">Quick Contact</div>
                          <p className="pt-1">example@gmail.com</p>
                          <p className="pt-1">0123456789</p>
                          <p className="pt-1 pb-1">
                              <a className="decoration-none text-link-blue-hover pr-1" href=""> <i className="fab fa-facebook"></i> </a>
                              <a className="decoration-none text-link-blue-hover pr-1" href=""> <i className="fab fa-twitter"></i> </a>
                              <a className="decoration-none text-link-blue-hover pr-1" href=""> <i className="fab fa-instagram"></i> </a>
                              <a className="decoration-none text-link-blue-hover pr-1" href=""> <i className="fab fa-linkedin"></i> </a>
                          </p>
                        </div>
                    </div>
                    <div className="w-9 p-1">
                        <div className="fs-5 pb-1">Marketing Specialist</div>
                        <div className="fs-4 text-blue pt-1 pb-1">Roberto Sonax</div>
                        <p className="pt-1 pb-1">Consectetur adipisicing elit. Consequuntur voluptatem perferendis voluptates repellat quas magnam officiis, atque amet temporibus ut? Eos numquam atque eaque nostrum libero quis quae distinctio quod rem qui veritatis nesciunt saepe sit repellendus expedita asperiores error assumenda, totam velit doloremque exercitationem dolor enim at!</p>
                        <div className="fs-4 pt-1 pb-1">Professional Skills</div>
                        <p className="pt-1">Graphic Design</p>
                        <div className="w-10 mt-1 bg-light">
                            <div className="progress-w-75 p-0 bg-blue skill-level-1"> <span className="percentage">75%</span></div>
                        </div>
                        <p className="pt-1">PhotoShop</p>
                        <div className="w-10 mt-1 bg-light">
                            <div className="progress-w-60 p-0 bg-blue skill-level-1"> <span className="percentage">60%</span></div>
                        </div>
                        <p className="pt-1">Web Design</p>
                        <div className="w-10 mt-1 bg-light">
                            <div className="progress-w-80 p-0 bg-blue skill-level-1"> <span className="percentage">80%</span></div>
                        </div>
                        <div className="fs-4 pt-2 pb-1">Experience & Activities</div>
                        <p className="mt-1 pb-1">
                            Velit voluptas adipisci eveniet consequuntur voluptatibus voluptate, cupiditate dolore incidunt ad non nulla tempora explicabo consequatur, aliquam laudantium porro impedit consectetur minima. <br/><br/>
                            Corporis hic quis eveniet obcaecati. Sunt aliquid perspiciatis eum vitae minima nostrum voluptas laborum. Facere numquam illo tempore esse optio ipsam odit cupiditate distinctio, facilis minus, laboriosam sit asperiores ab sapiente dolorem velit suscipit maiores placeat. Aliquid veritatis eos dolorum corporis fugiat perferendis, eum doloremque omnis consectetur adipisci.</p>
                    </div>
                </div>
            </div>
        </>
    )
};