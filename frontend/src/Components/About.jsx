
const About = () => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-10">
            <div className="container mx-auto p-6">
                <h1 className="text-5xl font-extrabold text-center mb-6">About Us</h1>
                <p className="text-xl text-center mb-8">
                    Welcome to our Food Court, where passion for food meets convenience!
                    We’re dedicated to delivering a diverse selection of cuisines straight to your doorstep.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
                        <p className="text-lg">
                            To connect food lovers with their favorite local restaurants, providing
                            an exceptional dining experience right at home.
                        </p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-4 text-center">What We Offer</h2>
                        <ul className="list-disc list-inside text-lg">
                            <li>🍽️ A wide variety of cuisines.</li>
                            <li>⏱️ Fast and reliable delivery.</li>
                            <li>💳 Multiple easy payment options.</li>
                            <li>🌟 A user-friendly app experience.</li>
                        </ul>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold mb-4 text-center">Join Us</h2>
                        <p className="text-lg">
                            Be a part of our community and experience the joy of food
                            delivered to you—fresh, hot, and ready to enjoy!
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-lg font-medium">
                        Together, let's make every meal a celebration!
                    </h3>
                    <p className="text-lg font-semibold mt-2">- The Food Court Team</p>
                </div>
            </div>
        </div>
    );
};

export default About;
