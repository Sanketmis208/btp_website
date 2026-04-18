// src/data/departments.js
// ─────────────────────────────────────────────
// All department data lives here. To add a new
// department, just add a new key to this object.
// ─────────────────────────────────────────────

export const DEPTS = {
  cse: {
    key: 'cse',
    abbr: 'CSE',
    name: 'Computer Science & Engineering',
    short: 'Computer Science',
    icon: '💻',
    color: '#1565c0',
    colorRgb: '21,101,192',
    tagColor: '#1976d2',
    tags: ['AI/ML', 'Systems', 'Theory'],
    desc: 'Pioneering the frontiers of computation, AI, and software systems that power the digital age.',
    heroDesc:
      'Where algorithms meet ambition. Our department trains the engineers and researchers who build the intelligent systems of tomorrow.',
    stats: [
      { num: '42', label: 'Faculty' },
      { num: '1,200+', label: 'Students' },
      { num: '18', label: 'Research Labs' },
      { num: '92%', label: 'Placement Rate' },
    ],
    courses: [
      { code: 'CS-101', name: 'Introduction to Programming', credits: '4 Cr' },
      { code: 'CS-201', name: 'Data Structures & Algorithms', credits: '4 Cr' },
      { code: 'CS-301', name: 'Machine Learning Fundamentals', credits: '3 Cr' },
      { code: 'CS-401', name: 'Distributed Systems', credits: '3 Cr' },
      { code: 'CS-451', name: 'Deep Learning & Neural Networks', credits: '4 Cr' },
      { code: 'CS-480', name: 'Cloud Computing Architecture', credits: '3 Cr' },
    ],
    highlights: [
      { icon: '🧠', title: 'AI Research Lab', text: 'Cutting-edge research in deep learning, NLP, computer vision, and reinforcement learning.' },
      { icon: '🔐', title: 'Cybersecurity Center', text: 'Specialized labs for network security, cryptography, and ethical hacking training.' },
      { icon: '🌐', title: 'Web & Cloud Lab', text: 'Modern full-stack development, cloud-native architectures, and DevOps pipelines.' },
    ],
    faculty: [
      { name: 'Dr. A. Sharma', role: 'HOD & Prof.', initials: 'AS' },
      { name: 'Dr. P. Gupta', role: 'Associate Prof.', initials: 'PG' },
      { name: 'Dr. R. Singh', role: 'Assistant Prof.', initials: 'RS' },
      { name: 'Dr. M. Arora', role: 'Associate Prof.', initials: 'MA' },
    ],
  },

  cce: {
    key: 'cce',
    abbr: 'CCE',
    name: 'Computer & Communication Engineering',
    short: 'Comp. & Comm.',
    icon: '📡',
    color: '#6a1b9a',
    colorRgb: '106,27,154',
    tagColor: '#7b1fa2',
    tags: ['Networks', 'IoT', 'Wireless'],
    desc: 'Bridging computing power with communication networks to enable the connected world of tomorrow.',
    heroDesc:
      'At the intersection of computation and connectivity. We engineer the protocols, networks, and embedded systems that keep the world communicating.',
    stats: [
      { num: '31', label: 'Faculty' },
      { num: '850+', label: 'Students' },
      { num: '12', label: 'Research Labs' },
      { num: '88%', label: 'Placement Rate' },
    ],
    courses: [
      { code: 'CC-101', name: 'Computer Networks', credits: '4 Cr' },
      { code: 'CC-201', name: 'Communication Systems', credits: '4 Cr' },
      { code: 'CC-301', name: 'IoT Architecture & Design', credits: '3 Cr' },
      { code: 'CC-401', name: 'Wireless & Mobile Networks', credits: '3 Cr' },
      { code: 'CC-451', name: 'Network Security', credits: '3 Cr' },
      { code: 'CC-480', name: '5G Technologies', credits: '3 Cr' },
    ],
    highlights: [
      { icon: '📶', title: 'Wireless Lab', text: '5G, LTE, and next-gen wireless research with state-of-the-art SDR equipment.' },
      { icon: '🏭', title: 'IoT & Edge Lab', text: 'Prototyping smart systems with Raspberry Pi, Arduino, and industrial IoT platforms.' },
      { icon: '🔗', title: 'Network Research', text: 'Advanced studies in SDN, NFV, and cloud-native networking architectures.' },
    ],
    faculty: [
      { name: 'Dr. S. Kapoor', role: 'HOD & Prof.', initials: 'SK' },
      { name: 'Dr. N. Mehta', role: 'Associate Prof.', initials: 'NM' },
      { name: 'Dr. V. Rao', role: 'Assistant Prof.', initials: 'VR' },
      { name: 'Dr. K. Patel', role: 'Associate Prof.', initials: 'KP' },
    ],
  },

  me: {
    key: 'me',
    abbr: 'ME',
    name: 'Mechanical Engineering',
    short: 'Mechanical Engg.',
    icon: '⚙️',
    color: '#b71c1c',
    colorRgb: '183,28,28',
    tagColor: '#c62828',
    tags: ['Robotics', 'Thermal', 'Design'],
    desc: 'Engineering the physical world through innovation in design, manufacturing, and energy systems.',
    heroDesc:
      "From turbines to robots, from nanomaterials to aerospace structures — we engineer solutions to the world's most demanding physical challenges.",
    stats: [
      { num: '38', label: 'Faculty' },
      { num: '1,000+', label: 'Students' },
      { num: '15', label: 'Research Labs' },
      { num: '90%', label: 'Placement Rate' },
    ],
    courses: [
      { code: 'ME-101', name: 'Engineering Mechanics', credits: '4 Cr' },
      { code: 'ME-201', name: 'Thermodynamics', credits: '4 Cr' },
      { code: 'ME-301', name: 'Fluid Mechanics', credits: '3 Cr' },
      { code: 'ME-401', name: 'Advanced Manufacturing', credits: '3 Cr' },
      { code: 'ME-451', name: 'Robotics & Automation', credits: '4 Cr' },
      { code: 'ME-480', name: 'CAD/CAM/CAE Systems', credits: '3 Cr' },
    ],
    highlights: [
      { icon: '🤖', title: 'Robotics Lab', text: 'Collaborative robotics, autonomous systems, and industrial automation research.' },
      { icon: '🔥', title: 'Thermal Sciences', text: 'Heat transfer, combustion, and renewable energy systems research facility.' },
      { icon: '🏗️', title: 'Manufacturing Hub', text: 'CNC machining, additive manufacturing, and advanced materials processing.' },
    ],
    faculty: [
      { name: 'Dr. R. Verma', role: 'HOD & Prof.', initials: 'RV' },
      { name: 'Dr. S. Joshi', role: 'Associate Prof.', initials: 'SJ' },
      { name: 'Dr. A. Kumar', role: 'Assistant Prof.', initials: 'AK' },
      { name: 'Dr. P. Mishra', role: 'Associate Prof.', initials: 'PM' },
    ],
  },

  ece: {
    key: 'ece',
    abbr: 'ECE',
    name: 'Electronics & Communication Engineering',
    short: 'Electronics & Comm.',
    icon: '⚡',
    color: '#1b5e20',
    colorRgb: '27,94,32',
    tagColor: '#2e7d32',
    tags: ['VLSI', 'Signal Proc.', 'Embedded'],
    desc: 'Designing the circuits, signals, and embedded systems that power every modern electronic device.',
    heroDesc:
      'From microchips to satellite links — our engineers design the electronic fabric underlying modern civilization.',
    stats: [
      { num: '36', label: 'Faculty' },
      { num: '950+', label: 'Students' },
      { num: '14', label: 'Research Labs' },
      { num: '89%', label: 'Placement Rate' },
    ],
    courses: [
      { code: 'EC-101', name: 'Circuit Theory', credits: '4 Cr' },
      { code: 'EC-201', name: 'Digital Electronics', credits: '4 Cr' },
      { code: 'EC-301', name: 'Signal Processing', credits: '3 Cr' },
      { code: 'EC-401', name: 'VLSI Design', credits: '3 Cr' },
      { code: 'EC-451', name: 'Embedded Systems', credits: '4 Cr' },
      { code: 'EC-480', name: 'Antenna & Wave Propagation', credits: '3 Cr' },
    ],
    highlights: [
      { icon: '🔬', title: 'VLSI Design Lab', text: 'Advanced chip design using industry-standard EDA tools, FPGA prototyping.' },
      { icon: '📱', title: 'Embedded Systems', text: 'Real-time OS, microcontroller programming, and hardware-software co-design.' },
      { icon: '📊', title: 'Signal Processing', text: 'DSP algorithms, image processing, and communication signal research.' },
    ],
    faculty: [
      { name: 'Dr. C. Reddy', role: 'HOD & Prof.', initials: 'CR' },
      { name: 'Dr. L. Iyer', role: 'Associate Prof.', initials: 'LI' },
      { name: 'Dr. H. Nair', role: 'Assistant Prof.', initials: 'HN' },
      { name: 'Dr. G. Shah', role: 'Associate Prof.', initials: 'GS' },
    ],
  },
};
