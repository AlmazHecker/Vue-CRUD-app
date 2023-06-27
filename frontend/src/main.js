import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseCheckbox from "@/components/UI/BaseCheckbox.vue";
import BaseInput from "@/components/UI/BaseInput.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseCheckbox", BaseCheckbox);
app.component("BaseInput", BaseInput);

app.use(store);

app.mount("#app");
