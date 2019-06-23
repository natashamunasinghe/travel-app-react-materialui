/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

function SectionLocationItaly({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a href="https://en.wikipedia.org/wiki/Rome" target="_blank">
                  <CardHeader image plain>
                    <img
                      src={
                        "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tlOMd4KP_oRMU31IQrjvZgHaEo%26pid%3D15.1&f=1"
                      }
                      alt="Rome"
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a href="https://en.wikipedia.org/wiki/Rome" target="_blank">
                    <h4 className={classes.cardTitle}>Rome</h4>
                  </a>
                  <h6 className={classes.description}>The Capital</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Adventures await..
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://en.wikipedia.org/wiki/Florence"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.yoga213.com.au%2Fwp-content%2Fuploads%2Fflorence.jpg&f=1"
                      alt="Florence"
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://en.wikipedia.org/wiki/Florence"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Florence</h4>
                  </a>
                  <h6 className={classes.description}>Renaissance</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Adventures await..
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a href="https://en.wikipedia.org/wiki/Venice" target="_blank">
                  <CardHeader image plain>
                    <img
                      src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcolorsnspirits.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fvenice-and-its-paradise.jpg&f=1"
                      alt="Venice"
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://en.wikipedia.org/wiki/Venice"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Venice</h4>
                  </a>
                  <h6 className={classes.description}>Water City</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Adventures await..
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a href="https://en.wikipedia.org/wiki/Perugia" target="_blank">
                  <CardHeader image plain>
                    <img
                      src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fflexitreks.com%2Fwp-content%2Fuploads%2F2015%2F08%2FAssisi-Umbria-ItalyIV.jpg&f=1"
                      alt="Perugia"
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://en.wikipedia.org/wiki/Perugia"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Perugia</h4>
                  </a>
                  <h6 className={classes.description}>The Wedding...</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Adventures await..
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

export default withStyles(projectsStyle)(SectionLocationItaly);
