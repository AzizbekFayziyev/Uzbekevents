export const useAppStore = defineStore("app-store", () => {
  // States
  const isCardOpen = ref(false);

  // Actions
  const toggleCard = () => {
    isCardOpen.value = !isCardOpen.value;
  };

  return { isCardOpen, toggleCard };
});
