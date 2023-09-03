import { useRef, useState } from "react";
import foodie from "../images/seat1.jpg";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";
import Footer from "../components/Footer";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6qhbq4z",
                "template_z2vzk9g",
                form.current,
                "vgx9Wt-_I8pz9FYma"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    const [random, setRandom] = useState(0);

    const getTableNumber = () => {
        const randomNumber = Math.floor(Math.random() * 5 + 1);
        setRandom(randomNumber);
        console.log(randomNumber, random);
    };

    return (
        <Element name="Contact">
            <div className="contact">
                <div
                    className="leftSide"
                    style={{ backgroundImage: `url(${foodie})` }}></div>
                <div className="rightSide">
                    <h1> Book A Seat</h1>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        id="contact-form"
                        method="POST">
                        <label htmlFor="name">Full Name</label>
                        <input
                            name="name"
                            placeholder="Enter full name..."
                            type="text"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter email..."
                            type="email"
                        />
                        <label htmlFor="number">
                            Number of Persons(From 1-6)
                        </label>
                        <input
                            name="number"
                            placeholder="No. of persons"
                            type="number"
                            min="1"
                            max="6"
                            onChange={() => getTableNumber()}
                        />
                        <label htmlFor="datetime-local">Date & Time</label>
                        <input
                            name="datetime-local"
                            placeholder="Date & Time"
                            type="datetime-local"
                        />
                        <label>Available Table Number: </label>
                          {random.toString()}

                        <button type="submit"> Book</button>
                    </form>
                </div>
            </div>
            <Footer />
        </Element>
    );
};

export default Contact;
