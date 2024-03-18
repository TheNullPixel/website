import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = useState(false);

  const formEndpoint = "https://formspree.io/f/xrgnapwr";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
        alert("Thank you for your message!");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      alert("There was a problem with your submission: ", error.message);
    }
  };
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Belfast,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="font-orbitron text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Want to collaborate? Have an upcoming opportunity? If you'd like to
            get in contact complete the form below!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full bg-gray rounded border border-white focus:border-blue focus:ring-2 focus:ring-accent text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-gray rounded border border-white focus:border-blue focus:ring-2 focus:ring-teal text-white outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full bg-gray rounded border border-white focus:border-blue focus:ring-2 focus:ring-teal h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            value={submitted}
            className="font-orbitron text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-teal hover:text-black rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
