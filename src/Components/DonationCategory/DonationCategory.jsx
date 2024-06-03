import { Link } from "react-router-dom";

const DonationCategory = ({ donation }) => {
  return (
    <Link to={`donationDetail/${donation.id}`}>
      <img className="" src={donation.category_img} alt="" />
      <h4 className={`${donation.text_color}  font-medium border-black`}>{donation.category_name}</h4>
      <h2 className={`${donation.text_color}  text-2xl font-semibold`}>{donation.category_title}</h2>
    </Link>
  );
};

export default DonationCategory;
