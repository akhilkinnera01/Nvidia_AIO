const STUDY_DATA = {
    1: {
        title: "Exam Blueprint & Environment Setup", date: "Wed, Jan 29", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Read official NCP-AIO study guide", detail: "Download PDF, understand exam domains and weights" },
            { type: "theory", title: "Start Coursera course - Module 1", detail: "AI Infrastructure and Operations Fundamentals" },
            { type: "lab", title: "Set up Ubuntu VM (optional)", detail: "Install VirtualBox/UTM/Multipass, create Ubuntu 22.04 VM" },
            { type: "lab", title: "Install Docker on VM or local", detail: "Run: docker run hello-world to verify" }
        ]
    },
    2: {
        title: "NVIDIA AI Infrastructure Fundamentals", date: "Thu, Jan 30", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Coursera - Continue Module 1-2", detail: "Data center architecture for AI workloads" },
            { type: "theory", title: "Study DGX system architecture", detail: "Understand DGX A100/H100, GPU interconnects" },
            { type: "lab", title: "Google Colab: Run nvidia-smi", detail: "Open Colab, run !nvidia-smi, understand output fields" },
            { type: "lab", title: "Explore GPU info in Colab", detail: "Check CUDA version, memory, GPU utilization" }
        ]
    },
    3: {
        title: "Base Command Manager - Architecture", date: "Fri, Jan 31", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Read BCM documentation overview", detail: "docs.nvidia.com/base-command-manager" },
            { type: "theory", title: "Study Base View interface components", detail: "Dashboard, node views, alerts, reports" },
            { type: "theory", title: "Understand BCM cluster monitoring", detail: "Health checks, utilization metrics, job tracking" },
            { type: "theory", title: "Watch BCM YouTube walkthrough", detail: "Search 'NVIDIA Base Command Manager demo'" }
        ]
    },
    4: {
        title: "BCM - Node & User Management", date: "Sat, Feb 1", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Study BCM node categories", detail: "Head nodes, compute nodes, login nodes, management" },
            { type: "theory", title: "Learn BCM RBAC model", detail: "Admin, Operator, Viewer roles and permissions" },
            { type: "theory", title: "Understand software image management", detail: "Image creation, deployment, versioning" },
            { type: "review", title: "Create flashcards for BCM commands", detail: "cmsh commands: device, partition, category, etc." }
        ]
    },
    5: {
        title: "BCM - Networking & Firmware", date: "Sun, Feb 2", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study BCM network configuration", detail: "Node networking, DPU config, switch management" },
            { type: "theory", title: "Learn firmware update workflows", detail: "Patch management, driver updates, image sync" },
            { type: "lab", title: "Practice network commands on VM", detail: "ip addr, nmcli, understand bonding concepts" },
            { type: "theory", title: "Coursera - Complete Week 1 content", detail: "Finish first week modules and quizzes" }
        ]
    },
    6: {
        title: "BCM - Troubleshooting & Reporting", date: "Mon, Feb 3", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Study BCM troubleshooting workflows", detail: "Job failures, node outages, resource bottlenecks" },
            { type: "theory", title: "Learn node states in BCM", detail: "UP, DOWN, DRAIN, IDLE, MIXED, ALLOCATED" },
            { type: "theory", title: "Understand BCM reporting features", detail: "Usage reports, health dashboards, alerts" },
            { type: "review", title: "Create troubleshooting decision tree", detail: "Document: symptom → diagnostic steps → resolution" }
        ]
    },
    7: {
        title: "Week 1 Review & Mission Control", date: "Tue, Feb 4", tags: ["review", "theory", "free"], subtasks: [
            { type: "review", title: "Review all BCM concepts", detail: "Go through notes and flashcards" },
            { type: "theory", title: "Introduction to Mission Control toolkit", detail: "Understand deployment automation tools" },
            { type: "review", title: "Take Coursera Week 1-2 quizzes", detail: "Test your knowledge, note weak areas" },
            { type: "review", title: "Write 1-page BCM summary", detail: "Architecture, key commands, troubleshooting" }
        ]
    },
    8: {
        title: "Kubernetes on NVIDIA - GPU Operator", date: "Wed, Feb 5", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study GPU Operator architecture", detail: "Components: driver, toolkit, device plugin, DCGM exporter" },
            { type: "theory", title: "Read GPU Operator installation docs", detail: "docs.nvidia.com/datacenter/cloud-native/gpu-operator" },
            { type: "lab", title: "Install Minikube on local machine", detail: "brew install minikube (Mac) or equivalent" },
            { type: "lab", title: "Add NVIDIA Helm repo", detail: "helm repo add nvidia https://nvidia.github.io/gpu-operator" }
        ]
    },
    9: {
        title: "Kubernetes GPU Scheduling & RBAC", date: "Thu, Feb 6", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study GPU resource requests in pods", detail: "nvidia.com/gpu resource limits and requests" },
            { type: "theory", title: "Learn ClusterPolicy CRD", detail: "GPU Operator configuration custom resource" },
            { type: "lab", title: "Create namespace and RBAC rules", detail: "kubectl create ns gpu-test, apply RBAC yaml" },
            { type: "lab", title: "Write GPU pod spec (syntax practice)", detail: "Create yaml with nvidia.com/gpu: 1 resource" }
        ]
    },
    10: {
        title: "Slurm Installation & Architecture", date: "Fri, Feb 7", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study Slurm architecture", detail: "slurmctld, slurmd, slurmdbd components" },
            { type: "theory", title: "Read Slurm quickstart guide", detail: "slurm.schedmd.com/quickstart.html" },
            { type: "lab", title: "Install Slurm on VM", detail: "apt install slurmctld slurmd munge" },
            { type: "lab", title: "Create basic slurm.conf", detail: "Configure ClusterName, ControlMachine, partitions" }
        ]
    },
    11: {
        title: "Slurm GPU Configuration (GRES)", date: "Sat, Feb 8", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study GRES documentation", detail: "slurm.schedmd.com/gres.html - GPU scheduling" },
            { type: "theory", title: "Understand gres.conf syntax", detail: "Name, Type, File, Count, AutoDetect options" },
            { type: "lab", title: "Configure gres.conf for GPUs", detail: "Name=gpu Type=tesla File=/dev/nvidia[0-1]" },
            { type: "lab", title: "Add GresTypes to slurm.conf", detail: "GresTypes=gpu, add Gres to NodeName lines" }
        ]
    },
    12: {
        title: "Slurm Administration Deep Dive", date: "Sun, Feb 9", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Master Slurm commands", detail: "sbatch, srun, salloc, squeue, sinfo, scontrol, sacct" },
            { type: "theory", title: "Study backfill scheduler", detail: "Understand job scheduling algorithms, preemption" },
            { type: "lab", title: "Submit test jobs with sbatch", detail: "Create job script, submit, check with squeue" },
            { type: "lab", title: "Practice scontrol commands", detail: "scontrol show job, scontrol update, node management" }
        ]
    },
    13: {
        title: "Run:ai - Architecture & Concepts", date: "Mon, Feb 10", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Study Run:ai architecture", detail: "Control plane, scheduler, CLI components" },
            { type: "theory", title: "Learn Run:ai installation on K8s", detail: "Helm chart deployment process" },
            { type: "theory", title: "Understand projects and quotas", detail: "Resource allocation, fairness policies" },
            { type: "theory", title: "Watch Run:ai demo videos", detail: "YouTube: Run:ai platform walkthrough" }
        ]
    },
    14: {
        title: "Week 2 Review & MIG Intro", date: "Tue, Feb 11", tags: ["review", "theory", "free"], subtasks: [
            { type: "review", title: "Review K8s GPU Operator concepts", detail: "Components, installation, ClusterPolicy" },
            { type: "review", title: "Review Slurm commands", detail: "Create cheat sheet of all key commands" },
            { type: "theory", title: "Introduction to MIG technology", detail: "What is MIG, supported GPUs, use cases" },
            { type: "lab", title: "Set up Vast.ai account", detail: "Create account, add $5 credit for Week 3" }
        ]
    },
    15: {
        title: "MIG Configuration Deep Dive", date: "Wed, Feb 12", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study MIG profiles for A100", detail: "1g.5gb, 2g.10gb, 3g.20gb, 4g.20gb, 7g.40gb" },
            { type: "theory", title: "Understand GI and CI concepts", detail: "GPU Instances vs Compute Instances" },
            { type: "lab", title: "Rent Vast.ai A100, enable MIG", detail: "nvidia-smi -i 0 -mig 1, then nvidia-smi mig -lgip" },
            { type: "lab", title: "Create MIG instances", detail: "nvidia-smi mig -cgi 9,19,19,19 -C" }
        ]
    },
    16: {
        title: "MIG with Slurm & Kubernetes", date: "Thu, Feb 13", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study MIG in gres.conf", detail: "Configuring MIG devices for Slurm" },
            { type: "theory", title: "Learn MIG with GPU Operator", detail: "MIG strategies: single, mixed" },
            { type: "lab", title: "Create/destroy MIG instances", detail: "Practice different profile combinations" },
            { type: "lab", title: "Run workload on MIG device", detail: "CUDA_VISIBLE_DEVICES=MIG-xxx python test.py" }
        ]
    },
    17: {
        title: "BlueField DPU & DOCA Services", date: "Fri, Feb 14", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Study DPU architecture", detail: "Arm cores, network interfaces, use cases" },
            { type: "theory", title: "Learn DOCA SDK basics", detail: "Programming model, services framework" },
            { type: "theory", title: "Understand DPU modes", detail: "Embedded host, separated host configurations" },
            { type: "theory", title: "Study common DPU troubleshooting", detail: "Firmware issues, network config problems" }
        ]
    },
    18: {
        title: "NGC Containers - Deployment", date: "Sat, Feb 15", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Explore NGC catalog", detail: "catalog.ngc.nvidia.com - browse containers" },
            { type: "theory", title: "Understand NGC authentication", detail: "API key generation, docker login" },
            { type: "lab", title: "Login to NGC registry", detail: "docker login nvcr.io with API key" },
            { type: "lab", title: "Pull and run PyTorch container", detail: "docker pull nvcr.io/nvidia/pytorch:24.01-py3" }
        ]
    },
    19: {
        title: "Training Workloads - Slurm & Run:ai", date: "Sun, Feb 16", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study distributed training concepts", detail: "Multi-GPU, multi-node training patterns" },
            { type: "theory", title: "Learn job script best practices", detail: "Environment variables, resource requests" },
            { type: "lab", title: "Submit training job via Slurm", detail: "sbatch --gres=gpu:1 train.sh" },
            { type: "lab", title: "Monitor GPU with nvidia-smi dmon", detail: "Watch utilization during training" }
        ]
    },
    20: {
        title: "Inference Workloads - K8s & Triton", date: "Mon, Feb 17", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study Triton Inference Server", detail: "Architecture, model repository structure" },
            { type: "theory", title: "Learn inference scaling strategies", detail: "Horizontal scaling, batching, concurrency" },
            { type: "lab", title: "Pull Triton container", detail: "docker pull nvcr.io/nvidia/tritonserver:24.01-py3" },
            { type: "lab", title: "Explore Triton model config", detail: "Understand config.pbtxt format" }
        ]
    },
    21: {
        title: "Week 3 Review", date: "Tue, Feb 18", tags: ["review", "free"], subtasks: [
            { type: "review", title: "Review MIG commands", detail: "Create comprehensive MIG cheat sheet" },
            { type: "review", title: "Review NGC workflow", detail: "Auth → pull → run → monitor" },
            { type: "review", title: "Review DPU/DOCA concepts", detail: "Architecture, modes, troubleshooting" },
            { type: "review", title: "Practice questions on workloads", detail: "Slurm job submission, K8s deployments" }
        ]
    },
    22: {
        title: "DCGM Deep Dive", date: "Wed, Feb 19", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study DCGM architecture", detail: "Host engine, modules, field groups" },
            { type: "theory", title: "Learn DCGM health monitoring", detail: "Health watches, diagnostic levels" },
            { type: "lab", title: "Install and run DCGM", detail: "dcgmi discovery -l, dcgmi diag -r 1" },
            { type: "lab", title: "Monitor with dcgmi dmon", detail: "Watch real-time GPU metrics" }
        ]
    },
    23: {
        title: "Docker & Container Troubleshooting", date: "Thu, Feb 20", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Study NVIDIA Container Toolkit", detail: "nvidia-container-runtime configuration" },
            { type: "theory", title: "Learn common Docker GPU issues", detail: "Driver mismatch, runtime config, visibility" },
            { type: "lab", title: "Simulate container GPU issue", detail: "Misconfigure daemon.json, debug and fix" },
            { type: "lab", title: "Practice docker logs troubleshooting", detail: "Identify and resolve GPU visibility issues" }
        ]
    },
    24: {
        title: "Fabric Manager & NVLink", date: "Fri, Feb 21", tags: ["theory", "lab", "free"], subtasks: [
            { type: "theory", title: "Study Fabric Manager service", detail: "Purpose, configuration, common issues" },
            { type: "theory", title: "Understand NVLink/NVSwitch topology", detail: "Multi-GPU communication, bandwidth" },
            { type: "lab", title: "Check topology with nvidia-smi", detail: "nvidia-smi topo -m (on multi-GPU system)" },
            { type: "theory", title: "Learn Fabric Manager troubleshooting", detail: "Log analysis, connectivity issues" }
        ]
    },
    25: {
        title: "Magnum IO & Storage Performance", date: "Sat, Feb 22", tags: ["theory", "free"], subtasks: [
            { type: "theory", title: "Study Magnum IO components", detail: "GPUDirect RDMA, GPUDirect Storage, NCCL" },
            { type: "theory", title: "Learn storage optimization for AI", detail: "I/O patterns, bottleneck identification" },
            { type: "theory", title: "Understand GPUDirect use cases", detail: "When to use vs staged transfers" },
            { type: "theory", title: "Study storage performance metrics", detail: "Throughput, latency, IOPS for AI workloads" }
        ]
    },
    26: {
        title: "BCM Troubleshooting & NGC Issues", date: "Sun, Feb 23", tags: ["theory", "lab", "paid"], subtasks: [
            { type: "theory", title: "Review BCM common issues", detail: "Node provisioning, job scheduling, alerts" },
            { type: "theory", title: "Study NGC troubleshooting", detail: "Auth failures, pull errors, runtime issues" },
            { type: "lab", title: "Simulate NGC auth failure", detail: "Test with wrong credentials, debug" },
            { type: "lab", title: "Practice recovery procedures", detail: "Document and test fix workflows" }
        ]
    },
    27: {
        title: "Full Review - Installation & Admin", date: "Mon, Feb 24", tags: ["review", "free"], subtasks: [
            { type: "review", title: "Review BCM concepts", detail: "Architecture, commands, troubleshooting" },
            { type: "review", title: "Review K8s GPU Operator", detail: "Installation, ClusterPolicy, device plugin" },
            { type: "review", title: "Review Slurm administration", detail: "All commands, gres.conf, job management" },
            { type: "review", title: "Take Udemy practice test #1", detail: "60-70 questions, note weak areas" }
        ]
    },
    28: {
        title: "Full Review - Workloads & Troubleshoot", date: "Tue, Feb 25", tags: ["review", "free"], subtasks: [
            { type: "review", title: "Review MIG configuration", detail: "Commands, profiles, Slurm/K8s integration" },
            { type: "review", title: "Review DCGM and monitoring", detail: "Commands, health checks, diagnostics" },
            { type: "review", title: "Review troubleshooting workflows", detail: "All decision trees you created" },
            { type: "review", title: "Take Udemy practice test #2", detail: "Focus on troubleshooting scenarios" }
        ]
    },
    29: {
        title: "Weak Areas Deep Dive", date: "Wed, Feb 26", tags: ["review", "free"], subtasks: [
            { type: "review", title: "Identify weak areas from tests", detail: "List topics where you scored lowest" },
            { type: "review", title: "Re-read relevant documentation", detail: "Focus only on weak areas" },
            { type: "review", title: "Create final 1-page cheat sheet", detail: "Key commands, concepts for memory" },
            { type: "review", title: "Light practice questions", detail: "10-15 questions on weak topics only" }
        ]
    },
    30: {
        title: "Light Review & Exam Prep", date: "Thu, Feb 27", tags: ["review", "free"], subtasks: [
            { type: "review", title: "Very light review only", detail: "Skim notes, no new material" },
            { type: "review", title: "Prepare exam environment", detail: "Quiet room, stable internet, webcam, valid ID" },
            { type: "review", title: "Test Certiverse platform", detail: "Check system requirements, do test run" },
            { type: "review", title: "Early bedtime!", detail: "Rest well - you've prepared thoroughly" }
        ]
    },
    31: {
        title: "🏆 EXAM DAY!", date: "Fri, Feb 28", tags: ["exam"], subtasks: [
            { type: "review", title: "Light breakfast, stay calm", detail: "Don't cram - trust your preparation" },
            { type: "review", title: "Start exam on time", detail: "120 minutes, 70-75 questions" },
            { type: "review", title: "Read each question carefully", detail: "~1.5 min per question, flag difficult ones" },
            { type: "review", title: "PASS THE EXAM! 🎉", detail: "You've got this, Akhil!" }
        ]
    }
};

const QUOTES = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "What you get by achieving your goals is not as important as what you become.", author: "Zig Ziglar" }
];

const PRACTICE_QUESTIONS = [
    "What are the main components of BCM (Base Command Manager)?",
    "How do you enable MIG mode on an A100 GPU?",
    "What's the difference between GPU Instances (GI) and Compute Instances (CI)?",
    "Name 3 MIG profiles available on A100 40GB.",
    "What command lists available MIG profiles?",
    "How do you configure GPUs in Slurm's gres.conf?",
    "What's the purpose of the NVIDIA GPU Operator in Kubernetes?",
    "How do you submit a job requesting 2 GPUs in Slurm?",
    "What does dcgmi diag -r 1 do?",
    "How do you check GPU topology with nvidia-smi?",
    "What is the purpose of Fabric Manager?",
    "Name 3 components of Magnum IO.",
    "How do you authenticate to NGC registry?",
    "What's the difference between srun and sbatch in Slurm?",
    "What node states exist in BCM/Slurm?",
    "How do you run a Docker container with GPU access?",
    "What is GPUDirect RDMA used for?",
    "What are the key components of the GPU Operator?",
    "How do you destroy all MIG instances on a GPU?",
    "What's the backfill scheduler in Slurm?"
];

const PHASES = [
    { label: 'W1', title: 'Foundation & BCM Deep Dive', days: [1, 2, 3, 4, 5, 6, 7], topic: 'Installation & Deployment (31%)', resources: 'Coursera (free), Google Colab (free), Local VMs (optional)', cost: '$0' },
    { label: 'W2', title: 'Kubernetes, Slurm & Run:ai', days: [8, 9, 10, 11, 12, 13, 14], topic: 'Installation & Administration', resources: 'Local VMs (Minikube, Slurm), Kaggle', cost: '$0' },
    { label: 'W3', title: 'MIG, DPU, Workloads & NGC', days: [15, 16, 17, 18, 19, 20, 21], topic: 'Admin & Workload Mgmt', resources: '<span style="color:#f0883e;">Vast.ai A100 (~15-20 hrs)</span> — CRITICAL WEEK!', cost: '~$15-20' },
    { label: 'W4', title: 'Troubleshooting & Optimization', days: [22, 23, 24, 25, 26, 27, 28], topic: 'Troubleshooting (23%)', resources: 'Vast.ai (light ~10 hrs), Local VMs', cost: '~$10-15' },
    { label: '🎯', title: 'Final Sprint', days: [29, 30, 31], topic: 'EXAM DAY!', resources: 'Review only — no labs!', cost: '$0' }
];

// Configurable dates with localStorage persistence
let START_DATE = new Date(localStorage.getItem('ncp-aio-start-date') || '2025-01-29');
let EXAM_DATE = new Date(localStorage.getItem('ncp-aio-exam-date') || '2025-02-28');
let activeFilters = [];
let currentStreak = parseInt(localStorage.getItem('ncp-aio-streak') || '0');
let lastStudyDate = localStorage.getItem('ncp-aio-last-study');

// Toast notification system
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Confetti celebration
function launchConfetti() {
    const colors = ['#76b900', '#58a6ff', '#f0883e', '#a371f7', '#f85149'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

function getCurrentStudyDay() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const start = new Date(START_DATE); start.setHours(0, 0, 0, 0);
    if (today < start) return 0;
    let bestDay = null, bestDiff = Infinity;
    for (let d = 1; d <= 31; d++) {
        const dayDate = getStudyDayDate(d); dayDate.setHours(0, 0, 0, 0);
        const diff = today - dayDate;
        if (diff >= 0 && diff < bestDiff) { bestDiff = diff; bestDay = d; }
    }
    return bestDay || 32;
}

function getDaysUntilExam() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const exam = new Date(EXAM_DATE); exam.setHours(0, 0, 0, 0);
    return Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
}

function getTotalCalendarDays() {
    const start = new Date(START_DATE); start.setHours(0, 0, 0, 0);
    const exam = new Date(EXAM_DATE); exam.setHours(0, 0, 0, 0);
    return Math.max(1, Math.round((exam - start) / (1000 * 60 * 60 * 24)) + 1);
}

function getStudyDayDate(dayNum) {
    const totalCalDays = getTotalCalendarDays();
    const dayIndex = totalCalDays === 1 ? 0 : Math.round((dayNum - 1) * (totalCalDays - 1) / 30);
    const date = new Date(START_DATE);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + dayIndex);
    return date;
}

function formatDate(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

function loadProgress() { const saved = localStorage.getItem('ncp-aio-subtasks-v3'); return saved ? JSON.parse(saved) : {}; }
function saveProgress(progress) { localStorage.setItem('ncp-aio-subtasks-v3', JSON.stringify(progress)); }
function getSubtaskKey(day, index) { return `${day}-${index}`; }

function renderDayCard(dayNum) {
    const data = STUDY_DATA[dayNum];
    const progress = loadProgress();
    const completedCount = data.subtasks.filter((_, i) => progress[getSubtaskKey(dayNum, i)]).length;
    const totalCount = data.subtasks.length;
    const allComplete = completedCount === totalCount;
    const dateObj = getStudyDayDate(dayNum);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const dayDate = new Date(dateObj); dayDate.setHours(0, 0, 0, 0);
    let stateClass = '';
    if (dayDate.getTime() === today.getTime()) stateClass = 'today';
    else if (allComplete) stateClass = 'all-complete';
    else if (dayDate < today) stateClass = 'past';
    const shortDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
    const formattedDate = formatDate(dateObj);
    return `<div class="day-card ${stateClass}" data-day="${dayNum}">
                <div class="day-header" onclick="toggleDay(${dayNum})">
                    <div class="day-number">${dayNum}<span class="date-small">${shortDate}</span></div>
                    <div class="day-title-area"><h4>${data.title}</h4><div class="day-summary">${formattedDate}</div></div>
                    <div class="day-progress"><div class="day-progress-bar"><div class="day-progress-fill" style="width: ${(completedCount / totalCount) * 100}%"></div></div><span>${completedCount}/${totalCount}</span></div>
                    <div class="day-tags">${data.tags.map(t => `<span class="tag ${t}">${t}</span>`).join('')}</div>
                    <span class="expand-icon">▼</span>
                </div>
                <div class="day-content"><ul class="subtasks">${data.subtasks.map((task, i) => {
        const isComplete = progress[getSubtaskKey(dayNum, i)];
        return `<li class="subtask ${isComplete ? 'completed' : ''}" onclick="toggleSubtask(${dayNum}, ${i}, event)">
                        <div class="subtask-checkbox"></div>
                        <div class="subtask-content"><div class="subtask-title">${task.title}</div><div class="subtask-detail">${task.detail}</div></div>
                        <span class="subtask-type ${task.type}">${task.type}</span>
                    </li>`;
    }).join('')}</ul></div>
            </div>`;
}

function renderAllDays() {
    const container = document.getElementById('schedule-container');
    container.innerHTML = PHASES.map(phase => {
        const firstDate = getStudyDayDate(phase.days[0]);
        const lastDate = getStudyDayDate(phase.days[phase.days.length - 1]);
        const dateRange = `${formatDate(firstDate)} - ${formatDate(lastDate)}`;
        return `<section class="week-section">
            <div class="week-header"><span class="week-number">${phase.label}</span>
                <div>
                    <div class="week-title">${phase.title}</div>
                    <div class="week-dates">${dateRange} &bull; ${phase.topic}</div>
                </div>
            </div>
            <div class="week-lab-req"><strong>🖥️ Resources:</strong> ${phase.resources} &bull; <strong>Cost: ${phase.cost}</strong></div>
            <div class="day-grid">${phase.days.map(d => renderDayCard(d)).join('')}</div>
        </section>`;
    }).join('');
}

function updateStats() {
    const progress = loadProgress();
    let totalComplete = 0, totalSubtasks = 0, daysComplete = 0, theoryComplete = 0, labComplete = 0, reviewComplete = 0;
    for (let day = 1; day <= 31; day++) {
        const data = STUDY_DATA[day]; let dayComplete = true;
        data.subtasks.forEach((task, i) => {
            totalSubtasks++;
            if (progress[getSubtaskKey(day, i)]) { totalComplete++; if (task.type === 'theory') theoryComplete++; if (task.type === 'lab') labComplete++; if (task.type === 'review') reviewComplete++; }
            else { dayComplete = false; }
        });
        if (dayComplete) daysComplete++;
    }
    const percent = Math.round((totalComplete / totalSubtasks) * 100);
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-bar').textContent = percent + '%';
    document.getElementById('progress-text').textContent = `${totalComplete} / ${totalSubtasks} subtasks`;
    document.getElementById('days-complete').textContent = `${daysComplete}/31`;
    document.getElementById('theory-tasks').textContent = theoryComplete;
    document.getElementById('lab-tasks').textContent = labComplete;
    document.getElementById('review-tasks').textContent = reviewComplete;
}

function updateHeader() {
    const currentDay = getCurrentStudyDay();
    document.getElementById('days-left').textContent = Math.max(0, getDaysUntilExam());
    document.getElementById('today-date').textContent = formatDate(new Date());
    document.getElementById('exam-date-display').textContent = formatDate(EXAM_DATE);
    if (currentDay >= 1 && currentDay <= 31) document.getElementById('today-task').textContent = `Day ${currentDay}: ${STUDY_DATA[currentDay].title}`;
    else if (currentDay < 1) document.getElementById('today-task').textContent = `Study starts ${formatDate(START_DATE)}`;
    else document.getElementById('today-task').textContent = 'Exam complete! 🎉';
    updateStudyHours();
}

function updateStudyHours() {
    const TOTAL_STUDY_HOURS = 93;
    const totalCalDays = getTotalCalendarDays();
    const dailyHours = (TOTAL_STUDY_HOURS / totalCalDays).toFixed(1);
    document.getElementById('daily-hours').textContent = `${dailyHours} hrs`;
}

function toggleDay(dayNum) { document.querySelector(`.day-card[data-day="${dayNum}"]`).classList.toggle('expanded'); }

function toggleSubtask(dayNum, index, event) {
    event.stopPropagation();
    const progress = loadProgress(); const key = getSubtaskKey(dayNum, index);
    const wasComplete = STUDY_DATA[dayNum].subtasks.every((_, i) => progress[getSubtaskKey(dayNum, i)]);
    progress[key] = !progress[key]; saveProgress(progress);
    const isNowComplete = STUDY_DATA[dayNum].subtasks.every((_, i) => progress[getSubtaskKey(dayNum, i)]);
    // Celebrate if day just completed
    if (!wasComplete && isNowComplete) { launchConfetti(); showToast(`🎉 Day ${dayNum} complete!`, 'success'); updateStreak(); }
    const oldCard = document.querySelector(`.day-card[data-day="${dayNum}"]`);
    const wasExpanded = oldCard.classList.contains('expanded');
    const tempDiv = document.createElement('div'); tempDiv.innerHTML = renderDayCard(dayNum);
    const newCard = tempDiv.firstElementChild;
    if (wasExpanded) newCard.classList.add('expanded');
    oldCard.replaceWith(newCard); updateStats();
}

function toggleAllDays() {
    const cards = document.querySelectorAll('.day-card');
    const anyExpanded = Array.from(cards).some(c => c.classList.contains('expanded'));
    cards.forEach(card => card.classList.toggle('expanded', !anyExpanded));
}

function toggleBuddy() {
    document.getElementById('studyBuddy').classList.toggle('open');
    document.querySelector('.main-layout').classList.toggle('sidebar-open');
}
function switchTab(tabName) {
    document.querySelectorAll('.buddy-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.buddy-panel').forEach(p => p.classList.remove('active'));
    event.target.classList.add('active');
    let panel = document.getElementById(`panel-${tabName}`);
    if (panel) panel.classList.add('active');
}
function toggleChecklist(li) { const cb = li.querySelector('input'); cb.checked = !cb.checked; li.classList.toggle('checked', cb.checked); }

let pomodoroTime = 25 * 60, pomodoroInterval = null, pomodoroRunning = false;
function updatePomodoroDisplay() { const m = Math.floor(pomodoroTime / 60), s = pomodoroTime % 60; document.getElementById('pomodoroDisplay').textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`; }
function togglePomodoro() {
    const btn = document.getElementById('pomodoroBtn');
    if (pomodoroRunning) { clearInterval(pomodoroInterval); btn.textContent = '▶ Start'; pomodoroRunning = false; }
    else { pomodoroInterval = setInterval(() => { if (pomodoroTime > 0) { pomodoroTime--; updatePomodoroDisplay(); } else { clearInterval(pomodoroInterval); btn.textContent = '▶ Start'; pomodoroRunning = false; alert('⏰ Pomodoro complete! Take a break!'); } }, 1000); btn.textContent = '⏸ Pause'; pomodoroRunning = true; }
}
function resetPomodoro() { clearInterval(pomodoroInterval); pomodoroTime = 25 * 60; pomodoroRunning = false; document.getElementById('pomodoroBtn').textContent = '▶ Start'; updatePomodoroDisplay(); }
function setPomodoro(mins) { clearInterval(pomodoroInterval); pomodoroTime = mins * 60; pomodoroRunning = false; document.getElementById('pomodoroBtn').textContent = '▶ Start'; updatePomodoroDisplay(); }

function saveNotes() { localStorage.setItem('ncp-aio-notes', document.getElementById('quickNotes').value); showToast('📝 Notes saved!', 'success'); }
function loadNotes() { const n = localStorage.getItem('ncp-aio-notes'); if (n) document.getElementById('quickNotes').value = n; }
function saveWeakAreas() { localStorage.setItem('ncp-aio-weak', document.getElementById('weakAreas').value); showToast('⚠️ Weak areas saved!', 'warning'); }
function loadWeakAreas() { const w = localStorage.getItem('ncp-aio-weak'); if (w) document.getElementById('weakAreas').value = w; }
function saveBudget() { const s = parseFloat(document.getElementById('budgetSpent').value) || 0; localStorage.setItem('ncp-aio-budget', s); document.getElementById('budgetRemaining').textContent = '$' + Math.max(0, 50 - s); }
function loadBudget() { const s = parseFloat(localStorage.getItem('ncp-aio-budget')) || 0; document.getElementById('budgetSpent').value = s; document.getElementById('budgetRemaining').textContent = '$' + Math.max(0, 50 - s); }
function loadRandomQuote() { const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]; document.getElementById('quote-text').textContent = `"${q.text}"`; document.getElementById('quote-author').textContent = `— ${q.author}`; }
function newQuestion() { document.getElementById('questionText').textContent = PRACTICE_QUESTIONS[Math.floor(Math.random() * PRACTICE_QUESTIONS.length)]; }

// Settings Modal
function openSettings() {
    document.getElementById('settingsModal').classList.add('open');
    document.getElementById('startDateInput').value = START_DATE.toISOString().split('T')[0];
    document.getElementById('examDateInput').value = EXAM_DATE.toISOString().split('T')[0];
    document.getElementById('streakDisplay').textContent = currentStreak;
}
function closeSettings() { document.getElementById('settingsModal').classList.remove('open'); }
function updateDates() {
    const start = document.getElementById('startDateInput').value;
    const exam = document.getElementById('examDateInput').value;
    if (start) { START_DATE = new Date(start); localStorage.setItem('ncp-aio-start-date', start); }
    if (exam) { EXAM_DATE = new Date(exam); localStorage.setItem('ncp-aio-exam-date', exam); }
    if (EXAM_DATE <= START_DATE) { showToast('❌ Exam date must be after start date!', 'error'); return; }
    const totalCalDays = getTotalCalendarDays();
    const dailyHours = (93 / totalCalDays).toFixed(1);
    renderAllDays(); updateStats(); updateHeader(); updateExamCountdown();
    showToast(`📅 Schedule recalculated! ${totalCalDays} days, ~${dailyHours} hrs/day`, 'success');
}

// Data Export/Import
function exportData() {
    const data = { progress: loadProgress(), notes: localStorage.getItem('ncp-aio-notes'), weakAreas: localStorage.getItem('ncp-aio-weak'), budget: localStorage.getItem('ncp-aio-budget'), startDate: localStorage.getItem('ncp-aio-start-date'), examDate: localStorage.getItem('ncp-aio-exam-date'), streak: currentStreak, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `ncp-aio-backup-${new Date().toISOString().split('T')[0]}.json`; a.click();
    showToast('💾 Data exported!', 'success');
}
function importData(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.progress) saveProgress(data.progress);
            if (data.notes) localStorage.setItem('ncp-aio-notes', data.notes);
            if (data.weakAreas) localStorage.setItem('ncp-aio-weak', data.weakAreas);
            if (data.budget) localStorage.setItem('ncp-aio-budget', data.budget);
            if (data.startDate) { localStorage.setItem('ncp-aio-start-date', data.startDate); START_DATE = new Date(data.startDate); }
            if (data.examDate) { localStorage.setItem('ncp-aio-exam-date', data.examDate); EXAM_DATE = new Date(data.examDate); }
            if (data.streak) { currentStreak = data.streak; localStorage.setItem('ncp-aio-streak', data.streak); }
            renderAllDays(); updateStats(); updateHeader(); loadNotes(); loadWeakAreas(); loadBudget();
            showToast('📥 Data imported successfully!', 'success');
        } catch (err) { showToast('❌ Import failed: Invalid file', 'error'); }
    };
    reader.readAsText(file); event.target.value = '';
}
function resetAllProgress() {
    if (!confirm('⚠️ Are you sure you want to reset ALL progress? This cannot be undone!')) return;
    localStorage.removeItem('ncp-aio-subtasks-v3'); localStorage.removeItem('ncp-aio-notes'); localStorage.removeItem('ncp-aio-weak'); localStorage.removeItem('ncp-aio-budget'); localStorage.removeItem('ncp-aio-streak'); localStorage.removeItem('ncp-aio-last-study');
    currentStreak = 0; renderAllDays(); updateStats(); loadNotes(); loadWeakAreas(); loadBudget();
    closeSettings(); showToast('🗑️ All progress reset!', 'warning');
}

// Filter & Search
function filterDays() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    document.querySelectorAll('.day-card').forEach(card => {
        const dayNum = parseInt(card.dataset.day);
        const data = STUDY_DATA[dayNum];
        const matchesSearch = !query || data.title.toLowerCase().includes(query) || data.subtasks.some(t => t.title.toLowerCase().includes(query) || t.detail.toLowerCase().includes(query));
        const matchesFilter = activeFilters.length === 0 || data.tags.some(t => activeFilters.includes(t));
        card.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
    });
}
function toggleFilter(filter) {
    const el = document.querySelector(`.filter-tag.${filter}`);
    if (activeFilters.includes(filter)) { activeFilters = activeFilters.filter(f => f !== filter); el.classList.remove('active'); }
    else { activeFilters.push(filter); el.classList.add('active'); }
    filterDays();
}

// Streak tracking
function updateStreak() {
    const today = new Date().toDateString();
    if (lastStudyDate === today) return;
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (lastStudyDate === yesterday.toDateString()) { currentStreak++; }
    else if (lastStudyDate !== today) { currentStreak = 1; }
    lastStudyDate = today;
    localStorage.setItem('ncp-aio-streak', currentStreak);
    localStorage.setItem('ncp-aio-last-study', today);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 's' || e.key === 'S') { e.preventDefault(); toggleBuddy(); }
    if (e.key === 'p' || e.key === 'P') { e.preventDefault(); togglePomodoro(); }
    if (e.key === '?') { showToast('⌨️ S=Sidebar, P=Pomodoro, ?=Help', 'info'); }
});

// Enhanced Pomodoro with sound
const originalTogglePomodoro = togglePomodoro;
togglePomodoro = function () {
    const btn = document.getElementById('pomodoroBtn');
    if (pomodoroRunning) { clearInterval(pomodoroInterval); btn.textContent = '▶ Start'; pomodoroRunning = false; }
    else {
        pomodoroInterval = setInterval(() => {
            if (pomodoroTime > 0) { pomodoroTime--; updatePomodoroDisplay(); }
            else {
                clearInterval(pomodoroInterval); btn.textContent = '▶ Start'; pomodoroRunning = false;
                // Play notification sound
                try { const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'); audio.play().catch(() => { }); } catch (e) { }
                showToast('⏰ Pomodoro complete! Take a break!', 'success');
                if ('Notification' in window && Notification.permission === 'granted') { new Notification('⏰ Pomodoro Complete!', { body: 'Time for a break!' }); }
            }
        }, 1000);
        btn.textContent = '⏸ Pause'; pomodoroRunning = true;
        if ('Notification' in window && Notification.permission === 'default') { Notification.requestPermission(); }
    }
};

// Practice Test Score Tracker
let testScores = JSON.parse(localStorage.getItem('ncp-aio-scores') || '[]');
function addTestScore() {
    const input = document.getElementById('testScoreInput');
    const score = parseInt(input.value);
    if (isNaN(score) || score < 0 || score > 100) { showToast('Please enter a valid score (0-100)', 'error'); return; }
    testScores.push({ score, date: new Date().toLocaleDateString() });
    localStorage.setItem('ncp-aio-scores', JSON.stringify(testScores));
    input.value = '';
    updateScoreDisplay();
    showToast(`📊 Score ${score}% added!`, 'success');
}
function updateScoreDisplay() {
    const history = document.getElementById('scoreHistory');
    const avgEl = document.getElementById('avgScore');
    if (testScores.length === 0) { history.textContent = 'No scores recorded yet'; avgEl.textContent = '--'; return; }
    const recent = testScores.slice(-5).reverse();
    history.innerHTML = recent.map(s => `<span style="color: ${s.score >= 70 ? '#238636' : '#f85149'}">${s.score}%</span>`).join(' → ');
    const avg = Math.round(testScores.reduce((a, b) => a + b.score, 0) / testScores.length);
    avgEl.textContent = avg + '%';
    avgEl.style.color = avg >= 70 ? '#238636' : '#f0883e';
}

// Exam Countdown & Study Time Estimator
function updateExamCountdown() {
    const days = getDaysUntilExam();
    const el = document.getElementById('examCountdown');
    const studyEl = document.getElementById('studyTimeLeft');
    if (days <= 0) { el.textContent = 'Exam Day!'; el.style.color = '#f85149'; studyEl.textContent = 'Good luck!'; return; }
    el.textContent = `${days} days`;
    el.style.color = days <= 3 ? '#f85149' : days <= 7 ? '#f0883e' : '#76b900';
    // Calculate remaining study hours based on incomplete tasks
    const progress = loadProgress();
    let remaining = 0;
    for (let day = 1; day <= 31; day++) {
        STUDY_DATA[day].subtasks.forEach((task, i) => {
            if (!progress[getSubtaskKey(day, i)]) remaining++;
        });
    }
    const hoursLeft = Math.round(remaining * 0.75); // ~45 min per subtask
    studyEl.textContent = `~${hoursLeft} hours`;
}

function init() {
    renderAllDays(); updateStats(); updateHeader(); updatePomodoroDisplay(); loadNotes(); loadWeakAreas(); loadBudget(); loadRandomQuote(); updateScoreDisplay(); updateExamCountdown();
    // Expand all study days scheduled for today
    const today = new Date(); today.setHours(0, 0, 0, 0);
    let firstTodayCard = null;
    for (let d = 1; d <= 31; d++) {
        const dayDate = getStudyDayDate(d); dayDate.setHours(0, 0, 0, 0);
        if (dayDate.getTime() === today.getTime()) {
            const card = document.querySelector(`.day-card[data-day="${d}"]`);
            if (card) { card.classList.add('expanded'); if (!firstTodayCard) firstTodayCard = card; }
        }
    }
    if (firstTodayCard) { setTimeout(() => { firstTodayCard.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300); }
    if (window.innerWidth > 1200) { document.getElementById('studyBuddy').classList.add('open'); document.querySelector('.main-layout').classList.add('sidebar-open'); }
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') { setTimeout(() => Notification.requestPermission(), 3000); }
}
init();
