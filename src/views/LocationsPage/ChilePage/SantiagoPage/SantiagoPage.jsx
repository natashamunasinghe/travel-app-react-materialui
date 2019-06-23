import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//sections for this page
import SectionTextSantiago from "./Sections/SectionTextSantiago.jsx";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";

class SantiagoPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Chile Adventures"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
        />
        <Parallax image="https://reactchileapp.s3-ap-southeast-2.amazonaws.com/santiago_1.JPG">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>Santiago.</h1>
                <h4 className={classes.subtitle}>
                  Possibly the cleanest city in the world?
                </h4>
                <br />
                {/* <Button color="rose" size="lg" round>
                  <FormatAlignLeft /> Read Article
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionTextSantiago />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link to="/" className={classes.block}>
                      Take Me Home
                    </Link>
                  </ListItem>
                  {/* <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem> */}
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}. Made with{" "}
                <Favorite className={classes.icon} /> by Me.{" "}
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(blogPostPageStyle)(SantiagoPage);
