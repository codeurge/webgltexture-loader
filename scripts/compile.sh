
set -e

for pkg in packages/*/; do
  cd $pkg
  cp ../../README.md .
  rm -rf lib
  npx babel-cli --source-maps -d lib src
  npx flow-copy-source -v src lib
  cd - 1> /dev/null
done
