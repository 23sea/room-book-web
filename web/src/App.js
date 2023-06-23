import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { MeetingRoomBooks } from './component/MeetingRoomBooks';
import HeadingPage from './component/HeadingPage';
import TestList from './component/TestList';

function App() {
  const clientId =
    '468385221064-actf651guuqlefvt1u362ql4hfasrtq5.apps.googleusercontent.com';

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'profile',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };
  const onFailure = (res) => {
    console.log('failed', res);
  };

  const logOut = () => {
    setProfile(null);
  };
  return (
    <div>
      {profile ? (
        <div>
          <HeadingPage profile={profile} />
          <MeetingRoomBooks name={profile.name} googleId={profile.googleId} />
          <TestList profile={profile} />
          <GoogleLogout
            clientId={clientId}
            buttonText='Log out'
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText='login with google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default App;
