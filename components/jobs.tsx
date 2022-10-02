import { useState } from "react";

const Jobs = () => {
  const [podcasts, setPodcasts] = useState([]);
  return (
    <div>
      <div id="podcasts" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Podcasts</h3>
            <p>
              Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
              vehicula enim, non aliquam risus.
            </p>
          </div>

          <div className="gallery-menu row">
            <div className="col-md-12">
              <div className="button-group filter-button-group text-center">
                <button className="active" data-filter="*">
                  All
                </button>
                <button data-filter=".gal_a">Web Development</button>
                <button data-filter=".gal_b">Creative Design</button>
                <button data-filter=".gal_c">Graphic Design</button>
              </div>
            </div>
          </div>

          <div className="gallery-list row">
            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_b">
              <div className="gallery-single fix">
                <img
                  src="uploads/gallery_img-01.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">podcast name</div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_b">
              <div className="gallery-single fix">
                <img
                  src="uploads/gallery_img-02.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">bordcast name</div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_c">
              <div className="gallery-single fix">
                <img
                  src="uploads/gallery_img-03.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">bordcast name</div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 gallery-grid gal_b gal_a">
              <div className="gallery-single fix">
                <img
                  src="uploads/gallery_img-04.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">bordcast name</div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 gallery-grid gal_a gal_c">
              <div className="gallery-single fix">
                <img
                  src="uploads/gallery_img-05.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">bordcast name</div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 gallery-grid gal_c gal_a">
              <div className="gallery-single fix relative">
                <img
                  src="uploads/gallery_img-06.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="title-s">title</div>
                <div className="name-s">bordcast name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
