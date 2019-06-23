import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Muted from "components/Typography/Muted.jsx";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Testimonials 2 START */}
      <div
        className={`${classes.testimonials} ${classes.sectionDark} ${
          classes.testimonial2
        }`}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.cardTitle}>
                Folks we met along the way...
              </h2>
            </GridItem>
          </GridContainer>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Carousel {...settings}>
                  <div>
                    <Card testimonial plain className={classes.card2}>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            src={
                              "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fvintage-businessman-walk-sad-tired-weary-character-icon-on-stylish-vector-id495661572%3Fk%3D6%26m%3D495661572%26s%3D612x612%26w%3D0%26h%3D4Kj5hoCtf_UM_GT42NAnkCX5Zc2txEJYPvQ-qEf1NEw%3D&f=1"
                            }
                          />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h5 className={classes.cardDescription}>
                          &quot;If they didn't want to tell me where they met,
                          they could have just said so! <br />
                          No need to make up countries
                        </h5>
                        <h4 className={classes.cardTitle}>Cable Car Guy</h4>
                        <Muted>
                          <h6>Was just hanging with his daughter...</h6>
                        </Muted>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card testimonial plain className={classes.card2}>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            src={
                              "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.vectorcharacters.net%2Fuploads%2F2013%2F08%2FCasual_Girl_Vector_Character_Preview.jpg&f=1"
                            }
                          />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h5 className={classes.cardDescription}>
                          &quot; No, really - I am funny. I studied a course for
                          that~!!
                        </h5>
                        <h4 className={classes.cardTitle}>
                          Carolina from Brazil
                        </h4>
                        <Muted>
                          <h6>Circus hangs</h6>
                        </Muted>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card testimonial plain className={classes.card2}>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            src={
                              "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fth30.st.depositphotos.com%2F1007566%2F13710%2Fv%2F450%2Fdepositphotos_137109070-stock-illustration-jamaican-man-character-icon.jpg&f=1"
                            }
                          />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h5 className={classes.cardDescription}>
                          &quot; This place is soooooo clean (on repeat)
                        </h5>
                        <h4 className={classes.cardTitle}>Jamaican Guy</h4>
                        <Muted>
                          <h6>he who shall not be named</h6>
                        </Muted>
                      </CardBody>
                    </Card>
                  </div>
                </Carousel>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Testimonials 2 END */}
      </div>
    </div>
  );
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
