@echo off
cd /d %1
echo WebRoot:%cd%
live-server
pause