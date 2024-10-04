const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-10">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
        <h3 className="text-xl text-center mb-2">Sachin</h3>
        <h4 className="text-lg text-center mb-4">
          Email:{" "}
          <a
            href="mailto:prajapatsachin7078@gmail.com"
            className="text-blue-200 underline"
          >
            prajapatsachin7078@gmail.com
          </a>
        </h4>

        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>

        <p className="text-center text-lg mt-8">
          We’d love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
      </div>
    </div>
  );
};

export default Contact;
