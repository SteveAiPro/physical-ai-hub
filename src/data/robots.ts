export interface RobotSpec {
  slug: string;
  name: string;
  manufacturer: string;
  country: string;
  category: "Humanoid" | "Quadruped" | "Robotic Arm" | "Open Source Kit";
  status: "In Stock & For Sale" | "Accepting Pre-Orders" | "Enterprise Pilot" | "Open Source / DIY";
  priceUSD: number | "Contact for Quote" | "DIY ($400 - $800)";
  displayPrice: string;
  dof: number; // Degrees of Freedom
  heightCm: number;
  weightKg: number;
  payloadKg: number;
  batteryMinutes: number;
  onboardBrain: string;
  featured: boolean;
  tagline: string;
  description: string;
  keyFeatures: string[];
  imageUrl: string;
  specs: {
    actuators: string;
    sensors: string;
    speedMaxKmH: number;
    connectivity: string;
    aiModel: string;
  };
  buyUrl?: string;
  quoteEligible: boolean;
}

export const ROBOTS_DATABASE: RobotSpec[] = [
  {
    slug: "unitree-g1",
    name: "Unitree G1 Humanoid Agent",
    manufacturer: "Unitree Robotics",
    country: "China",
    category: "Humanoid",
    status: "In Stock & For Sale",
    priceUSD: 16000,
    displayPrice: "$16,000",
    imageUrl: "/images/robots/unitree-g1.jpg",
    dof: 23, // Basic 23, optional up to 43
    heightCm: 127,
    weightKg: 35,
    payloadKg: 3,
    batteryMinutes: 120,
    onboardBrain: "8-Core High-Performance CPU + UnifoLM Physical AI Engine",
    featured: true,
    tagline: "The world's first mass-produced $16,000 humanoid robot with AI imitation learning.",
    description: "Unitree G1 breaks the price barrier of humanoid robotics at $16,000. Equipped with 23 to 43 degrees of freedom, 3D LiDAR vision, and dexterous force-controlled hands, G1 is designed for AI training, university research labs, and commercial light duty tasks.",
    keyFeatures: [
      "Ultra-compact folding design (127cm, 35kg)",
      "Force-controlled dexterous hands with tactile feedback",
      "Dynamic 2m/s walking & recovery from high-impact kicks",
      "Robot World Model trained with deep reinforcement learning",
      "Full secondary development SDK supporting ROS2 & Python"
    ],
    specs: {
      actuators: "Unitree proprietary high-torque joint motors (120N.m peak)",
      sensors: "Livox 3D LiDAR + Intel RealSense D435i Depth Camera",
      speedMaxKmH: 7.2,
      connectivity: "Wi-Fi 6, 5G SIM Slot, Gigabit Ethernet",
      aiModel: "UnifoLM (Unitree Foundation Model) + Reinforcement Learning"
    },
    buyUrl: "https://shop.unitree.com",
    quoteEligible: true
  },
  {
    slug: "tesla-optimus-gen-2",
    name: "Tesla Optimus Gen 2",
    manufacturer: "Tesla Inc.",
    country: "United States",
    category: "Humanoid",
    status: "Enterprise Pilot",
    priceUSD: "Contact for Quote",
    displayPrice: "Est. $20,000 - $30,000",
    imageUrl: "/images/robots/tesla-optimus-gen-2.jpg",
    dof: 28,
    heightCm: 173,
    weightKg: 57,
    payloadKg: 20,
    batteryMinutes: 180,
    onboardBrain: "Tesla Full Self-Driving (FSD) Computer with Custom Neural Accelerators",
    featured: true,
    tagline: "General-purpose bipedal robot powered by Tesla end-to-end neural network AI.",
    description: "Tesla Optimus Gen 2 features custom-designed actuators and sensors, 11-DoF hands with tactile sensing on all fingers, and 30% faster walking speed. Optimus leverages Tesla's massive vision-only autonomous driving neural networks to navigate unstructured factory environments.",
    keyFeatures: [
      "11-DoF human-like hands capable of handling delicate objects (eggs, tools)",
      "End-to-end neural network processing 2D video directly into physical torque",
      "Integrated 2.3kWh battery pack inside torso for full-shift operation",
      "2-axis actuated neck and articulated toe sections for natural balance",
      "Active production testing across Tesla Gigafactories"
    ],
    specs: {
      actuators: "Tesla custom structural rotary & linear electro-mechanical actuators",
      sensors: "Autopilot multi-camera suite + 6-axis force/torque sensors",
      speedMaxKmH: 8.0,
      connectivity: "Starlink satellite capability + Wi-Fi 6E + Ultra-wideband",
      aiModel: "Tesla Vision-Language-Action (VLA) End-to-End Neural Net"
    },
    quoteEligible: true
  },
  {
    slug: "figure-02",
    name: "Figure 02",
    manufacturer: "Figure AI",
    country: "United States",
    category: "Humanoid",
    status: "Enterprise Pilot",
    priceUSD: "Contact for Quote",
    displayPrice: "Enterprise Contract",
    imageUrl: "/images/robots/figure-02.jpg",
    dof: 32,
    heightCm: 168,
    weightKg: 70,
    payloadKg: 20,
    batteryMinutes: 300,
    onboardBrain: "3x Compute Overhaul with Onboard OpenAI Speech-to-Speech VLM",
    featured: true,
    tagline: "The next-generation workforce humanoid backed by OpenAI and deployed at BMW.",
    description: "Figure 02 is the most advanced commercial humanoid engineered for manufacturing and logistics. Featuring integrated matte black exoskeletal wiring, 16-DoF superhuman hands with sub-millimeter precision, and custom onboard OpenAI speech reasoning for natural human dialogue.",
    keyFeatures: [
      "Real-time conversational AI powered by custom OpenAI models",
      "16-degree-of-freedom hands with integrated palm cameras & tactile pads",
      "Fully concealed internal routing with zero exposed cables",
      "Automated battery charging dock with 5-hour continuous run time",
      "Commercial industrial pilots underway at BMW Spartanburg assembly plant"
    ],
    specs: {
      actuators: "Figure custom harmonic drive integrated joint units",
      sensors: "6 RGB cameras with edge AI vision processing + micro-microphones",
      speedMaxKmH: 4.3,
      connectivity: "Low-latency Industrial Wi-Fi + Private 5G",
      aiModel: "Custom OpenAI Multimodal VLM + Deep Learning Robotics Stack"
    },
    quoteEligible: true
  },
  {
    slug: "1x-neo",
    name: "1X NEO",
    manufacturer: "1X Technologies (backed by OpenAI & SoftBank)",
    country: "Norway / USA",
    category: "Humanoid",
    status: "Accepting Pre-Orders",
    priceUSD: "Contact for Quote",
    displayPrice: "Pre-Orders Open",
    imageUrl: "/images/robots/1x-neo.jpg",
    dof: 30,
    heightCm: 165,
    weightKg: 30,
    payloadKg: 20,
    batteryMinutes: 240,
    onboardBrain: "Bio-inspired Tendon Actuation Core with World Model AI",
    featured: true,
    tagline: "Consumer-safe, ultra-lightweight 30kg humanoid designed for homes and daily life.",
    description: "1X NEO is engineered from the ground up for consumer safety. Weighing just 30kg with soft-padded anatomical suit aesthetics, NEO replaces heavy rigid gears with tendon-driven muscle actuators, making it completely safe to operate around family members and pets.",
    keyFeatures: [
      "Ultra-safe 30kg soft body construction (half the weight of industrial rivals)",
      "Bio-inspired tendon-driven actuation mimicking human muscle tension",
      "Whisper-quiet acoustic profile suitable for living rooms and bedrooms",
      "Handles everyday household tasks: folding laundry, tidying, fetching drinks",
      "Teleoperation fallback with instant cloud pilot assistance"
    ],
    specs: {
      actuators: "Tendon-driven direct-drive bio-inspired motors",
      sensors: "Stereoscopic 360 wide-angle vision + auditory spatial array",
      speedMaxKmH: 12.0,
      connectivity: "Wi-Fi 7 + Bluetooth 5.4 + LTE-M",
      aiModel: "1X Embodied World Model (trained on extensive human interaction data)"
    },
    buyUrl: "https://1x.tech",
    quoteEligible: true
  },
  {
    slug: "boston-dynamics-atlas",
    name: "All-New Electric Atlas",
    manufacturer: "Boston Dynamics (Hyundai Motor Group)",
    country: "United States",
    category: "Humanoid",
    status: "Enterprise Pilot",
    priceUSD: "Contact for Quote",
    displayPrice: "Industrial Fleet Pilot",
    imageUrl: "/images/robots/boston-dynamics-atlas.jpg",
    dof: 36,
    heightCm: 152,
    weightKg: 89,
    payloadKg: 25,
    batteryMinutes: 150,
    onboardBrain: "Hyundai AI Robotics Edge Architecture + NVIDIA Isaac Integration",
    featured: false,
    tagline: "Fully electric, hyper-agile humanoid with 360-degree rotational infinite joints.",
    description: "Replacing the legendary hydraulic Atlas, the All-New Electric Atlas features revolutionary infinite-rotation joint actuators that surpass human anatomical limits. Atlas can stand up from flat ground, swivel its torso 360 degrees, and lift heavy automotive parts with extreme durability.",
    keyFeatures: [
      "360-degree infinite rotation on major joints (no human biological limitations)",
      "Heavy-duty 25kg payload capacity for automotive casting handling",
      "All-weather ruggedized IP67 sealed enclosure for heavy industrial environments",
      "Integrated Orbit fleet management software for real-time factory coordination",
      "Hyundai factory pilot program deploying in 2025/2026"
    ],
    specs: {
      actuators: "Proprietary high-density electric rotary actuators with magnetic brakes",
      sensors: "Time-of-flight depth cameras + Real-time point-cloud LiDAR",
      speedMaxKmH: 9.0,
      connectivity: "Enterprise Wi-Fi + Industrial Ethernet M12",
      aiModel: "Boston Dynamics Perception & Dynamic Whole-Body MPC Control"
    },
    quoteEligible: true
  },
  {
    slug: "unitree-go2",
    name: "Unitree Go2 Quadruped AI Dog",
    manufacturer: "Unitree Robotics",
    country: "China",
    category: "Quadruped",
    status: "In Stock & For Sale",
    priceUSD: 1600,
    displayPrice: "$1,600",
    imageUrl: "/images/robots/unitree-go2.jpg",
    dof: 12,
    heightCm: 40,
    weightKg: 15,
    payloadKg: 8,
    batteryMinutes: 120,
    onboardBrain: "GPT-4o Voice Interaction Core + 4D Ultra-Wide LiDAR",
    featured: false,
    tagline: "The world's bestselling consumer AI quadruped robot starting at just $1,600.",
    description: "Unitree Go2 brings enterprise-grade quadruped agility to consumers and developers. With self-developed 4D ultra-wide LiDAR, 360-degree obstacle avoidance, GPT voice dialogue, and acrobatic jump/backflip capabilities, Go2 is the default benchmark for mobile robotics.",
    keyFeatures: [
      "Unprecedented sub-$2,000 pricing for high-performance quadruped",
      "Integrated 4D LiDAR L1 with ultra-low blind zone (<0.05m)",
      "Standard GPT-powered real-time natural language voice companion",
      "Follows owner hands-free with ISS 2.0 Intelligent Side-following System",
      "Optional robotic arm accessory and high-speed sports module"
    ],
    specs: {
      actuators: "Unitree high-performance joint motors (45N.m peak)",
      sensors: "4D LiDAR L1 + HD Wide-angle Camera + Foot Force Sensors",
      speedMaxKmH: 18.0,
      connectivity: "Wi-Fi 6 + Bluetooth 5.2 + 4G LTE Dongle",
      aiModel: "Embodied Navigation RL + GPT Voice Dialogue Module"
    },
    buyUrl: "https://shop.unitree.com",
    quoteEligible: true
  },
  {
    slug: "lerobot-so-arm100",
    name: "Hugging Face LeRobot SO-ARM100",
    manufacturer: "Hugging Face & Open Source Community",
    country: "Global (Open Source)",
    category: "Open Source Kit",
    status: "Open Source / DIY",
    priceUSD: "DIY ($400 - $800)",
    displayPrice: "$400 (DIY Kit)",
    imageUrl: "/images/robots/lerobot-so-arm100.jpg",
    dof: 6,
    heightCm: 50,
    weightKg: 1.8,
    payloadKg: 0.5,
    batteryMinutes: 0, // Wall power
    onboardBrain: "Direct USB-C Link to Local PC / Jetson Orin Nano with PyTorch",
    featured: true,
    tagline: "The viral open-source 6-DoF robotic arm for training Vision-Language-Action AI models.",
    description: "Created by Hugging Face, LeRobot is the 'Linux moment' for robotics. The SO-ARM100 is a fully 3D-printable 6-degree-of-freedom robotic arm that costs under $400 in off-the-shelf parts (Feetech servos, 3D filament, cameras). Anyone can train imitation learning policies on a home laptop.",
    keyFeatures: [
      "100% open-source 3D CAD files, electronics BOM, and training code on GitHub",
      "Costs less than $400 to build using standard Feetech bus servos",
      "Leader-Follower teleoperation setup for collecting demonstration datasets in minutes",
      "Native Hugging Face Hub integration to share and download robot weights",
      "Compatible with ACT (Action Chunking with Transformers) and Diffusion Policy"
    ],
    specs: {
      actuators: "Feetech STS3215 / SCS0009 Serial Bus Servos",
      sensors: "Dual USB Webcams (Wrist + Overhead) for visual observations",
      speedMaxKmH: 0,
      connectivity: "USB 2.0 / USB-C to Host PC",
      aiModel: "LeRobot PyTorch Ecosystem (ACT, Diffusion Policy, OpenVLA)"
    },
    buyUrl: "https://github.com/huggingface/lerobot",
    quoteEligible: false
  },
  {
    slug: "agility-digit",
    name: "Agility Robotics Digit",
    manufacturer: "Agility Robotics (Amazon Funded)",
    country: "United States",
    category: "Humanoid",
    status: "In Stock & For Sale",
    priceUSD: "Contact for Quote",
    displayPrice: "Commercial Lease ($30/hr)",
    imageUrl: "/images/robots/agility-digit.jpg",
    dof: 24,
    heightCm: 175,
    weightKg: 65,
    payloadKg: 16,
    batteryMinutes: 180,
    onboardBrain: "Dual Intel i7 Multi-Core Core + Real-time Safety Microcontrollers",
    featured: false,
    tagline: "The world's first fleet-deployed bipedal robot moving totes in Amazon warehouses.",
    description: "Agility Digit is the industrial workhorse of bipedal robotics. Designed specifically to work alongside people in existing warehouse aisles, Digit picks and places standard shipping totes from conveyor belts to Autonomous Mobile Robots (AMRs) with 99.8% uptime.",
    keyFeatures: [
      "Backward-facing leg kinematics optimized for tote squatting and stability",
      "Fully integrated with Amazon fulfillment and Manhattan Associates WMS",
      "Produced at 'RoboFab' - the world's first dedicated humanoid robot factory",
      "Autonomous docking and battery swap station for 24/7 warehouse operations",
      "Robots-as-a-Service (RaaS) subscription model averaging $30/hour equivalent"
    ],
    specs: {
      actuators: "Brushless DC electric motors with planetary gearboxes & cable tendons",
      sensors: "Velodyne LiDAR + Intel RealSense cameras + Foot contact sensors",
      speedMaxKmH: 5.4,
      connectivity: "Industrial Wi-Fi 6 with seamless roaming protocol",
      aiModel: "Whole-Body Momentum Controller + Spatial Perception AI"
    },
    quoteEligible: true
  }
];
