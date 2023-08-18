import React from "react";
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p>Stay connected with Cinepedia through our social media channels:</p>
        <div className="links-footer">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <title>facebook</title>
              <g>
                <rect width="16" height="16" rx="2" ry="2" fill="#1976d2" />
                <path
                  d="M13.5,8H11V6c0-.552.448-.5,1-.5h1V3H11A3,3,0,0,0,8,6V8H6v2.5H8V16h3V10.5h1.5Z"
                  fill="#fafafa"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <title>twitter</title>
              <path
                d="M16,3.539a6.841,6.841,0,0,1-1.89.518,3.268,3.268,0,0,0,1.443-1.813,6.572,6.572,0,0,1-2.08.794A3.281,3.281,0,0,0,7.8,5.281a3.384,3.384,0,0,0,.076.748A9.281,9.281,0,0,1,1.114,2.6,3.281,3.281,0,0,0,2.122,6.982a3.239,3.239,0,0,1-1.482-.4v.036A3.294,3.294,0,0,0,3.269,9.836a3.214,3.214,0,0,1-.861.109,2.879,2.879,0,0,1-.621-.056,3.312,3.312,0,0,0,3.065,2.285,6.59,6.59,0,0,1-4.067,1.4A6.139,6.139,0,0,1,0,13.528,9.239,9.239,0,0,0,5.032,15a9.272,9.272,0,0,0,9.336-9.334c0-.145-.005-.285-.012-.424A6.558,6.558,0,0,0,16,3.539Z"
                fill="#03a9f4"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <g fill="none" fillRule="evenodd">
                <rect
                  width="58"
                  height="58"
                  x="3"
                  y="3"
                  fill="#FF78C7"
                  rx="12"
                />
                <rect
                  width="44"
                  height="44"
                  x="10"
                  y="10"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeWidth="4"
                  rx="7"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="9"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <circle cx="45" cy="19" r="3" fill="#FFF" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-contact">
        <p>
          Have questions or feedback? We'd love to hear from you. Reach out to
          our team at{" "}
          <a href="mailto:contact@cinepedia.com">contact@cinepedia.com</a>.
        </p>
      </div>
      <div className="footer-links">
        <a href="https://www.wikipedia.org/">Terms of Use</a>
        <a href="https://www.wikipedia.org/">Privacy Policy</a>
        <a href="https://www.wikipedia.org/">Frequently Asked Questions</a>
      </div>
    </footer>
  );
};

export default Footer;
