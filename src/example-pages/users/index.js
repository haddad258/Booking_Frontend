import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import Userexemple from '../../example-components/users/Userexemple';
export default function users() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="list of users"
        titleDescription=""
      />

      <Userexemple />
    
    </Fragment>
  );
}