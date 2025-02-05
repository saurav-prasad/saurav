import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import LoaderTruck from "../components/LoaderTruck";
import LoaderColorful from "../components/LoaderColorful";

function Contact() {
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const { showAlert, hideAlert, alert } = useAlert();
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFocus = () => {
    setCurrentAnimation("walk");
  };

  const onBlur = () => {
    setCurrentAnimation("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    setFormLoading(true);
    setCurrentAnimation("hit");
    try {
      const a = await emailjs.send(
        import.meta.env.VITE_VERCEL_ENV_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_VERCEL_ENV_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          to_name: "Saurav",
          from_email: form.from_email,
          to_email: "sauravprasad2050@gmail.com",
          message: form.message,
          reply_to: form.from_email,
        },
        import.meta.env.VITE_VERCEL_ENV_EMAILJS_PUBLIC_KEY
      );
      setFormLoading(false);
      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
      showAlert({ text: "Get to you soon!", type: "success" });
      setTimeout(() => {
        setCurrentAnimation("idle");
        hideAlert();
      }, [3000]);
    } catch (error) {
      console.log(error);
      setFormLoading(false);
      setForm({
        user_name: "",
        user_email: "",
        message: "",
      });
      showAlert({ text: "Uho! I did'nt get that!", type: "danger" });
      setTimeout(() => {
        setCurrentAnimation("idle");
        hideAlert();
      }, [3000]);
    }
  };

  const adjustFoxForScreenSize = () => {
    let fov = null;

    if (window.innerWidth > 768) {
      fov = 85;
    } else {
      fov = 50;
    }

    return [fov];
  };

  const [fov] = adjustFoxForScreenSize();

  return (
    <>
      {<Alert {...alert} />}
      <section className="relative flex lg:flex-row flex-col max-container gap-8">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in touch 🤠</h1>
          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label>
              Name
              <input
                required
                type="text"
                name="from_name"
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
                name="from_email"
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
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: fov,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<LoaderColorful />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.1, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <div className="lg:pb-0 pb-4">
        <hr className="hrBorderColor max-w-5xl mx-auto " />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
