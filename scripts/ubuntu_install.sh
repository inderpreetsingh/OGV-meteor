#!/bin/sh

# OGV Install script for Ubuntu
PACKAGE_VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
echo "📦 Thank you for installing Online Geometry Viewer"
echo "🚀 Version $PACKAGE_VERSION"
echo " "

# Install Node
echo "📦 Installing Node Js version 10"
sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
echo " "

echo "🚀 Node version"
node --version
echo "🚀 Npm Version"
npm --version
echo " "

# Mongo
echo "📦 Installing mongo"
sudo apt-get install mongodb
echo "🚀 Mongo Version"
mongo --version
echo " "

# Meteor
echo "📦 Installing Meteor"
curl https://install.meteor.com | /bin/sh
export PATH="$HOME/.meteor:$PATH"

echo "🚀 Meteor Version"
meteor --version
echo " "

# Install devDeps
echo "📦 Installing Dev Dependencies"
meteor npm install

# Linting
meteor npm run lint 
echo "✨ Linted succesfuly"

echo "🎊 OGV Deployed"
echo "🛫 To launch OGV run: "
echo "    meteor"

