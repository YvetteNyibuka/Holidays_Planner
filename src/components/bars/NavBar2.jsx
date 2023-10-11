import React, { useEffect, useState } from 'react';

const NavBar2 = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarClass = isFixed ? 'nav2 fixed' : 'nav2';

  return (
    <div className={navBarClass}>
      NavBar2
    </div>
  );
};

export default NavBar2;
