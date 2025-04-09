import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

// Add global styles to ensure no underlines on links
const globalStyles = `
  a {
    text-decoration: none !important;
  }
  .no-underline {
    text-decoration: none !important;
  }
  nav a:hover {
    text-decoration: none !important;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      food: file(relativePath: { eq: "food.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      bread: file(relativePath: { eq: "bread.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            height: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      b1: file(relativePath: { eq: "b1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      b2: file(relativePath: { eq: "b2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      b3: file(relativePath: { eq: "b3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      pi: file(relativePath: { eq: "pi.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      rin: file(relativePath: { eq: "rin.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      rout: file(relativePath: { eq: "rout.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);
  const heroImage = getImage(data.food);
  const aboutImage = getImage(data.b2);

  // Gallery images array
  const galleryImages = [
    { image: getImage(data.b1), title: "Signature Appetizer" },
    { image: getImage(data.b3), title: "Chef's Special" },
    { image: getImage(data.pi), title: "Traditional Curry" },
    { image: getImage(data.rin), title: "Bread Selection" },
    { image: getImage(data.rout), title: "Authentic Desserts" },
    { image: getImage(data.b2), title: "Tandoori Specialties" }
  ];

  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      {/* Add global styles */}
      <style>{globalStyles}</style>

      {/* Navbar - Elegant with gold accents */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-3 no-underline">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-amber-600">
                  <GatsbyImage
                    image={logoImage}
                    alt="Silver Spoon Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">
                  Silver Spoon
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-amber-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Home
                </a>
                <a href="/menu" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Menu
                </a>
                <a href="#about" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  About
                </a>
                <a href="#features" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Highlights
                </a>
                <a href="#gallery" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Gallery
                </a>
                <a href="#contact" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Luxurious and elegant */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 z-0">
          <GatsbyImage
            image={heroImage}
            alt="Authentic Indian curry with naan bread and rice"
            className="w-full h-full"
            objectFit="cover"
            style={{ position: 'absolute' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 sm:py-40 z-20">
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Experience <span className="text-amber-400">Authentic</span> Indian Cuisine
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-lg">
              Discover a rich tapestry of flavors and spices in the heart of Karlskrona at Silver Spoon.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/menu" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-lg transition duration-200 transform hover:-translate-y-1 no-underline">
                View Menu
              </a>
              {/* <a href="#features" className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 font-semibold rounded-lg transition duration-200 no-underline">

              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Elegant and clean */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase">What Sets Us Apart</h2>
            <h3 className="mt-2 text-4xl font-bold text-gray-900">Culinary Excellence</h3>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Every dish tells a story of tradition, passion, and culinary artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🍽",
                title: "Diverse Menu",
                description: "From classic favorites to contemporary creations, our menu offers something for every palate."
              },
              {
                icon: "🔥",
                title: "Live Grill",
                description: "Watch our chefs work their magic at our live grill station for a truly immersive experience."
              },
              {
                icon: "👨‍🍳",
                title: "Master Chefs",
                description: "Our culinary team brings decades of experience from the finest kitchens across India."
              },
              {
                icon: "⚡",
                title: "Impeccable Service",
                description: "We pride ourselves on attention to detail and personalized service for every guest."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Warm and inviting */}
      <section id="about" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <GatsbyImage
                  image={aboutImage}
                  alt="Our restaurant interior"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase">Our Story</h2>
              <h3 className="mt-2 text-4xl font-bold text-gray-900">A Culinary Journey</h3>
              <div className="mt-6 text-gray-700 space-y-4">
                <p>
                  Founded in 2010, Silver Spoon began with a simple mission: to bring the authentic flavors of India to Karlskrona while creating a dining experience that feels like home.
                </p>
                <p>
                  Our chefs have mastered the art of blending traditional recipes with contemporary techniques, resulting in dishes that honor their heritage while appealing to modern tastes.
                </p>
                <p>
                  Every ingredient is carefully sourced, every spice thoughtfully measured, and every dish meticulously prepared to ensure an unforgettable culinary journey.
                </p>
              </div>
              <div className="mt-8">
                <a href="#gallery" className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow transition duration-200 no-underline">
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Modern masonry style */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase">Visual Feast</h2>
            <h3 className="mt-2 text-4xl font-bold text-gray-900">Our Culinary Creations</h3>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              A glimpse into the artistry that goes into every dish we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="w-full h-72 transform group-hover:scale-105 transition duration-500">
                  <GatsbyImage
                    image={item.image}
                    alt={item.title}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white text-xl font-bold">{item.title}</h4>
                    <p className="text-gray-300 mt-2">Prepared with authentic spices and fresh ingredients.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium rounded-lg transition duration-200 no-underline">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Rich and elegant */}
      <footer id="contact" className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-amber-600">
                  <GatsbyImage
                    image={logoImage}
                    alt="Silver Spoon Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-white">Silver Spoon</span>
              </div>
              <p className="mt-4 text-gray-400">
                Authentic Indian cuisine in a warm and inviting atmosphere.
              </p>
              <p className="mt-4 text-gray-400">
                This is a portfolio showcase of our restaurant's ambiance and offerings.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
              <address className="not-italic text-gray-400">
                <p>Parkgatan 1, 371 14 Karlskrona</p>
                <p className="mt-3">info@silverspoon.com</p>
                <p>+46 455-61 13 01</p>
              </address>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Monday - Friday: 11:00 - 20:00</li>
                <li>Saturday: 10:00 - 20:00</li>
                <li>Sunday: 10:00 - 20:00</li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-500 no-underline">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 no-underline">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separate bottom footer with centered copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-6">
            <p className="text-gray-400 text-center">&copy; 2025 Silver Spoon • Powered by webitup.co • All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export const Head = () => (
  <>
    <title>Silver Spoon | Karlskrona Indian Cuisine</title>
    <meta name="description" content="Experience authentic Indian cuisine at Silver Spoon in Karlskrona. Fresh ingredients, traditional recipes, and a warm atmosphere." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

// Note: This component requires the following Gatsby plugins:
// - gatsby-plugin-image
// - gatsby-plugin-sharp
// - gatsby-source-filesystem
//
// Make sure they are properly configured in gatsby-config.js

export default IndexPage;
