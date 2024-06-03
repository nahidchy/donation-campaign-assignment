import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Utility/LocalStorage";
const DonationDetails = () => {
   
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
   const donation = donations.find(donation => donation.id === idInt);
   const notify = () => toast("Donation successful");
   const handleDonation =()=>{
    notify();
    saveDonation(idInt)
   }
    return (
        <div className="space-y-5 py-5">
            <img className="w-full lg:h-[650px] object-cover rounded" src={donation.category_img} alt="" />
            <button onClick={handleDonation} className="relative bottom-20 left-5 lg:bottom-24 lg:left-16 bg-red-500 p-3 rounded text-white font-semibold">Donate $150</button>
            <h3 className="text-2xl font-bold">{donation.category_title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate facere, saepe corrupti vel id excepturi sapiente doloribus iusto impedit quaerat in nisi eligendi quod facilis illo. Velit expedita ipsa autem vel, iste illum accusamus architecto, reprehenderit quo et quidem eligendi? Quibusdam laboriosam accusamus molestias doloribus, velit reprehenderit laudantium ad vitae quaerat consequuntur nostrum, excepturi non at delectus cumque explicabo praesentium quis facilis quasi animi. Voluptatibus aperiam amet eos iste quam recusandae ullam repellat rerum iure et sunt qui rem, temporibus ratione perspiciatis, atque magnam architecto est quae illo. Cum, sequi quas deserunt non pariatur provident quis tenetur fuga iusto assumenda iure eveniet. Soluta, minus. Iusto deserunt, fugiat nam autem omnis ipsum minima eligendi cumque, dicta sequi dolores animi recusandae vitae, adipisci illo tenetur maxime rem vel error iste fuga neque asperiores? Exercitationem fugiat amet dicta ipsa ducimus provident animi, architecto pariatur iusto, voluptates itaque nobis sunt ratione! Labore animi eligendi illum nihil.</p>
            <ToastContainer/>
        </div>
    );
};

export default DonationDetails;