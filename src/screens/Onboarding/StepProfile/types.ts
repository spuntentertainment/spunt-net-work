import {
  EmojiArc_Stroke2_Corner0_Rounded as EmojiArc,
  EmojiHeartEyes_Stroke2_Corner0_Rounded as EmojiHeartEyes,
} from '#/components/icons/Emoji'
import {Alien_Stroke2_Corner0_Rounded as Alien} from '#/components/icons/Alien'
import {Bubbles_Stroke2_Corner0_Rounded as Bubbles} from '#/components/icons/Bubbles'
import {Explosion_Stroke2_Corner0_Rounded as Explosion} from '#/components/icons/Explosion'
import {Lab_Stroke2_Corner0_Rounded as Lab} from '#/components/icons/Lab'
import {PiggyBank_Stroke2_Corner0_Rounded as PiggyBank} from '#/components/icons/PiggyBank'
import {Poop_Stroke2_Corner0_Rounded as Poop} from '#/components/icons/Poop'
import {At_Stroke2_Corner0_Rounded as At} from '#/components/icons/At'
import {Apple_Stroke2_Corner0_Rounded as Apple} from '#/components/icons/Apple'
import {Atom_Stroke2_Corner0_Rounded as Atom} from '#/components/icons/Atom'
import {Coffee_Stroke2_Corner0_Rounded as Coffee} from '#/components/icons/Coffee'
import {GameController_Stroke2_Corner0_Rounded as GameController} from '#/components/icons/GameController'
import {Leaf_Stroke2_Corner0_Rounded as Leaf} from '#/components/icons/Leaf'
import {MusicNote_Stroke2_Corner0_Rounded as MusicNote} from '#/components/icons/MusicNote'
import {Pizza_Stroke2_Corner0_Rounded as Pizza} from '#/components/icons/Pizza'
import {Rose_Stroke2_Corner0_Rounded as Rose} from '#/components/icons/Rose'
import {Shaka_Stroke2_Corner0_Rounded as Shaka} from '#/components/icons/Shaka'
import {UFO_Stroke2_Corner0_Rounded as UFO} from '#/components/icons/UFO'
import {Zap_Stroke2_Corner0_Rounded as Zap} from '#/components/icons/Zap'
import {Celebrate_Stroke2_Corner0_Rounded as Celebrate} from '#/components/icons/Celebrate'

/**
 * If you want to add or remove icons from the selection, just add the name to the `emojiNames` array and
 * add the item to the `emojiItems` record.
 */

export const emojiNames = [
  'camera',
  'at',
  'arc',
  'heartEyes',
  'alien',
  'apple',
  'atom',
  'celebrate',
  'coffee',
  'gameController',
  'leaf',
  'musicNote',
  'pizza',
  'rose',
  'shaka',
  'ufo',
  'zap',
  'bubbles',
  'explosion',
  'lab',
  'piggyBank',
  'poop',
] as const
export type EmojiName = (typeof emojiNames)[number]

export interface Emoji {
  name: EmojiName
  component: typeof EmojiArc
}
export const emojiItems: Record<EmojiName, Emoji> = {
  camera: {
    name: 'camera',
    component: EmojiArc,
  },
  at: {
    name: 'at',
    component: At,
  },
  arc: {
    name: 'arc',
    component: EmojiArc,
  },
  heartEyes: {
    name: 'heartEyes',
    component: EmojiHeartEyes,
  },
  alien: {
    name: 'alien',
    component: Alien,
  },
  apple: {
    name: 'apple',
    component: Apple,
  },
  atom: {
    name: 'atom',
    component: Atom,
  },
  celebrate: {
    name: 'celebrate',
    component: Celebrate,
  },
  coffee: {
    name: 'coffee',
    component: Coffee,
  },
  gameController: {
    name: 'gameController',
    component: GameController,
  },
  leaf: {
    name: 'leaf',
    component: Leaf,
  },
  musicNote: {
    name: 'musicNote',
    component: MusicNote,
  },
  pizza: {
    name: 'pizza',
    component: Pizza,
  },
  rose: {
    name: 'rose',
    component: Rose,
  },
  shaka: {
    name: 'shaka',
    component: Shaka,
  },
  ufo: {
    name: 'ufo',
    component: UFO,
  },
  zap: {
    name: 'zap',
    component: Zap,
  },
  bubbles: {
    name: 'bubbles',
    component: Bubbles,
  },
  explosion: {
    name: 'explosion',
    component: Explosion,
  },
  lab: {
    name: 'lab',
    component: Lab,
  },
  piggyBank: {
    name: 'piggyBank',
    component: PiggyBank,
  },
  poop: {
    name: 'poop',
    component: Poop,
  },
}
