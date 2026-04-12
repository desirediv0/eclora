"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookAppointmentModal from "@/components/BookAppointmentModal";

export default function ClinicShell({ children }) {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <>
      <Navbar onBookOpen={() => setBookOpen(true)} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <BookAppointmentModal
        open={bookOpen}
        onClose={() => setBookOpen(false)}
      />
    </>
  );
}
