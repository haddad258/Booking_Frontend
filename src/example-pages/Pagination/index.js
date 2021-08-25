import React, { Fragment } from "react";

import { PageTitle } from "../../layout-components";

import PaginationBasic from "../../example-components/Pagination/PaginationBasic";
export default function Pagination() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Fournisseur"
        titleDescription="Basic and dynamic pagination for use in your next awesome application."
      />
      <PaginationBasic />
    </Fragment>
  );
}
