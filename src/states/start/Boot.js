import Phaser from 'phaser'
import PNCAdventure from "../../engine/PNCAdventure"
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#22C55C'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'Loading Main Level', { font: '16px Arial', fill: '#000000', align: 'center' })
    text.anchor.setTo(0.5, 0.5)
    
    // load your assets
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    
    this.load.image("menu-button", "./assets/ui/menu.png")

    this.load.spritesheet('button', './assets/buttons/button_sprite_sheet.png', 193, 71);
  }

  create(){
    // Register the plugin with Phaser
    this.game.pncPlugin = this.game.plugins.add(PNCAdventure)
  }

  render () {
    if (this.fontsReady) {
      this.state.start('StartSplash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
