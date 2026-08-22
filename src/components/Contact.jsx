import { useState } from "react";

function Contact() {
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);

const form = e.target;
const data = new FormData(form);

try {
  const response = await fetch(
    "https://formspree.io/f/xyegegvn",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.ok) {
    setSubmitted(true);

    setTimeout(() => {
      window.location.href = "https://amirsuhail21.github.io/My-Portfolio/";
    }, 5000);
  } else {
    alert("Something went wrong. Please try again.");
  }
} catch (error) {
  alert("Something went wrong. Please try again.");
}

setLoading(false);


};

if (submitted) {
return ( <section className="section contact-section" id="contact"> <div className="success-card"> <div className="success-icon">✓</div>


      <h2>Thanks!</h2>

      <p>
        The form was submitted successfully.
      </p>

      <p>
        Going back to Home in <strong>5 seconds...</strong>
      </p>

      <button
        className="btn primary"
        onClick={() => (window.location.href = "https://amirsuhail21.github.io/My-Portfolio/")}
      >
        Go Back
      </button>
    </div>
  </section>
);


}

return ( <section className="section contact-section" id="contact"> <div className="section-title"> <p>Let's Connect</p> <h2>Contact Me</h2> </div>


  <div className="contact-content">
    <div className="contact-text">
      <h3>Have a project in mind?</h3>

      <p>
        I'm always interested in learning, collaborating and
        building interesting web projects.
      </p>

      <div className="contact-details">
        <div>
          <span>Email</span>
          <a href="mailto:mannuraien3@gmail.com">
            mannuraien3@gmail.com
          </a>
        </div>

        <div>
          <span>Phone</span>
          <a href="tel:+918445939397">
            +91 8445939397
          </a>
        </div>

        <div>
          <span>Location</span>
          <p>Mawana, Meerut, Uttar Pradesh</p>
        </div>
      </div>
    </div>

    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        required
      />

      <button
        type="submit"
        className="btn primary"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
</section>


);
}

export default Contact;