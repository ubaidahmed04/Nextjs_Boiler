const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FBE8A6", 
        orange: "#F2BA1D", 
        navy: "#08183A", 
        graysky: "#E9EEF1", 
        bluesky: "#D2FDFF", 
        content: "#273553", 
      },
    },
   
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '**',
      },
    ],
  },
  plugins: [],
});

