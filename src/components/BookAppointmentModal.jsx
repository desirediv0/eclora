"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { services } from "@/data/services";

const BookAppointmentModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setToast("We'll call you back within 24 hours!");
    setTimeout(() => setToast(null), 4000);
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative p-6 md:p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#4A5240] hover:text-[#2E3527] bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          <div>
            <h2 className="font-heading text-3xl mb-2 text-[#4A5240]">Book Appointment</h2>
            <p className="text-[#6B7280] text-sm mb-6">
              Fill in your details and we&apos;ll get back to you.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-heading text-2xl mb-2 text-[#4A5240]">Thank You!</h3>
                <p className="text-[#6B7280]">
                  We&apos;ll call you back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-[#2B2B2B]
                    focus:outline-none focus:border-[#4A5240] focus:ring-2 focus:ring-[#D4B896]/30 transition-all"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-[#2B2B2B]
                    focus:outline-none focus:border-[#4A5240] focus:ring-2 focus:ring-[#D4B896]/30 transition-all"
                />
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-[#2B2B2B]
                    focus:outline-none focus:border-[#4A5240] focus:ring-2 focus:ring-[#D4B896]/30 transition-all appearance-none"
                >
                  <option value="">Select Service*</option>
                  <option value="General Consultation">General Consultation</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-[#2B2B2B]
                    focus:outline-none focus:border-[#4A5240] focus:ring-2 focus:ring-[#D4B896]/30 transition-all"
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-gray-50 text-sm text-[#2B2B2B]
                    focus:outline-none focus:border-[#4A5240] focus:ring-2 focus:ring-[#D4B896]/30 resize-none transition-all"
                />
                <button type="submit" className="w-full bg-[#4A5240] text-white py-3.5 rounded-xl font-semibold hover:bg-[#2E3527] transition-colors mt-2">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] bg-[#4A5240] text-white
          px-6 py-3 rounded-full shadow-2xl text-sm font-medium animate-fade-up">
          ✅ {toast}
        </div>
      )}
    </>
  );
};

export default BookAppointmentModal;
