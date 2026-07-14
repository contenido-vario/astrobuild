@echo off
title Vigilante de Tailwind v4 Global
cd /d "%~dp0"
tailwindcss -i ../src/input.css -o ../dist/output.css --watch