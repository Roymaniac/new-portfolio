import { useState } from "react";
import { contact } from "../info/contactForm";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      if (!name) {
        toast.error("Name Field is required");
      }
      if (!email) {
        toast.error("Email Field is required");
      }
      if (!message) {
        toast.error("Message Field is required");
      }
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: contact({ "form-name": "contact", name, email, message }),
      })
        .then(() => toast.success("Your form has been Sent!"))
        .catch((error) => toast.error(error));
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="relative bg-white">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-red-600">A wild place called Lagos in Nigeria</p>
            </div>
            <div className="lg:w-1/2 px-5 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a href=" " className="text-red-600 leading-relaxed">
                amolojoseph2020@gmail.com
              </a>
              <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-3">
                PHONE
              </h2>
              <p className="leading-relaxed text-red-600">+234-9039-468-272</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          name="contact"
          autoComplete="off"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-500">Get in touch with me</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 rounded border border-gray-700 focus:border-black  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 rounded border border-gray-700 focus:border-black  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-50 rounded border border-gray-700 focus:border-black  h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-red-600 border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-black hover:border-black rounded-md text-lg"
          >
            SEND ME
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
