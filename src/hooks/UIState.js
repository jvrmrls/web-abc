import { hookstate, useHookstate } from '@hookstate/core';

export const uiState = hookstate({
  loading: 0,
  title: ''
});

export const startLoading = () => {
  uiState.loading.set(uiState.loading.value + 1);
};

export const stopLoading = () => {
  uiState.loading.set(
    uiState.loading.value > 0 ? uiState.loading.value - 1 : 0
  );
};

export const useUIState = () => {
  const state = useHookstate(uiState);

  return {
    isLoadingForeground: state.loading.value > 0,
    title: state.title.value,
    setTitle: title => {
      state.title.set(title);
    }
  };
};
