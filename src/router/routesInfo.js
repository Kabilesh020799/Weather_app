import TodoList from "../components/todo-list";
import UserProfile from "../components/user-profile";
import Weather from "../components/weather";
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
  {
    id: 'todo-list',
    route: 'todo-list',
    component: (
      <TodoList />
    )
  },
  {
    id: 'weather',
    route: 'weather',
    component: (
      <Weather />
    ),
  },
];

export default routes;
