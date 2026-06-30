import { redirect } from "next/navigation";

type AccountBrandRedirectPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function AccountBrandRedirectPage({
  params,
}: AccountBrandRedirectPageProps) {
  const { brand } = await params;

  redirect(`/assist/accounts/${brand}`);
}
