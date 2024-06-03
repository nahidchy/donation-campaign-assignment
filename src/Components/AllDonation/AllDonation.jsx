import { Link, useLoaderData, useParams } from "react-router-dom";

const AllDonation = ({ allDonation }) => {

  return (
    <div className="card card-side bg-blue-200 shadow-x">
      <figure>
        <img src={allDonation.category_img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h5 className="text-blue-800 font-semibold bg-blue-300 w-20 p-1 rounded">
          {allDonation.category_name}
        </h5>
        <h3 className="text-xl font-bold">{allDonation.category_title}</h3>
        <div className="card-actions">
          <Link to={`/my-donation/${allDonation.id}`}>
            <button className="text-white font-semibold bg-blue-700 px-6 py-2 rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllDonation;
