@echo off
REM echo 日期:%date%
REM echo 時間:%time%

set newCommit=Batch Update:%date:~2,8%_%time:~0,5% 
REM echo %newCommit%

git add .
git commit -m "%newCommit%"
git push -u origin master

REM timeout /t 3 /nobreak
