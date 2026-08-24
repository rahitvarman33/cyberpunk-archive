@echo off
echo ===================================================
echo   CYBER//FLIX - PUSHING TO GITHUB ARCHIVE
echo   Target: https://github.com/rahitvarman33/cyberpunk-archive.git
echo ===================================================

set GIT_CMD="C:\Users\rah\.gemini\antigravity\scratch\mingit\cmd\git.exe"

%GIT_CMD% add .
%GIT_CMD% commit -m "Upload cyberpunk web app files"
%GIT_CMD% branch -M main
%GIT_CMD% push -u origin main

echo.
echo ===================================================
echo   DONE! IF PROMPTED, LOG IN TO YOUR GITHUB ACCOUNT.
echo ===================================================
pause
