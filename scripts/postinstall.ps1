#!/usr/bin/bash
echo --% > /dev/null ; : ' | out-null
<#'
#
# bash part
#
WD="$(pwd;)"
LOCATIONS=("${WD}/electron" "${WD}/react")
for LOCATION in "${LOCATIONS[@]}"
do
    echo "Installing dependencies in ${LOCATION}."
    cd ${LOCATION}
    npm install
done
cd ${WD}
# end bash part
exit #>
#
# powershell part
#
$WD = Get-Location
$LOCATIONS = "$WD\electron","$WD\react"
Foreach ($LOCATION in $LOCATIONS) {
    Write-Host "Installing dependencies in $LOCATION."
    Set-Location $LOCATION
    npm install
}
Set-Location $WD