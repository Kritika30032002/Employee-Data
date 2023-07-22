import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container ">
        <div className="card row">
          <div className="card-title m-3">
            <h2>Employee Detail</h2>
          </div>

          {empdata && (
            <div
              className="m-4 border border-secondary"
              style={{ textAlign: "left" }}
            >
              <h2 className="mt-4">
                The Employee name is : <b>{empdata.name}</b> (Id:{empdata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {empdata.email}</h5>
              <h5>Phone is : {empdata.phone}</h5>
              <Link className="btn btn-danger mb-4" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
