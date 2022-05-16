/* -----------------------------------
 * Helper Function to Load JSON Data *
 ----------------------------------- */

function loadData() {
  return indexData;
}

/* -----------
 * JSON Data *
 ----------- */
const indexData = {
  hero: {
    tagline: "Taking care of cats as if they were our own",
    sub_tagline:
      "Groomycat provides a fun experience for your beloved cats while groomed by our certified pet care specialist.",
    btn_link: "services.html",
    btn_text: "Our Services",
    img_link: "assets/img/hero-img.png",
  },
  featured: {
    header: "Featured Services",
    featured_cards: [
      {
        img_link: "assets/img/featured-card-img-1.jpg",
        title: "Basic Groom",
        description:
          "Essential groom for cats, we provide you with loving experience and variety of standard groom services",
        btn_link: "services.html",
        btn_text: "Read more",
      },
      {
        img_link: "assets/img/featured-card-img-2.jpg",
        title: "Premium Groom",
        description:
          "Everything in Basic Groom plus fine treatments from our professionals for your beloved cats",
        btn_link: "services.html",
        btn_text: "Read more",
      },
      {
        img_link: "assets/img/featured-card-img-3.jpg",
        title: "Deluxe Groom",
        description:
          "Luxurious grooming experience for cats, we provide you with our highest and fully featured grooming services",
        btn_link: "services.html",
        btn_text: "Read more",
      },
    ],
  },
  testimonial: {
    header: "What clients say about Groomycat",
    sub_header_html: `<p>Spoiler alert... <br> They loved us! yeay</p>`,
    active: {
      img_link: "assets/img/testimonial-img-1.jpg",
      quote:
        "Groomycat delivers the best grooming experience for my cat, they are the best!",
      testifier: "— Mawar",
    },
    non_actives: [
      {
        img_link: "assets/img/testimonial-img-2.jpg",
        quote:
          "I have never seen my cat so well groomed before, I guess that's why Groomycat is the best in town",
        testifier: "— Yunita",
      },
      {
        img_link: "assets/img/testimonial-img-3.jpg",
        quote:
          "Never doubt Groomycat capabilities, they are professional and well trained, and most importantly they can make my cat happy!",
        testifier: "— Maudy",
      },
    ],
  },
  see_us: {
    header: "Come and See Us",
    sub_header: "Business Hours and Location",
    business_days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    business_hours: [
      "8:30am - 4:00pm",
      "8:30am - 4:00pm",
      "8:30am - 4:00pm",
      "8:30am - 4:00pm",
      "8:30am - 4:00pm",
      "9:00am - 3:00pm",
      "9:00am - 3:00pm",
    ],
    business_loc_map_link:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3954.4836276587166!2d109.2511412!3d-7.6310231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654128eaaaaaab%3A0x3e90bcf5beb75031!2sStasiun%20Kroya!5e0!3m2!1sen!2sid!4v1652691755142!5m2!1sen!2sid",
    business_loc_html: `<p><i class="ri-map-pin-fill"></i>  Stasiun Kroya st, Kec. Kroya, Kabupaten Cilacap, Jawa Tengah 53282</p>`,
  },
};
