"use client";
import Head from "next/head";

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Elena Rodriguez",
      role: "Creative Director",
      bio: "Former fashion editor with a passion for sustainable fashion and trend forecasting.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in contemporary streetwear and luxury fashion.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Sophie Williams",
      role: "Sustainability Lead",
      bio: "Dedicated to ethical sourcing and implementing eco-friendly practices across our supply chain.",
      image: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Customer Experience",
      bio: "Ensuring every customer feels valued and receives exceptional service from start to finish.",
      image: "https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg",
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainable Fashion",
      description: "We prioritize eco-friendly materials and ethical manufacturing processes.",
    },
    {
      icon: "🎨",
      title: "Creative Expression",
      description: "Fashion is art - we celebrate individuality and personal style.",
    },
    {
      icon: "🤝",
      title: "Quality Craftsmanship",
      description: "Every piece is carefully curated and crafted for lasting quality.",
    },
    {
      icon: "💫",
      title: "Trend Forward",
      description: "We stay ahead of fashion trends while maintaining timeless appeal.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "200+", label: "Designer Brands" },
    { number: "100%", label: "Sustainably Sourced" },
    { number: "24/7", label: "Style Support" },
  ];

  return (
    <>
      <Head>
        <title>About Us - Fashion Store | Our Style Story</title>
        <meta name="description" content="Discover our fashion journey, commitment to sustainability, and the team behind your favorite style destination" />
      </Head>

      <div className="min-h-screen bg-[#EFE9E3]">
        <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Our Fashion Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Where style meets substance, and every outfit tells a story</p>
          </div>
        </section>

        <section className="py-16 bg-[#EFE9E3]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe fashion should be accessible, sustainable, and empowering. Our mission is to curate collections that not only make you look good but feel good about your choices.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  From runway trends to everyday essentials, we bring you carefully selected pieces that combine quality craftsmanship with conscious production.
                </p>
                <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                  <p className="text-pink-800 font-semibold italic">"Fashion is not just about what you wear, it's about how you live and the impact you make."</p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Fashion Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#EFE9E3]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">Meet Our Style Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-pink-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Commitment to Sustainability</h2>
                <p className="text-lg text-gray-600 mb-6">We're dedicated to reducing our environmental footprint through:</p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Ethically sourced materials and fair labor practices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Eco-friendly packaging and carbon-neutral shipping
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Supporting local artisans and small designers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Clothing recycling program for old garments
                  </li>
                </ul>
              </div>
              <div className="relative h-96 bg-green-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sustainability" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 font-serif">Join Our Fashion Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Be the first to discover new collections, exclusive deals, and style inspiration.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">Shop New Arrivals</button>
              <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">Follow Our Story</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
