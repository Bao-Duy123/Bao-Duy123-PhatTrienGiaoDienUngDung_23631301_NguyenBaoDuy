import { useState } from 'react';
import Navbar from './Navbar';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <Navbar
        onLoginClick={() => setShowLoginModal(true)}
        onSubscribeClick={() => setShowSignupModal(true)}
      />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </>
  );
};

export default Header;
