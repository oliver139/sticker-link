import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useViewStore = defineStore("view", () => {
  const groupLogo = ref("@/assets/img/cinnamoroll/logo.png");
  const changeLogo = group => groupLogo.value = `@/assets/img/${group}/logo.png`;

  const groupBackground = reactive({
    type: "color",
    value: "#d4f6fd"
  });
  const changeBackground = ({ type, value }) => {
    groupBackground.type = type;
    groupBackground.value = value;
  };

  return {
    groupLogo,
    changeLogo,
    groupBackground,
    changeBackground,
  };
});
