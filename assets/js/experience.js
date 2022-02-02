AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Freelancing",
    cardImage: "assets/images/experience-page/freelance.jpg",
    place: "Fiverr",
    time: "(Jul, 2021 - present)",
    desp: "<li>Completed numerous project as a python developer, data analyst with experties in machine learning and computer vision.</li><li>Five Star rating in 6+ project in python.</li>"
  },
  // {
  //   title: "Personal projects",
  //   cardImage: "assets/images/experience-page/python.png",
  //   place: "private",
  //   time: "(aug, 2019 - present)",
  //   desp: "<li>Computer vision :- Human Detection, Pose Estimation, Automatic Attendance System, Object detection.</li><li>Natural language processing :- Sentiment Analysis, Text Genertion, Website Review Analysis.</li><li>Other :- Machine Learning Model Training, Web Scrapping, Internet of Things(IoT), voice Assistance and Data Analysis</li>",
  // }
];

const showCardsExperience2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card cardex card1ex">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body card-bodyex">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading pre-headingex">${place}</span><br>
              <span class="author authorex">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCardsExperience2);


// Volunteership Cards
//
// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];
//
// const showCardsExperience = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `
//       <div class="cardex volunteerCardex" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
//
//       <img src="${cardImage}" height="250" width="65" class="card-imgex" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
//
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCardsExperience);


// Hackathon Section

//
// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "The Uplift Project",
//     subtitle: "Metor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//   },
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//   },
//   {
//     title: "PitchTeen",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/pitchteen.png",
//     desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//   },
//   {
//     title: "Hack-A-Solution",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hackasolution.png",
//     desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//   },
//   {
//     title: "UniGlobe Hacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/uniglobe.png",
//     desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//   },
//   {
//     title: "AtlasHacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/atlas.png",
//     desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//   },
//   {
//     title: "NeoHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/neo.png",
//     desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//   },
//   {
//     title: "Mission Inspired",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/mission.png",
//     desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//   },
//   {
//     title: "Hack3",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hack3.png",
//     desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//   },
//   {
//     title: "JITHack",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/jithack.png",
//     desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//   },
//   {
//     title: "Recess Hacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/recess.png",
//     desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//   },
//   {
//     title: "Citro Tech",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/citro.png",
//     desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//   },
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//   }
//
//
// ];
//
// const showCardsExperience3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp}) =>
//       (output += `
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="#" class="blog-slider__button">Read More</a>
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCardsExperience3);
