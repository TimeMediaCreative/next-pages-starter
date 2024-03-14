/*
Here, you're preparing the server-side loadQuery function with a viewer token so that it can make authenticated requests with the previewDrafts perspective at the time of request. This ensures you do not have a "flash of published content" on the initial load.
*/

import * as queryStore from "@sanity/react-loader";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;