import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form6.css'

const ContactForm6 = (props) => {
  return (
    <div
      className={`contact-form6-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact-form6-max-width thq-flex-row thq-section-max-width">
        <form className="contact-form6-form thq-flex-column">
          <div className="contact-form6-container1">
            <div className="contact-form6-input1">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                required="true"
                placeholder="e.g. John"
                className="contact-form6-text-input1 thq-input"
              />
            </div>
            <div className="contact-form6-input2">
              <label
                htmlFor="contact-form-6-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-6-last-name"
                required="true"
                placeholder="e.g. Doe"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form6-container2">
            <div className="contact-form6-input3">
              <label htmlFor="contact-form-6-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-6-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form6-input4">
              <label htmlFor="contact-form-6-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-6-phone"
                required="true"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form6-container3">
            <div className="contact-form6-input5">
              <label
                htmlFor="contact-form-6-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-6-message"
                rows="3"
                placeholder="Enter your message"
                className="contact-form6-textarea thq-input"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="contact-form6-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form6-text6">Send Message</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm6.defaultProps = {
  rootClassName: '',
  action: undefined,
}

ContactForm6.propTypes = {
  rootClassName: PropTypes.string,
  action: PropTypes.element,
}

export default ContactForm6
