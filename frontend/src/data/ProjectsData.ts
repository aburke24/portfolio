import GreenThumbLogo from '../assets/GreenThumbLogo.svg';
import Process1 from '../assets/GTFlow.png';
import Process2 from '../assets/GTHomePage.png';
import Process3 from '../assets/GTGardenViewPage.png';
import Process4 from '../assets/GTEditBed.png';
import MoverMetricsLogo from '../assets/MoverMetrics.svg';

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
  },
{
    id: 2,
    title: "Mover Metrics",
    briefSummary: "This Unity application uses LiDAR and object detection to identify household objects and estimate their real-world volume. It provides a foundational tool for a moving company estimator by calculating the cubic volume of items in a room, offering a digital solution for move-in and move-out planning.",
    problemStatement: "Estimating the cost of a move is often difficult, as it's based on factors like the number of boxes, furniture, and total cubic volume. Traditional methods are slow and inaccurate. This application solves this problem by using a device's camera and LiDAR sensor to automatically identify objects, calculate their volume, and provide a quick and accurate estimate of the total space required for a move.",
    role: "I am responsible for the core logic of the application. This includes the integration of the Lightship ARDK for object detection and the Unity AR Foundation framework for LiDAR data processing. I also developed the volume estimation algorithm and the UI for displaying the detected objects and their calculated volumes.",
    process: `The process began by integrating object detection and LiDAR capabilities into a single Unity project. The core logic involves using the ARObjectDetectionManager to identify objects in the camera's view and an ARPointCloudManager to access the LiDAR point cloud. By identifying points within a detected object's bounding box, the application estimates its real-world volume. The UI was designed to display a list of detected items and their estimated volume, with a focus on clear and concise information.`,
    processImages: [],
    challenges: `One of the main challenges has been ensuring a seamless integration between the Lightship ARDK and Unity's AR Foundation. I had to address compatibility issues, such as ensuring the correct API calls for accessing mesh and point cloud data, and managing dependencies between the two systems. Another challenge was accurately calculating volume from sparse point cloud data, which required careful handling of the bounding box and point cloud data to get a reliable estimate.`,
    lessonsLearned: "",
    futureImprovements: `- Incorporate this Unity app into a React Native application to display more information about the move.
- Improve object detection to improve the estimated volumes.
- Implement a backend to store and support more functionality.
- Implement an object identifier backend instead of using Lightship.
- Add weight estimations.
- Add a cost-to-move with a moving company estimator.`,
    techStack: {
      frontend: ["C#","Unity 3D", "UI Toolkit"],
      backend: ["To be determined"],
      database: ["To be determined"],
      ar_frameworks: ["Niantic Lightship ARDK", "Unity AR Foundation"]
    },
    githubUrl:"https://github.com/aburke24/MoverMetrics" ,
    liveUrl: "",
    imageUrl: MoverMetricsLogo
},

];

export default projects;
