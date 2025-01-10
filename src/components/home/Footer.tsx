import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#f8ede4] text-gray-800 py-10 border-t">
            <div className="container mx-auto px-4">
            <img src="main/White light A6-1.png" height="60px" width="70px" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Shop Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Shop</h3>
                        <ul>
                            <li>All</li>
                            <li>Home & Living</li>
                            <li>Accessories</li>
                            <li>Stationery</li>
                            <li>Sale</li>
                            <li>Gift Card</li>
                        </ul>
                    </div>

                    {/* Policy Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Helpful Links</h3>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Policy</li>
                            <li>Refund Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <p>whitelightenterprises@gmail.com </p>
                        <p>9168948474/8692970696</p>
                        <p>E/403, Poonam Orchid, Yashwant Nagar, Virar West, Thane, Maharashtra, India Palghar - 401303,</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><img src="src\components\home\main\socials\facebook.png" alt="Facebook" className="w-8 h-8" /></a>
                            <a href="#"><img src="src\components\home\main\socials\insta.png" alt="Instagram" className="w-8 h-8" /></a>
                            <a href="#"><img src="src\components\home\main\socials\whatsApp.png" alt="Whatsapp" className="w-8 h-8" /></a>
                        </div>
                    </div>

                    {/* Subscribe Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Subscribe</h3>
                        <p className="text-sm mb-4">
                            Subscribe to our newsletter and be among the first to hear about new arrivals, events, and special offers.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Email *"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <label className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" />
                                Yes, subscribe me to your newsletter.
                            </label>
                            <button
                                type="submit"
                                className="bg-black text-white rounded py-2 hover:bg-gray-800 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-600">
                    © 2025 created by shivam srivastava
                </div>
            </div>
        </footer>
    );
};

export default Footer;
