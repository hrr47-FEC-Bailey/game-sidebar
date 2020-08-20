echo ""
echo "Setting up \"Game Sidebar\" Component for Steam FEC"
echo ""

echo ""
echo "  Cloning Repository"
git clone https://github.com/hrr47-FEC-Bailey/game-sidebar/

cd game-sidebar

echo ""
echo "  Installing Dependancies"
npm i

echo ""
echo "  Building Webpack"
npm run-script build

echo ""
echo "  Game Sidebar Install Complete"

cd ..