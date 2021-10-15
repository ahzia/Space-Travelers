import MyRockets from './MyRockets';
import ProfileMissions from './ProfileMission';

const MyProfile = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <ProfileMissions />
      </div>
      <div className="col-md-3">
        <MyRockets />
      </div>
    </div>
  </div>
);
export default MyProfile;
