#!/usr/bin/bash
echo --% > /dev/null ; : ' | out-null
<#'
#
# bash part
#
SCRIPT_DIR=$( dirname -- "$0"; )
WD="$(pwd;)"
OLD_FILE="${WD}/../electron/build"
NEW_FILE="${WD}/build"
if [ -d "${OLD_FILE}" ]; then 
  rm -rf ${OLD_FILE} 
fi
if [ -d "${NEW_FILE}" ]; then 
  cp -a $NEW_FILE $OLD_FILE 
else 
  echo "Error: Could not find React Build folder." 
fi
# end bash part
exit #>
#
# powershell part
#
$WD = Get-Location
$OLD_FILE = "$WD\..\electron\build"
$NEW_FILE = "$WD\build"
if (Test-Path $OLD_FILE) { 
  Remove-Item -Recurse -Force -Confirm:$false $OLD_FILE 
}
if (Test-Path $NEW_FILE) { 
  Copy-Item -Recurse -Force -Confirm:$false $NEW_FILE $OLD_FILE
} else { 
  Write-Host "Error: Could not find React Build folder."
}