const checklistItems = Array.from(document.querySelectorAll("[data-check]"));
const progressBar = document.querySelector("#checklist-progress");
const progressLabel = document.querySelector("#progress-label");
const resetButton = document.querySelector("#reset-checklist");
const storageKey = "ready-together-checklist";

function updateProgress() {
	const completedCount = checklistItems.filter((item) => item.checked).length;
	progressBar.value = completedCount;
	progressLabel.textContent = `${completedCount} of ${checklistItems.length} steps complete`;
}

try {
	const savedItems = JSON.parse(localStorage.getItem(storageKey) || "[]");
	if (Array.isArray(savedItems)) {
		checklistItems.forEach((item) => {
			item.checked = savedItems.includes(item.id);
		});
	}
} catch {
	// Keep the checklist usable if browser storage is unavailable.
}

checklistItems.forEach((item) => {
	item.addEventListener("change", () => {
		const completedItems = checklistItems.filter((checklistItem) => checklistItem.checked).map((checklistItem) => checklistItem.id);
		try {
			localStorage.setItem(storageKey, JSON.stringify(completedItems));
		} catch {
			// Progress remains available for the current page view.
		}
		updateProgress();
	});
});

resetButton.addEventListener("click", () => {
	checklistItems.forEach((item) => {
		item.checked = false;
	});
	try {
		localStorage.removeItem(storageKey);
	} catch {
		// The visible checklist still resets if browser storage is unavailable.
	}
	updateProgress();
});

updateProgress();
