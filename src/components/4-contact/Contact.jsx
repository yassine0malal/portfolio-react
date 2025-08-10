import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../animations/doneAnimation.json";
import Lottie from "lottie-react";
import emailAnimation from "../../animations/emailAnimation.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mldlalaz");

  return (
    <section id="contact-us" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{justifyContent:"space-between"}}>
        <form className="" onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "submitting..." : "submit"}
          </button>
          {state.succeeded && (
            <p className="flex" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              your message has been sent successfully{" "}
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
          className="contact-animation"
                loop={true}
                style={{ height: 300 }}
                animationData={emailAnimation}
              />
        </div>
      </div>
    </section>
  );
}
