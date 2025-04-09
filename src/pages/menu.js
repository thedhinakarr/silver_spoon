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

const MenuPage = () => {
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
            Explore our carefully crafted selection of authentic Indian dishes
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold tracking-wider text-amber-600 uppercase">Silver Spoon</h2>
            <h3 className="mt-2 text-4xl font-bold text-gray-900">Authentic Indian Cuisine</h3>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              All our dishes are prepared with freshly ground spices and high-quality ingredients to bring you the true flavors of India.
            </p>
          </div>

          {/* MAIN COURSE CHICKEN */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-amber-200 pb-2">MAIN COURSE CHICKEN</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Butter Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Creamy curry sås med grillat cashewmjöl, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Korma</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med grillat kyckling, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Vindaloo</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med grillat kyckling, cashewmjöl, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Wok i gjutjärnsgryte med stekt kyckling, paprika, grönsaker och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mughlai Chicken</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med grillat kyckling, nötter, russin och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Egg Curry</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med ägg, potatis, grönsaker, gröna chilies och indier kryddning med ris och sallad.</p>
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
                    <h3 className="text-xl font-semibold">Paneer Butter Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Creamy sås med Indisk grillad ost, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Malai Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med Indisk grillad ost, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med tofu, grönsaker, paprika, lök och indier kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Palak Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Grön sås med spenat, cashewmjöl, Indisk grillad ost och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Shahi Paneer</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Gul curry sås med Indisk grillad ost, cashewnötter och indier kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Dal Makhani</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Svarta linser med ris, grönsaker, grädde och indier kryddning med ris och sallad.</p>
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
                  <p className="text-gray-600 italic">Tomatpuré sås med kikärtor, ingefära, vitlök, och indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Rajma Masala</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpuré sås med kidneybönor, vitlök, ingefära och indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Mushroom Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med ärter och stekt svamp, lök och indisk kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Dal Tadka</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Tomatpuré sås med gula linser, kidneybönor, ingefära, vitlök och indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Aloo Matar</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med ärter, potatis och indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Saag</h3>
                    <p className="font-bold text-amber-600">149 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med lök, tomat, ingefära, vitlök och indisk kryddning med ris och sallad.</p>
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
                  <p className="text-gray-600 italic">Masala sås, grillad lammfilé, grönsaker, ris, indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Saag Gosht (Lamb)</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Spenat sås med gosht, paprika, cashewnötter och indisk kryddning med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Lamb</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Masala curry sås med stekt lök, paprika, grönsaker, cashewnötter och indisk kryddning med ris och sallad.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Kadhai Shrimp (Räkor)</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Röd curry sås med räkor, grönsaker, gröna cashewnötter med ris och sallad.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Chicken Biryani</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk stekt Basmati ris med kyckling, lök, cashewnötter och grönsaker.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Vegetarian Pulao</h3>
                    <p className="font-bold text-amber-600">189 kr</p>
                  </div>
                  <p className="text-gray-600 italic">Indisk stekt Basmati ris med olika grönsaker och gröna ärter.</p>
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
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Garlic Naan</h3>
                  <p className="font-bold text-amber-600">35 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Butter Naan</h3>
                  <p className="font-bold text-amber-600">35 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Garlic Butter</h3>
                  <p className="font-bold text-amber-600">45 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Indian Papadum</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Raita</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Plain Lassi</h3>
                  <p className="font-bold text-amber-600">35 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Vegetable Raita</h3>
                  <p className="font-bold text-amber-600">45 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Fruit Raita</h3>
                  <p className="font-bold text-amber-600">45 kr</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Pickles</h3>
                  <p className="font-bold text-amber-600">25 kr</p>
                </div>
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
                    <p>Fanta (olika smak)</p>
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
    <title>Menu | Silver Spoon Indian Cuisine</title>
    <meta name="description" content="Explore our authentic Indian menu featuring traditional favorites and chef's specials. Fresh ingredients and authentic recipes from Silver Spoon in Karlskrona." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default MenuPage;
