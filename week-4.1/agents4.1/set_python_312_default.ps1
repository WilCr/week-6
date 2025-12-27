# Script to set Python 3.12.10 as the global default
# Run this script as Administrator

$python312Path = "C:\Users\wilcr\AppData\Local\Programs\Python\Python312"
$python312Scripts = "$python312Path\Scripts"

# Get current system PATH
$systemPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$paths = $systemPath -split ';' | Where-Object { $_ -and $_ -notlike "*Python314*" }

# Prepend Python 3.12.10 paths to system PATH
$newSystemPath = ($python312Path, $python312Scripts) + $paths -join ';'

try {
    [Environment]::SetEnvironmentVariable("Path", $newSystemPath, "Machine")
    Write-Host "Successfully updated system PATH to prioritize Python 3.12.10"
    Write-Host ""
    Write-Host "Please restart your terminal/PowerShell for changes to take effect."
    Write-Host "Then run: python --version"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    Write-Host "Make sure you're running PowerShell as Administrator"
}

