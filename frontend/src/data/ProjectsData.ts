import GreenThumbLogo from '../assets/GreenThumbLogo.svg';
import Process1 from '../assets/GTFlow.png';
import Process2 from '../assets/GTHomePage.png';
import Process3 from '../assets/GTGardenViewPage.png';
import Process4 from '../assets/GTEditBed.png';

const projects = [
  {
    id: 1,
    title: "Green Thumb",
    briefSummary: "Green Thumb is a full-stack web application designed to help users plan and manage their gardens efficiently. It allows users to design their garden bed-by-bed, reference past layouts, and make quick changes across larger sections—streamlining the entire gardening process.",
    problemStatement: "Most existing gardening apps suffer from unintuitive design, particularly when it comes to managing plants at scale. Many require users to place and remove plants one by one, which is time-consuming and inefficient. Green Thumb addresses these usability issues by introducing more flexible layout tools. Planned features include AI-generated garden layouts and companion planting suggestions to support square-foot gardening methodologies.",
    role: "I was solely responsible for the entire lifecycle of the application—from user research and system architecture to UI/UX design and full-stack development. I also use the app to manage my own home garden, allowing for continuous user-driven iteration.",
    process: `After using several gardening apps over the years, I noticed recurring usability problems—especially with drag-and-drop interfaces and tedious plant management workflows. I began by mapping out user flows and sketching for the core screens. From there, I identified the necessary backend endpoints and data models, then developed the PostgreSQL schema, API endpoints, and finally the frontend interface.`,
    processImages: [Process1, Process2, Process3, Process4],
    challenges: `One of the main challenges was ensuring consistent behavior between the bed components used in both the EditBedPage and the main GardenPage. While they looked similar, they needed different interactivity and rendering behavior. To solve this, I split them into two purpose-built components: BedEditor and BedViewer.`,
    lessonsLearned: "This project significantly sharpened my full-stack development skills—particularly in React, Node.js, and system design. I also deepened my understanding of designing maintainable component architectures and building for real user workflows.",
    futureImprovements: `- Integrated scheduling and calendar features\n- AI-generated garden bed layouts\n- Companion/secondary plant suggestions\n- Bed rotation and mirroring tools\n- Support for custom plant entries\n- Option to override default spacing constraints`,
    techStack: {
      frontend: ["React", "TailwindCSS", "Vite", "Vercel"],
      backend: ["Node.js", "Express", "Railway"],
      database: ["Postgres", "Railway"]
    },
    githubUrl: "https://github.com/aburke24/GreenThumb-v2",
    liveUrl: "https://green-thumb-v2.vercel.app/",
    imageUrl: GreenThumbLogo,
  }
];


export default projects;
