import { Slot } from "@radix-ui/react-slot";
import { QueryParams } from "@sanity/react-loader/rsc";
import { PropsWithChildren } from "react";

import { LiveQueryData } from "@/components/LiveQueryData";
import { QueryResponseInitial } from "@sanity/react-loader";

type PreviewWrapperProps<T> = PropsWithChildren<{
  initial: QueryResponseInitial<T>;
  isEnabled?: boolean;
  query?: string;
  params?: QueryParams;
}>;

export function LiveQueryWrapper<T>(props: PreviewWrapperProps<T>) {
  const {
    // Live Query enabled?
    isEnabled = false,
    // If enabled listen to query
    query = null,
    // With the following params
    params = {},
    // Separate remaining props to pass to the child
    ...rest
  } = props;

  // Render child, with the wrapper's initial data and props
  if (!isEnabled || !query) {
    const nonPreviewProps = { ...rest, data: props.initial.data };

    return <Slot {...nonPreviewProps} />;
  }

  // Swap initialData for live data
  return (
    <LiveQueryData<typeof props.initial.data>
      initial={props.initial}
      query={query}
      params={params}
    >
      {props.children}
    </LiveQueryData>
  );
}
