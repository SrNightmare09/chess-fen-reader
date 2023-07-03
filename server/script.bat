@echo off

@REM Get current directory
set CLONE_DIR=%CD%

@REM Clone repository
set REPO_URL=https://github.com/SrNightmare09/chess-fen-reader.git
git clone %REPO_URL%

@REM Navigate to the project directory
cd %CLONE_DIR%\chess-fen-reader\src\
set FILE_NAME="%CD%\index.html"

@REM Open index.html in the default browser
start "" %FILE_NAME%