import { AccessFallbackPage } from "@/components/system/AccessFallbackPage";

type NotAllowedPageProps = {
  searchParams: Promise<{ host?: string | string[] }>;
};

function readHost(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function NotAllowedPage({ searchParams }: NotAllowedPageProps) {
  const host = readHost((await searchParams).host);

  return (
    <AccessFallbackPage
      badge="Domain Not Allowed"
      title="This domain is not an active Little Tree Farm address"
      description="You reached the site through a host that is not in our approved list. Please continue through one of the verified domains below so you land in the right experience."
      hostLabel={host}
      showApprovedDomains
    />
  );
}