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
  username: "Zeeshan Shaikh",
  title: "Hi all, I'm Zeeshan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Spring / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cY8rhJYKuCgegNd202RRIul7XCEY4FZT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/proteinshaikh",
  linkedin: "https://www.linkedin.com/in/zeeshanshaikh001/",
  gmail: "ershaikhzeeshan@gmail.com",
  medium: "https://medium.com/@proteinshaikh",
  stackoverflow: "https://stackoverflow.com/users/8742455/zeeshan-shaikh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡  Design and implement efficient microservices and RESTful APIs with Spring Boot"),
    emoji(
      "⚡  Leverage the power of multi-threading and collections in Java for high-performance applications"
    )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Mumbai",
      logo: require("./assets/images/muLogo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Telecommunication",
      duration: "July 2012 - June 2016",
           
    },
    {
      schoolName: "Wilson College",
      logo: require("./assets/images/wilson.png"),
      subHeader: "HSC",
      duration: "June 2010 - May 2012",
    },
    {
      schoolName: "St. Xavier's High School",
      logo: require("./assets/images/xaviers.png"),
      subHeader: "SSC",
      duration: "June 2007 - May 2010",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Developer",
      company: "Mashreq Bank",
      companylogo: require("./assets/images/mashreqLogo.png"),
      date: "Oct 2023 – Present",
      desc: "Designed, developed, and maintained microservices architecture for money transfer applications using Java Spring Boot.",
      descBullets: [
        "Implemented RESTful APIs to facilitate secure and efficient communication between microservices and external systems.",
        "Integrated third-party payment gateways and financial APIs to enable seamless fund transfer functionality.",
        "Optimized performance and scalability of microservices by employing industry best practices and design patterns.",
        "Conducted thorough testing, including unit tests and integration tests, to ensure the reliability and stability of the money transfer platform."
      ],
      techStack: ["Java 8+", "Spring Boot", "Microservices", "MS SQL", "Kafka"]
    },
    {
      role: "Consultant",
      company: "Saudi Investment Bank",
      companylogo: require("./assets/images/saibLogo.png"),
      date: "Apr 2023 – Sep 2023",
      desc: "Project: Saudi Investment Bank- Travel Card App",
      descBullets: [
        "Designed and implemented a suite of microservices for a high traffic banking and travel card application to enhance functionality, improve user experience, and ensure scalability.",
        "Developed services for various components of the app including but not limited to login, onboarding, card management, account management, fund transfers, and loyalty programs.",
        "Adhered to and advocated for software development best practices and standards, including code reviews, source control management, build processes, testing, and operations."
      ],
      techStack: ["Java 8+", "Multithreading", "Collections", "Spring Boot", "Microservices", "MongoDB", "Kafka", "Kibana", "Docker", "Kubernetes", "Openshift", "Jenkins", "ArgoCD", "Jira"]
    },
    {
      role: "Consultant",
      company: "Deloitte",
      companylogo: require("./assets/images/deloitteLogo.png"),
      date: "Sep 2020 – Feb 2023",
      desc: "Project: The Kroger Company",
      descBullets: [
        "Developed custom logging for Spring-based applications, leveraging Microsoft Azure Application Insights to enhance application monitoring and troubleshooting.",
        "Engineered reusable wrappers to enhance functionality across multiple APIs.",
        "Updated and maintained existing microservices, adapting endpoints as needed to meet evolving project requirements."
      ],
      techStack: ["Java 8+", "Spring Boot", "Microservices", "Oracle SQL", "Docker", "Kubernetes", "Kafka"]
    },
    {
      role: "Senior System Engineer",
      company: "IBM",
      companylogo: require("./assets/images/ibmLogo.png"),
      date: "Feb 2020 – Sep 2020",
      desc: "Project: Digital Experience B2B - Vodafone Germany",
      descBullets: [
        "Led the design process for microservices architecture, outlining the framework and components to meet application requirements effectively.",
        "Utilized Java and Spring Boot to develop and enhance microservices."
      ],
      techStack: ["Java 8+", "Spring Boot", "Microservices", "Oracle SQL", "Docker", "Kubernetes"]
    },
    {
      role: "Software Developer",
      company: "LTI",
      companylogo: require("./assets/images/ltiLogo.png"),
      date: "Sep 2016 – Jan 2020",
      desc: "Worked on multiple projects including Workstation - MyTask and Car Insurance.",
      descBullets: [
        "Developed the 'My Task' feature, enabling users to track assigned tasks and respective deadlines, thereby improving project management and user productivity.",
        "Enhanced workstation microservices utilizing Core Java, Spring Boot 2.0, and Spring JPA.",
        "Championed the creation of 'AutoInsure Dashboard,' a state-of-the-art platform dedicated to simplifying car insurance processes, from policy creation to claims processing.",
        "Architected and developed core modules leveraging Java 8+, Spring Boot, and Microservices, optimizing the platform for high availability, concurrency, and seamless scalability."
      ],
      techStack: ["Java 8+", "Spring Boot", "Microservices", "Oracle SQL"]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/azure.png"),
      imageAlt: "Azure Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ac459155-72b6-4f8c-ba8d-e05aef587c25?source=linked_in_profile"
        }
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Passionate about developing innovative solutions, I enjoy writing and sharing my knowledge with others.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://proteinshaikh.blogspot.com/2023/03/understanding-and-avoiding-race.html",
      title: "Understanding and Avoiding Race Conditions in Java",
      description:
        "Explore common pitfalls in Java concurrency and learn strategies to prevent race conditions in your applications."
    },
    {
      url: "https://medium.com/@proteinshaikh/important-topics-and-notes-for-data-structures-and-algorithms-interview-for-product-based-companies-8dcb80e54218",
      title: "Important Topics and Notes for Data Structures and Algorithms Interview",
      description:
        "A comprehensive guide to essential topics and tips for acing data structures and algorithms interviews at top tech companies."
    },
    {
      url: "https://proteinshaikh.blogspot.com/2023/03/microsoft-sql-server-vs-oracle-same-but.html",
      title: "Microsoft SQL Server vs Oracle: Same but Different",
      description:
        "An in-depth comparison of Microsoft SQL Server and Oracle, examining their similarities, differences, and best use cases."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-55743 6491",
  email_address: "zeeshanshaikhonline@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "javawithzeeshan", //Replace "twitter" with your twitter username without @
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
  isHireable,
  resumeSection
};
