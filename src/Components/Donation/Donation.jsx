import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocalStorage";
import AllDonation from "../AllDonation/AllDonation";

const Donation = () => {
    const donations = useLoaderData();
    const [allDonations,setAllDonations] = useState([]);
    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length > 0){
            const donated = donations.filter(donation=>storedDonationIds.includes(donation.id));
            setAllDonations(donated);
        }
    },[donations])
    return (
       <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
            {
                allDonations.map(allDonation=><AllDonation key={allDonation.id} allDonation={allDonation}></AllDonation>)
                }
        </div>
        <div className="flex justify-center items-center ">
            {
                
                    allDonations.length === 0 && <div className=" text-xl lg:text-4xl font-bold"><h2 >You have not  donated any items</h2></div>
                  
            }
        </div>
        </div>
    );
};

export default Donation;