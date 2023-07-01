@echo off

REM GET DIRECTORY
for %%I in ("%~dp0") do set "script_dir=%%~dpI"

REM GET PARENT DIRS
for %%I in (%script_dir%) do set "parent_dir=%%~dpI"

set REPO=chess-fen-reader

git clone https://github.com/SrNightmare09/%REPO%
