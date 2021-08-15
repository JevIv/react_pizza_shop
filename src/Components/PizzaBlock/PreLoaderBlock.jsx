import React from 'react';
import ContentLoader from "react-content-loader";

const PreLoaderBlock = () => {
  return (
    <ContentLoader
      speed={4}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="141" cy="113" r="115"/>
      <rect x="0" y="244" rx="3" ry="3" width="280" height="26"/>
      <rect x="0" y="284" rx="6" ry="6" width="280" height="84"/>
      <rect x="0" y="377" rx="3" ry="3" width="94" height="40"/>
      <rect x="137" y="377" rx="20" ry="20" width="140" height="40"/>
    </ContentLoader>
  )
};

export default PreLoaderBlock;
