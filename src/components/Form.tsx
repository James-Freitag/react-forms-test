import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    message: "",
  });

  const handleFormData = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      option: "",
      message: "",
    });
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Option: ${formData.option}, Message: ${formData.message}`
    );
  };

  return (
    <div className="max-w-xl place-items-center mx-auto mt-4">
      <div className=" w-full p-4 bg-neutral-300 rounded-xl">
        <h1 className="text-center text-2xl font-semibold pb-4">Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="p-1 w-full border border-black mb-4"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleFormData}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className="p-1 w-full border border-black mb-4 "
            type="email"
            id="email"
            name="email"
            placeholder="Enter Valid email"
            onChange={handleFormData}
            required
          />
          <label htmlFor="option">
            Select an option
            <select
              id="option"
              name="option"
              onChange={handleFormData}
              className="mb-4 p-1 w-full"
            >
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="NA">Rather not say</option>
            </select>
          </label>
          <label htmlFor="message">Message</label>
          <textarea
            className="p-1 w-full border border-black mb-4"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Enter your message here"
            onChange={handleFormData}
            required
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-sky-800 hover:bg-sky-700 text-white py-4 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
