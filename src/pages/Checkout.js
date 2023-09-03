import React from "react";
import "../styles/Checkout.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartItem from "./cartItem";
import { useForm } from "react-hook-form";

const Checkout = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    
        /*const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_olzdhdr', 'template_shqmjsa', form.current, 'IlxEEYsCq6BAWiGDu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };*/

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="maincontainer">
                <div class="container">
                    <div class="py-5 text-center">
                        <h2>Checkout form</h2>
                        <p class="lead">Please Fill in Your Details</p>
                    </div>
                    <div class="row">
                        <div class="col-md-4 order-md-2 mb-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Your cart</span>
                                <span class="badge badge-secondary badge-pill">
                                    3
                                </span>
                            </h4>
                            <CartItem />
                        </div>
                        <div class="col-md-8 order-md-1">
                            <h4 class="mb-3">Billing address</h4>
                            <form action="https://formsubmit.co/craxybaboon6@gmail.com" method="POST" />
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="FirstName"
                                            className={`form-control ${
                                                errors.name && "invalid"
                                            }`}
                                            {...register("name", {
                                                required: "Name is Required",
                                            })}
                                            onKeyUp={() => {
                                                trigger("name");
                                            }}
                                        />
                                        {errors.name && (
                                            <small className="text-danger">
                                                {errors.name.message}
                                            </small>
                                        )}
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName">Last name</label>
                                        <input
                                            type="text"
                                            name="LastName"
                                            className={`form-control ${
                                                errors.lname && "invalid"
                                            }`}
                                            {...register("lname", {
                                                required: "Name is Required",
                                            })}
                                            onKeyUp={() => {
                                                trigger("lname");
                                            }}
                                        />
                                        {errors.name && (
                                            <small className="text-danger">
                                                {errors.lname.message}
                                            </small>
                                        )}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={`form-control ${
                                            errors.email && "invalid"
                                        }`}
                                        {...register("email", {
                                            required: "Email is Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message:
                                                    "Invalid email address",
                                            },
                                        })}
                                        onKeyUp={() => {
                                            trigger("email");
                                        }}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">
                                            {errors.email.message}
                                        </small>
                                    )}
                                </div>
                                <div class="mb-3">
                                    <label for="phone">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className={`form-control ${
                                            errors.phone && "invalid"
                                        }`}
                                        {...register("phone", {
                                            required: "Phone is Required",
                                            pattern: {
                                                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                message: "Invalid phone no",
                                            },
                                        })}
                                        onKeyUp={() => {
                                            trigger("phone");
                                        }}
                                    />
                                    {errors.phone && (
                                        <small className="text-danger">
                                            {errors.phone.message}
                                        </small>
                                    )}
                                </div>
                                <div class="mb-3">
                                    <label for="address">Address</label>
                                    <input
                                            type="text"
                                            name="address"
                                            placeholder="e.g.Victory Towers"
                                            className={`form-control ${
                                                errors.address && "invalid"
                                            }`}
                                            {...register("address", {
                                                required: "Hostel Address is Required",
                                            })}
                                            onKeyUp={() => {
                                                trigger("address");
                                            }}
                                        />
                                        {errors.name && (
                                            <small className="text-danger">
                                                {errors.address.message}
                                            </small>
                                        )}
                                </div>
                                <div class="mb-3">
                                    <label for="address2">
                                        Room Number{" "}
                                        <span class="text-muted">
                                            (Optional)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="room"
                                        class="form-control"
                                        id="address2"
                                        placeholder="e.g.Room number 23"
                                        {...register("room", {
                                            required: "Room Number is Required",
                                        })}
                                    />
                                </div>

                                <hr class="mb-4" />
                                <button
                                    class="btn btn-primary btn-lg btn-block"
                                    type="button"
                                     >
                                    Submit
                                </button>
                                <hr class="mb-4" />
                                <h4 class="mb-3">Payment</h4>
                                <Link to="/payment">
                                    <button
                                        class="btn btn-primary btn-lg btn-block"
                                        type="button"
                                        value="Send">
                                        Proceed
                                    </button>
                                </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </form>
    );
}

export default Checkout;
