import { useEffect, useState } from "react";
import DonationCategory from "../DonationCategory/DonationCategory";

const DonationsCategory = () => {
  const [donations, setDonations] = useState([]);
  const handleSearch = () => {
    const inputText = document.getElementById("input").value;

    if (inputText) {
      const searchedData = donations.filter(
        (donation) => donation.category_name.toLowerCase().includes(inputText.toLowerCase())
      );
      setDonations(searchedData);
      
    }
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center py-10 gap-10">
        <input
          id="input"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs"
        />
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white text-xl font-semibold py-3 px-4 rounded-r-lg"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 py-20">
        {donations.map((donation) => (
          <DonationCategory key={donation.id} donation={donation} />
        ))}
      </div>
      {
        donations.length < 1 && <div className="flex justify-center items-center text-4xl font-semibold"><h2>No results found</h2></div>
      }
    </div>
  );
};

export default DonationsCategory;
