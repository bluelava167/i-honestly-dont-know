namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Special_Attack = SpriteKind.create()
    export const MEGA_BOSS = SpriteKind.create()
    export const SUPER_BOSS = SpriteKind.create()
    export const bossproject = SpriteKind.create()
}
namespace StatusBarKind {
    export const Boss_HP = StatusBarKind.create()
    export const the1st = StatusBarKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cooldown == 0) {
        cooldown = 1
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 . . . 4 . 4 4 . . . 
            . . . 4 4 4 4 . 4 4 4 4 4 . . . 
            . . 4 4 5 5 4 4 4 5 4 5 4 4 . . 
            . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
            . 4 4 5 5 2 2 5 2 2 5 2 5 4 4 . 
            4 4 5 5 2 2 2 2 2 2 2 2 2 5 4 4 
            4 4 5 2 2 2 e 2 e 2 e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 5 2 2 e e e e 2 2 5 5 4 4 
            4 4 5 5 5 2 2 2 2 2 2 5 5 5 4 4 
            . 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            `, mySprite, 0, -50)
        projectile2.setKind(SpriteKind.Special_Attack)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        projectile2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 . . . 4 . 4 4 . . . 
            . . . 4 4 4 4 . 4 4 4 4 4 . . . 
            . . 4 4 5 5 4 4 4 5 4 5 4 4 . . 
            . . 4 4 5 5 5 5 5 5 5 5 5 4 4 . 
            . 4 4 5 5 2 2 5 2 2 5 2 5 4 4 . 
            4 4 5 5 2 2 2 2 2 2 2 2 2 5 4 4 
            4 4 5 2 2 2 e 2 e 2 e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 2 2 e e e e e e 2 2 5 4 4 
            4 4 5 5 2 2 e e e e 2 2 5 5 4 4 
            4 4 5 5 5 2 2 2 2 2 2 5 5 5 4 4 
            . 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . 4 4 4 4 4 4 4 4 4 4 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 . . . 4 . 4 4 . . . . 
            . . . 4 4 4 4 . 4 4 4 4 4 . . . 
            . . 4 4 5 5 4 4 4 5 4 5 4 4 . . 
            . . 4 5 5 2 2 5 2 2 5 2 5 4 . . 
            . 4 4 5 2 2 2 2 2 2 2 2 5 4 4 . 
            . 4 4 5 2 2 e 2 e 2 e 2 5 4 4 . 
            . 4 4 5 2 e e e e e e 2 5 4 4 . 
            . 4 4 5 2 e e e e e e 2 5 4 4 . 
            . 4 4 5 2 e e e e e e 2 5 4 4 . 
            . 4 4 5 5 2 e e e e 2 2 5 4 4 . 
            . 4 4 5 5 2 2 2 2 2 2 5 5 4 4 . 
            . . 4 5 5 5 5 5 5 5 5 5 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossproject, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
statusbars.onZero(StatusBarKind.Boss_HP, function (status) {
    sprites.destroy(Mega_boss_real, effects.disintegrate, 2000)
    info.changeScoreBy(500)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(statusbar)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        d d d d 
        d d d d 
        4 4 4 4 
        4 4 4 4 
        4 4 4 4 
        4 4 4 4 
        4 4 4 4 
        4 4 4 4 
        `, mySprite, 0, -100)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar.value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MEGA_BOSS, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
info.onScore(1500, function () {
    if (fought_1st_boss == 0) {
        fought_1st_boss = 1
        _1st_boss = sprites.create(img`
            . . . . . f f f f . . . . . . . 
            . . . . f d d d d f . . . . . . 
            . . . f d d d d d d f . . . . . 
            . . f d d d d d d d d f . . . . 
            . . f f d d d d f d d f . . . . 
            . . f d d f f d d d d f . . . . 
            . . f d d d d d d d d f . . . . 
            . . . f d d d d d d f . . . . . 
            . . . f f d d d d f b f . . . . 
            . . f b b f f f f b b f . . . . 
            . f f f b b b b b b b b f . . . 
            . f 1 f b b b b f f f b f . . f 
            . f f f b b b b f 1 f b f . f f 
            . . f b b b b b f f f b b f b f 
            . . f b b b b b b b b b b b b f 
            . . . f f f f f f f f f f f f f 
            `, SpriteKind.SUPER_BOSS)
        _1st_boss.setPosition(randint(0, scene.screenWidth()), 0)
        _1st_boss.follow(mySprite, 10)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.the1st)
        statusbar2.attachToSprite(_1st_boss)
    }
})
sprites.onOverlap(SpriteKind.Special_Attack, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar.value += -50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SUPER_BOSS, function (sprite, otherSprite) {
    game.gameOver(false)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mySprite3, effects.fire, 100)
    sprites.destroy(statusbar)
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Special_Attack, SpriteKind.SUPER_BOSS, function (sprite, otherSprite) {
    statusbar2.value += -10
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Special_Attack, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 1000)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.SUPER_BOSS, function (sprite, otherSprite) {
    statusbar2.value += -5
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Special_Attack, SpriteKind.MEGA_BOSS, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Mega_boss_hp.value += -20
})
statusbars.onZero(StatusBarKind.the1st, function (status) {
    sprites.destroy(_1st_boss)
    info.changeScoreBy(5000)
    beaten1st = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.MEGA_BOSS, function (sprite, otherSprite) {
    Mega_boss_hp.value += -5
    sprites.destroy(sprite, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    sprites.destroy(otherSprite, effects.rings, 200)
})
let mySprite2: Sprite = null
let current = 0
let projectile3: Sprite = null
let beaten1st = 0
let Mega_boss_hp: StatusBarSprite = null
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
let _1st_boss: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let Mega_boss_real: Sprite = null
let projectile2: Sprite = null
let cooldown = 0
let mySprite: Sprite = null
let fought_1st_boss = 0
fought_1st_boss = 0
mySprite = sprites.create(img`
    . . . f f f f f f f f f . . . 
    . f f e e e e e e e e f f . . 
    . f f f f f f f f f f f f f . 
    f d d d d d d d d d d d d f f 
    f d f d d d d d d d d f d d f 
    f d d d d d d d d d d d d d f 
    f d f f f f f f f f f f d d f 
    f d d d d d d d d d d d d d f 
    f f f f f f f f f f f f f f f 
    . f f 6 6 6 6 6 6 6 6 6 f f . 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    . . f f f f f f f f f f f . . 
    . . f . . . . . . . . . f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(10)
mySprite.setStayInScreen(true)
mySprite.setPosition(79, 105)
info.setScore(0)
music.play(music.stringPlayable("C5 B C5 F A B C A ", 120), music.PlaybackMode.LoopingInBackground)
info.setLife(5)
let list = [1, 2, 3]
animation.runImageAnimation(
mySprite,
[img`
    . . . f f f f f f f f f . . . 
    . f f e e e e e e e e f f . . 
    . f f f f f f f f f f f f f . 
    f d d d d d d d d d d d d f f 
    f d f d d d d d d d d f d d f 
    f d d d d d d d d d d d d d f 
    f d f f f f f f f f f f d d f 
    f d d d d d d d d d d d d d f 
    f f f f f f f f f f f f f f f 
    . f f 6 6 6 6 6 6 6 6 6 f f . 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    . . f f f f f f f f f f f . . 
    . . f . . . . . . . . . f . . 
    `,img`
    . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . 
    . f f e e e e e e e e f f . . 
    . f f f f f f f f f f f f f . 
    f d d d d d d d d d d d d f f 
    f d f d d d d d d d d f d d f 
    f d d d d d d d d d d d d d f 
    f d f f f f f f f f f f d d f 
    f d d d d d d d d d d d d d f 
    f f f f f f f f f f f f f f f 
    . f f 6 6 6 6 6 6 6 6 6 f f . 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f 6 6 6 6 6 6 6 6 6 f . f 
    f . f f f f f f f f f f f . f 
    . . f . . . . . . . . . f . . 
    `],
500,
true
)
game.onUpdateInterval(15000, function () {
    Mega_boss_real = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 2 d 4 d 5 d 7 d 6 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.MEGA_BOSS)
    Mega_boss_hp = statusbars.create(20, 4, StatusBarKind.Boss_HP)
    Mega_boss_hp.attachToSprite(Mega_boss_real)
    animation.runImageAnimation(
    Mega_boss_real,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 2 d 4 d 5 d 7 d 6 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 6 d 2 d 4 d 5 d 7 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 7 d 6 d 2 d 4 d 5 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 5 d 7 d 6 d 2 d 4 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 6 f . . . 
        . . f 9 6 6 6 6 6 6 1 6 6 f . . 
        . f 9 9 9 6 6 6 6 6 6 6 6 6 f . 
        . f 9 9 9 9 6 6 6 6 6 1 6 6 f . 
        f d f 9 9 9 9 9 6 6 6 6 6 f d f 
        f d d f f f f f f f f f f d d f 
        f d d d d d d d d d d d d d d f 
        . f d d 4 d 5 d 7 d 6 d 2 d f . 
        . . f d d d d d d d d d d f . . 
        . . . f f f f f f f f f f . . . 
        `],
    150,
    true
    )
    Mega_boss_real.setPosition(randint(0, scene.screenWidth()), 0)
    Mega_boss_real.follow(mySprite, 10)
})
game.onUpdateInterval(1000, function () {
    cooldown = 0
})
game.onUpdateInterval(1000, function () {
    if (fought_1st_boss == 1 && beaten1st == 0) {
        projectile3 = sprites.createProjectileFromSprite(img`
            . . 1 1 1 1 . . 
            . 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            . . 1 1 1 1 . . 
            `, _1st_boss, 0, 50)
        projectile3.setKind(SpriteKind.bossproject)
    }
})
game.onUpdateInterval(randint(200, 500), function () {
    current = list._pickRandom()
    if (current == 1) {
        mySprite2 = sprites.create(img`
            f f f f f f f f f f f f 
            f d d d d d d d d d d f 
            f d f d d d d d d f d f 
            f d d d b b b b d d d f 
            f f f f f f f f f f f f 
            . f f 6 6 6 6 6 6 f f . 
            f . f 6 6 6 6 6 6 f . f 
            f . f 6 6 6 6 6 6 f . f 
            . . f f f f f f f f . . 
            . . f . . . . . . f . . 
            `, SpriteKind.Enemy)
        mySprite2.setPosition(randint(0, scene.screenWidth()), 0)
        mySprite2.follow(mySprite, 50)
    } else {
        if (current == 2) {
            mySprite2 = sprites.create(img`
                f f f f f f f f f f f f 
                f d d d d d d d d d d f 
                f d f d d d d d d f d f 
                f d d d b b b b d d d f 
                f f f f f f f f f f f f 
                . f f 2 2 2 2 2 2 f f . 
                f . f 2 2 2 2 2 2 f . f 
                f . f 2 2 2 2 2 2 f . f 
                . . f f f f f f f f . . 
                . . f . . . . . . f . . 
                `, SpriteKind.Enemy)
            mySprite2.setPosition(randint(0, scene.screenWidth()), 0)
            mySprite2.follow(mySprite, 50)
        } else {
            if (current == 3) {
                mySprite2 = sprites.create(img`
                    f f f f f f f f f f f f 
                    f d d d d d d d d d d f 
                    f d f d d d d d d f d f 
                    f d d d b b b b d d d f 
                    f f f f f f f f f f f f 
                    . f f 7 7 7 7 7 7 f f . 
                    f . f 7 7 7 7 7 7 f . f 
                    f . f 7 7 7 7 7 7 f . f 
                    . . f f f f f f f f . . 
                    . . f . . . . . . f . . 
                    `, SpriteKind.Enemy)
                mySprite2.setPosition(randint(0, scene.screenWidth()), 0)
                mySprite2.follow(mySprite, 50)
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    current = list._pickRandom()
    if (current == 1) {
        mySprite3 = sprites.create(img`
            . f f f f f f f f f f f f f f . 
            . f 2 d d d d d d d d d d 2 f . 
            . f 2 2 d d d d d d d d 2 2 f . 
            . f d d d 2 2 2 2 2 2 d d d f . 
            . f d d d 2 d d d d 2 d d d f . 
            . f f f f f f f f f f f f f f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f . f 7 7 7 7 7 7 7 7 f . f . 
            . f . f 7 7 7 7 7 7 7 7 f . f . 
            . f . f 7 7 7 7 7 7 7 7 f . f . 
            . f . f 7 7 7 7 7 7 7 7 f . f . 
            . f . f 7 7 7 7 7 7 7 7 f . f . 
            . . . f 7 7 7 7 7 7 7 7 f . f . 
            . . . f f f f f f f f f f . f . 
            . . . f . . . . . . . . f . . . 
            . . . f . . . . . . . . f . . . 
            `, SpriteKind.Boss)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        mySprite3.follow(mySprite, 20)
        statusbar.attachToSprite(mySprite3)
        mySprite3.setPosition(randint(0, scene.screenWidth()), 0)
    } else {
        if (current == 2) {
            mySprite3 = sprites.create(img`
                . f f f f f f f f f f f f f f . 
                . f 2 d d d d d d d d d d 2 f . 
                . f 2 2 d d d d d d d d 2 2 f . 
                . f d d d 2 2 2 2 2 2 d d d f . 
                . f d d d 2 d d d d 2 d d d f . 
                . f f f f f f f f f f f f f f . 
                . . f f 2 2 2 2 2 2 2 2 f f . . 
                . f . f 2 2 2 2 2 2 2 2 f . f . 
                . f . f 2 2 2 2 2 2 2 2 f . f . 
                . f . f 2 2 2 2 2 2 2 2 f . f . 
                . f . f 2 2 2 2 2 2 2 2 f . f . 
                . f . f 2 2 2 2 2 2 2 2 f . f . 
                . . . f 2 2 2 2 2 2 2 2 f . f . 
                . . . f f f f f f f f f f . f . 
                . . . f . . . . . . . . f . . . 
                . . . f . . . . . . . . f . . . 
                `, SpriteKind.Boss)
            statusbar = statusbars.create(20, 4, StatusBarKind.Health)
            mySprite3.follow(mySprite, 20)
            statusbar.attachToSprite(mySprite3)
            mySprite3.setPosition(randint(0, scene.screenWidth()), 0)
        } else {
            if (current == 3) {
                mySprite3 = sprites.create(img`
                    . f f f f f f f f f f f f f f . 
                    . f 2 d d d d d d d d d d 2 f . 
                    . f 2 2 d d d d d d d d 2 2 f . 
                    . f d d d 2 2 2 2 2 2 d d d f . 
                    . f d d d 2 d d d d 2 d d d f . 
                    . f f f f f f f f f f f f f f . 
                    . . f f 6 6 6 6 6 6 6 6 f f . . 
                    . f . f 6 6 6 6 6 6 6 6 f . f . 
                    . f . f 6 6 6 6 6 6 6 6 f . f . 
                    . f . f 6 6 6 6 6 6 6 6 f . f . 
                    . f . f 6 6 6 6 6 6 6 6 f . f . 
                    . f . f 6 6 6 6 6 6 6 6 f . f . 
                    . . . f 6 6 6 6 6 6 6 6 f . f . 
                    . . . f f f f f f f f f f . f . 
                    . . . f . . . . . . . . f . . . 
                    . . . f . . . . . . . . f . . . 
                    `, SpriteKind.Boss)
                statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                mySprite3.follow(mySprite, 20)
                statusbar.attachToSprite(mySprite3)
                mySprite3.setPosition(randint(0, scene.screenWidth()), 0)
            }
        }
    }
})
