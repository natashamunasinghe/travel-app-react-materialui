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

function SectionTextValparaiso({ ...props }) {
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
          <h3 className={classes.title}>
            Umm....So we are staying in a shipping container hotel, cool?
          </h3>
          <p>What can I say about that view and that rooftop?</p>
          <p>What can I say about those people?</p>

          <Quote
            textClassName={classes.quoteText}
            text="“Go Shawty, it's your b'day"
            author="50 Cent"
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-valparaiso-1.jpg"
                }
                alt="Valparaiso"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-valparaiso-2.jpg"
                }
                alt="Valparaiso"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-valparaiso-3.jpg"
                }
                alt="Valparaiso"
                className={imgClasses}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            Navigating the Chilean roads from Santiago to Valparaiso in a manual
            car (more the car, than the roads), was in itself a treat. More for
            me, than you I think.
          </p>
          <p>
            Remember that lunch by the ocean before we hit Valparaiso? I still
            think wistfully about that piece of cake which escaped my lips.
          </p>
          <p>
            We walked in our room. Looked out into the horizon through those
            jumbo glass windows; and all we saw was beautiful blue ocean. I
            remember thinking
            <i>&quot;Damn, N%$%$%%$, you made a good choice&quot;.</i>
          </p>
          <p>Because frankly speaking, it could have gone either way.</p>

          <p>
            It really was the United Nations on that rooftop that glorious,
            moonlit night. I cannot remember anything but laughter. What magic a
            bunch of complete strangers can create. Doesn't that in itself give
            you hope?
          </p>
          <p>I am glad you enjoyed your birthday. You deserve nothing less.</p>
          <h3 className={classes.title}>Unanswered Question:</h3>

          <p>
            I still have my photo collage of receipts. Did the hire car company
            charge you for tolls?
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionTextValparaiso);
