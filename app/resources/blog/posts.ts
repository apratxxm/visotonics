/* ---------------------------------------------------------------------------
   Full post bodies for the blog detail modal. Content supplied verbatim by
   the user (not sourced from the design canvas) — see BlogPage for the card
   summaries (tag/title/excerpt/readTime) that link to these by id.
--------------------------------------------------------------------------- */

export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type Section = { heading?: string; blocks: Block[] };

const P = (text: string): Block => ({ type: "p", text });
const UL = (items: string[]): Block => ({ type: "ul", items });

export type FullPost = {
  id: string;
  tag: string;
  img: string;
  title: string;
  excerpt: string;
  readTime: string;
  sections: Section[];
};

export const FULL_POSTS: FullPost[] = [
  {
    id: "container-damage-detection",
    tag: "ENGINEERING",
    img: "/assets/blog-container-damage-detection.jpg",
    title: "Container Damage Detection: Improving Visibility with AI",
    excerpt:
      "Containers develop dents, scratches, rust and other damage across loading, unloading and transit. Visotonics uses AI-powered computer vision to detect external damage automatically and build a reliable visual record — without slowing operations down for manual inspection.",
    readTime: "3 MIN READ",
    sections: [
      {
        blocks: [
          P("Containers go through multiple stages before reaching their destination. During loading, unloading, and transit, they can develop dents, scratches, rust, or other visible damage. Identifying these issues early is important for maintaining operational transparency and keeping accurate records of container condition."),
          P("In busy logistics environments, carrying out detailed manual inspections every time can be challenging. This makes it difficult to maintain consistent records and verify when or where damage occurred."),
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          P("Container operations move quickly, and inspections often need to happen without interrupting the flow of work."),
          P("Without reliable visual records, organizations may face:"),
          UL(["Difficulty identifying external damage", "Limited visibility into container condition", "Reduced operational accountability", "Challenges during investigations", "Uncertainty about when damage occurred"]),
          P("As the volume of container movement increases, maintaining consistent inspections through manual observation alone becomes increasingly difficult."),
        ],
      },
      {
        heading: "AI-Powered Container Damage Detection",
        blocks: [
          P("Visotonics uses AI-powered computer vision to detect external container damage during logistics operations."),
          P("The system continuously monitors container movement and helps identify visible issues such as dents, cracks, rust, and other external defects. By creating a visual record during inspections, it becomes easier to review container condition whenever required."),
          P("Instead of relying only on manual inspections, logistics teams gain a consistent and reliable way to monitor containers throughout their operations."),
        ],
      },
      {
        heading: "Supporting Operational Intelligence",
        blocks: [
          P("Container damage detection is part of Visotonics' Operational Intelligence capabilities."),
          P("The platform helps organizations to:"),
          UL(["Detect external damage", "Detect mishandling of cargo", "Identify unauthorized handling of goods", "Maintain a visual audit trail for investigations", "Improve operational transparency and accountability"]),
          P("These capabilities provide better visibility into container handling while supporting day-to-day logistics operations."),
        ],
      },
      {
        heading: "Building Better Transparency",
        blocks: [
          P("Having a reliable visual record makes inspections more consistent and easier to verify."),
          P("With AI-powered monitoring, organizations benefit from:"),
          UL(["Real-time visibility into operations", "Time-stamped digital records", "Visual proof of operational events", "Improved transparency across container handling activities"]),
          P("These records can support investigations, improve accountability, and strengthen confidence in logistics operations."),
        ],
      },
      {
        blocks: [
          P("Container damage detection is about more than identifying dents or rust. It gives logistics teams better visibility into container condition while creating a reliable visual history of every inspection. By combining AI-powered monitoring with clear visual records, Visotonics helps organizations improve transparency, strengthen accountability, and make container inspections more consistent."),
        ],
      },
    ],
  },
  {
    id: "warehouse-loading-unloading",
    tag: "ENGINEERING",
    img: "/assets/blog-warehouse-loading-unloading.jpg",
    title: "Warehouse Loading & Unloading: Bringing Precision to Every Movement with AI",
    excerpt:
      "Portable trolley-mounted AI cameras eliminate blind spots at the dock, delivering accurate item counts and continuous monitoring for every vehicle, every item, every time.",
    readTime: "4 MIN READ",
    sections: [
      {
        blocks: [
          P("Loading and unloading are some of the busiest stages of warehouse operations. Every item moving in or out of a facility needs to be tracked accurately to maintain inventory records and keep operations running smoothly."),
          P("In real-world logistics environments, these activities are fast-paced and constantly changing. With vehicles arriving and leaving throughout the day, maintaining visibility using traditional methods can become difficult."),
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          P("Warehouse loading and unloading operations often involve the continuous movement of goods, vehicles, and personnel."),
          P("Some of the common challenges include:"),
          UL(["Stock entry and exit relying on paper-based processes", "Vehicles parked outside the coverage of fixed CCTV systems", "Manual counting leading to errors and disputes", "No visual proof to verify item counts", "Limited visibility into loading and unloading activities"]),
          P("These challenges can lead to inaccurate cargo counts, reduced operational accountability, and lower overall efficiency."),
        ],
      },
      {
        heading: "AI-Powered Monitoring for Loading & Unloading",
        blocks: [
          P("Visotonics uses AI-powered inventory intelligence to bring greater visibility to warehouse loading and unloading operations."),
          P("Instead of depending only on fixed CCTV cameras, portable trolley-mounted cameras can be deployed close to vehicles wherever loading or unloading takes place. This helps eliminate blind spots and ensures operations continue to be monitored, even outside fixed camera coverage."),
          P("Every vehicle. Every item. Every time."),
        ],
      },
      {
        heading: "Continuous AI Monitoring",
        blocks: [
          P("Once deployed, the AI system continuously monitors loading and unloading activities in real time."),
          P("It helps logistics teams:"),
          UL(["Track every item being loaded or unloaded", "Deliver accurate item counts", "Maintain consistent monitoring throughout each operation"]),
          P("This allows teams to monitor inventory movement with greater confidence while reducing the need for manual counting."),
        ],
      },
      {
        heading: "Built for Real Warehouse Operations",
        blocks: [
          P("No two warehouse operations are exactly the same. Cargo types, loading methods, and operational layouts can vary from one facility to another."),
          P("Visotonics is designed to support:"),
          UL(["Any cargo", "Any loading method", "Any location"]),
          P("Whether goods are being loaded inside a warehouse or unloaded at a dispatch point, portable AI cameras provide continuous visibility wherever they are needed."),
        ],
      },
      {
        heading: "Better Visibility for Better Operations",
        blocks: [
          P("Continuous monitoring also provides valuable operational insights during loading and unloading activities."),
          P("The platform helps organizations:"),
          UL(["Measure loading and unloading throughput", "Track processing time at loading docks", "Identify operational bottlenecks and delays", "Maintain a visual audit trail for investigations"]),
          P("These insights help improve day-to-day warehouse operations while increasing transparency across the loading process."),
        ],
      },
      {
        heading: "Improving Efficiency and Accountability",
        blocks: [
          P("AI-powered monitoring helps organizations improve loading and unloading operations by providing:"),
          UL([
            "Real-time visibility into warehouse activities",
            "Consistent monitoring across operations",
            "Elimination of manual counting errors",
            "Faster truck and container turnaround",
            "Reduced dependency on manual supervisors",
            "Lower operational monitoring costs",
            "Time-stamped digital records",
            "Visual proof of loading and unloading events",
            "Improved customer confidence and audit readiness",
          ]),
        ],
      },
      {
        blocks: [
          P("Warehouse loading and unloading are more than just moving goods from one place to another. They are key points where accuracy, visibility, and accountability matter the most. By combining portable AI cameras with continuous monitoring, Visotonics helps organizations reduce blind spots, improve inventory visibility, and make loading and unloading operations more efficient, transparent, and reliable — ensuring every vehicle, every item, every time."),
        ],
      },
    ],
  },
  {
    id: "container-gate-automation",
    tag: "ENGINEERING",
    img: "/assets/blog-container-gate-automation.jpg",
    title: "Container Gate Automation: Smarter Entry and Exit with AI",
    excerpt:
      "Reading container IDs, ISO codes and trailer IDs automatically at the gate, while checking for dents, cracks, rust and other defects — in under a minute, on the cameras already in place.",
    readTime: "4 MIN READ",
    sections: [
      {
        blocks: [
          P("Container gates are one of the busiest points in any port, Container Freight Station (CFS), or logistics yard. Every container entering or leaving the facility needs to be identified, inspected, and recorded accurately. When these tasks are done manually, they can slow down operations and increase the chances of errors."),
          P("Container Gate Automation uses AI-powered computer vision to make this process faster, more consistent, and easier to manage."),
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          P("Traditional gate operations involve several manual steps that can affect both speed and accuracy."),
          P("Some common challenges include:"),
          UL([
            "Manual inspection and documentation can delay reporting.",
            "Human error may lead to missed damage during inspections.",
            "Different inspectors may interpret container damage differently.",
            "Paper-based records are difficult to manage and retrieve.",
            "Poor weather or low-light conditions can affect inspection quality.",
            "Manual processes increase labour costs and reduce operational efficiency.",
          ]),
          P("As container traffic continues to grow, these challenges make it harder to maintain consistent inspections and reliable records."),
        ],
      },
      {
        heading: "AI-Powered Gate Operations",
        blocks: [
          P("Visotonics automates key gate activities using AI and computer vision."),
          P("As a container passes through the entry or exit gate, the system can automatically:"),
          UL(["Read the Container ID", "Read the ISO Code", "Read the Trailer ID", "Track the container and its condition at entry and exit", "Send automated notifications to the concerned authorities when required"]),
          P("The platform can work with existing CCTV cameras connected through cloud APIs, allowing AI-powered inspections without replacing the current camera infrastructure."),
        ],
      },
      {
        heading: "Automatic Container Health Inspection",
        blocks: [
          P("Along with identifying the container, the system also checks its external condition."),
          P("The AI can detect different types of visible damage, including:"),
          UL(["Dents", "Cracks", "Rust", "Push In and Push Out damage", "Rail cuts", "Corner post cuts", "Bends", "Other external defects"]),
          P("The system also identifies the type, location, dimensions, and area of each detected defect, helping create a more detailed inspection record."),
        ],
      },
      {
        heading: "Building a Complete Inspection Record",
        blocks: [
          P("Every inspection contributes to a digital record of the container's condition."),
          P("Visotonics combines images captured at different checkpoints, including gate entry, crane boarding, crane deboarding, and gate exit, into a single dashboard. It also creates a 3D view of container health changes between these stages, making it easier to understand when damage occurred and supporting more reliable investigations."),
          P("The platform also maintains a complete digital logbook containing inspection events, images, timestamps, and condition records throughout the container's journey."),
        ],
      },
      {
        heading: "Faster Reporting and Better Visibility",
        blocks: [
          P("Container Gate Automation helps reduce the time spent on inspections and documentation by automatically generating digital outputs."),
          P("The platform provides:"),
          UL(["Survey report PDFs", "JSON responses through APIs", "Dashboard visibility for operations teams", "Email alerts for damage above a defined threshold", "Inspection reports in less than a minute"]),
          P("These features help improve visibility across gate operations while making inspection records easier to access and review."),
        ],
      },
      {
        blocks: [
          P("Container Gate Automation is more than simply recording containers as they enter or leave a facility. It brings together AI-powered identification, container health inspection, and digital documentation into one streamlined process. By reducing manual effort and creating reliable inspection records, Visotonics helps logistics teams improve operational visibility, strengthen accountability, and keep gate operations running more efficiently."),
        ],
      },
    ],
  },
  {
    id: "container-yard-management",
    tag: "ENGINEERING",
    img: "/assets/blog-container-yard-management.jpg",
    title: "Container Yard Management: Smarter Planning with AI-Powered Visibility",
    excerpt:
      "AI-powered tracking gives yard teams a real-time digital twin of container locations, cutting crane travel time and turning misplaced-container searches into a lookup.",
    readTime: "3 MIN READ",
    sections: [
      {
        blocks: [
          P("Managing a container yard is about more than simply storing containers. Every container needs to be placed in the right location, tracked throughout its stay, and retrieved quickly when required. As container volumes grow, maintaining an organized yard becomes more challenging."),
          P("Without clear visibility into container locations and yard capacity, daily operations can become slower and less efficient."),
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          P("Container yards handle the constant movement of containers arriving, being stored, relocated, and dispatched."),
          P("Some common challenges include:"),
          UL(["Difficulty locating containers quickly", "Inefficient use of available yard space", "Increased crane movement and travel time", "Higher fuel consumption during container handling", "Limited visibility into container locations", "Time lost searching for misplaced containers"]),
          P("These challenges can reduce operational efficiency and increase the time required to move containers through the yard."),
        ],
      },
      {
        heading: "AI-Powered Container Yard Management",
        blocks: [
          P("Visotonics uses AI to provide better visibility across container yard operations."),
          P("The platform helps organizations monitor container locations and manage yard activities more efficiently by maintaining an up-to-date view of the yard."),
          P("Using AI-powered tracking, logistics teams can quickly locate containers and gain better control over container movement throughout the facility."),
        ],
      },
      {
        heading: "Smarter Container Placement",
        blocks: [
          P("Making the best use of available yard space is an important part of efficient yard management."),
          P("Visotonics supports:"),
          UL(["Container placement planning", "Optimizing yard capacity", "Reducing crane travel time", "Reducing crane effort and diesel consumption", "Recommending the best container placement location"]),
          P("These capabilities help improve yard organization while making daily operations more efficient."),
        ],
      },
      {
        heading: "Real-Time Tracking and Digital Visibility",
        blocks: [
          P("The platform continuously tracks containers within the yard and provides better visibility into their locations."),
          P("It enables organizations to:"),
          UL(["Find the precise location of containers", "Track container movement throughout the yard", "Maintain real-time updates of yard operations", "Generate a digital twin of the container yard with real-time updates"]),
          P("Having accurate location information helps reduce delays and makes container retrieval faster and more reliable."),
        ],
      },
      {
        heading: "Improving Yard Efficiency",
        blocks: [
          P("Better visibility and planning help improve the overall performance of container yard operations."),
          P("With AI-powered container yard management, organizations can:"),
          UL(["Improve yard space utilization", "Reduce unnecessary container movements", "Minimize crane travel distance", "Locate containers more quickly", "Improve operational visibility", "Support faster and more efficient yard operations"]),
        ],
      },
      {
        blocks: [
          P("Container yard management is about keeping every container in the right place at the right time. By combining AI-powered tracking, intelligent placement planning, and real-time visibility, Visotonics helps logistics teams organize container yards more efficiently, reduce operational delays, and make better use of available space."),
        ],
      },
    ],
  },
  {
    id: "document-processing",
    tag: "ENGINEERING",
    img: "/assets/blog-document-processing.jpg",
    title: "AI-Powered Document Processing: Faster, Smarter Logistics Documentation",
    excerpt:
      "Bills of entry, invoices and shipping documents read automatically into structured digital data — reducing manual entry, cutting errors, and making records easier to search and verify.",
    readTime: "3 MIN READ",
    sections: [
      {
        blocks: [
          P("Documents are a vital part of every logistics operation. From customs forms and invoices to shipping documents and delivery records, accurate information is essential for keeping goods moving efficiently."),
          P("However, manually reading, verifying, and entering information from these documents can be slow, repetitive, and prone to errors. As the volume of logistics documents increases, organizations need a faster and more reliable way to process information."),
        ],
      },
      {
        heading: "The Challenge",
        blocks: [
          P("Logistics operations involve handling a large number of documents every day. Manually extracting information from these documents takes time and requires constant attention to detail."),
          P("Some common challenges include:"),
          UL(["Manual data entry is time-consuming.", "Human errors can lead to incorrect records.", "Processing large volumes of documents reduces operational efficiency.", "Important information may take longer to access and verify.", "Paper-based workflows can slow down logistics operations."]),
          P("These challenges make it difficult to maintain speed, accuracy, and consistency across daily operations."),
        ],
      },
      {
        heading: "AI-Powered Document Processing",
        blocks: [
          P("Visotonics uses AI-powered document processing to automatically read and extract important information from logistics documents."),
          P("Instead of manually entering data, the system identifies key details and converts them into structured digital information. This helps simplify document handling while reducing manual effort."),
          P("The platform is designed to process logistics documents quickly and accurately, making information readily available whenever it is needed."),
        ],
      },
      {
        heading: "Faster and More Accurate Information Extraction",
        blocks: [
          P("AI automatically captures important details from logistics documents, including the information required for day-to-day operations."),
          P("This helps organizations:"),
          UL(["Reduce manual data entry.", "Improve the accuracy of captured information.", "Process documents more quickly.", "Access important data with greater ease.", "Create a more efficient digital workflow."]),
          P("By automating document processing, teams can spend less time handling paperwork and more time focusing on operational activities."),
        ],
      },
      {
        heading: "Supporting Operational Efficiency",
        blocks: [
          P("Accurate document processing helps improve the overall flow of logistics operations."),
          P("With faster access to structured information, organizations can reduce delays, improve coordination between teams, and maintain more consistent records throughout the logistics process."),
          P("This supports smoother day-to-day operations while helping improve overall productivity."),
        ],
      },
      {
        heading: "Better Visibility Through Digital Records",
        blocks: [
          P("Digitizing logistics documents also improves visibility across operations."),
          P("With information captured automatically, organizations can maintain reliable digital records that are easier to search, verify, and reference whenever required."),
          P("This helps improve transparency while supporting operational reviews and day-to-day decision-making."),
        ],
      },
      {
        blocks: [
          P("AI-powered document processing makes handling logistics documents faster, simpler, and more reliable. By automatically extracting key information and converting it into structured digital data, Visotonics helps reduce manual effort, improve accuracy, and support more efficient logistics operations. As documentation continues to play a critical role in the supply chain, intelligent document processing helps organizations work with greater speed, consistency, and confidence."),
        ],
      },
    ],
  },
];
