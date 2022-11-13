$wd = Get-Location
$root = $PSScriptRoot
$locations = "$root\electron","$root\react"

Foreach ($location in $locations) {
    Write-Host "Installing dependencies in $location."
    Set-Location $location
    npm install
}

Set-Location $wd
