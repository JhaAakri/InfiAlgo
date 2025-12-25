import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page ",

  // other metadata
  description: "This is Support page "
};

const SupportPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default SupportPage;
