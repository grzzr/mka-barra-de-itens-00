namespace SpriteKind {
    export const Arma = SpriteKind.create()
    export const Magia = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level0`)
let jogador = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jogador)
scene.cameraFollowSprite(jogador)
tiles.placeOnRandomTile(jogador, sprites.dungeon.collectibleInsignia)
sprites.setDataImageValue(jogador, "arma", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . 4 5 5 4 . . . . . . 
    . . . . . . 2 5 5 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
sprites.setDataImageValue(jogador, "magia", img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........dd55........
    ........5555........
    .........44.........
    ........5555........
    ........5d55........
    .......5d5555.......
    .......d55555.......
    .......555555.......
    .......555555.......
    .......555555.......
    .......555555.......
    ........5555........
    ........4444........
    ....................
    `)
let arma = sprites.create(sprites.readDataImage(jogador, "arma"), SpriteKind.Arma)
let magia = sprites.create(sprites.readDataImage(jogador, "magia"), SpriteKind.Arma)
arma.setFlag(SpriteFlag.RelativeToCamera, true)
magia.setFlag(SpriteFlag.RelativeToCamera, true)
arma.setPosition(8, 104)
magia.setPosition(24, 104)
