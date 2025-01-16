import store from "../../redux/store";
import { decrypt } from "../../utils/crypt";
import openNewWindow from "../../utils/openNewWindow";

export default function openSignIn() {
  const localUser = store.getState().app.user;
  const userSave = localUser && decrypt(localUser);
  const url = new URL(
    `/account/signin/${userSave ? "userfound" : "useremail"}`,
    import.meta.env.VITE_SERVER_BASE_URL
  );
  const win = openNewWindow({ url });
  if (win) win.name = "signin";
}
