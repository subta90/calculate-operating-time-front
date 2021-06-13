import { writable } from 'svelte/store';

// TODO: 何らかの形で永続化
export const currentSelectedMonth = writable(1);
export const currentWorkingDays = writable(20);