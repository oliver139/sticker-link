import { onBeforeUnmount, onMounted } from "vue";

export function useDetectOutsideClick(component, callback) {
  if (!component) return;
  const listener = event => {
    console.log(event);
    console.log(component);
    console.log(component.value);
    console.log(event.target !== component.value);
    console.log(event.composedPath());
    if (event.composedPath().includes(component.value)) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => { window.addEventListener("click", listener); });
  onBeforeUnmount(() => {window.removeEventListener("click", listener);});

  return { listener };
}
