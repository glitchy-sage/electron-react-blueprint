$oldFile = "../electron/build"
$newFile = "./build"
if (Test-Path $oldFile) {
  Remove-Item -Recurse -Force -Confirm:$false $oldFile
}
if (Test-Path $newFile) {
  Copy-Item -Recurse -Force -Confirm:$false $newFile $oldFile
} else {
  Write-Host "Error: Could not find React Build folder."
}