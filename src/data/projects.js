/*
Professional engineering project dataset
Structured for case-study previews and full project grid rendering
*/

export const projects = [

  {
    id: "geomatro-cockpit",

    title: "GeoMetro Cockpit",

    category: "Enterprise Web GIS Platform",

    featured: true,

    year: "2024",

    shortDescription:
      "A scalable enterprise Web GIS platform enabling multi-region operational monitoring, spatial asset visualization, and decision-support workflows.",

    problem:
      "Operations teams lacked a unified spatial interface to monitor distributed infrastructure, assets, and operational states across multiple geographic regions.",

    solution:
      "Engineered a modular Web GIS cockpit integrating spatial APIs, optimized map rendering, and role-based workflows with real-time system visibility.",

    impact:
      "Improved operational visibility, reduced manual coordination overhead, and enabled real-time spatial decision-making across enterprise operations.",

    technologies: [
      "React",
      "PostGIS",
      "GeoServer",
      "TailwindCSS",
      "Spatial APIs"
    ],

    image: "/images/projects/geomatro-cockpit.jpg"
  },


  {
    id: "cross-border-logistics",

    title: "Cross-Border Logistics Tracking Platform",

    category: "Real-Time Tracking System",

    featured: true,

    year: "2024",

    shortDescription:
      "Real-time logistics tracking platform integrating live telemetry, geospatial routing, and operational monitoring across international transport corridors.",

    problem:
      "Logistics operators lacked real-time spatial visibility into asset movement, causing delays, inefficiencies, and poor operational coordination.",

    solution:
      "Developed a telemetry-integrated geospatial tracking system with live location updates, optimized routing visibility, and operational dashboards.",

    impact:
      "Enabled real-time operational monitoring, reduced delays, and improved logistics coordination efficiency.",

    technologies: [
      "React",
      "WebSockets",
      "PostGIS",
      "Telemetry Integration",
      "Spatial Visualization"
    ],

    image: "/images/projects/logistics-tracking.jpg"
  },


  {
    id: "military-cop",

    title: "AI-Based Military Common Operating Picture",

    category: "GeoAI Decision Support System",

    featured: true,

    year: "2024",

    shortDescription:
      "Integrated GeoAI-powered operational platform combining real-time telemetry, spatial visualization, and machine-learning intelligence.",

    problem:
      "Command environments required unified geospatial intelligence integrating sensor telemetry and AI-derived insights.",

    solution:
      "Built a real-time geospatial COP integrating telemetry streams, spatial intelligence layers, and AI-based object detection workflows.",

    impact:
      "Improved situational awareness and accelerated operational decision cycles.",

    technologies: [
      "React",
      "YOLO",
      "Telemetry Integration",
      "Spatial Analytics",
      "GeoAI Pipelines"
    ],

    image: "/images/projects/military-cop.jpg"
  },


  {
    id: "ndma-cop",

    title: "National Disaster Management COP (NDMA)",

    category: "Disaster Management Platform",

    featured: true,

    year: "2023",

    shortDescription:
      "National-scale geospatial decision platform supporting disaster monitoring, emergency coordination, and spatial intelligence workflows.",

    problem:
      "Emergency response teams lacked centralized geospatial tools for disaster monitoring and response coordination.",

    solution:
      "Developed scalable spatial dashboards integrating disaster datasets, geospatial layers, and operational intelligence.",

    impact:
      "Enhanced disaster response efficiency and improved emergency situational awareness.",

    technologies: [
      "GeoServer",
      "PostGIS",
      "React",
      "Spatial Dashboards"
    ],

    image: "/images/projects/ndma.jpg"
  },


  {
    id: "precision-agriculture",

    title: "Precision Agriculture Remote Sensing System",

    category: "Remote Sensing Platform",

    featured: false,

    year: "2023",

    shortDescription:
      "Geospatial analytics platform leveraging remote sensing data for agricultural monitoring and spatial intelligence.",

    problem:
      "Agricultural monitoring required scalable geospatial analysis workflows using remote sensing data.",

    solution:
      "Engineered spatial analysis pipelines integrating remote sensing data and visualization workflows.",

    impact:
      "Improved monitoring efficiency and enabled data-driven agricultural decision-making.",

    technologies: [
      "Remote Sensing",
      "Spatial Analysis",
      "GeoServer"
    ],

    image: "/images/projects/agriculture.jpg"
  },


  {
    id: "glof-inventory",

    title: "Glacier & Glacial Lake Inventory (GLOF-II)",

    category: "Geospatial Risk Assessment System",

    featured: false,

    year: "2023",

    shortDescription:
      "Spatial inventory platform supporting glacier monitoring and glacial lake risk assessment workflows.",

    problem:
      "Environmental monitoring required scalable geospatial inventory systems for glacier and lake analysis.",

    solution:
      "Developed geospatial inventory systems integrating spatial datasets and analytical workflows.",

    impact:
      "Enabled efficient glacier risk monitoring and environmental analysis.",

    technologies: [
      "GIS Analysis",
      "Spatial Databases",
      "GeoServer"
    ],

    image: "/images/projects/glof.jpg"
  }

];
