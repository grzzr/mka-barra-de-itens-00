// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030000000000000000000000000100030300010301020000020200000001000303000000000200000002020000010003030006000000020402020200000100030300000000000000020202000001000303000101010000000000000000010003030000000101000000000000000100030300000000010100000000000101000303000000000001010101010101000003030000000000000000000000000000030300000000000000000000000000000303030000000000000000000000000003050300000000000000000000000000030505030000000000000000000000030505050503030303030303030303030305`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 . . 2 2 . . . 2 . 2 
2 . . . . 2 . . . 2 2 . . 2 . 2 
2 . . . . . 2 2 2 2 2 . . 2 . 2 
2 . . . . . . . 2 2 2 . . 2 . 2 
2 . 2 2 2 . . . . . . . . 2 . 2 
2 . . . 2 2 . . . . . . . 2 . 2 
2 . . . . 2 2 . . . . . 2 2 . 2 
2 . . . . . 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorDark0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark1,sprites.dungeon.floorDark2,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
