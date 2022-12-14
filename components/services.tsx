import Link from "next/link";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { AppProps, Job } from "../types";
const Services = ({ departments }: any) => {
  return (
    <div>
      <div id="careers" className="section lb">
        <div className="container">
          <div className="section-title text-center mt-10">
            <h3>Careers</h3>
            <p>
            We&apos;re always on the lookout for new talent. We would love to receive your application for our open positions.
            </p>
          </div>

          <div className="row">
            {departments.map((department :any) => (
              <Link
                href={`/department/${department.title}`}
                key={department._id}
              >
                <div className="col-md-4 cursor-pointer">
                  <div className="services-inner-box">
                    <div className="ser-icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h2>{department.title}</h2>
                    <span className="icon-p">
                      <BiPlusMedical />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
