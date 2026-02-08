@echo off
echo Starting deployment build...

REM Set stack size for Slint compiler
set RUST_MIN_STACK=67108864

echo Building WASM demo (release)...
cd wasm-demo
call wasm-pack build --target web --release
if %ERRORLEVEL% neq 0 (
    echo WASM build failed!
    exit /b %ERRORLEVEL%
)
cd ..

echo Building Docusaurus site...
cd doc-site
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Docusaurus build failed!
    exit /b %ERRORLEVEL%
)
cd ..

echo Copying WASM artifacts to doc-site/build/wasm...
if not exist "doc-site\build\wasm" mkdir "doc-site\build\wasm"
xcopy /Y /E /I "wasm-demo\pkg" "doc-site\build\wasm"

echo Deployment build complete!
