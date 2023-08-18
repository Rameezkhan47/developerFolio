/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rameez Khan",
  title: "Hi all, I'm Rameez",
  subTitle: emoji(
    "A passionate Mobile Applications (Flutter) and Full Stack Developer having an experience of building Mobile and Web applications with Flutter / JavaScript / Reactjs / Nodejs. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WQUaP1YhV-ZakNunFX0ydgFUuPUknPBn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rameezkhan47",
  linkedin: "https://www.linkedin.com/in/rameez-m-khan/",
  gmail: "rameezmuhammadkhan47@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services like Firebase")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "icons8-flutter-100"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "MongoDB",
      fontAwesomeClassname: "icons8-flutter-100"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NED University of Engineering and Technology",
      logo: require("./assets/images/NEDUET.png"),
      subHeader: "Bachelor of Engineering in Electrical Engineering",
      duration: "Dec 2016 - Oct 2020",
      descBullets: ["CGPA: 3.29"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "HeapStash Global",
      companylogo: require("./assets/images/heapstash2.jpeg"),
      date: "March 2023 – Present",
      desc: "Major Responsibilities include:",
      descBullets: [
        "Translating UI/UX designs into functional and responsive mobile and web app interfaces.",
        // "Implementing state management techniques (Provider, GetX) to manage and synchronize app states effectively.",
        "Writing clean, maintainable, and well-documented code following Flutter's best practices and guidelines.",
        "Integrating third-party APIs, libraries, and services like firebase to add functionalities such as authentication, push notifications, and payment gateways like Stripe or Paypal",
        "Troubleshooting and resolving technical issues and bugs."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "HeapStash Global",
      companylogo: require("./assets/images/heapstash2.jpeg"),
      date: "March 2023 – Present",
      desc: "During my internship, I successfully learned Flutter and utilized my skills to create a web application version of an existing mobile app, implementing the MVC (Model-View-Controller) pattern for optimal organization and efficiency. I used state management by incorporating the powerful GetX library. Additionally, I leveraged Firebase for authentication and storage functionalities, guaranteeing secure user access and efficient data management.",
      descBullets: [


        
      ]
    },
    {
      role: "Bootcamp-Trainee",
      company: "Contour Software",
      companylogo: require("./assets/images/contour.jpeg"),
      date: "Nov 2022 – Feb 2023",
      desc: "The 3-month industry led MERN stack bootcamp covers the basics of web development and the MERN stack through hands-on exercises and projects. It includes introduction to web development, MongoDB, ExpressJS, ReactJS, NodeJS, Authentication and Authorization."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked </on>

const bigProjects = {
  title: "Projects",

  projects: [
   
    {
      images: [
        require("./assets/images/mob1.png"),
        require("./assets/images/mob2.png"),
        require("./assets/images/mob3.png"),
        require("./assets/images/mob4.png"),
        require("./assets/images/mob5.png"),
        require("./assets/images/mob6.png"),
        require("./assets/images/mob7.png"),
        require("./assets/images/mob8.png"),
        require("./assets/images/mob9.png"),
        require("./assets/images/mob10.png"),
        require("./assets/images/mob11.png"),
        require("./assets/images/mob12.png"),
        require("./assets/images/mob13.png"),
        require("./assets/images/mob14.png"),
        require("./assets/images/mob15.png"),
        require("./assets/images/mob16.png"),
        require("./assets/images/mob17.png"),
        require("./assets/images/mob18.png"),
        require("./assets/images/mob19.png")

        // Add more image paths here
      ],
      projectName: "XUXEM Mobile App",
      projectDesc: "This mobile application is made from flutter with firebase as backend. The app follows MVC pattern and utilises GetX for state management. This application includes features such as Authentication and Authorization, Payment Gateways Stripe and Paypal, Push Notifications. The app used Firebase Cloud Storage as database to store and retrieve user generated content"
      //   {
      //     name: "XUXEM Mobile App",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },

    {
      images: [
        require("./assets/images/web1.png"),
        require("./assets/images/web2.png"),
        require("./assets/images/web3.png"),
        require("./assets/images/web4.png"),
        require("./assets/images/web5.png"),
        require("./assets/images/web6.png"),
        require("./assets/images/web7.png"),
        require("./assets/images/web8.png"),
        require("./assets/images/web9.png"),
        require("./assets/images/web10.png"),
        require("./assets/images/web11.png"),
        require("./assets/images/web12.png"),
        require("./assets/images/web13.png"),
        require("./assets/images/web14.png"),
        require("./assets/images/web15.png"),
        require("./assets/images/web16.png"),
        require("./assets/images/web17.png")

        // Add more image paths here
      ],
      projectName: "XUXEM Web App",
      projectDesc: "This  application showcases the advantages of reusability and the invaluable role played by design patterns and principles. By adhering to the MVC (Model-View-Controller) pattern for the mobile app component, I was able to effectively segregated Modules, Controllers, and Models from the View, thus enabling me to effortlessly create a distinct user interface (UI) with minimal adjustments to the existing controllers. This approach not only streamlined the development process, but also enhanced the maintainability of the code base, resulting in significantly reduced development time"      

  
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },

    
    {
      images: [
        require("./assets/images/netflix1.jpg"),
        require("./assets/images/netflix2.png"),
        require("./assets/images/netflix3.jpg"),
        require("./assets/images/netflix4.jpg"),
        require("./assets/images/netflix5.jpg"),
        require("./assets/images/netflix6.jpg"),
        require("./assets/images/netflix7.jpg"),
        require("./assets/images/netflix8.jpg"),


        // Add more image paths here
      ],
      projectName: "Netflix Clone",
      projectDesc: "In this project I created a Netflix clone using the MERN (MongoDB, Express.js, React, Node.js) stack along with Redux for state management. The goal of the project was to replicate the functionality and user experience of Netflix while utilizing Redux to manage the application state. This project includes features such as sser authentication and authorisation using firebase authentication API, browse and search for movies and TV shows by name or genre, add/remove movies and TV shows to their watchlist, can like/dislike content. This project utilises the TMDB API to gather information about the movies and TV shows that are available"
    }
    // Add more project objects here
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
    // "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Bootcamp by Techlift at Contour Software",
      subtitle: "The three month industry led MERN stack bootcamp covers the basics of web development and the MERN stack through hands-on exercises and projects. It includes introduction to web development, MongoDB, ExpressJS, ReactJS, NodeJS, Authentication and Authorization.",
      image: require("./assets/images/techlift_cert.jpg"),
      imageAlt: "Contour Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      subtitle: "A comprehensive course for ReactJS development. The course covers topics such as components and props, state and hooks, forms and events, routing with React Router, advanced hooks, custom hooks, redux, context API, authentication and deployment.",
      image: require("./assets/images/react.jpeg"),
      imageAlt: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      footerLink: [
        {
          name: "Certification ",
          url: "https://www.udemy.com/certificate/UC-719678aa-75b5-43f6-8ed6-d26dcf121142/"
        }
      ]
    },
    {
      title: "The Web Developer's Bootcamp 2022",
      subtitle:
        "A detailed course that covers the basics of wide range of topics related to web development, including HTML, CSS, JavaScript, Bootstrap, DOM manipulation, NodeJS, ExpressJS, MongoDB, RESTful APIs, Authentication and Authorization, and Deployment.",
      image: require("./assets/images/udemy-colt-steele.jpeg"),
      imageAlt: "The Web Developer's Bootcamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-d1287987-5418-412d-a88a-2f523cdb6424/"
        },

      ]
    },



  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3482622889",
  email_address: "rameezmuhammadkhan47@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
