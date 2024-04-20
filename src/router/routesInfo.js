import UserProfile from "../components/user-profile";
import profileLogo from '../images/pic.webp';

const routes = [
  {
    id: 'user-profile',
    route: 'user-profile',
    component: (
      <UserProfile
        name="Kabilesh"
        email="kabilesh@dal.ca"
        picture={profileLogo}
      />),
  },
];

export default routes;
