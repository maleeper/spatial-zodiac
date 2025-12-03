document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('steps-container');

    // Render Steps
    tutorialSteps.forEach((step, index) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.style.animationDelay = `${index * 0.1}s`; // Stagger animation

        const tagsHtml = step.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-icon-wrapper" style="background-color: ${step.color}20; color: ${step.color}">
                <i data-lucide="${step.icon}" width="32" height="32"></i>
            </div>
            <h3 class="step-title">${step.title}</h3>
            <p class="step-description">${step.description}</p>
            <div class="step-tags">
                ${tagsHtml}
            </div>
            <div class="step-details">
                ${step.details}
            </div>
        `;

        container.appendChild(card);
    });

    // Render Pro Tip
    const proTipContainer = document.createElement('div');
    proTipContainer.className = 'pro-tip-container';
    proTipContainer.innerHTML = `
        <div class="pro-tip-icon">
            <i data-lucide="lightbulb" width="24" height="24"></i>
        </div>
        <div class="pro-tip-content">
            <h3>Pro Tip</h3>
            <p>${proTip}</p>
        </div>
    `;
    container.appendChild(proTipContainer);

    // Re-initialize icons for dynamic content
    lucide.createIcons();
});
