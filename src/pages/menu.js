import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

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

  // Pizza Klass 1
  const klass1 = [
    "1. Margherita - Tomatsås, Ost",
    "2. Funghi - Tomatsås, Ost, Champinjoner (färska)",
    "3. Vesuvio - Tomatsås, Ost, Skinka",
    "4. Calzone (inbakad) - Tomatsås, Ost, Skinka",
    "5. La gondola - Tomatsås, Ost, Skinka, Champinjoner (färska)",
    "6. Capricciosa - Tomatsås, Ost, Skinka, Räkor",
    "7. Hawaii special - Tomatsås, Ost, Skinka, Ananas",
    "8. Marinara - Tomatsås, Ost, Räkor, Musslor",
    "9. Pescatore - Tomatsås, Ost, Tonfisk, Lök",
    "10. Bolognese - Tomatsås, Ost, Köttfärssås",
    "11. La mafia - Tomatsås, Ost, Bacon, Lök, Paprika (färsk)",
    "12. Vegetariana - Tomatsås, Ost, Champinjoner (färska), Lök, Oliver, Paprika (färsk)"
  ];

  // Pizza Klass 2
  const klass2 = [
    "13. Mama mia - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "14. Tropicana - Tomatsås, Ost, Skinka, Ananas, Banan",
    "15. Gudadera - Tomatsås, Ost, Tonfisk, Musslor, Paprika (färsk)",
    "16. Bambino (inbakad) - Tomatsås, Ost, Köttfärssås, Ananas",
    "17. Quattro stagioni - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska), Musslor",
    "18. Calzone super (inbakad) - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "19. Paradiso - Tomatsås, Ost, Skinka, Räkor, Ananas, Champinjoner (färska)",
    "20. Maraddona - Tomatsås, Ost, Skinka, Salami, Champinjoner (färska)",
    "21. Calzone bolognese (inbakad) - Tomatsås, Ost, Köttfärssås, Lök",
    "22. Chapman - Tomatsås, Ost, Salami, Köttfärssås, Bacon",
    "23. Bambino super - Tomatsås, Ost, Köttfärssås, Räkor, Ananas, Lök, Vitlök",
    "24. Rimini - Tomatsås, Ost, Bacon, Lök, Ägg",
    "25. Hawaii special - Tomatsås, Ost, Skinka, Räkor, Ananas",
    "26. Ronaldo - Tomatsås, Ost, Oxfilé, Bearnaisesås",
    "27. Big Brother - Tomatsås, Ost, Oxfilé, Bearnaisesås, Lök, Tomater (färska), Jalapeño",
    "28. Roma - Tomatsås, Ost, Skinka, Fetaost, Bearnaisesås, Kebabkött (nötköt)",
    "29. Ciao Ciao - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Vitlök",
    "30. Festpizza - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Bearnaisesås",
    "31. Trossö special - Tomatsås, Ost, Salami, Oxfilé (marinerad), Champinjoner (färska), Lök, Tomater (färska)",
    "32. Fiskarepizza - Tomatsås, Ost, Tonfisk, Räkor, Musslor",
    "33. Grönsakspizza - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Grönsaksbland",
    "34. Mexicana - Tomatsås, Ost, Köttfärs, Bacon, Lök, Paprika (färsk)",
    "35. Lambada - Tomatsås, Ost, Skinka, Oxfilé, Köttfärs, Bacon, Champinjoner (färska), Bearnaisesås",
    "36. Valentino special - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök",
    "37. Karlskrona special - Tomatsås, Ost, Bacon, Oxfilé (marinerad), Lök, Paprika (färsk)",
    "38. Hercules - Tomatsås, Ost, Oxfilé, Bearnaisesås, Curry, Banan",
    "39. Kycklingpizza - Tomatsås, Ost, Kyckling, Kebabsås mild, Lök, Tomater (färska), Isbergssallad",
    "40. Kebabpizza - Tomatsås, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni, Kebabkött (nötköt)",
    "41. Venezia - Tomatsås, Ost, Skinka, Kebabsås mild, Kebabkött (nötköt)",
    "42. Gyrospizza special - Tomatsås, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni, Gyroskött (fläskkarre)",
    "43. Halva halva - Tomatsås, Ost, Kebabsås mild, Gyroskött (fläskkarre), Kebabkött (nötköt)",
    "44. Red Devil - Tomatsås, Ost, Salami, Oxfilé, Bearnaisesås, Jalapeño, Feferoni",
    "45. Bonjour - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök, Paprika (färsk)",
    "46. Palermo - Tomatsås, Ost, Skinka, Oxfilé, Champinjoner (färska), Bearnaisesås",
    "47. Calzone special (inbakad) - Tomatsås, Ost, Skinka, Kebabsås mild, Kebabkött (nötköt)",
    "48. Bagarens favorit - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Lök, Vitlök",
    "49. Mazziani - Tomatsås, Ost, Oxfilé (marinerad), Tomater (färska), Vitlök",
    "50. Vikingbåt (Halvinbakad) - Tomatsås, Ost, Champinjoner (färska), Lök, Vitlök, Gyroskött (fläskkarre)",
    "51. Ciao bella (Halvinbakad) - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Lök, Vitlök",
    "52. Indiana - Tomatsås, Ost, Oxfilé (marinerad), Curry, Banan, Tomater (färska)",
    "53. Bahamas - Tomatsås, Ost, Kyckling, Curry, Banan, Jordnötter",
    "54. Black and White - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Bearnaisesås",
    "55. Sopsäck - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska), Vitlök",
    "56. Mozzarella - Tomatsås, Ost, Pepperoni, Champinjoner (färsk), Bearnaisesås, Mozzarellaost",
    "57. Fur - Tomatsås, Ost, Champinjoner (färska), Lök, Tomater (färska), Vitlök",
    "58. Pommes - Tomatsås, Ost, Kebabsås mild, Kebabkött (nötköt), Pommes frites",
    "59. Osttpizza - Tomatsås, Ost, Fetaost, Vitlök, Gorgonzaolost, Mozzarellaost"
  ];

  // Rollopizza
  const rollopizza = [
    "60. Rollo mardino - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök",
    "61. Rollo kebab - Tomatsås, Ost, Kebabsås mild, Champinjoner (färska), Kebabkött (nötköt)",
    "62. Rollo Chapman - Tomatsås, Ost, Köttfärs, Lök, Tomater (färska), Isbergssallad, Kebabkött (nötköt)",
    "63. Rollo Alanya - Tomatsås, Ost, Kyckling, Oxfilé, Champinjoner (färska), Lök",
    "64. Rollo Oscar - Tomatsås, Ost, Skinka, Räkor, Ananas, Champinjoner (färska)"
  ];

    // Langos
  const langos = [
    "1. Langos med kebab - Kebabkött (nötköt), Ost, Gräddfil, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "2. Langos med gyroskött - Gyroskött (fläskkarre), Ost, Gräddfil, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "3. Langos med kyckling - Kyckling, Ost, Gräddfil, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "4. Langos med tonfisk - Tonfisk, Ost, Gräddfil, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "5. Langos med räkor - Räkor, Ost, Gräddfil, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Sallads
  const sallader = [
    "1. Kebabsallad - Kebabkött (nötköt), Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "2. Kyckingsallad - Kyckling, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "3. Falafelsallad - Falafel, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "4. Tonfisksallad - Tonfisk, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "5. Räksallad - Räkor, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "6. Hawaiisallad - Skinka, Fetaost, Ananas, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "7. Vegetarisk sallad - Fetaost, Champinjoner (färska), Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka, Paprika (färsk)",
    "8. Gyrossallad - Gyroskött (fläskkarre), Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka"
  ];

  // Falafel dishes
  const falafel = [
    "23. Falafel med bröd - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "24. Falafel med bröd special - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "25. Falafelrulle - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "26. Falafelrulle special - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "27. Falafeltallrik med pommes - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "28. Falafeltallrik special med pommes - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Hamburgers
  const hamburgare = [
    "1. Hamburgare 90g - Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "2. Hamburgertallrik 90g - Pommes frites, Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "3. Hamburgare 150g - Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "4. Hamburgertallrik 150g - Pommes frites, Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök"
  ];

  // Kebab plates
  const kebabTallrik = [
    "1. Kebab med bröd - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "2. Kebab med bröd special - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "3. Kebabrulle - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "4. Kebabrulle special - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "5. Kebabtallrik med pommes - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "6. Kebabtallrik special med pommes - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "7. Kebabtallrik med ris - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "8. Kebabtallrik special med ris - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Gyros dishes
  const gyros = [
    "9. Gyros med bröd - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "10. Gyros med bröd special - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "11. Gyrosrulle - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "12. Gyrosrulle special - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "13. Gyrostallrik med pommes - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "14. Gyrostallrik special med pommes - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Chicken dishes
  const kyckling = [
    "15. Kyckling med bröd - Kyckling, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "16. Kyckling med bröd special - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "17. Kycklingrulle - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "18. Kycklingrulle special - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "19. Kycklingtallrik med pommes - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "20. Kycklingtallrik special med pommes - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "21. Kycklingtallrik med ris - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "22. Kycklingtallrik special med ris - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

const MenuPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
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
            height: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);
  const heroImage = getImage(data.food);

  return (
    <main className="font-sans antialiased text-gray-800 bg-white">
      {/* Add global styles */}
      <style>{globalStyles}</style>

      {/* Navbar - Elegant with gold accents */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 no-underline">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <GatsbyImage
                    image={logoImage}
                    alt="Silver Spoon Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-2xl font-serif text-gray-900 tracking-tight">
                  Silver Spoon
                </span>
              </Link>
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
                <Link to="/" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Home
                </Link>
                <Link to="/menu" className="text-amber-700 border-b-2 border-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Menu
                </Link>
                <Link to="/#about" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  About
                </Link>
                <Link to="/#features" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Highlights
                </Link>
                <Link to="/#gallery" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Gallery
                </Link>
                <Link to="/#contact" className="text-gray-800 hover:text-amber-700 px-3 py-2 font-medium transition-colors duration-200 no-underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Smaller for menu page */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <GatsbyImage
            image={heroImage}
            alt="Authentic Indian cuisine"
            className="w-full h-full"
            objectFit="cover"
            style={{ position: 'absolute' }}
          />
        </div>
        <div className="relative mx-auto px-6 py-20 z-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our carefully crafted selection of authentic Indian dishes.
          </p>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Call us at +46 455-61 13 01 to place an order!
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-white">

        
        <div className="max-w-5xl mx-auto px-6">

          {/* SNACKS SECTION */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">SNACKS</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold"> Papadum</h3>
                    <p className="font-bold text-amber-600">40 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Krisspiga linsbröd med söt mango chutney.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">French Fries</h3>
                    <p className="font-bold text-amber-600">60 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Pommes med indisk krydda och tillbehör stark sås.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Samosa</h3>
                    <p className="font-bold text-amber-600">60 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Internationella indisk fyler med potatis och ärter och olika kryddning.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Spring Roll (Veg.)</h3>
                    <p className="font-bold text-amber-600">60 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Vårruller med grönsaker med sweet chilli sås.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Shish Kebab Sallad</h3>
                    <p className="font-bold text-amber-600">65 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk shish kebab med olika grönsaker med chili bearnaise sås.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Tikka</h3>
                    <p className="font-bold text-amber-600">65 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk chicken tikka med olika grönsaker och sweet chilli sås</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Alloo Tikki</h3>
                    <p className="font-bold text-amber-600">65 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Potatis bullar med salad med sweet chilli och chilli bernaise sås.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Shahi Falafal</h3>
                    <p className="font-bold text-amber-600">65 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Isbergssallad med stekt champinjoner, lök, paprika med chilli bearnaise sås.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN COURSE CHICKEN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">MAIN COURSE CHICKEN</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Cream Korma</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med grädde, cashewnötter och indien kryddning. med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Butter Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Orange curry sås med grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Vindaloo</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Kyckling gryta med stekt lök och paprika, grädde, cashewnötter med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mughlai Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Grön curry sås med grädde, chashewnötter och indien krydning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Masala Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry med ingefära, vitlök, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Saag Meat</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Tomato Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomat sås med färska vitlök, ingefära och grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mushroom Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Champinjoner sås med stekt lök, paprika, grädde, chaswenötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Egg Curry</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med kokt ägg, potatis, grädde, cashewnötter, och indien kryddning med ris och sallad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN COURSE VEGETARIAN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">MAIN COURSE VEGETARIAN</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Shahi Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med grädde, cashewnötter, färskost och indien kryddning. med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Palak Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med grädde, cashewnötter, färskost och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med stekt lök, paprika, färskost, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Matar Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med ärter, färskost, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Paneer Butter Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Orang curry sås med fäskost, grädde, chashewnötter och indien kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Dal Makhani</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med svarta linser, kidneyböner, ingefära, vitlök, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chana Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med kikärtor, ingefära, vitlök, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Rajma Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med kidneyböner, vitlök, ingefära, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Aloo Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med ärter, potatis, grädde, chaswenötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mushroom Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med ärter och stekt svamp, lök, grädde, cashewnötter, och indien kryddning med ris och sallad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN COURSE VEGAN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">MAIN COURSE VEGAN</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chana Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med kikärtor, ingefära, vitlök, och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Rajma Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med kidneyböner, vitlök, ingefära och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mushroom Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med ärter och stekt svamp, lök och indien kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Dal Tadka</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpure sås med svarta linser, kidneyböner, ingefära, vitlök och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Aloo Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med ärter, potatis och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Saag</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med lök, tomat, ingefära, vitlök och indien kryddning med ris och sallad.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPECIALS */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">SPECIALS</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Masala Lamb</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala sås, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Saag Gosh (Lamb)</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med gosh, grädde, cashewnötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Lamb</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med stekt lök, paprika, grädde, chaswenötter och indien kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Shrimp Curry (Räkor)</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med räkor, grädde, cashwenötter och indien kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Shrimp (Räkor)</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Räkor gryta med stekt lök och paprika, grädde, cashewnötter med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Biryani</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk stekt Basmati ris med paprika, lök, stekt kyckling och grädde sås.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Vegetarian Pulao</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk stekt Basmati ris med olika grönsakaer och grädde sås.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDES */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">SIDES</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Plain Naan</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Vetemjöl, salt, söcker, jäst och matölja.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Garlic Naan</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Vetemjöl, salt, söcker, jäst, matölja och färsk vitlök.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Plain Roti</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Vetemjöl, salt, söcker, jäst, matölja.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Garlic Roti</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Vetemjöl, salt, söcker, jäst, matölja och färsk vitlök.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Lacha Parantha</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Vetemjöl, salt, söcker, jäst, matölja.</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Bhatura</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <p className="text-gray-600 italic">Frytera bröd tillbehör vetemjöl, salt, söcker, jäst och matölja.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Plain Raita</h3>
                  <p className="font-bold text-amber-600">20 kr</p>
                </div>
                <p className="text-gray-600 italic">Yoghurt</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Vegetable Raita</h3>
                  <p className="font-bold text-amber-600">45 kr</p>
                </div>
                <p className="text-gray-600 italic">Yoghurt med tomat, gurka, indien kryddning.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Fruit Raita</h3>
                  <p className="font-bold text-amber-600">45 kr</p>
                </div>
                <p className="text-gray-600 italic">Söt yoghurt med olika frukter.</p>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Pickle</h3>
                  <p className="font-bold text-amber-600">20 kr</p>
                </div>
                <p className="text-gray-600 italic">Mixed eller mango pickle</p>
              </div>
            </div>
          </div>

          {/*Pizzas*/}
          {/* PIZZA SECTION - KLASS 1 */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">PIZZA - KLASS 1</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {klass1.slice(0, Math.ceil(klass1.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">120 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {klass1.slice(Math.ceil(klass1.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index + Math.ceil(klass1.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">120 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* PIZZA SECTION - KLASS 2 */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">PIZZA - KLASS 2</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {klass2.slice(0, Math.ceil(klass2.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">149 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {klass2.slice(Math.ceil(klass2.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index + Math.ceil(klass2.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">149 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* ROLLO PIZZA SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">ROLLO PIZZA</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {rollopizza.slice(0, Math.ceil(rollopizza.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">160 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {rollopizza.slice(Math.ceil(rollopizza.length / 2)).map((pizza, index) => {
        const [name, ingredients] = pizza.split(' - ');
        return (
          <div key={index + Math.ceil(rollopizza.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">160 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* LANGOS SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">LANGOS</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {langos.slice(0, Math.ceil(langos.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">135 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {langos.slice(Math.ceil(langos.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(langos.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">135 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* SALLADER SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">SALLADER</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {sallader.slice(0, Math.ceil(sallader.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">120 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {sallader.slice(Math.ceil(sallader.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(sallader.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">120 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* KEBAB SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">KEBAB</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {kebabTallrik.slice(0, Math.ceil(kebabTallrik.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">{index < 3 ? '135' : '135'} kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {kebabTallrik.slice(Math.ceil(kebabTallrik.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(kebabTallrik.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">135 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* GYROS SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">GYROS</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {gyros.slice(0, Math.ceil(gyros.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">{index < 3 ? '135' : '135'} kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {gyros.slice(Math.ceil(gyros.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(gyros.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">135 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* KYCKLING SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">KYCKLING</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {kyckling.slice(0, Math.ceil(kyckling.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">{index < 3 ? '135' : '135'} kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {kyckling.slice(Math.ceil(kyckling.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(kyckling.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">135 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* FALAFEL SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">FALAFEL</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {falafel.slice(0, Math.ceil(falafel.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">{index < 3 ? '120' : '120'} kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
    <div className="space-y-6">
      {falafel.slice(Math.ceil(falafel.length / 2)).map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index + Math.ceil(falafel.length / 2)}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">120 kr</p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>

{/* HAMBURGARE SECTION */}
<div className="mb-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">HAMBURGARE</h2>
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-6">
      {hamburgare.map((item, index) => {
        const [name, ingredients] = item.split(' - ');
        return (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="font-bold text-amber-600">
                {index === 0 ? '90' : index === 1 ? '105' : index === 2 ? '110' : '120'} kr
              </p>
            </div>
            <p className="text-gray-600 italic">{ingredients}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>
          

          {/* DESSERTS */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">DESSERT</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kladkaka med visporädde</h3>
                    <p className="font-bold text-amber-600">49 kr</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Gulab Jamun (Indisk efterrätt)</h3>
                    <p className="font-bold text-amber-600">69 kr</p>
                  </div>
                  <p className="text-gray-600">Tillbehör: Vanilj glass</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Rainbow Icecream</h3>
                    <p className="font-bold text-amber-600">49 kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DRINKS */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">DRINKS</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">LÄSK</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Pepsi</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Pepsi Max</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Coca Cola</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Coca Cola Zero</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>7up</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Ramlösa</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Ramlösa Citron</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Zingo</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Festis (olika smak)</p>
                    <p className="font-semibold text-amber-600">25 kr</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">LASSI</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Mango Lassi</p>
                    <p className="font-semibold text-amber-600">45 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Fruit Lassi</p>
                    <p className="font-semibold text-amber-600">45 kr</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ÖL</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Cobra (Indisk öl)</p>
                    <p className="font-semibold text-amber-600">99 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Kingfisher</p>
                    <p className="font-semibold text-amber-600">99 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Mariestads Old OX</p>
                    <p className="font-semibold text-amber-600">85 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Mariestads</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Eriksberg</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Norrlands Guld</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Falcon</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">VIN</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p>Ett Glas Vit Vin</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Ett Glas Röd Vin</p>
                    <p className="font-semibold text-amber-600">75 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>En Flaska Vit Vin</p>
                    <p className="font-semibold text-amber-600">250 kr</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>En Flaska Röd Vin</p>
                    <p className="font-semibold text-amber-600">250 kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Notes */}
          <div className="mt-16 bg-amber-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Information</h3>
            <p className="text-gray-700 mb-4">
              We're happy to accommodate dietary restrictions. Please inform your server about any allergies or special requests.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">✓</span> Vegetarian options available
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">✓</span> Vegan options available
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">✓</span> Gluten-free options available
              </li>
              <li className="flex items-center">
                <span className="text-amber-600 mr-2">✓</span> Adjustable spice levels
              </li>
            </ul>
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
                <p className="mt-3">silverspoon774@gmail.com</p>
                <p>+46 455-61 13 01</p>
              </address>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Monday - Thursday: 11:00 - 21:00</li>
                <li>Friday: 11:00 - 22:00</li>
                <li>Saturday: 12:00 - 22:00</li>
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
    <title>Menu | Silver Spoon Indian Cuisine</title>
    <meta name="description" content="Explore our authentic Indian menu featuring traditional favorites and chef's specials. Fresh ingredients and authentic recipes from Silver Spoon in Karlskrona." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default MenuPage;
