import UserList from "../components/UserList";
import useFetch from "../hooks/useFetch";

const UserContainer = () => {
  const { users, error, isLoading } = useFetch();
  return (
    <div>
      <UserList users={users} loading={isLoading} error={error} />
    </div>
  );
};

export default UserContainer;
