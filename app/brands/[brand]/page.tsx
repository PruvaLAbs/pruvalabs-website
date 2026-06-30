import { redirect } from "next/navigation";

type BrandRedirectPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

export default async function BrandRedirectPage({
  params,
}: BrandRedirectPageProps) {
  const { brand } = await params;

  redirect(`/assist/accounts/${brand}`);
}
