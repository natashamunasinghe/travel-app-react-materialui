import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionTextColchagua({ ...props }) {
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
            Wait, you mean we get to have Chilean wine and Game of Thrones
            tonight?
          </h3>
          <p>That's a win</p>
          <p>
            The brilliant hues of reds, yellows and oranges intermingled with
            lush green foliage and earthy roads took me a moment to recover
            from.
          </p>
          <p>Why is wine country so damn beautiful?</p>
          <Quote
            textClassName={classes.quoteText}
            text="“Our Montes wines get serenaded by the chants of Gregorian monks."
            author="- Mic drop - "
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-colchagua-7.jpg"
                }
                alt="Colchagua"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-colchagua-1.jpg"
                }
                alt="Colchagua"
                className={imgClasses}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img
                src={
                  "https://reactchileapp.s3-ap-southeast-2.amazonaws.com/chile-colchagua-4.jpg"
                }
                alt="Colchagua"
                className={imgClasses}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            The Santa Cruz Winery introduced us not only to the world of
            Carmenere but also to the alchemy that unveils herself when she is
            mixed with Petit Verdot.
          </p>
          <p>
            We also tried a few more vinos but after the first few sips, I
            confess my memory takes a rather geriatric turn. So I cannot recall
            what other beautiful concoctions passed our lips; but I do recollect
            enjoying it.
          </p>
          <p>
            The second wine tasting (BTW still hadn't eaten any food!) was at
            Montes Alpha. From the monks enchanting the wines, to the joy of
            tasting Purple Angel for the first time; to the random conversation
            with fellow wanderlusters; the day was good to us.
          </p>
          <p>
            I also recall secretly thinking to myself &quot;Thank God! I am not
            driving&quot;
          </p>
          <p>
            The Hacienda where we stayed was delightful especially considering
            we were the only guests. A beautiful crab meal, an extended Snooker
            game (because turns out neither one of us knows how to play), more
            bottles of wine and a firelit Game of Thrones viewing. It's not
            perfect; but it's pretty damn close.
          </p>
          <h3 className={classes.title}>Fun Fact:</h3>

          <p>
            When Cab Franc met Sav Blanc, they brought Cab Sav into this world.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionTextColchagua);
