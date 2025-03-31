export namespace Route {
  export type LinksFunction = () => Array<{
    rel: string;
    href: string;
    crossOrigin?: string;
  }>;
  export type ErrorBoundaryProps = { error: any }; // Adjust the type as necessary

  // Update the LoaderArgs type definition
  export type LoaderArgs = {
    request: Request;
    params: Record<string, string>;
    context: AppLoadContext; // Make context required and specify the type
  };

  // Add the ComponentProps type definition
  export type ComponentProps = {
    loaderData: any; // Adjust the type as necessary
  };
}
