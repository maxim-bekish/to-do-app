export const tokens = (mode) => ({
  ...mode(
    mode === "dark"
      ? {
          dark: {
            one: "#313131",
            two: "#595959",
          },
        }
      : {
          light: {
            one: "#ffffff",
            two: "#cccccc",
          },
        }
  ),
});

export const ThemeSettings = (mode) => {
  const colors = tokens(mode);
  
};
