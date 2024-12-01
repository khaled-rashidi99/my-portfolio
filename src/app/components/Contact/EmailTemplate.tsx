import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h2>Hello, I&apos;m {fullName}</h2>
    <h3>My Email:</h3>
    <p>{email}</p>
    {phoneNumber && phoneNumber.length > 0 && (
      <>
        <h3>My Phone Number:</h3>
        <p>{phoneNumber}</p>
      </>
    )}
    <br />
    <p>{message}</p>
    <br />
    <p>Best Regards,</p>
    <h3>{fullName}</h3>
  </div>
);
