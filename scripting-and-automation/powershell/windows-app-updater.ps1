Write-Host "========== Updating Windows Apps =========="

# Update WinGet itself and all packages
winget source update

winget upgrade --all `
    --accept-package-agreements `
    --accept-source-agreements `
    --silent

Write-Host "`n========== Updating WSL =========="

if (Get-Command wsl -ErrorAction SilentlyContinue) {
    wsl --update
}

Write-Host "`n========== Updating npm Global Packages =========="

if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm update -g
}

Write-Host "`n========== Updating Chocolatey =========="

if (Get-Command choco -ErrorAction SilentlyContinue) {
    choco upgrade all -y
}

Write-Host "`n========== Cleaning WinGet Cache =========="

winget source update

Write-Host "`nAll updates completed!"