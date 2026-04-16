# Build the project
pnpm build

# Navigate into the build output directory
cd dist

# Initialize a new git repo
git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of your repo
# Replace <USERNAME> and <REPO> with your GitHub info
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

Write-Host "Build complete. To deploy, push the 'dist' folder content to your gh-pages branch." -ForegroundColor Green
