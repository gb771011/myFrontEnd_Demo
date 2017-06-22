@echo off
rem echo %date:~2,8%
rem echo %time:~0,5%
set now=%date:~2,8%[%time:~0,8%]

echo %now%

git add .

git commit -m "Home Update:%now%" 

git push origin master