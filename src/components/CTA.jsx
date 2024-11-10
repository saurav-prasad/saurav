import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <>
      <section className="cta max-w-5xl mx-auto px-2">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" />
          Let's build something together!
        </p>
        <Link className="btn" to="/contact">
          Connect
        </Link>
      </section>
    </>
  );
}

export default CTA;
