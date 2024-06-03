import { useLoaderData, useParams } from "react-router-dom";

const MyDonationDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
   const myDonation = donations.find(donation => donation.id === idInt);
    console.log(myDonation)

    return (
        <div className="flex flex-col justify-center items-center space-y-5 py-40">
            <img src={myDonation.category_img} alt="" />
            <h4 className="text-xl font-bold">{myDonation.category_title}</h4>
        </div>
    );
};

export default MyDonationDetails;