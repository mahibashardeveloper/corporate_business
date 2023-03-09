import pagebanner from '../../image/page-banner.jpg';
import blogimage1 from '../../image/blog-1.jpg';
import blogimage2 from '../../image/blog-2.jpg';
import blogimage3 from '../../image/blog-3.jpg';
import blogimage4 from '../../image/blog-4.jpg';
import commonicon from '../../image/comment-icon.png';
export default function BlogDetails() {
    const user = true;
    return (
        <>
            <div className="img-position">
                <img src={pagebanner} className="img-fluid"/>
                <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Blog Details </span> </span>
            </div>

            <div className="p-3">
                <div className="content">
                    <div className="p-2">
                        <div className="w-10 d-flex">
                        <div className="w-9 p-1">

                            <img src={blogimage1} className="img-fluid"/>

                            <div className="fs-4 fw-1">Beneficial strategies tempora culpa possimus assumenda</div>

                            <div className="pt-1 pb-1">
                                <a href="#" className="text-blue decoration-none">25 October, 2019</a>
                            </div>

                            <p className="pt-1 pb-1">
                                Bigger ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,
                            </p>

                            <p className="pl-2 pt-1 pb-1">
                                <div className="bg-light p-1 bot-left">
                                Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.
                                </div>
                            </p>

                            <p className="pt-1 pb-1">
                                aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas odit quis dignissimos eos aspernatur voluptatum est repellat. Pariatur praesentium, corrupti deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animi temporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!
                            </p>

                            <div className="comment-w-12 p-2 bot-square">
                              <a className="btn-reply reply-btn_control" href="">Reply</a>
                                <div className="d-fix-flex">
                                  <div className="comment-w-1">
                                    <img src={commonicon}/>
                                      </div>
                                        <div className="comment-w-11 comment-w-8">
                                      <p>Erik Jhonson</p>
                                    <p>15 Dec, 2019 at 9:15pm</p>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?</p>
                                </div>
                              </div>
                            </div>

                            <div className="pl-2 pt-2">
                              <div className="comment-w-12 p-2 bot-square">
                                <a className="btn-reply reply-btn_control" href="">Reply</a>
                                  <div className="d-fix-flex">
                                    <div className="comment-w-1">
                                      <img src={commonicon}/>
                                        </div>
                                          <div className="comment-w-11 comment-w-8">
                                        <p>Erik Jhonson</p>
                                      <p>15 Dec, 2019 at 9:15pm</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-2">
                            <div className="comment-w-12 p-2 bot-square">
                              <a className="btn-reply reply-btn_control" href="">Reply</a>
                                <div className="d-fix-flex">
                                  <div className="comment-w-1">
                                    <img src={commonicon}/>
                                      </div>
                                        <div className="comment-w-11 comment-w-8">
                                      <p>Erik Jhonson</p>
                                    <p>15 Dec, 2019 at 9:15pm</p>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?</p>
                                </div>
                              </div>
                            </div>
                            </div>

                        </div>
                            <div className="w-3">
                                <form action="#" method="POST">
                                    <div className="fs-5 pb-1 bot-down">Search</div>
                                    <div className="pt-1 pb-1">
                                        <div className="form-cover">
                                            <input type="text" name="" className="form-width-square" placeholder="Search Keyword"/>
                                            <button type="submit" name="" className="form-btn-square"> <i className="fas fa-search"></i> </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="fs-5 pt-1 pb-1 bot-down">Category</div>
                                <a href="" className="d-block blog-link pt-1 pb-1">Ant Control <span className="">( 20 )</span> </a>
                                <a href="" className="d-block blog-link pb-1">Cock Roach <span className="">( 18 )</span> </a>
                                <a href="" className="d-block blog-link pb-1">Mocquito Control <span className="">( 40 )</span> </a>
                                <a href="" className="d-block blog-link pb-1">Insect Control <span className="">( 30 )</span> </a>
                                <a href="" className="d-block blog-link pb-1">Termite Control <span className="">( 66 )</span> </a>
                                <a href="" className="d-block blog-link pb-1">Rodent Control <span className="">( 66 )</span> </a>
                                <div className="fs-5 pt-1 pb-1 bot-down">Recent Post</div>

                                <div className="w-10 d-flex">
                                    <div className="w-4 p-1">
                                        <img src={blogimage1} className="img-fluid"/>
                                    </div>
                                    <div className="w-6 p-1">
                                        <p className="pb-1">February 13, 2018</p>
                                        <a href="" className="blog-link">Diffrent title gose This is demo</a>
                                    </div>
                                </div>

                                <div className="w-10 d-flex">
                                    <div className="w-4 p-1">
                                        <img src={blogimage2} className="img-fluid"/>
                                    </div>
                                    <div className="w-6 p-1">
                                        <p className="pb-1">February 13, 2018</p>
                                        <a href="" className="blog-link">Diffrent title gose This is demo</a>
                                    </div>
                                </div>

                                <div className="w-10 d-flex">
                                    <div className="w-4 p-1">
                                        <img src={blogimage3} className="img-fluid"/>
                                    </div>
                                    <div className="w-6 p-1">
                                        <p className="pb-1">February 13, 2018</p>
                                        <a href="#" className="blog-link">Diffrent title gose This is demo</a>
                                    </div>
                                </div>

                                <div className="w-10 d-flex">
                                    <div className="w-4 p-1">
                                        <img src={blogimage4} className="img-fluid"/>
                                    </div>
                                    <div className="w-6 p-1">
                                        <p className="pb-1">February 13, 2018</p>
                                        <a href="#" className="blog-link">Diffrent title gose This is demo</a>
                                    </div>
                                </div>

                                <div className="fs-5 pt-1 pb-1 bot-down">Tag</div>

                                <div className="pt-3 d-flex wrap-flex pb-3">

                                    <a href="#" className="pagination-btn bot-square m-0">
                                        <button className="page-link">Insect</button>
                                    </a>

                                    <a href="#" className="pagination-btn bot-square m-0">
                                        <button className="page-link">Control</button>
                                    </a>

                                    <a href="#" className="pagination-btn bot-square m-0">
                                        <button className="page-link">Bug</button>
                                    </a>

                                    <a href="#" className="pagination-btn bot-square m-0">
                                        <button className="page-link">Prevention</button>
                                    </a>

                                    <a href="#" className="pagination-btn bot-square m-0">
                                        <button className="page-link">Support</button>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};