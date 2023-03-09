import pagebanner from "../../image/page-banner.jpg";
import team1 from "../../image/team-1.png";
import team2 from "../../image/team-2.png";
import team3 from "../../image/team-3.png";
import team4 from "../../image/team-4.png";
export default function Team() {
    const user = true;
    return (
        <>

            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Team </span> </span>
            </div>

            <div className="p-3">
              <div className="content w-10">
                <div className="p-2">

                    <div className="text-center fs-4 fw-1 pb-1">
                        Our Creative Team
                    </div>
                    <div className="d-flex j-c-c pb-1">
                        <div className="w-4 text-center">
                            labore dolore magnam aliquam quaerat voluptatem ad minima veniam, quis nostrum exercitationem
                        </div>
                    </div>

                    <div className="d-fix-flex j-c-a-l wrap-flex">
                      <img src={team1} className="p-3"/>
                      <img src={team2} className="p-3"/>
                      <img src={team3} className="p-3"/>
                      <img src={team4} className="p-3"/>
                    </div>

                </div>
              </div>
            </div>
        </>
    )
};