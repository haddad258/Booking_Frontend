import React, { Fragment ,useEffect, useState } from 'react';
import { PageTitle } from '../layout-components';

import Equipment from './equipment-component/Equipment';
export default function Equipmentreservation() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="list of equipment"
        titleDescription=""
      />

      <Equipment />
    
    </Fragment>
  );
}