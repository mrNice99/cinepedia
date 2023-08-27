import React, { useEffect } from "react";
import "../Support/support.scss";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="cinepedia-support-container">
      <section>
        <h1>Need Help? Contact Cinepedia Support!</h1>
        <p>
          Our dedicated support team is here to assist you with any questions,
          concerns, or technical issues you may have related to Cinepedia. We're
          committed to enhancing your movie-watching experience and making sure
          you have a seamless time on our platform.
        </p>
        <p>
          Feel free to reach out to us with any inquiries or assistance you need
          by sending an email to
          <a href="mailto:support@cinepedia.com">support@cinepedia.com</a>. Our
          team will respond promptly to provide the information you're looking
          for.
        </p>
        <p>
          Whether you have queries about using our platform, require assistance
          with your account, or wish to share feedback, our support team is here
          to listen and guide you. We value your input and suggestions as they
          aid us in improving our services.
        </p>
        <p>
          At Cinepedia, your satisfaction is paramount to us. We're dedicated to
          delivering the ultimate cinematic experience and ensuring that your
          time on our site is nothing short of exceptional. Thank you for
          choosing Cinepedia — we're excited to assist you!
        </p>
      </section>
    </div>
  );
};

export default Support;
