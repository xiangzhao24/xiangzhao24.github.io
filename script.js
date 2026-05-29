const projects = {
  segmentation: {
    title: "NeuroMetric: Brain Tumor Segmentation",
    bullets: [
      "Built an MRI segmentation pipeline with Python, PyTorch, MONAI, and a U-Net architecture.",
      "Implemented preprocessing steps including intensity normalization, slice extraction, and data augmentation.",
      "Used Dice loss to address class imbalance and visualized segmentation outputs for interpretation."
    ],
    meta: {
      Period: "WS 2025/2026",
      Domain: "Medical imaging",
      Stack: "Python, PyTorch, MONAI",
      Output: "Segmentation workflow"
    }
  },
  denoising: {
    title: "MRI Image Denoising with Deep Learning",
    bullets: [
      "Developed a CNN-based encoder-decoder model to suppress simulated MRI noise.",
      "Trained with MSE loss while preserving structural details in reconstructed images.",
      "Evaluated image quality improvements using PSNR and SSIM metrics."
    ],
    meta: {
      Period: "WS 2025/2026",
      Domain: "Image restoration",
      Stack: "Python, CNN, MATLAB",
      Output: "Denoising model"
    }
  },
  community: {
    title: "Technical Community Leadership",
    bullets: [
      "Managed a technical community of 500+ members and organized workshops on emerging technologies.",
      "Translated complex technical concepts into accessible discussions and learning sessions.",
      "Built communication habits useful for cross-functional research and engineering teams."
    ],
    meta: {
      Period: "2023-2025",
      Domain: "Technical communication",
      Scope: "500+ members",
      Output: "Workshops and engagement"
    }
  }
};

const panel = document.querySelector("#project-panel");
const buttons = document.querySelectorAll(".tab-button");

function renderProject(key) {
  const project = projects[key];
  const meta = Object.entries(project.meta)
    .map(([label, value]) => `<span>${label}<strong>${value}</strong></span>`)
    .join("");
  const bullets = project.bullets.map((item) => `<li>${item}</li>`).join("");

  panel.innerHTML = `
    <div>
      <h3>${project.title}</h3>
      <ul>${bullets}</ul>
    </div>
    <div class="project-meta">${meta}</div>
  `;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProject(button.dataset.project);
  });
});

renderProject("segmentation");

const intro =
  "I am Xiang Zhao, a second-semester M.Sc. Medical Engineering student at FAU Erlangen-Nurnberg specializing in Medical Image and Data Processing. My project work focuses on MRI segmentation and denoising using Python, PyTorch, MONAI, and U-Net-based deep learning workflows.";

document.querySelector("#copy-intro").addEventListener("click", async (event) => {
  await navigator.clipboard.writeText(intro);
  const original = event.currentTarget.textContent;
  event.currentTarget.textContent = "Copied";
  setTimeout(() => {
    event.currentTarget.textContent = original;
  }, 1400);
});
