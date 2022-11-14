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
    echo "Updating dependencies in ${LOCATION}."
    cd ${LOCATION}
    npm update
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
    Write-Host "Updating dependencies in $LOCATION."
    Set-Location $LOCATION
    npm update
}
Set-Location $WD
