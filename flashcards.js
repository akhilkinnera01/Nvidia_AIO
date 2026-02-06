const FLASHCARD_DATA = [
    // Installation & Configuration (31%)
    {
        id: 1,
        category: "Installation",
        question: "What is the primary role of the Head Node in a Base Command Manager (BCM) cluster?",
        answer: "The Head Node manages the cluster, provisioning compute nodes, handling scheduling (Slurm/K8s), and providing a single point of administration."
    },
    {
        id: 2,
        category: "Installation",
        question: "Which command is used to install the NVIDIA GPU Operator on a Kubernetes cluster using Helm?",
        answer: "helm install gpu-operator navbar/gpu-operator -n gpu-operator --create-namespace"
    },
    {
        id: 3,
        category: "Installation",
        question: "What are the three main network networks typically configured in a DGX SuperPod?",
        answer: "Management Network (OOB), Compute Network (Storage/Inter-node), and In-Band Management Network."
    },
    {
        id: 4,
        category: "Installation",
        question: "In BCM, what is a 'Software Image' used for?",
        answer: "It captures the OS, drivers, and software stack of a node to be provisioned across multiple compute nodes ensuring consistency."
    },
    {
        id: 5,
        category: "Installation",
        question: "What is the purpose of the 'cmsh' command in BCM?",
        answer: "Cluster Management Shell (cmsh) is the command-line interface for administering all aspects of the BCM cluster."
    },
    {
        id: 6,
        category: "Installation",
        question: "Which component of the GPU Operator is responsible for advertising GPU resources to Kubernetes?",
        answer: "Use 'NVIDIA Device Plugin'. It discovers GPUs and advertises them as allocatable resources."
    },
    {
        id: 7,
        category: "Installation",
        question: "What is the minimum GPU architecture required for Multi-Instance GPU (MIG)?",
        answer: "NVIDIA Ampere architecture (e.g., A100, A30) or newer (Hopper H100)."
    },
    {
        id: 8,
        category: "Installation",
        question: "How do you verify that the NVIDIA Container Toolkit is correctly installed and working?",
        answer: "Run: docker run --rm --gpus all nvidia/cuda:base nvidia-smi"
    },
    {
        id: 9,
        category: "Installation",
        question: "What is 'DeepOps' in the context of NVIDIA infrastructure?",
        answer: "An open-source project that provides Ansible playbooks to deploy Kubernetes and Slurm clusters with NVIDIA software stacks."
    },
    {
        id: 10,
        category: "Installation",
        question: "Which BCM command enters the device management mode for a specific node?",
        answer: "device use <node-name>"
    },

    // Administration (23%)
    {
        id: 11,
        category: "Administration",
        question: "How do you enable MIG mode on GPU 0 using nvidia-smi?",
        answer: "nvidia-smi -i 0 -mig 1"
    },
    {
        id: 12,
        category: "Administration",
        question: "What is the difference between a GPU Instance (GI) and a Compute Instance (CI) in MIG?",
        answer: "GI isolates memory and compute engines (creates the slice). CI runs within a GI and shares the GI's memory but has its own compute engines."
    },
    {
        id: 13,
        category: "Administration",
        question: "Which Slurm configuration file is used to define GPU resources?",
        answer: "gres.conf (Generic Resource Scheduling configuration)"
    },
    {
        id: 14,
        category: "Administration",
        question: "What does 'nvidia-smi mig -lgip' do?",
        answer: "Lists GPU Instance Profiles (lgip) available on the GPU."
    },
    {
        id: 15,
        category: "Administration",
        question: "In Slurm, how do you request 2 GPUs for a job?",
        answer: "#SBATCH --gres=gpu:2"
    },
    {
        id: 16,
        category: "Administration",
        question: "What is 'nv_peer_mem' used for?",
        answer: "It is a kernel module that enables GPUDirect RDMA (peer-to-peer access) for InfiniBand/RoCE devices."
    },
    {
        id: 17,
        category: "Administration",
        question: "How do you check the health of an NVIDIA Fabric Manager?",
        answer: "systemctl status nvidia-fabricmanager"
    },
    {
        id: 18,
        category: "Administration",
        question: "Which tool allows you to update firmware across all BCM nodes?",
        answer: "The 'firmware' command in cmsh or the Web Portal's firmware management section."
    },
    {
        id: 19,
        category: "Administration",
        question: "What is the default port for the NVIDIA License System (DLS)?",
        answer: "Port 8080 or 8081 typically."
    },
    {
        id: 20,
        category: "Administration",
        question: "How do you drain a node in Slurm to prevent new jobs from starting?",
        answer: "scontrol update NodeName=<node> State=DRAIN Reason='Maintenance'"
    },

    // Workload Management (23%)
    {
        id: 21,
        category: "Workload",
        question: "What is the purpose of the 'ClusterPolicy' CRD in the GPU Operator?",
        answer: "It defines the configuration state of the GPU Operator, specifying version, image paths, and enabled components."
    },
    {
        id: 22,
        category: "Workload",
        question: "How do you run a PyTorch container from NGC interactively?",
        answer: "docker run --gpus all -it --rm nvcr.io/nvidia/pytorch:xx.xx-py3"
    },
    {
        id: 23,
        category: "Workload",
        question: "What is Triton Inference Server?",
        answer: "An open-source software that simplifies the deployment of AI models at scale in production."
    },
    {
        id: 24,
        category: "Workload",
        question: "Which parameter in 'model_config.pbtxt' defines how many model instances run on a GPU?",
        answer: "instance_group [ { count: N } ]"
    },
    {
        id: 25,
        category: "Workload",
        question: "In Run:ai, what is a 'Project'?",
        answer: "A logical grouping of resources and users, often mapped to a Kubernetes namespace, with assigned quotas."
    },
    {
        id: 26,
        category: "Workload",
        question: "What is 'oversubscription' of GPU memory via Unified Memory?",
        answer: "Allowing a workload to allocate more memory than the GPU has physically, by swapping pages to system RAM (slower)."
    },
    {
        id: 27,
        category: "Workload",
        question: "How do you check current utilization of MIG instances?",
        answer: "nvidia-smi"
    },
    {
        id: 28,
        category: "Workload",
        question: "What is NCCL?",
        answer: "NVIDIA Collective Communications Library. It implements multi-GPU and multi-node communication primitives (all-reduce, broadcast)."
    },
    {
        id: 29,
        category: "Workload",
        question: "How does GPUDirect Storage improve performance?",
        answer: "It enables a direct data path between storage (NVMe) and GPU memory, bypassing the CPU bounce buffer."
    },
    {
        id: 30,
        category: "Workload",
        question: "What is the 'Backfill Scheduler' in Slurm?",
        answer: "It allows smaller jobs to start earlier if they don't delay the start time of the highest-priority pending jobs, improving cluster utilization."
    },

    // Troubleshooting (23%)
    {
        id: 31,
        category: "Troubleshooting",
        question: "A job fails with 'CUDA_ERROR_OUT_OF_MEMORY'. What should you check first?",
        answer: "Check if the batch size is too large or if another process is consuming the GPU memory."
    },
    {
        id: 32,
        category: "Troubleshooting",
        question: "nvidia-smi shows 'ERR!' for fan speed and power usage. What does this usually imply?",
        answer: "The GPU drivers may be corrupted, or the GPU has fallen off the bus (hardware/PCIe issue)."
    },
    {
        id: 33,
        category: "Troubleshooting",
        question: "What command generates a debug log archive for NVIDIA drivers?",
        answer: "nvidia-bug-report.sh"
    },
    {
        id: 34,
        category: "Troubleshooting",
        question: "If 'nvidia-smi' works but Docker containers can't see the GPU, what file is likely misconfigured?",
        answer: "/etc/docker/daemon.json (It must specify the 'nvidia-container-runtime' as default)."
    },
    {
        id: 35,
        category: "Troubleshooting",
        question: "What does Xid error 79 indicate?",
        answer: "GPU has fallen off the bus. Usually requires a hard reboot of the node."
    },
    {
        id: 36,
        category: "Troubleshooting",
        question: "How do you check DCGM health status for all GPUs?",
        answer: "dcgmi health -c"
    },
    {
        id: 37,
        category: "Troubleshooting",
        question: "A training job using NCCL hangs. What tool can help debug connectivity?",
        answer: "NCCL_DEBUG=INFO (env var) or 'all_reduce_perf' / 'all_gather_perf' tests from nccl-tests."
    },
    {
        id: 38,
        category: "Troubleshooting",
        question: "Kubernetes pods stuck in 'Pending' state for GPU request. What to check?",
        answer: "Check 'kubectl describe pod' for 'Insufficient nvidia.com/gpu' events or node taints."
    },
    {
        id: 39,
        category: "Troubleshooting",
        question: "MIG instances are not showing up in Kubernetes. What might be wrong?",
        answer: "The MIG strategy in GPU Operator might be set to 'none' or 'single' instead of 'mixed', or the node labels are missing."
    },
    {
        id: 40,
        category: "Troubleshooting",
        question: "What does 'nvidia-smi topo -m' help verify?",
        answer: "The topology matrix helps verify link types (NVLink vs PCIe) and ensure optimal P2P communication paths."
    },

    // General & Concepts
    {
        id: 41,
        category: "General",
        question: "What is an NVSwitch?",
        answer: "A high-speed switch chip that connects multiple GPUs with NVLink to provide full-bandwidth all-to-all communication."
    },
    {
        id: 42,
        category: "General",
        question: "Difference between NVLink and PCIe?",
        answer: "NVLink has much higher bandwidth (900GB/s on H100) compared to PCIe Gen5 (128GB/s) and supports memory semantics."
    },
    {
        id: 43,
        category: "General",
        question: "What is 'Magnum IO'?",
        answer: "The I/O subsystem of the data center, optimizing data movement between GPUs, storage, and networking (includes GPUDirect)."
    },
    {
        id: 44,
        category: "General",
        question: "What is a 'vGPU'?",
        answer: "Virtual GPU software that allows sharing physical GPUs across virtual desktops (VDI) or compute workloads."
    },
    {
        id: 45,
        category: "General",
        question: "Where are NGC API keys managed?",
        answer: "In the NGC Dashboard (ngc.nvidia.com) under user Setup > Get API Key."
    },
    {
        id: 46,
        category: "General",
        question: "What is the function of the Message Passing Interface (MPI)?",
        answer: "Standardized and portable message-passing system used for parallel computing distributed across nodes."
    },
    {
        id: 47,
        category: "General",
        question: "What is the 'GPU Direct RDMA' requirement for the NIC?",
        answer: "The NIC (Network Interface Card) and GPU must be on the same PCIe root complex for best performance."
    },
    {
        id: 48,
        category: "General",
        question: "What is 'DOCA'?",
        answer: "Data Center on a Chip Architecture. The SDK for programming BlueField DPUs."
    },
    {
        id: 49,
        category: "General",
        question: "What is the recommended OS for NVIDIA DGX systems?",
        answer: "DGX OS (based on Ubuntu)."
    },
    {
        id: 50,
        category: "General",
        question: "How do you check the version of the NVIDIA driver installed?",
        answer: "nvidia-smi or cat /proc/driver/nvidia/version"
    }

];

let currentCardIndex = 0;
let isFlipped = false;
let showingAnswer = false;
let flashcardsMastered = JSON.parse(localStorage.getItem('ncp-aio-mastered-cards') || '[]');

function initFlashcards() {
    renderFlashcard();
    updateMasteryProgress();
}

function renderFlashcard() {
    const container = document.getElementById('flashcard-container');
    if (!container) return;

    const card = FLASHCARD_DATA[currentCardIndex];
    if (!card) return;

    const isMastered = flashcardsMastered.includes(card.id);

    container.innerHTML = `
        <div class="flashcard ${isFlipped ? 'flipped' : ''}" onclick="flipCard()">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <div class="card-category">${card.category}</div>
                    <div class="card-content">${card.question}</div>
                    <div class="card-hint">Click to flip</div>
                </div>
                <div class="flashcard-back">
                    <div class="card-category">${card.category}</div>
                    <div class="card-content">${card.answer}</div>
                    <div class="card-hint">Click to flip back</div>
                </div>
            </div>
        </div>
        <div class="flashcard-controls">
            <button class="fc-btn" onclick="prevCard()">← Prev</button>
            <button class="fc-btn action" onclick="toggleMastery(${card.id})">
                ${isMastered ? '✅ Mastered' : '○ Mark Mastered'}
            </button>
            <button class="fc-btn" onclick="nextCard()">Next →</button>
        </div>
        <div class="card-counter">Card ${currentCardIndex + 1} of ${FLASHCARD_DATA.length}</div>
    `;
}

function flipCard() {
    const cardEl = document.querySelector('.flashcard');
    cardEl.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextCard() {
    if (currentCardIndex < FLASHCARD_DATA.length - 1) {
        currentCardIndex++;
        isFlipped = false; // Reset flip
        renderFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        isFlipped = false; // Reset flip
        renderFlashcard();
    }
}

function toggleMastery(id) {
    if (flashcardsMastered.includes(id)) {
        flashcardsMastered = flashcardsMastered.filter(cid => cid !== id);
    } else {
        flashcardsMastered.push(id);
        launchConfetti(); // Small celebration for mastering a concept
    }
    localStorage.setItem('ncp-aio-mastered-cards', JSON.stringify(flashcardsMastered));
    renderFlashcard();
    updateMasteryProgress();
}

function updateMasteryProgress() {
    const count = flashcardsMastered.length;
    const total = FLASHCARD_DATA.length;
    const percent = Math.round((count / total) * 100);

    const el = document.getElementById('flashcard-progress');
    if (el) {
        el.innerHTML = `
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.3rem;">
                <span>Mastery Progress</span>
                <span style="color:#76b900;">${count}/${total} (${percent}%)</span>
            </div>
            <div style="height:6px; background:#0d1117; border-radius:3px; overflow:hidden;">
                <div style="width:${percent}%; height:100%; background:#76b900; transition:width 0.3s;"></div>
            </div>
        `;
    }
}
