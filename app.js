document.addEventListener('DOMContentLoaded', () => {
    const validator = new SemVerValidator();
    const versionInput = document.getElementById('versionInput');
    const validateBtn = document.getElementById('validateBtn');
    const resultDiv = document.getElementById('result');

    validateBtn.addEventListener('click', () => {
        const version = versionInput.value.trim();
        const isValid = validator.isValidSemVer(version);

        resultDiv.textContent = isValid 
            ? `✅ "${version}" is a valid SemVer version` 
            : `❌ "${version}" is NOT a valid SemVer version`;
        
        resultDiv.className = isValid ? 'result-container valid' : 'result-container invalid';
    });

    // Also validate on Enter key
    versionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validateBtn.click();
        }
    });
});