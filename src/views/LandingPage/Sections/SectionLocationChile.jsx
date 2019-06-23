/* eslint-disable */
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

function SectionLocationChile({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <Link to="/locations/chile/santiago">
                  <CardHeader image plain>
                    <img
                      src={
                        "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-1.JPG"
                      }
                      alt="Santiago"
                    />
                  </CardHeader>
                </Link>

                <CardBody plain>
                  <Link to="locations/chile/santiago">
                    <h4 className={classes.cardTitle}>Santiago</h4>
                    <h6 className={classes.description}>The Capital</h6>
                    <p
                      className={`${classes.description} ${
                        classes.marginTop20
                      }`}
                    >
                      We met the dreaded 'Pio Nio'; got some great views of the
                      stellar office buildings and got happy on quite a bit of
                      Tequila and Pisco Sours. Oh! and that cable car ride...
                    </p>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <Link to="locations/chile/valparaiso">
                  <CardHeader image plain>
                    <img
                      src="https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-valparaiso-1.jpg"
                      alt="Valparaiso"
                    />
                  </CardHeader>
                </Link>
                <CardBody plain>
                  <Link to="locations/chile/valparaiso">
                    <h4 className={classes.cardTitle}>Valparaiso</h4>
                    <h6 className={classes.description}>That Rooftop</h6>
                    <p
                      className={`${classes.description} ${
                        classes.marginTop20
                      }`}
                    >
                      Do I really need to say anything more the rooftop on that
                      shipping container building? We also got to celebrate your
                      birthday here....
                    </p>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <Link to="locations/chile/colchagua">
                  <CardHeader image plain>
                    <img
                      src="https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-colchagua-3.jpg"
                      alt="Colchagua Valley"
                    />
                  </CardHeader>
                </Link>
                <CardBody plain>
                  <Link to="locations/chile/colchagua">
                    <h4 className={classes.cardTitle}>Colchagua Valley</h4>
                    <h6 className={classes.description}>Carmenere</h6>
                    <p
                      className={`${classes.description} ${
                        classes.marginTop20
                      }`}
                    >
                      This was all about the wine. We met Carmenere, Petit
                      Verdot and Purple Angel - and life was never the same
                      again.
                    </p>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <Link to="locations/chile/patagonia">
                  <CardHeader image plain>
                    <img
                      src="https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-15.jpg"
                      alt="Patagonia"
                    />
                  </CardHeader>
                </Link>
                <CardBody plain>
                  <Link to="locations/chile/patagonia">
                    <h4 className={classes.cardTitle}>Patagonia</h4>
                  </Link>
                  <h6 className={classes.description}>Glaciers for Days</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    This was where we ran out of superlatives for the landscape.
                    Magnificent, Fantastic, Awesome, Utterly Beautiful,
                    Breathtaking...and still doesnt capture the beauty. Planet
                    Earth is just superb
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionLocationChile);
