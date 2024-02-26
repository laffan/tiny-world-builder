class Level1_Preload extends Phaser.Scene {
  constructor() {
    super("Level1_Preload");
  }

  preload() {

    let loadingBar = this.add.graphics();

    this.load.on("progress", (value) => {
      loadingBar.clear(); 
      loadingBar.fillStyle(0xffffff, 1); 
      loadingBar.fillRect(0,  this.cameras.main.centerY, value, 5); 
    });


    this.load.path = "./assets/level1_pixel/";

    // 🌺 Save JSON path so we can use it for *both*  
    // LoadJSON and this.load.tilemapTiledJSON()
    const JSONFilename = "level1_pixel.json";

    // 🌺 Save JSON to the scene registry for use with loadSaveCollection
    loadJSON(this, JSONFilename, this.load.path + JSONFilename);

    // Load tilemaps
    this.load.tilemapTiledJSON("level1_pixel_JSON", JSONFilename);

    /* Preload tile map */
    this.load.image("grays_12px_img", "tilesets/grays_12px.png");

    // Preload spritesheet
    this.load.spritesheet("character", "spritesheets/MedievalRangerRun.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    // 🌺 Load in the image collection name from Tiled
    loadSaveCollection(this, "shapes", this.registry.get(JSONFilename));

    this.load.on("complete", () => {
      loadingBar.destroy();
      this.scene.start("Level1_Pixel");
    });
    
  }
}
