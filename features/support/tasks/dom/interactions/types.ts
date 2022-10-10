import { Action, PromiseAction } from '@cucumber/screenplay'
import { Message } from '../../../../../src/types'

export type ClickShoutButton = () => PromiseAction
export type TypeMessage = (message: Message) => Action
