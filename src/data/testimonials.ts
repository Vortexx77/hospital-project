export interface Testimonial {
  id: string;
  name: string;
  type: string;
  rating: number;
  quote: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Emily Wilson',
    type: 'Parent of 3',
    rating: 5,
    quote: 'Dr. Johnson has been our family pediatrician for over 8 years. She truly understands each of my children\'s unique needs and always takes the time to address all our concerns. I couldn\'t imagine taking my kids anywhere else!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Robert Garcia',
    type: 'Patient',
    rating: 5,
    quote: 'The care I\'ve received from Dr. Chen has been exceptional. He takes a thorough approach to my health concerns and explains everything clearly. Since beginning treatment for my hypertension, my numbers have improved significantly.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 'testimonial-3',
    name: 'Sarah Thompson',
    type: 'Mother of a Special Needs Child',
    rating: 5,
    quote: 'Dr. Rodriguez has been a lifeline for our family. Her expertise in developmental pediatrics has made an incredible difference for our son with autism. She\'s compassionate, knowledgeable, and truly invests in her patients\' wellbeing.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 'testimonial-4',
    name: 'Michael Davis',
    type: 'Senior Patient',
    rating: 4,
    quote: 'As someone in my 70s with several chronic conditions, I appreciate Dr. Wilson\'s approach to geriatric care. He considers my quality of life in all treatment decisions and always listens to my concerns. The entire staff is friendly and respectful.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 'testimonial-5',
    name: 'Jennifer Lopez',
    type: 'Parent',
    rating: 5,
    quote: 'My daughter\'s severe allergies were causing her to miss school frequently. Dr. Patel developed a comprehensive management plan that has transformed her life. We\'re grateful for the thorough and caring approach to her treatment.',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg'
  }
];