import React from "react";
import "./Mark.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function Acc2() {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          xs={11}
          xxl={10}
          sm={11}
          md={10}
          xl={10}
          lg={10}
          className="offset-1"
        >
          <h1 className="">FAQS</h1>
          <Col>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What payment methods does Mailchimp accept?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We accept all major credit cards, PayPal, and (in select
                    countries) direct debit. We also support transactions in a
                    range of currencies.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How much does it cost to sell from a Mailchimp online store?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    There are 2 types of fees for transactions on stores. First,
                    each transaction includes a %-based transaction fee, based
                    on your monthly plan and total order value. We also partner
                    with Stripe to process payments; Stripe charges fees based
                    on your location.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Can I connect my existing domain to a Mailchimp website?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes. If you own a domain through Mailchimp or a third-party
                    service, you can connect it to your online store with a Core
                    or Plus Websites & Commerce plan. Connect a Domain or
                    Subdomain
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Are Mailchimp online stores available in my country?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Stores are currently only supported in the United States and
                    United Kingdom. Any Mailchimp user can explore the feature
                    and set up a Store, but only users who have businesses based
                    in the UK and the US can publish a store and sell products.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I switch to a different plan?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    You can switch to a new plan at any time by going to the
                    Billing page in your account. Select the plan you’d like to
                    switch to and immediately start using new features.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Acc2;
