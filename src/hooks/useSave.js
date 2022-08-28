import { collection, addDoc } from "firebase/firestore";
import { db } from "../firestore/client";

export default function useSave() {
  const saveDonation = ({ user, channel, amount, token }) => {
    const data = {
      name: user.display_name.toLowerCase(),
      id: user.id,
      cid: channel.uid,
      channel: channel.userName,
      photo: user.profile_image_url,
      amount,
      token,
      time: Math.round(new Date().getTime() / 1000),
    };
    addDoc(collection(db, "donations"), data);
  };

  // const savePrediction = () => {};

  return { saveDonation };
}
