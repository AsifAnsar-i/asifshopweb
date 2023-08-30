import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><h3>Privacy Policy</h3></p>
          <p>Order Fulfillment: Processing orders, customer support.
Communication: Updates, promotional offers.
Personalization: Tailoring product suggestions.
Legal Compliance: Abiding by laws.Service Providers: Shipping, payments, marketing.
Legal Obligations: Responding to legal requests.
Business Transfers : Mergers, acquisitions.
With Consent : For specific purposes.Unsubscribe: Opt-out of marketing.
Account Access: Modify or delete data.
Cookie Management: Control cookie settings.Encryption: SSL for data protection.
Limited Access: Authorized personnel only.
Regular Audits: Security assessments.We don't knowingly collect children's data.Our policy is limited to our website.Changes will be communicated.
</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;