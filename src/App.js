import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import user from './user.json';
import data from './data.json';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} title="Upload stats" />
    </>
  );
};

export default App;
