import { useParams } from "react-router-dom";

const Profile = () => {
  let { slug } = useParams();

  return <div>Profile Page: {slug}</div>;
};

export default Profile;
