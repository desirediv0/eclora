
const serviceSvgMap = {
    "Laser Hair Reduction (Quad-Technology)": "/services/laser-hair-reduction.svg",
    "Korean Peels": "/services/chemical-peels.svg",
    "Botox & Fillers": "/services/botox-fillers.svg",
    "Skin Boosters (Xinjections)": "/services/skin-boosters.svg",
    "HIFU & RIFU": "/services/hifu.svg",
    "RF for Skin Tightening": "/services/rf-skin.svg",
    "Anti-Ageing Laser Toning": "/services/anti-ageing-laser.svg",
    "Microneedling": "/services/microneedling.svg",
    "Photofacial": "/services/photofacial.svg",
    "Meso Infusion Therapy": "/services/meso-infusion-therapy.svg",
    "Fractional Lasers for Open Pores": "/services/fractional-lasers-open-pores.svg",
    "TCA Cross": "/services/tca-cross.svg",
    "PDRN Therapy": "/services/pdrn-therapy.svg",
    "Acne Treatment": "/services/acne-treatment.svg",
    "Pigmentation Treatment": "/services/pigmentation-treatment.svg",
    "Mole Removal": "/services/mole-removal.svg",
    "Skin Tag Removal": "/services/skin-tag-removal.svg",
    "Warts Removal": "/services/warts-removal.svg",
    "Electrolysis": "/services/electrolysis-white-hairs-permanent.svg",
    "Tattoo Removal": "/services/tattoo-removal.svg",
    "Acne Scar Treatment": "/services/acne-scar-treatment.svg",
    "Hydrafacial & Oxyfacial": "/facials/eclora-signature-glow.svg",
    "Triple LLT Therapy": "/services/triple-llt-light-therapy.svg",
    "QR678 Hair Growth": "/services/qr678-hair-growth.svg",
    "Hair Exosome": "/services/exosomes-next-gen-regenerative.svg",
    "Hair Fall Treatment": "/services/hair-fall-treatment.svg",
    "GFC / PRP": "/services/gfc-prp-face-growth-factor.svg",
};

const facialSvgMap = {
    "Eclora Aesthetics Signature Glow": "/facials/eclora-signature-glow.svg",
    "Hydrafacial & Oxyfacial": "/facials/eclora-signature-glow.svg",
    "Skin Revival Therapy": "/facials/skin-revival-therapy.svg",
    "Platinum Luxe Facial": "/facials/platinum-luxe-facial.svg",
    "Acne Defense Therapy": "/facials/acne-defense-therapy.svg",
};

export const getServiceSvg = (serviceName) => serviceSvgMap[serviceName] ?? null;
export const getFacialSvg = (facialName) => facialSvgMap[facialName] ?? null;

export const services = [
    { id: 1, name: "Laser Hair Reduction (Quad-Technology)", description: "Advanced 4-wavelength technology for efficient and permanent hair reduction across all skin types.", category: "Laser" },
    { id: 2, name: "Korean Peels", description: "Premium medical-grade exfoliation for deep skin reset, even tone, and instant luminosity.", category: "Skin Treatments" },
    { id: 3, name: "Botox & Fillers", description: "Precision volumising and wrinkle relaxation using world-class injectables.", category: "Injectables" },
    { id: 4, name: "Skin Boosters (Xinjections)", description: "Deep hydration (DH) and texture improvement for a radiant, youthful complexion.", category: "Injectables" },
    { id: 5, name: "HIFU & RIFU", description: "Non-surgical face lifting using focused ultrasound and radio frequency for deep tissue remodeling.", category: "Skin Treatments" },
    { id: 6, name: "Microneedling", description: "Precision collagen induction therapy that effectively treats acne scars and improves skin texture.", category: "Skin Treatments" },
    { id: 7, name: "Hydrafacial & Oxyfacial", description: "Multi-step deep cleansing and oxygen infusion for an instant clinic-grade glow.", category: "Facials" },
    { id: 8, name: "TCA Cross", description: "Targeted treatment for deep icepick scars and focused skin restoration.", category: "Skin Treatments" },
    { id: 9, name: "Triple LLT Therapy", description: "Specific medical-grade wavelengths for skin healing and targeted hair regrowth.", category: "Hair Treatments" },
    { id: 10, name: "QR678 Hair Growth", description: "Patented hair regrowth protocol for thinning and hair loss.", category: "Hair Treatments" },
    { id: 11, name: "Hair Exosome", description: "Next-generation regenerative scalp therapy for better hair texture, thickness, and strength.", category: "Hair Treatments" },
    { id: 12, name: "GFC / PRP", description: "Advanced growth factor concentrate therapy to stimulate natural hair growth and density.", category: "Hair Treatments" },
    { id: 13, name: "Anti-Ageing Laser Toning", description: "Target signs of aging with precision laser and advanced wavelengths.", category: "Laser" },
    { id: 14, name: "PDRN Therapy", description: "Tissue repair and skin regeneration treatment using salmon DNA extract.", category: "Skin Treatments" },
    { id: 15, name: "Acne Treatment", description: "Clinical solutions for active acne and underlying inflammation.", category: "Skin Treatments" },
    { id: 16, name: "Pigmentation Treatment", description: "Reduce dark spots and uneven skin tone with medical-grade actives.", category: "Skin Treatments" },
    { id: 17, name: "Mole Removal", description: "Safe, scar-minimal removal of moles and benign skin growths.", category: "Removal" },
    { id: 18, name: "Skin Tag Removal", description: "Quick and painless removal of unwanted skin tags.", category: "Removal" },
    { id: 19, name: "Warts Removal", description: "Clinically eliminate stubborn warts with precision therapy.", category: "Removal" },
    { id: 20, name: "Tattoo Removal", description: "Advanced laser-based tattoo fading and removal.", category: "Removal" },
    { id: 21, name: "Electrolysis", description: "Permanent removal of white & grey hair using precision technology.", category: "Hair Treatments" },
    { id: 22, name: "Hair Fall Treatment", description: "Targeted solutions for various types of hair thinning and loss.", category: "Hair Treatments" },
];

export const categories = ["All", "Skin Treatments", "Laser", "Injectables", "Removal", "Hair Treatments", "Facials"];

export const servicesWithSvg = services.map((service) => ({
    ...service,
    svg: getServiceSvg(service.name),
}));

export const facials = [
    { id: 1, name: "Eclora Aesthetics Signature Glow", description: "Our hero facial combining advanced brightening actives for an instant luminous glow. Ideal for dull, tired skin.", duration: "60 min" },
    { id: 2, name: "Hydrafacial & Oxyfacial", description: "Multi-step deep cleansing and oxygen infusion for an instant clinic-grade glow.", duration: "75 min" },
    { id: 3, name: "Skin Revival Therapy", description: "Targeted therapy to repair damaged skin barrier, restore moisture, and improve overall texture.", duration: "60 min" },
    { id: 4, name: "Platinum Luxe Facial", description: "Our most indulgent treatment using platinum-infused products to firm, lift, and rejuvenate mature skin.", duration: "90 min" },
    { id: 5, name: "Acne Defense Therapy", description: "A deep-cleansing, anti-bacterial facial specifically formulated to combat active acne and prevent breakouts.", duration: "60 min" },
];

export const facialsWithSvg = facials.map((facial) => ({
    ...facial,
    svg: getFacialSvg(facial.name),
}));

export const faqs = [
    { q: "What should I expect on my first visit?", a: "During your first visit, our dermatologist will assess your skin/hair condition, discuss your concerns, and recommend a personalized treatment plan." },
    { q: "Are the treatments safe?", a: "Yes, all our treatments are clinically approved, performed by certified professionals using FDA-cleared equipment calibrated for Indian skin tones." },
    { q: "How many sessions will I need?", a: "The number of sessions varies depending on the treatment and individual response. Your doctor will advise a tailored plan during the consultation." },
    { q: "Is there any downtime after laser treatments?", a: "Most laser treatments have minimal to no downtime. Slight redness may occur for 1-2 days, which is completely normal." },
    { q: "Do you offer packages or discounts?", a: "Yes, we offer customized packages for multiple session treatments. Ask our team for current offers during your consultation." },
    { q: "How do I prepare for a chemical peel?", a: "Avoid sun exposure, retinoids, and exfoliants for at least 5 days before your appointment. Come with clean, makeup-free skin." },
    { q: "What is the difference between HIFU and RF skin tightening?", a: "HIFU targets deeper skin layers using focused ultrasound, ideal for lifting. RF (Radiofrequency) works on collagen remodeling for tightening. Both are non-surgical." },
    { q: "Is Botox painful?", a: "Botox is administered with fine precision and minimal discomfort. A numbing cream can be applied beforehand for your comfort." },
];
