// Animedic Structured Market Dataset (Anchored at Rawamangun, East Jakarta)
const ANIMEDIC_DATA = {
  baseLocation: {
    name: "Rawamangun, East Jakarta, Indonesia",
    lat: -6.1944,
    lng: 106.8892
  },

  vetSpecialties: [
    "General Care",
    "Internal Medicine",
    "Dermatologist",
    "Surgeon",
    "Neurologist",
    "Animal Behaviorist"
  ],

  groomerSpecialties: [
    "Basic Groomer",
    "Styling Groomer",
    "Spa Groomer",
    "Medical Groomer"
  ],

  petTypes: ["Cat", "Dog", "Rabbit", "Hamster", "Bird", "Other"],

  vets: [
    {
      id: "vet-1",
      name: "Nadia Kusuma",
      pdhiLicense: "PDHI-DKI-2024-0841",
      specialty: "General Care",
      location: "Rawamangun",
      distanceKm: 0.9,
      rating: 4.9,
      consultPrice: 15000,
      homeVisitPrice: 175000,
      experienceYears: 7,
      supportedPets: ["Cat", "Dog", "Rabbit"],
      availableSlots: ["09:00", "11:30", "14:00", "16:30"]
    },
    {
      id: "vet-2",
      name: "Dimas Pratama",
      pdhiLicense: "PDHI-DKI-2023-1120",
      specialty: "General Care",
      location: "Pulomas",
      distanceKm: 1.6,
      rating: 4.8,
      consultPrice: 15000,
      homeVisitPrice: 185000,
      experienceYears: 8,
      supportedPets: ["Dog", "Cat", "Bird"],
      availableSlots: ["10:00", "13:00", "15:30", "18:00"]
    },
    {
      id: "vet-3",
      name: "Ratna Wijaya",
      pdhiLicense: "PDHI-DKI-2024-0392",
      specialty: "General Care",
      location: "Kayu Putih",
      distanceKm: 1.9,
      rating: 5.0,
      consultPrice: 10000,
      homeVisitPrice: 165000,
      experienceYears: 6,
      supportedPets: ["Cat", "Dog", "Rabbit", "Hamster"],
      availableSlots: ["08:30", "11:00", "14:30", "17:00"]
    },
    {
      id: "vet-4",
      name: "Hendra Gunawan",
      pdhiLicense: "PDHI-DKI-2022-0715",
      specialty: "Internal Medicine",
      location: "Cipinang",
      distanceKm: 2.7,
      rating: 4.9,
      consultPrice: 30000,
      homeVisitPrice: 235000,
      experienceYears: 11,
      supportedPets: ["Cat", "Dog"],
      availableSlots: ["09:30", "12:00", "15:00"]
    },
    {
      id: "vet-5",
      name: "Sinta Maharani",
      pdhiLicense: "PDHI-DKI-2024-0518",
      specialty: "Dermatologist",
      location: "Cempaka Putih",
      distanceKm: 3.4,
      rating: 4.8,
      consultPrice: 25000,
      homeVisitPrice: 210000,
      experienceYears: 7,
      supportedPets: ["Cat", "Dog", "Rabbit"],
      availableSlots: ["10:30", "13:30", "16:00"]
    },
    {
      id: "vet-6",
      name: "Arif Wibowo",
      pdhiLicense: "PDHI-DKI-2023-0904",
      specialty: "General Care",
      location: "Matraman",
      distanceKm: 3.8,
      rating: 4.9,
      consultPrice: 20000,
      homeVisitPrice: 220000,
      experienceYears: 9,
      supportedPets: ["Rabbit", "Hamster", "Bird", "Other", "Cat"],
      availableSlots: ["09:00", "12:30", "16:30"]
    },
    {
      id: "vet-7",
      name: "Clara Santoso",
      pdhiLicense: "PDHI-DKI-2024-1044",
      specialty: "Internal Medicine",
      location: "Kelapa Gading",
      distanceKm: 4.6,
      rating: 5.0,
      consultPrice: 30000,
      homeVisitPrice: 215000,
      experienceYears: 8,
      supportedPets: ["Cat", "Dog"],
      availableSlots: ["10:00", "14:00", "17:30"]
    },
    {
      id: "vet-8",
      name: "Reza Mahendra",
      pdhiLicense: "PDHI-DKI-2022-0619",
      specialty: "General Care",
      location: "Pondok Bambu",
      distanceKm: 5.2,
      rating: 4.7,
      consultPrice: 10000,
      homeVisitPrice: 170000,
      experienceYears: 5,
      supportedPets: ["Dog", "Cat", "Other"],
      availableSlots: ["08:00", "11:30", "15:00", "18:30"]
    },
    {
      id: "vet-9",
      name: "Putri Larasati",
      pdhiLicense: "PDHI-DKI-2023-1288",
      specialty: "Internal Medicine",
      location: "Duren Sawit",
      distanceKm: 6.1,
      rating: 4.8,
      consultPrice: 25000,
      homeVisitPrice: 195000,
      experienceYears: 6,
      supportedPets: ["Cat", "Dog", "Rabbit"],
      availableSlots: ["09:00", "13:00", "16:00"]
    },
    {
      id: "vet-10",
      name: "Bagus Setiawan",
      pdhiLicense: "PDHI-DKI-2021-0452",
      specialty: "Internal Medicine",
      location: "Sunter",
      distanceKm: 7.3,
      rating: 4.9,
      consultPrice: 35000,
      homeVisitPrice: 275000,
      experienceYears: 13,
      supportedPets: ["Dog", "Cat"],
      availableSlots: ["10:00", "14:30"]
    },
    {
      id: "vet-11",
      name: "Maya Puspita",
      pdhiLicense: "PDHI-DKI-2024-0210",
      specialty: "Dermatologist",
      location: "Tebet",
      distanceKm: 8.1,
      rating: 4.8,
      consultPrice: 25000,
      homeVisitPrice: 225000,
      experienceYears: 7,
      supportedPets: ["Cat", "Dog", "Hamster"],
      availableSlots: ["11:00", "15:00", "17:00"]
    },
    {
      id: "vet-12",
      name: "Kevin Halim",
      pdhiLicense: "PDHI-DKI-2023-0771",
      specialty: "Surgeon",
      location: "Menteng",
      distanceKm: 9.4,
      rating: 4.9,
      consultPrice: 40000,
      homeVisitPrice: 260000,
      experienceYears: 10,
      supportedPets: ["Dog", "Cat", "Rabbit"],
      availableSlots: ["09:30", "13:30", "16:30"]
    },
    {
      id: "vet-13",
      name: "Anisa Rahmawati",
      pdhiLicense: "PDHI-DKI-2024-1315",
      specialty: "Neurologist",
      location: "Kuningan",
      distanceKm: 7.8,
      rating: 4.9,
      consultPrice: 40000,
      homeVisitPrice: 270000,
      experienceYears: 9,
      supportedPets: ["Dog", "Cat"],
      availableSlots: ["10:00", "14:00", "17:00"]
    },
    {
      id: "vet-14",
      name: "Fajar Nugroho",
      pdhiLicense: "PDHI-DKI-2023-1402",
      specialty: "Animal Behaviorist",
      location: "Kemayoran",
      distanceKm: 5.9,
      rating: 4.8,
      consultPrice: 35000,
      homeVisitPrice: 215000,
      experienceYears: 8,
      supportedPets: ["Cat", "Dog", "Bird", "Other"],
      availableSlots: ["09:30", "13:00", "16:00"]
    }
  ],

  groomers: [
    {
      id: "grm-1",
      name: "PawCare Mobile Grooming",
      certification: "Certified Pet Groomer",
      specialty: "Basic Groomer",
      location: "Rawamangun",
      distanceKm: 1.1,
      rating: 4.9,
      basePrice: 125000,
      supportedPets: ["Cat", "Dog"]
    },
    {
      id: "grm-2",
      name: "Raka Feline Groomer",
      certification: "Feline Low-Stress Certified",
      specialty: "Spa Groomer",
      location: "Pulomas",
      distanceKm: 1.8,
      rating: 5.0,
      basePrice: 135000,
      supportedPets: ["Cat"]
    },
    {
      id: "grm-3",
      name: "BuluBersih Home Spa",
      certification: "Certified Pet Groomer",
      specialty: "Medical Groomer",
      location: "Cipinang",
      distanceKm: 2.6,
      rating: 4.8,
      basePrice: 110000,
      supportedPets: ["Cat", "Dog"]
    },
    {
      id: "grm-4",
      name: "Mochi & Co. Pet Grooming",
      certification: "Small Pet & Rabbit Certified",
      specialty: "Basic Groomer",
      location: "Matraman",
      distanceKm: 3.9,
      rating: 4.9,
      basePrice: 115000,
      supportedPets: ["Rabbit", "Hamster", "Cat", "Other"]
    },
    {
      id: "grm-5",
      name: "Dinda Gentle Grooming",
      certification: "Certified Pet Groomer",
      specialty: "Styling Groomer",
      location: "Kelapa Gading",
      distanceKm: 4.9,
      rating: 4.8,
      basePrice: 185000,
      supportedPets: ["Dog", "Cat"]
    },
    {
      id: "grm-6",
      name: "Jakarta Mobile Pet Salon",
      certification: "Certified Pet Groomer",
      specialty: "Styling Groomer",
      location: "Pondok Kelapa",
      distanceKm: 6.7,
      rating: 4.7,
      basePrice: 230000,
      supportedPets: ["Dog", "Cat"]
    },
    {
      id: "grm-7",
      name: "KlinPaw Express Grooming",
      certification: "Certified Pet Groomer",
      specialty: "Medical Groomer",
      location: "Tebet",
      distanceKm: 8.2,
      rating: 4.8,
      basePrice: 145000,
      supportedPets: ["Cat", "Dog"]
    },
    {
      id: "grm-8",
      name: "Kayu Putih Paws Studio",
      certification: "Certified Pet Groomer",
      specialty: "Spa Groomer",
      location: "Kayu Putih",
      distanceKm: 1.5,
      rating: 4.9,
      basePrice: 140000,
      supportedPets: ["Cat", "Dog", "Rabbit"]
    },
    {
      id: "grm-9",
      name: "Cempaka Gentle Groom",
      certification: "Certified Pet Groomer",
      specialty: "Basic Groomer",
      location: "Cempaka Putih",
      distanceKm: 3.2,
      rating: 4.8,
      basePrice: 120000,
      supportedPets: ["Cat", "Dog", "Bird", "Other"]
    }
  ],

  petHotels: [
    {
      id: "hot-1",
      name: "Rawamangun Cat Villa",
      type: "Pet Hotel",
      location: "Rawamangun",
      distanceKm: 0.8,
      rating: 4.9,
      pricePerNight: 95000,
      availableSlots: 4,
      amenities: ["24/7 CCTV", "AC Private Suite", "Daily Photo Updates", "Vet On-Call"],
      supportedPets: ["Cat"]
    },
    {
      id: "hot-2",
      name: "Pulomas Paws Resort",
      type: "Pet Hotel",
      location: "Pulomas",
      distanceKm: 1.7,
      rating: 4.8,
      pricePerNight: 145000,
      availableSlots: 3,
      amenities: ["Indoor Play Yard", "AC Private Suite", "24/7 CCTV", "Vet On-Call"],
      supportedPets: ["Dog", "Cat"]
    },
    {
      id: "hot-3",
      name: "Cipinang Cozy Pet Boarding",
      type: "Verified Home Sitter",
      location: "Cipinang",
      distanceKm: 2.9,
      rating: 4.9,
      pricePerNight: 85000,
      availableSlots: 2,
      amenities: ["Cage-Free Home", "Daily Photo Updates", "Small Pet Friendly"],
      supportedPets: ["Cat", "Rabbit", "Hamster", "Other"]
    },
    {
      id: "hot-4",
      name: "Kelapa Gading Pet Sanctuary",
      type: "Pet Hotel",
      location: "Kelapa Gading",
      distanceKm: 4.8,
      rating: 5.0,
      pricePerNight: 175000,
      availableSlots: 5,
      amenities: ["24/7 CCTV", "Air Purifier Rooms", "Daily Video Call", "Vet On-Call"],
      supportedPets: ["Cat", "Dog"]
    },
    {
      id: "hot-5",
      name: "Tebet Homey Pet Sitter",
      type: "Verified Home Sitter",
      location: "Tebet",
      distanceKm: 7.9,
      rating: 4.8,
      pricePerNight: 110000,
      availableSlots: 3,
      amenities: ["Quiet Home Setting", "1-on-1 Care", "Daily Photo Updates"],
      supportedPets: ["Cat", "Dog", "Rabbit", "Bird"]
    },
    {
      id: "hot-6",
      name: "Menteng Boutique Pet Hotel",
      type: "Pet Hotel",
      location: "Menteng",
      distanceKm: 8.8,
      rating: 4.9,
      pricePerNight: 210000,
      availableSlots: 6,
      amenities: ["Luxury AC Suite", "24/7 CCTV", "Vet On-Call", "Grooming Add-on"],
      supportedPets: ["Cat", "Dog"]
    }
  ],

  pharmacies: [
    {
      id: "pharm-1",
      name: "Rawamangun Vet Pharmacy",
      location: "Rawamangun",
      distanceKm: 0.7,
      rating: 4.9,
      estDelivery: "20-30 mins",
      deliveryFee: 12000
    },
    {
      id: "pharm-2",
      name: "Pulomas Pet Apotek",
      location: "Pulomas",
      distanceKm: 1.5,
      rating: 4.8,
      estDelivery: "25-35 mins",
      deliveryFee: 15000
    },
    {
      id: "pharm-3",
      name: "Kayu Putih Animal Meds",
      location: "Kayu Putih",
      distanceKm: 1.9,
      rating: 4.9,
      estDelivery: "25-40 mins",
      deliveryFee: 16000
    },
    {
      id: "pharm-4",
      name: "Cipinang PetCare Pharmacy",
      location: "Cipinang",
      distanceKm: 2.8,
      rating: 4.8,
      estDelivery: "30-45 mins",
      deliveryFee: 18000
    },
    {
      id: "pharm-5",
      name: "Cempaka Putih Pet Apotek",
      location: "Cempaka Putih",
      distanceKm: 3.3,
      rating: 4.7,
      estDelivery: "35-45 mins",
      deliveryFee: 20000
    },
    {
      id: "pharm-6",
      name: "Matraman Companion Pharmacy",
      location: "Matraman",
      distanceKm: 3.9,
      rating: 4.9,
      estDelivery: "35-50 mins",
      deliveryFee: 22000
    },
    {
      id: "pharm-7",
      name: "Kelapa Gading VetRx",
      location: "Kelapa Gading",
      distanceKm: 4.7,
      rating: 5.0,
      estDelivery: "40-55 mins",
      deliveryFee: 25000
    },
    {
      id: "pharm-8",
      name: "Pondok Bambu Vet Dispensary",
      location: "Pondok Bambu",
      distanceKm: 5.4,
      rating: 4.8,
      estDelivery: "45-60 mins",
      deliveryFee: 26000
    }
  ],

  pharmacy: [
    {
      id: "ph-1",
      name: "Spot-On Flea & Tick Drops (3 Pipettes)",
      category: "Preventative & Flea/Tick (OTC)",
      price: 145000,
      requiresPrescription: false,
      description: "Monthly topical protection against fleas, ticks, and ear mites for cats and dogs."
    },
    {
      id: "ph-2",
      name: "Gentle Botanical Ear Cleanser 100ml",
      category: "Preventative & Flea/Tick (OTC)",
      price: 68000,
      requiresPrescription: false,
      description: "Alcohol-free ear wash that dissolves wax buildup and prevents odor."
    },
    {
      id: "ph-3",
      name: "Digestive Probiotic Paste 30g",
      category: "Preventative & Flea/Tick (OTC)",
      price: 89000,
      requiresPrescription: false,
      description: "Supports healthy gut flora during mild digestive upset or travel stress."
    },
    {
      id: "ph-4",
      name: "Broad-Spectrum Deworming Tablets (2 Pack)",
      category: "Preventative & Flea/Tick (OTC)",
      price: 55000,
      requiresPrescription: false,
      description: "Routine quarterly intestinal parasite control for adult cats and dogs."
    },
    {
      id: "ph-5",
      name: "Urinary Care Therapeutic Dry Food 1.5kg",
      category: "Therapeutic Nutrition",
      price: 245000,
      requiresPrescription: false,
      description: "Balanced mineral nutrition formulated to support feline urinary tract health."
    },
    {
      id: "ph-6",
      name: "Gastrointestinal Recovery Wet Food (4 Cans)",
      category: "Therapeutic Nutrition",
      price: 165000,
      requiresPrescription: false,
      description: "Highly digestible energy-dense recovery diet for pets with low appetite."
    },
    {
      id: "ph-7",
      name: "Hypoallergenic Skin & Coat Formula 2kg",
      category: "Therapeutic Nutrition",
      price: 320000,
      requiresPrescription: false,
      description: "Hydrolyzed protein diet designed to reduce allergic skin reactions."
    },
    {
      id: "ph-8",
      name: "Amoxicillin-Clavulanate Vet 50mg (Rx)",
      category: "Prescription Medications (Rx)",
      price: 115000,
      requiresPrescription: true,
      description: "Prescription broad-spectrum veterinary antibiotic. Requires verified physical vet exam."
    },
    {
      id: "ph-9",
      name: "Meloxicam Oral Suspension 15ml (Rx)",
      category: "Prescription Medications (Rx)",
      price: 185000,
      requiresPrescription: true,
      description: "Prescription anti-inflammatory and pain relief. Requires verified physical vet exam."
    },
    {
      id: "ph-10",
      name: "Ketoconazole Medicated Antifungal Drops (Rx)",
      category: "Prescription Medications (Rx)",
      price: 135000,
      requiresPrescription: true,
      description: "Targeted prescription dermatology treatment for fungal skin infections."
    }
  ]
};
