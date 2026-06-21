import { getProspectingClient } from "@/lib/supabase-prospecting";

export type DemoProject = {
  prospect_id: string;
  business_name: string;
  category: string;
  slug: string;
  template_id: string;
};

export async function getDemoProjects(): Promise<DemoProject[]> {
  try {
    const supabase = getProspectingClient();
    const { data, error } = await supabase
      .from("public_portfolio_demos")
      .select("*");

    if (error || !data) {
      console.error("Failed to fetch demo projects:", error?.message);
      return [];
    }
    return data;
  } catch (err) {
    console.error("Unexpected error fetching demo projects:", err);
    return [];
  }
}
