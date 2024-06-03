const getStoredDonation  =()=>{
const getDonation = localStorage.getItem("donations");
if(getDonation){
    return JSON.parse(getDonation);
}
return [];
}
const saveDonation = (id) =>{
      const storedDonations = getStoredDonation();
      const exists = storedDonations.find(donationId=> donationId === id);
      if(!exists){
        storedDonations.push(id);
        localStorage.setItem("donations",JSON.stringify(storedDonations))
      }
}
export{saveDonation,getStoredDonation}