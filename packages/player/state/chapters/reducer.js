import { handleActions } from 'redux-actions'
import { compose, prop } from 'ramda'

import {
  UPDATE_CHAPTER,
  NEXT_CHAPTER,
  PREVIOUS_CHAPTER,
  SET_CHAPTERS_LIST,
  SET_CHAPTER
} from '@podlove/player-actions/types'

import {
  currentChapterIndex,
  setActiveByPlaytime,
  setActiveByIndex,
  nextChapter as getNextChapter,
  previousChapter as getPreviousChapter,
  currentChapter as getCurrentChapter
} from '@podlove/utils/chapters'

const nextChapter = chapters => {
  let next = currentChapterIndex(chapters) + 1

  if (next >= chapters.length - 1) {
    next = chapters.length - 1
  }

  return chapters.map(setActiveByIndex(next))
}

const previousChapter = chapters => {
  let previous = currentChapterIndex(chapters) - 1

  if (previous <= 0) {
    previous = 0
  }

  return chapters.map(setActiveByIndex(previous))
}

const generateState = chapters => ({
  list: chapters,
  current: getCurrentChapter(chapters),
  next: getNextChapter(chapters),
  previous: getPreviousChapter(chapters)
})

export const INITIAL_STATE = {
  list: [],
  current: null,
  next: null,
  previous: null
}

export const reducer = handleActions(
  {
    [SET_CHAPTERS_LIST]: (_, { payload }) =>
      generateState(payload.map((item, index) => (index === 0 ? { active: true, ...item } : item))),

    [SET_CHAPTER]: (state, { payload }) => {
      const chapters = state.list.map(setActiveByIndex(payload))
      return generateState(chapters)
    },

    [UPDATE_CHAPTER]: (state, { payload }) => {
      const chapters = state.list.map(setActiveByPlaytime(payload))

      if (currentChapterIndex(chapters) === -1) {
        return state
      }

      return generateState(chapters)
    },

    [NEXT_CHAPTER]: compose(
      generateState,
      nextChapter,
      prop('list')
    ),

    [PREVIOUS_CHAPTER]: compose(
      generateState,
      previousChapter,
      prop('list')
    )
  },
  INITIAL_STATE
)
