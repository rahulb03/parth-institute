import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { TbPhone } from "react-icons/tb";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import './toastify.css'; 
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // const serviceID = 'service_g36m3xm';  
    // const templateID = 'template_t89qeti';  
    // const publicKey = 'YkM5eKfX3c5Lavz6-';  

    const serviceID = 'service_dnsutqd';  
    const templateID = 'template_9fe4vtg';  
    const publicKey = '2ucmdjgMuwh4qLpX6';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            from_subject: formData.subject,
            message: formData.message
        }, publicKey)
            .then((response) => {
                toast.success('Message sent successfully'); 
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Failed to send message', error); 
                toast.error('Failed to send message'); 
            });
    };

    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Contact us</h6>
                    <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Get In Touch !</h3>
                    <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">PARTH INSTITUTE  SPREADING KNOWLEDGE...</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <form onSubmit={handleSubmit}>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="name" id="name" type="text" className="form-input" placeholder="Name :" onChange={handleChange} value={formData.name} />
                                    </div>
                                    <div className="lg:col-span-6 mb-5">
                                        <input name="email" id="email" type="email" className="form-input" placeholder="Email :" onChange={handleChange} value={formData.email} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <input name="subject" id="subject" className="form-input" placeholder="Subject :" onChange={handleChange} value={formData.subject} />
                                    </div>
                                    <div className="mb-5">
                                        <textarea name="message" id="comments" className="form-input textarea h-28" placeholder="Message :" onChange={handleChange} value={formData.message}></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:ms-8">
                            <div className="flex">
                                <div className="icons text-center mx-auto">
                                    <TbPhone className="rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Phone</h5>
                                    <a href="tel:+152534-468-854" className="text-slate-400">+91-9725056093</a>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <RxEnvelopeClosed className="rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                    <a href="mailto:parthclasses2k22@gmail.com" className="text-slate-400">parthclasses2k22@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="icons text-center mx-auto">
                                    <IoLocationOutline className="rounded text-2xl dark:text-white mb-0"/>
                                </div>
                                <div className="flex-1 ms-6">
                                    <h5 className="text-lg dark:text-white mb-2 font-medium">Location</h5>
                                    <p className="text-slate-400 mb-2">Shop 50, regent plaza, opp. Rami park, Dindoli, Surat, Gujarat 394210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" /> 
        </section>
    );
}
