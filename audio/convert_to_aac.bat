@echo off
setlocal enabledelayedexpansion

:: Ensure output directory exists
if not exist "converted_aac" (
    mkdir "converted_aac"
)

:: Loop through all MP3 files in current directory
for %%f in (*.mp3) do (
    set "filename=%%~nf"
    ffmpeg -i "%%f" -c:a aac -b:a 128k "converted_aac\!filename!.aac"
    echo Converted %%f to AAC
)

echo Conversion complete!
pause
