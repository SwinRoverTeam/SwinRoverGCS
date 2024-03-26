const { ipcRenderer } = require('electron');

// Update the loading progress and text
ipcRenderer.on('update-not-available', () => {
    updateLoadingProgress(50);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Update not available';
});
ipcRenderer.on('update-available', () => {
    updateLoadingProgress(20);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Update available';
});
ipcRenderer.on('checking-for-update', () => {
    updateLoadingProgress(10);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Checking for update';
});
ipcRenderer.on('update-downloaded', () => {
    updateLoadingProgress(40);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Update downloaded';
});
ipcRenderer.on('load-configs', () => {
    updateLoadingProgress(70);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Loading configs';
});
ipcRenderer.on('configs-loaded', () => {
    updateLoadingProgress(100);
    const loadingText = document.querySelector('.loading-text');
    loadingText.textContent = 'Configs loaded';
    setTimeout(() => {
        window.close();
    }, 1000);
});
function updateLoadingProgress(progress) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = progress + '%';
}