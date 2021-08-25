import React from "react";

import { Grid, Card, Button } from "@material-ui/core";

export default function LivePreviewExample(props) {
  let elements = <h1>Wait</h1>;
  console.log(props.data);
  if (props.data.length !== 0) {
    elements = props.data.map((element, i) => {
      return (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Card className="card-transparent mb-4">
            <div className="card-img-wrapper">
              <img
                src={element.image}
                className="card-img-top rounded"
                alt="..."
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg">
                {element.title}
              </h5>
              <p className="card-text">{element.description}</p>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="mt-1"
              >
                View Details
              </Button>
            </div>
          </Card>
        </Grid>
      );
    });
  }

  return elements;
}
