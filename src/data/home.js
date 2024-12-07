import { 
    Clock, Scissors, Award, Gift,
    Users, Crown, Shield
  } from 'lucide-react';

const services = {
    "Classic Services": [
      { name: "Traditional Haircut", price: 30, description: "Precision cut with hot towel finish" },
      { name: "Royal Shave", price: 25, description: "Straight razor shave with premium oils" },
      { name: "Beard Sculpting", price: 20, description: "Expert beard shaping and conditioning" }
    ],
    "Premium Services": [
      { name: "The Gentleman's Package", price: 75, description: "Haircut, shave, and scalp treatment" },
      { name: "Executive Treatment", price: 60, description: "Premium cut with shoulder massage" },
      { name: "Father & Son Special", price: 50, description: "Two haircuts, one great price" }
    ],
    "Grooming Extras": [
      { name: "Hair Coloring", price: 45, description: "Professional gray coverage" },
      { name: "Scalp Treatment", price: 35, description: "Deep conditioning therapy" },
      { name: "Face Mask", price: 25, description: "Rejuvenating skin treatment" }
    ]
};

const vintagePhotos = [
{ year: "1920", description: "Our founding year", image: "https://i.pinimg.com/originals/0a/cf/94/0acf946dd53efd43c0065977789ab9fe.jpg" },
{ year: "1950", description: "Second generation", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVHfA3iOWaK3cnXbt6QerBFJiiK5fLFqDm0a5vKZL99IE-A8eF-DTXFwQg9shuq5uN9N8LRVPm9Ep0IKvbU5rQ1ntZYA99RxaogxB4wh5-ScX0nR6uyBWchtVtuVIPsO3QsthYAiv7nJDB/s1600/2908121682_a15a414912.jpg" },
{ year: "1980", description: "Modern evolution", image: "https://img1.wsimg.com/isteam/ip/0306b732-848a-4fe4-803e-e1c93f900f47/Alaia-0001.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" },
{ year: "Today", description: "Continuing tradition", image: "https://static.giggster.com/images/location/227c2676-8c5b-4296-86c8-e06fea9a42ce/071729cb-363c-48c9-9d9f-45e6ee17290f/full_hd_retina.jpeg" }
];

const barberTeam = [
{
    name: "Master James",
    title: "Head Barber",
    experience: "25 years",
    specialties: ["Classic Cuts", "Royal Shaves", "Beard Styling"],
    image: "https://img.freepik.com/free-photo/side-view-depressed-black-man-portrait_23-2149699085.jpg"
},
{
    name: "Antonio",
    title: "Senior Stylist",
    experience: "18 years",
    specialties: ["Modern Styles", "Hair Coloring", "Facial Treatments"],
    image: "https://cdn.shopify.com/s/files/1/0434/4749/files/toastiestyles_BcdPDh7lnXd_grande.jpg?v=1521563903"
},
{
    name: "Theodore",
    title: "Traditional Barber",
    experience: "20 years",
    specialties: ["Vintage Cuts", "Hot Towel Shaves", "Beard Design"],
    image: "https://heygoldie.com/blog/wp-content/uploads/2021/12/barbershop-terminology-1.jpg"
},
{
    name: "William",
    title: "Style Expert",
    experience: "15 years",
    specialties: ["Contemporary Cuts", "Hair Restoration", "Scalp Treatments"],
    image: "https://cuttersyard.com/wp-content/uploads/2022/06/bannon-morrissy-RxiAV5LC-ww-unsplash-1-scaled.jpg"
}
];

const membershipTiers = [
{
    name: "Distinguished",
    price: "$50/month",
    icon: <Award className="w-12 h-12" />,
    description: "Essential grooming for the modern gentleman",
    benefits: [
    { text: "Priority Appointments", icon: <Clock className="w-5 h-5" /> },
    { text: "10% Off All Services", icon: <Scissors className="w-5 h-5" /> },
    { text: "Complimentary Hot Towel Service", icon: <Gift className="w-5 h-5" /> },
    { text: "Monthly Grooming Consultation", icon: <Users className="w-5 h-5" /> }
    ]
},
{
    name: "Executive",
    price: "$75/month",
    icon: <Crown className="w-12 h-12" />,
    description: "Premium experience for the distinguished client",
    featured: true,
    benefits: [
    { text: "VIP Priority Booking", icon: <Clock className="w-5 h-5" /> },
    { text: "15% Off All Services", icon: <Scissors className="w-5 h-5" /> },
    { text: "Quarterly Complimentary Service", icon: <Gift className="w-5 h-5" /> },
    { text: "Premium Product Sampling", icon: <Gift className="w-5 h-5" /> },
    { text: "Dedicated Personal Barber", icon: <Users className="w-5 h-5" /> }
    ]
},
{
    name: "Royal",
    price: "$100/month",
    icon: <Shield className="w-12 h-12" />,
    description: "Ultimate luxury for the refined gentleman",
    benefits: [
    { text: "24/7 Priority Access", icon: <Clock className="w-5 h-5" /> },
    { text: "20% Off All Services", icon: <Scissors className="w-5 h-5" /> },
    { text: "Monthly Complimentary Service", icon: <Gift className="w-5 h-5" /> },
    { text: "Luxury Grooming Kit", icon: <Gift className="w-5 h-5" /> },
    { text: "Home Service Option", icon: <Users className="w-5 h-5" /> },
    { text: "Exclusive Events Access", icon: <Users className="w-5 h-5" /> }
    ]
}
];

const reviewsData = [
    { id: 1, author: "John D.", rating: 5, text: "Exceptional service!", date: "25/10/2023", verified: true },
    { id: 2, author: "Mike R.", rating: 4, text: "Great experience!", date: "09/12/2023", verified: true },
    { id: 3, author: "David S.", rating: 5, text: "Best barbershop in town!", date: "11/5/2024", verified: true }
  ]

export { services, vintagePhotos, barberTeam, membershipTiers, reviewsData };