import React from "react";
import "./Mark.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function Acc() {
  return (
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
              What payment methods do you offer?
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
              countries) direct debit. We also support transactions in a range
              of currencies.
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
              How do I switch to a different plan?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              You can switch to a new plan at any time by going to the Billing
              page in your account. Select the plan you’d like to switch to and
              immediately start using new features.
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
              Can I buy credits instead?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Yes. If you send emails infrequently and prefer to pay as you go,
              you can buy email credits as an alternative to a monthly plan.
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
              Do you have pricing for high-volume email senders?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              We do indeed. If you have more than 200,000 contacts, we have a
              high-volume plan that can meet your needs.
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
              What happens if I hit my contact or sending limit?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Mailchimp will automatically bill you for your overages. As long
              as you pay for your overages on time, we will not stop your
              campaigns or pause your account.
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Acc;
