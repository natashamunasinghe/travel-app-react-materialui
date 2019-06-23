import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionTextSantiago({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Where have all the people gone?</h3>
          <p>First thoughts as we landed.</p>
          <p>
            Oh! It was the Easter break - 'the people' were on holiday. There
            was no traffic and it was ridiculously clean.
            <br />
            <br />
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“One day I was working in my office and as I looked through my window to the building across...I wasn't sure what I was seeing."
            author="Office Guy, Santiago."
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-1.JPG"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-2.jpg"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-3.jpg"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-4.jpg"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-5.jpg"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-santiago-6.jpg"
                }
                alt="Santiago"
                className={imgClasses}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            It was incredibly exciting for me to land in Santiago. My first step
            onto Latin American soil (and frankly after 11 hours of flying; most
            places would look delightful!)
          </p>
          <p>
            Interesting that Australians have a friendship tax we need to pay at
            immigration :)
          </p>
          <p>Seeing a vast city without her people takes a moment to digest.</p>
          <p>
            But for the folks we did see; it was a joy to see people enjoying a
            slower pace of life and living life well - eating well, laughing a
            lot and most noticeably treating both their environ and their fellow
            citizens well.
          </p>
          <p>
            This sense of egalitarism and civic responsibility is the stand-out
            for me.
          </p>
          <p>
            Whether it was above ground views from that cable car ride, or
            proving to ourselves that we could party with the millenials until
            dawn; Santiago did not disappoint.
          </p>
          <p>
            The dangerous part of town (Pio Nono) as suggested by our Uber
            driver turned out to be people just eager to get you to dance; and
            that's ok in our books.
          </p>
          <h3 className={classes.title}>Fun Fact:</h3>

          <p>
            For a Latin American developing nation, my Australian dollars really
            DID NOT go far enough!
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionTextSantiago);
