import React from "react";
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import NavPills from "components/NavPills/NavPills.jsx";
import SectionLocationChile from "./SectionLocationChile";
import SectionLocationItaly from "./SectionLocationItaly";

// nodejs library to set properties for components
import PropTypes from "prop-types";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

class LocationNavPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <NavPills
        alignCenter
        color="info"
        tabs={[
          {
            tabButton: "Chile",
            tabContent: <SectionLocationChile />
          },
          {
            tabButton: "Italy",
            tabContent: <SectionLocationItaly />
          },
          {
            tabButton: "Indonesia",
            tabContent: (
              <div
                className={classNames(
                  classes.aboutDescription,
                  classes.textCenter
                )}
              >
                <GridContainer>
                  <GridItem
                    md={6}
                    sm={6}
                    className={classNames(classes.mrAuto, classes.mlAuto)}
                  >
                    <h5 className={classes.description}>We met.</h5>
                  </GridItem>
                </GridContainer>
              </div>
            )
          },
          {
            tabButton: "Australia",
            tabContent: (
              <div
                className={classNames(
                  classes.aboutDescription,
                  classes.textCenter
                )}
              >
                <GridContainer>
                  <GridItem
                    md={6}
                    sm={6}
                    className={classNames(classes.mrAuto, classes.mlAuto)}
                  >
                    <h5 className={classes.description}>
                      Ok you have more pics for this one :)
                    </h5>
                  </GridItem>
                </GridContainer>
              </div>
            )
          },
          {
            tabButton: "The World Baby!",
            tabContent: (
              <div
                className={classNames(
                  classes.aboutDescription,
                  classes.textCenter
                )}
              >
                <GridContainer>
                  <GridItem
                    md={6}
                    sm={6}
                    className={classNames(classes.mrAuto, classes.mlAuto)}
                  >
                    <h5 className={classes.description}>
                      Ok...maybe a slight exaggeration but as much of this
                      wondrous planet and her peoples as possible :)
                    </h5>
                  </GridItem>
                </GridContainer>
              </div>
            )
          }
        ]}
      />
    );
  }
}

export default withStyles(styles)(LocationNavPills);
