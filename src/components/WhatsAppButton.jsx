import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
    <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
    >
        <MessageCircle size={24} />
    </a>
);

export default WhatsAppButton;
