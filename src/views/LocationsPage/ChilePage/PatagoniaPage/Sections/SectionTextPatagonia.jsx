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

function SectionTextPatagonia({ ...props }) {
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
            A: &quot;So, you want to go to the end of the world?&quot;
          </h3>
          <h3 className={classes.title}>
            B: &quot;Yeah, sure why not...&quot;
          </h3>
          <Quote
            textClassName={classes.quoteText}
            text="I cannot explain the beauty of Patagonia. So I shall not try. It is
            something to be experienced; not narrated"
            author="Me "
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-1.JPG"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-10.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-11.JPG"
                }
                alt="Patagonia"
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
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-12.JPG"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-13.JPG"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-14.jpg"
                }
                alt="Patagonia"
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
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-15.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-16.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-6.jpg"
                }
                alt="Patagonia"
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
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-7.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-8.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-patagonia-9.jpg"
                }
                alt="Patagonia"
                className={imgClasses}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            Landing in Punta Arenas; a town softly kissing the Antarctic was in
            itself mind boggling. The penguins live here. We are the visitors.
          </p>
          <p>
            The 5 hour drive to Torres del Paine National Park in the Chilean
            Patagonian region started off with drier plains that gradually
            became enveloped in ice-capped mountains, jade green lakes and grand
            glaciers.
          </p>
          <p>
            Yes, our accommodation was (cough!) a tad bit on the high-season
            side; but doesn't staying at the <strong>end of the world</strong>{" "}
            provide a marvellous excuse for this extravagence?
          </p>
          <p>
            The view from the room overlooking Grey Lake and those pesky,
            nonchalant icebergs is something etched forever in my memory. The
            boat ride to Grey Glacier in the biting cold was made better (read
            much better) by the Pisco Sours served on glacier ice. There's very
            little to compare with the sight of Mother Nature in her
            unapologetic magnificence.
          </p>
          <p>
            The road trips to Lord of the Rings Territory, the drinks and
            empanadas at that chalet nested on the lake-island are memories that
            carry that such sweetness and tenderness for me.
          </p>
          <h3 className={classes.title}>Fun Fact:</h3>

          <p>
            Thank God we had an automatic car. It really is the small things
            that matter.{" "}
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionTextPatagonia);
