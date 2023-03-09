import pagebanner from '../../image/page-banner.jpg';
import blogimage1 from '../../image/blog-1.jpg';
import blogimage2 from '../../image/blog-2.jpg';
import blogimage3 from '../../image/blog-3.jpg';
import blogimage4 from '../../image/blog-4.jpg';

export default function Blog() {
  const user = true;
    return (
      <>
<div className="img-position">
  <img src={pagebanner} className="img-fluid"/>
  <span className="text-control fs-5 text-white"> <span className="m-1"> Home </span> / <span className="m-1"> Blog </span> </span>
</div>

<div className="content w-10">
  <div className="d-flex ml-2 mr-2 p-3">
    <div className="w-3">
      <form action="" method="POST">
        <div className="fs-5 pb-1 bot-down">Search</div>
        <div className="pt-1 pb-1">
          <div className="form-cover">
            <input type="text" name="" className="form-width-square" placeholder="Search Keyword"/>
          <button type="submit" name="" className="form-btn-square"> <i className="fas fa-search"></i> </button>
        </div>
        </div>
      </form>
    <div className="fs-5 pt-1 pb-1 bot-down">Category</div>
      <a href="#" className="d-block blog-link pt-1 pb-1">Ant Control <span className="">( 20 )</span> </a>
      <a href="#" className="d-block blog-link pb-1">Cock Roach <span className="">( 18 )</span> </a>
      <a href="#" className="d-block blog-link pb-1">Mocquito Control <span className="">( 40 )</span> </a>
      <a href="#" className="d-block blog-link pb-1">Insect Control <span className="">( 30 )</span> </a>
      <a href="#" className="d-block blog-link pb-1">Termite Control <span className="">( 66 )</span> </a>
      <a href="#" className="d-block blog-link pb-1">Rodent Control <span className="">( 66 )</span> </a>
    <div className="fs-5 pt-1 pb-1 bot-down">Recent Post</div>

  <div className="w-10 d-flex">
    <div className="w-4 p-1">
      <img src={blogimage1} className="img-fluid"/>
        </div>
          <div className="w-6 p-1">
        <p className="pb-1">February 13, 2018</p>
      <a href="#" className="blog-link">Diffrent title gose This is demo</a>
    </div>
  </div>

  <div className="w-10 d-flex">
    <div className="w-4 p-1">
      <img src={blogimage2} className="img-fluid"/>
        </div>
          <div className="w-6 p-1">
        <p className="pb-1">February 13, 2018</p>
      <a href="#" className="blog-link">Diffrent title gose This is demo</a>
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
  <div className="w-9">

  <div className="w-10 d-flex">
    <div className="w-5 p-2">
      <img src={blogimage1} className="img-fluid"/>
        <div className="fs-4 pt-1">Beneficial strategies</div>
      <p className="pt-1 pb-1">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean he Internet tend to a chunks as necessary with some of themoment</p>
    <a href="#" className="decoration-none text-blue">25 October, 2019</a>
  </div>
  <div className="w-5 p-2">
    <img src={blogimage2} className="img-fluid"/>
      <div className="fs-4 pt-1">Themoment necessary</div>
        <p className="pt-1 pb-1">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean he Internet tend to a chunks as necessary with some of themoment</p>
      <a href="#" className="decoration-none text-blue">25 October, 2019</a>
    </div>
  </div>
  <div className="w-10 d-flex">
    <div className="w-5 p-2">
      <img src={blogimage3} className="img-fluid"/>
        <div className="fs-4 pt-1">Occasionallyght ocean</div>
      <p className="pt-1 pb-1">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean he Internet tend to a chunks as necessary with some of themoment</p>
    <a href="#" className="decoration-none text-blue">25 October, 2019</a>
  </div>
  <div className="w-5 p-2">
    <img src={blogimage4} className="img-fluid"/>
      <div className="fs-4 pt-1">Internet themoment</div>
        <p className="pt-1 pb-1">Ideas es to obtain pain of itself, because it is pain, but because occasionallyght ocean he Internet tend to a chunks as necessary with some of themoment</p>
      <a href="#" className="decoration-none text-blue">25 October, 2019</a>
    </div>
  </div>

<div className="w-10 text-center pt-3 pb-3">
  <a href="#" className="pagination-btn m-0">
    <button className="page-link b-r-1"> <i className="fas fa-angle-left"></i> </button>
  </a>
  <a href="#" className="pagination-btn m-0">
    <button className="page-link b-r-1">1</button>
  </a>
  <a href="#" className="pagination-btn m-0">
    <button className="page-link b-r-1">2</button>
  </a>
  <a href="#" className="pagination-btn m-0">
    <button className="page-link b-r-1">3</button>
  </a>
  <a href="#" className="pagination-btn m-0">
    <button className="page-link b-r-1"> <i className="fas fa-angle-right"></i> </button>
  </a>
</div>

    </div>
  </div>
</div>

    </>
  )
};