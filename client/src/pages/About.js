import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our mission is to provide you with more than just timekeeping devices. We believe that a watch is an extension of your personality, a symbol of your unique taste and aspirations. Our collection is carefully curated to offer a variety of watch styles, from classic elegance to modern innovation, so you can find the perfect match for every occasion.We understand the significance of a watch, not only as a stylish accessory but also as a reliable timekeeping companion. That's why we source our watches from reputable brands and artisans known for their exceptional craftsmanship and attention to detail. Each timepiece in our collection undergoes rigorous quality checks to ensure it meets the highest standards of accuracy and durability.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;