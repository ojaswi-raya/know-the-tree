document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('select-tree').style.display = 'block';
});

document.getElementById('go-button').addEventListener('click', function() {
    const selectedTree = document.getElementById('tree-type').value;
    startGame(selectedTree);
});

function startGame(treeType) {
    document.getElementById('select-tree').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';

    const stages = ['seedling', 'young', 'mature', 'fullGrown'];
    let currentStage = 0;

    const treeImages = {
        oak: {
            seedling: 'assets/oak/oak-seedling.png',
            young: 'assets/oak/oak-young_tree.png',
            mature: 'assets/oak/oak-mature_tree.png',
            fullGrown: 'assets/oak/oak-full_grown.png'
        },
        maple: {
            seedling: 'assets/maple/maple-seedling.png',
            young: 'assets/maple/maple-young_tree.png',
            mature: 'assets/maple/maple-mature_tree.png',
            fullGrown: 'assets/maple/maple-full_grown.png'
        },
        pine: {
            seedling: 'assets/pine/pine-seedling.png',
            young: 'assets/pine/pine-young_tree.png',
            mature: 'assets/pine/pine-mature_tree.png',
            fullGrown: 'assets/pine/pine-full_grown.png'
        },
        willow: {
            seedling: 'assets/willow/willow-seedling.png',
            young: 'assets/willow/willow-young_tree.png',
            mature: 'assets/willow/willow-mature_tree.png',
            fullGrown: 'assets/willow/willow-full_grown.png'
        },
        cherry: {
            seedling: 'assets/cherry/cherry-seedling.png',
            young: 'assets/cherry/cherry-young_tree.png',
            mature: 'assets/cherry/cherry-mature_tree.png',
            fullGrown: 'assets/cherry/cherry-full_grown.png'
        },
        redwood: {
            seedling: 'assets/redwood/redwood-seedling.png',
            young: 'assets/redwood/redwood-young_tree.png',
            mature: 'assets/redwood/redwood-mature_tree.png',
            fullGrown: 'assets/redwood/redwood-full_grown.png'
        },
        baobab: {
            seedling: 'assets/baobab/baobab-seedling.png',
            young: 'assets/baobab/baobab-young_tree.png',
            mature: 'assets/baobab/baobab-mature_tree.png',
            fullGrown: 'assets/baobab/baobab-full_grown.png'
        },
        eucalyptus: {
            seedling: 'assets/eucalyptus/eucalyptus-seedling.png',
            young: 'assets/eucalyptus/eucalyptus-young_tree.png',
            mature: 'assets/eucalyptus/eucalyptus-mature_tree.png',
            fullGrown: 'assets/eucalyptus/eucalyptus-full_grown.png'
        },
        mango: {
            seedling: 'assets/mango/mango-seedling.png',
            young: 'assets/mango/mango-young_tree.png',
            mature: 'assets/mango/mango-mature_tree.png',
            fullGrown: 'assets/mango/mango-full_grown.png'
        },
        cedar: {
            seedling: 'assets/cedar/cedar-seedling.png',
            young: 'assets/cedar/cedar-young_tree.png',
            mature: 'assets/cedar/cedar-mature_tree.png',
            fullGrown: 'assets/cedar/cedar-full_grown.png',
        }
    };

    const treeData = {
        oak: {
            lifetime: "I can live up to 300 years!",
            climate: "I like a cool, temperate climate.",
            environment: "I grow best in well-drained soil with plenty of sunshine.",
            structure: "I have lobed leaves and acorns.",
            fertilizers: "Give me compost or well-rotted manure.",
            water: "I need a moderate amount of water.",
            benefits: "I provide shade, acorns for animals, and timber.",
            environmentalImpact: "I help prevent soil erosion and take in carbon dioxide."
        },
        maple: {
            lifetime: "I can live between 100 and 400 years!",
            climate: "I enjoy a temperate climate.",
            environment: "I prefer moist, well-drained soil and some sun.",
            structure: "I have lobed leaves and winged seeds.",
            fertilizers: "Give me compost or a balanced fertilizer.",
            water: "I need a moderate amount of water.",
            benefits: "I give sap for maple syrup, timber, and shade.",
            environmentalImpact: "I support wildlife and help clean the air."
        },
        pine: {
            lifetime: "I can live between 100 and 1000 years!",
            climate: "I like cooler to temperate climates.",
            environment: "I grow well in well-drained sandy soil and full sun.",
            structure: "I have needle-like leaves and stay green all year.",
            fertilizers: "Give me acidic fertilizer or compost.",
            water: "I need a little to moderate amount of water.",
            benefits: "I provide timber, resin, and a home for wildlife.",
            environmentalImpact: "I help prevent soil erosion and take in carbon dioxide."
        },
        willow: {
            lifetime: "I can live between 30 and 50 years!",
            climate: "I like a temperate to cool climate.",
            environment: "I grow best in moist soil with plenty of sunshine or shade.",
            structure: "I have long, narrow leaves and flexible branches.",
            fertilizers: "Give me compost or well-rotted manure.",
            water: "I need lots of water.",
            benefits: "I provide shade, can be used in basket-making, and help with soil erosion.",
            environmentalImpact: "I help improve soil and support aquatic life."
        },
        cherry: {
            lifetime: "I can live between 20 and 30 years!",
            climate: "I enjoy a temperate climate.",
            environment: "I prefer well-drained soil and lots of sunshine.",
            structure: "I have pretty blossoms and edible cherries.",
            fertilizers: "Give me a balanced fertilizer.",
            water: "I need a moderate amount of water.",
            benefits: "I provide delicious fruit and look beautiful.",
            environmentalImpact: "I help pollinators and make the environment more diverse."
        },
        redwood: {
            lifetime: "I can live between 500 and 2000 years!",
            climate: "I like a temperate coastal climate.",
            environment: "I need moist, well-drained soil and foggy weather.",
            structure: "I am very tall with thick bark.",
            fertilizers: "Give me organic compost.",
            water: "I need a lot of water.",
            benefits: "I provide timber, help capture carbon, and offer a home for many species.",
            environmentalImpact: "I’m a big carbon sink and protect watersheds."
        },
        baobab: {
            lifetime: "I can live between 1000 and 3000 years!",
            climate: "I thrive in a tropical climate.",
            environment: "I grow in dry, well-drained soil with plenty of sunshine.",
            structure: "I have a thick trunk and sparse canopy.",
            fertilizers: "I don’t need any special fertilizers and grow well in poor soil.",
            water: "I need very little water.",
            benefits: "I provide fruit, store water, and have medicinal uses.",
            environmentalImpact: "I support ecosystems in dry areas."
        },
        eucalyptus: {
            lifetime: "I can live between 250 and 500 years!",
            climate: "I like a temperate to subtropical climate.",
            environment: "I grow best in well-drained soil and full sun.",
            structure: "I have aromatic leaves and stay green all year.",
            fertilizers: "Give me a balanced fertilizer.",
            water: "I need a moderate amount of water.",
            benefits: "I provide timber, essential oils, and honey.",
            environmentalImpact: "I reduce soil salinity and help clean the air."
        },
        mango: {
            lifetime: "I can live between 100 and 200 years!",
            climate: "I thrive in tropical to subtropical climates.",
            environment: "I prefer well-drained, loamy soil and lots of sunshine.",
            structure: "I have broad leaves and delicious fruit.",
            fertilizers: "Give me organic compost or balanced fertilizer.",
            water: "I need a moderate amount of water.",
            benefits: "I provide tasty fruit, timber, and shade.",
            environmentalImpact: "I support biodiversity and help clean the air."
        },
        cedar: {
            lifetime: "I can live between 800 and 1000 years!",
            climate: "I enjoy a temperate climate.",
            environment: "I grow well in moist, well-drained soil with lots of sunshine.",
            structure: "I have scale-like leaves and fragrant wood.",
            fertilizers: "Give me compost or well-rotted manure.",
            water: "I need a moderate amount of water.",
            benefits: "I provide timber, aromatic oil, and look beautiful.",
            environmentalImpact: "I help reduce air pollution and support wildlife."
        }
    };

    function updateGameStage() {
        if (currentStage < stages.length) {
            const stage = stages[currentStage];
            document.getElementById('stage-name').textContent = `${stage.charAt(0).toUpperCase() + stage.slice(1)} Stage`;
            document.getElementById('tree-img').src = treeImages[treeType][stage];
            updateInstructions(stage); // Update instructions with info and caution
            currentStage++;
        } else {
            showEducationalContent(treeType);
        }
    }

    function updateInstructions(stage) {
        const instructions = {
            seedling: {
                info: "Your tree is just starting to grow! Water it often to help it get bigger and stronger.",
                caution: "Be careful! Keep the little tree safe from too much rain and really hot or cold weather."
            },
            young: {
                info: "Your tree is growing up! It's a good time to trim it a little to help it grow better.",
                caution: "Be sure your tree gets plenty of light and isn’t too crowded by other plants."
            },
            mature: {
                info: "Your tree is now mature! Adding some mulch around it helps keep the soil moist and happy.",
                caution: "Watch out for bugs or disease, and make sure the tree stays healthy."
            },
            fullGrown: {
                info: "Wow, your tree is all grown up! Find out all the cool things it can do and how to take care of it.",
                caution: "Remember to keep up with regular care to keep your tree happy and healthy."
            }
        };

        const stageInfo = instructions[stage] || { info: "General instructions.", caution: "No specific cautions." };
        
        document.getElementById('instructions-info').textContent = stageInfo.info;
        document.getElementById('instructions-caution').textContent = stageInfo.caution;
    }
    
    

    function showEducationalContent(treeType) {
        const contentDiv = document.getElementById('educational-content');
        const treeInfo = document.getElementById('tree-info');

        const treeImg = document.getElementById('tree-img');
        treeImg.src = treeImages[treeType]['fullGrown'];

        treeInfo.innerHTML = `
            <strong>Tree Type:</strong> ${treeType.charAt(0).toUpperCase() + treeType.slice(1)}<br>
            <strong>Lifetime:</strong> ${treeData[treeType].lifetime}<br>
            <strong>Climate:</strong> ${treeData[treeType].climate}<br>
            <strong>Environment:</strong> ${treeData[treeType].environment}<br>
            <strong>Structure:</strong> ${treeData[treeType].structure}<br>
            <strong>Fertilizers:</strong> ${treeData[treeType].fertilizers}<br>
            <strong>Water Requirement:</strong> ${treeData[treeType].water}<br>
            <strong>Benefits:</strong> ${treeData[treeType].benefits}<br>
            <strong>Environmental Impact:</strong> ${treeData[treeType].environmentalImpact}
        `;
        contentDiv.style.display = 'block';
    }

    updateGameStage();

    document.getElementById('plant-button').addEventListener('click', updateGameStage);
    document.getElementById('water-button').addEventListener('click', updateGameStage);
    document.getElementById('prune-button').addEventListener('click', updateGameStage);
    document.getElementById('mulch-button').addEventListener('click', updateGameStage);
 }


