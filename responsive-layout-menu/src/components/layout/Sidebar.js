import React, { useCallback, useState } from 'react';
import CollpasedSidebar from 'components/layout/sidebar/CollpasedSidebar';
import ExpandedSidebar from 'components/layout/sidebar/ExpandedSidebar';

const Sidebar = () => {
  const [collpase, setCollpase] = useState(true);

  const onToggle = useCallback(() => {
    setCollpase(!collpase);
  }, [collpase]);

  return (
    <>
      {collpase ? (
        <CollpasedSidebar onToggle={onToggle} />
      ) : (
        <ExpandedSidebar onToggle={onToggle} />
      )}
    </>
  );
};

export default Sidebar;
