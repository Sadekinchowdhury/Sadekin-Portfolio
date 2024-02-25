import React, { useState } from "react";
import { Submit } from "../Button/commonButton";
import { Devider } from "../Devider/Devider";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here for handling the form submission
    console.log("Form submitted:", formData);
  };
  return (
    <div className="contact-container">
      <div className="contact-content-container">
        <h2>Contact</h2>
        <Devider/>
        <div className="contact-inner-container">
          <div className="contact-form">
            <h2>Touch Me</h2>
            <form onSubmit={handleSubmit}>
              <div>
                {/* <label htmlFor="fullName">Full Name:</label> */}
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="email">Email:</label> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="subject">Subject:</label> */}
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="comment">Comment:</label> */}
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Comment"
                  required
                ></textarea>
              </div>
              <div>
                 <Submit/>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </p>
            <div className="contact-info-inner">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa-regular"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48m0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49c-16.841 13.247-50.201 45.072-73.413 44.701c-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646c21.857 17.205 60.134 55.186 103.062 54.955c42.717.231 80.509-37.199 103.053-54.947c49.528-38.783 82.032-64.401 104.947-82.653V400z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="">sadikinchow1@gmail.com</a>
                <br />
                <a href="">rumel8763@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-inner">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fa-solid"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6"
                  ></path>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <a href="#"> +88012720985568</a>
                <br />
                <a href="#"> +88012720985568</a>
              </div>
            </div>
            <div className="contact-info-inner">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
              </div>
              <div>
                <h4>Adress</h4>
                <span>Sylhet,Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
