export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  education: string[];
  certifications: string[];
  bio: string;
  featured: boolean;
  imageUrl: string;
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Pediatrician, Medical Director',
    specialties: ['Pediatrics', 'Newborn Care', 'Adolescent Medicine'],
    education: [
      'MD, Johns Hopkins University School of Medicine',
      'Residency in Pediatrics, Cincinnati Children\'s Hospital'
    ],
    certifications: [
      'American Board of Pediatrics',
      'Fellow, American Academy of Pediatrics'
    ],
    bio: 'Dr. Johnson has over 15 years of experience in pediatric care. She specializes in newborn care, childhood development, and adolescent medicine. Her patient-centered approach focuses on preventive care and building long-lasting relationships with families.',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/5214947/pexels-photo-5214947.jpeg'
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Family Physician',
    specialties: ['Family Medicine', 'Preventive Care', 'Chronic Disease Management'],
    education: [
      'MD, University of Michigan Medical School',
      'Residency in Family Medicine, Ohio State University Medical Center'
    ],
    certifications: [
      'American Board of Family Medicine',
      'Advanced Cardiac Life Support'
    ],
    bio: 'Dr. Chen believes in a holistic approach to family medicine, addressing both physical and emotional well-being. He has particular expertise in managing chronic conditions like diabetes and hypertension with a focus on lifestyle interventions alongside medical treatment.',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'
  },
  {
    id: 'dr-amelia-rodriguez',
    name: 'Dr. Amelia Rodriguez',
    title: 'Pediatrician',
    specialties: ['Pediatrics', 'Developmental Pediatrics', 'Behavioral Health'],
    education: [
      'MD, University of California, San Francisco',
      'Residency in Pediatrics, Children\'s Hospital of Philadelphia'
    ],
    certifications: [
      'American Board of Pediatrics',
      'Developmental-Behavioral Pediatrics Certification'
    ],
    bio: 'Dr. Rodriguez specializes in developmental and behavioral pediatrics, helping children with developmental delays, ADHD, autism spectrum disorders, and other behavioral concerns. She works closely with families to develop comprehensive care plans tailored to each child\'s needs.',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/5207087/pexels-photo-5207087.jpeg'
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    title: 'Family Physician',
    specialties: ['Family Medicine', 'Sports Medicine', 'Geriatric Care'],
    education: [
      'MD, Duke University School of Medicine',
      'Residency in Family Medicine, Mayo Clinic'
    ],
    certifications: [
      'American Board of Family Medicine',
      'Certificate of Added Qualification in Sports Medicine'
    ],
    bio: 'Dr. Wilson provides care for patients of all ages, with special interests in sports medicine and geriatric care. His approach emphasizes preventive care, physical activity, and maintaining quality of life at all stages.',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
  },
  {
    id: 'dr-lisa-patel',
    name: 'Dr. Lisa Patel',
    title: 'Pediatrician',
    specialties: ['Pediatrics', 'Allergy & Asthma', 'Infectious Diseases'],
    education: [
      'MD, Northwestern University Feinberg School of Medicine',
      'Residency in Pediatrics, Ann & Robert H. Lurie Children\'s Hospital of Chicago'
    ],
    certifications: [
      'American Board of Pediatrics',
      'Pediatric Advanced Life Support'
    ],
    bio: 'Dr. Patel has special expertise in pediatric allergies, asthma, and infectious diseases. She is passionate about helping children with chronic respiratory conditions lead active, healthy lives through proper management and education.',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg'
  },
  {
    id: 'dr-robert-thompson',
    name: 'Dr. Robert Thompson',
    title: 'Family Physician',
    specialties: ['Family Medicine', 'Men\'s Health', 'Preventive Care'],
    education: [
      'MD, University of Pennsylvania School of Medicine',
      'Residency in Family Medicine, Thomas Jefferson University Hospital'
    ],
    certifications: [
      'American Board of Family Medicine'
    ],
    bio: 'Dr. Thompson focuses on comprehensive primary care for the whole family with a particular interest in men\'s health issues. He emphasizes preventive care and screenings to help patients maintain optimal health and catch potential problems early.',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'
  },
  {
    id: 'dr-michelle-parker',
    name: 'Dr. Michelle Parker',
    title: 'Family Nurse Practitioner',
    specialties: ['Family Medicine', 'Women\'s Health', 'Pediatrics'],
    education: [
      'DNP, Ohio State University College of Nursing',
      'MSN, Family Nurse Practitioner, University of Cincinnati'
    ],
    certifications: [
      'American Academy of Nurse Practitioners Certification',
      'Basic Life Support'
    ],
    bio: 'Dr. Parker is a family nurse practitioner with extensive experience in primary care for patients of all ages. She has a special interest in women\'s health and pediatrics, and she takes pride in building strong relationships with her patients.',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg'
  },
  {
    id: 'dr-david-kim',
    name: 'Dr. David Kim',
    title: 'Pediatrician',
    specialties: ['Pediatrics', 'Adolescent Medicine', 'Mental Health'],
    education: [
      'MD, Baylor College of Medicine',
      'Residency in Pediatrics, Texas Children\'s Hospital'
    ],
    certifications: [
      'American Board of Pediatrics',
      'Mental Health First Aid'
    ],
    bio: 'Dr. Kim specializes in adolescent medicine and pediatric mental health. He is dedicated to supporting the emotional and physical well-being of children and teenagers, helping them navigate the challenges of growing up in today\'s world.',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/5407257/pexels-photo-5407257.jpeg'
  }
];