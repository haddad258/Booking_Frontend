import React, { Fragment ,useEffect, useState } from 'react';
import { PageTitle } from '../layout-components';

import Transporttools from './transport-components/Transporttools';
export default function Transport() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="list of cars"
        titleDescription=""
      />

      <Transporttools />
    
    </Fragment>
  );
}