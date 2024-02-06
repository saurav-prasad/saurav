import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFocus = () => {};

  const onBlur = () => {};

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const a = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Saurav",
          from_email: form.email,
          to_email: "sauravprasad2050@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      console.log(a);
      setFormLoading(false);
    } catch (error) {
      console.log(error);
      setFormLoading(false);
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-screen">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label>
            Name
            <input
              required
              type="text"
              name="user_name"
              className="input"
              placeholder="Enter your name..."
              onChange={onChange}
              value={form.name}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="user_email"
              className="input"
              placeholder="Enter your email..."
              onChange={onChange}
              value={form.email}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <label>
            Message
            <textarea
              required
              type="text"
              name="message"
              className="textarea"
              placeholder="Enter your name..."
              onChange={onChange}
              value={form.message}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </label>
          <button
            type="submit"
            className="btn h-10 flex justify-center items-center"
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={formLoading}
          >
            {formLoading ? <span className="BtnLoader" /> : " Let's connect!"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
