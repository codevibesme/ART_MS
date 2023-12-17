import React from "react";
import { getAllEmails } from "@/app/api";
import EmailList from "@/app/components/EmailList";
const EmailPage = async () => {
  const allEmails = await getAllEmails();
  //   console.log(allEmails);
  return (
    <div className="w-full h-full flex flex-col">
      <EmailList emails={allEmails} />
    </div>
  );
};

export default EmailPage;
