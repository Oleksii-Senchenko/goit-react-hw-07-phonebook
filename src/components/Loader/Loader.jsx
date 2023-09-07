import React from 'react';

import { Audio } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderStyled';

const Loader = () => {
  return (
    <LoaderWrapper>
      {' '}
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;
