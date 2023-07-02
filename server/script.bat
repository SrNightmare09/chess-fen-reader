@echo off

REM GET DIRECTORY
for %%I in ("%~dp0") do set "SCRIPT_DIR=%%~dpI"

REM GET PARENT DIRS
for %%I in (%SCRIPT_DIR%) do set "PARENT_DIR=%%~dpI"

set REPO=chess-fen-reader

git clone

start "" "%PARENT_DIR%"