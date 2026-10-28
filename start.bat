@echo off
chcp 65001 >nul
setlocal

echo [KMA Curriculum] Starting dev server...
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js not found in PATH.
    echo         Install LTS from https://nodejs.org then reopen this window.
    pause
    exit /b 1
)

if not exist "package.json" (
    echo [ERROR] package.json not found. Run this file from the project root folder.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo [INFO] node_modules missing - installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. Check your internet connection.
        pause
        exit /b 1
    )
    echo [INFO] Dependencies installed.
)

echo [INFO] Dev server starting at http://localhost:5173
start "" cmd /c "ping -n 4 127.0.0.1 >nul && start http://localhost:5173"

call npm run dev

if errorlevel 1 (
    echo.
    echo [ERROR] Dev server stopped with an error. See messages above.
    pause
)

endlocal
