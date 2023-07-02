@echo off


set REPO_URL=https://github.com/SrNightmare09/chess-fen-reader.git

set CLONE_DIR=%CD%

set DIR_NAME="%CD%\chess-fen-reader"

git clone %REPO_URL%
    
cd %CLONE_DIR%\chess-fen-reader\src\

echo Current directory: %CD%

set FILE_NAME="%CD%\index.html"

start "" %FILE_NAME%
