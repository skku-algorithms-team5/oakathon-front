import { atom, selector } from 'recoil';
import questions from './questions.json';

export const videoState = atom({
  key: 'videoState',
  default: 'bf1.mp4',
});

export const questionState = atom({
  key: 'questionState',
  default: '',
});

export const updateQuestionState = selector({
  key: 'updateQuestionState',
  get: ({ get }) => {
    const video = get(videoState);
    console.log('video', video);
    return questions[video];
  },
  set: ({ set }, newValue) => {
    set(questionState, newValue);
    console.log('newValue', newValue);
  },
});
